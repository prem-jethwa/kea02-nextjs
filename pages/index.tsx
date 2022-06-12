import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import PrimaryCard from '../src/components/Card/PrimaryCard';
import SecondaryCard from '../src/components/Card/SecondaryCard';
import Header from '../src/components/container/Header';
import Heading from '../src/components/Heading/Heading';
import Input from '../src/components/Input/Input';
import { appURL } from '../src/utils';

const slides = [
  { imgUrl: `${appURL}/img/slide-dish.png`, tranX: 0, rotate: 0 },
  { imgUrl: `${appURL}/img/slide-dish.png`, tranX: 1, rotate: 20 },
  { imgUrl: `${appURL}/img/slide-dish.png`, tranX: 2, rotate: 20 },
  { imgUrl: `${appURL}/img/slide-dish.png`, tranX: 3, rotate: 20 },
  { imgUrl: `${appURL}/img/slide-dish.png`, tranX: 4, rotate: 20 },
];

const REST_PRIMARY_CARD = [
  {
    title: 'Fire Water',
    desc: 'we are all about we are all about to the fullest and all content dining out or in!dining out or in!',
    location: 'Hitech City',
    link: '/',
    imgUrl: `${appURL}/img/img1.png`,
  },
  {
    title: 'The wonton ',
    desc: 'we are all about we are all about to the fullest and all content dining out or in!dining out or in!',
    location: 'gachibowli',
    link: '/',
    imgUrl: `${appURL}/img/img2.png`,
  },
];

const REST_SECONDARY_CARD = [
  {
    title: 'Ham Sandwich',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,',
    price: '$10.50',
    imgUrl: `${appURL}/img/img1.png`,
  },
  {
    title: 'Ham Sandwich',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,',
    price: '$10.50',
    imgUrl: `${appURL}/img/img2.png`,
  },
  {
    title: 'Ham Sandwich',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,',
    price: '$10.50',
    imgUrl: `${appURL}/img/img3.png`,
  },
  {
    title: 'Ham Sandwich',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,',
    price: '$10.50',
    imgUrl: `${appURL}/img/img4.png`,
  },
  {
    title: 'Ham Sandwich',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,',
    price: '$10.50',
    imgUrl: `${appURL}/img/img5.png`,
  },
  {
    title: 'Ham Sandwich',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,',
    price: '$10.50',
    imgUrl: `${appURL}/img/img6.png`,
  },
];

const SOCIAL_MEDIA = [
  {
    link: 'https://www.instagram.com/premmjethwa/',
    imgUrl: `${appURL}/icons/social/Shape.png`,
  },
  {
    link: 'https://www.linkedin.com/in/premjethwa/',
    imgUrl: `${appURL}/icons/social/Shape-1.png`,
  },
  {
    link: 'https://github.com/prem-jethwa/',
    imgUrl: `${appURL}/icons/social/Shape-2.png`,
  },
  {
    link: 'https://twitter.com/premmjethwa/',
    imgUrl: `${appURL}/icons/social/Shape-3.png`,
  },
];

// Functions
function debounce(fn: any, ms: any) {
  let timer: any;
  return (_: any) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn();
    }, ms);
  };
}

const Home: NextPage = () => {
  const [currPosition, setCurrPosition] = useState(1);
  const slideRef: any = useRef(null);
  const totalSlides = slides?.length - 1;

  const sec2Ref = useRef(null);
  const sec4Ref = useRef(null);
  const sec6Ref = useRef(null);

  const handleLeftSlideClick = () => {
    if (currPosition >= 0) {
      setCurrPosition(-totalSlides);
    } else {
      setCurrPosition(currPosition + 1);
    }
  };

  const handleRightSlideClick = () => {
    if (currPosition !== -totalSlides) {
      setCurrPosition(currPosition - 1);
    } else {
      setCurrPosition(0);
    }
  };

  useEffect(() => {
    setCurrPosition(0);
  }, [slideRef.current]);

  // ----
  const [dimensions, setDimensions] = React.useState({
    height: 0,
    width: 0,
  });
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 10);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  return (
    <>
      <Header />
      <main className="">
        <div
          className=" hidden md:block absolute h-screen top-0  -z-10 right-0  bg-primary-main "
          style={{ minWidth: slideRef.current?.offsetWidth / 2 }}
        ></div>

        <section className="relative">
          <div className="md:flex h-full top-0  justify-between align-middle mx-auto max-w-7xl relative text-primary-font">
            <div
              className="hidden md:block absolute h-screen -top-32 -bottom-20 -z-10 right-0  bg-primary-main "
              style={{ minWidth: slideRef.current?.offsetWidth / 2 }}
            >
              <img src="./bg/leave.png" className="-ml-24 mt-0 w-60" />
            </div>
            <div className="p-6 w-full max-w-md  mt-8">
              {/* <div className="m-4"> */}
              <span className="md:text-9xl text-6xl opacity-10 ">Food</span>
              <h2 className="md:text-4xl text-3xl font-bold ">
                Discover Restaurant <br /> & Delicious Food
              </h2>
              {/* </div> */}

              <Input
                btnText="GO"
                className="md:mr-20"
                btnClasses="rounded-tl-full w-28"
              />
            </div>
            <div
              className="w-full relative overflow-hidden max-w-2xl"
              style={{ height: slideRef.current?.offsetHeight }}
            >
              <img src="./bg/dotted-bg.png" className="absolute left-0 w-1/2" />
              <img
                src="./bg/dotted-bg.png"
                className="absolute bottom-0 left-0 w-1/2"
              />
              {slides.map((slide, idx) => {
                const formula = currPosition + idx;
                const transform = `translateX(${formula * 100}%) rotate(${
                  formula * 50
                }deg)`;

                return (
                  <div
                    ref={slideRef}
                    className="w-full absolute top-0 transition-all duration-700 select-none"
                    style={{
                      transform,
                      opacity: formula * 100 ? 0 : 1,
                    }}
                  >
                    <img src={slide.imgUrl} className="h-full" />
                  </div>
                );
              })}
            </div>
            {/* <div className=" absolute right-6 bottom-2"></div> */}
            <div className=" absolute right-6 md:bottom-2 -bottom-10 bg-primary-lightBg rounded-full flex align-middle  gap-4 justify-center cursor-pointer m-auto">
              <img
                src="./icons/slider-btn.png"
                className="h-full hover:bg-secondary-fontNum rounded-full m-2"
                onClick={handleRightSlideClick}
              />
              <img
                src="./icons/slider-btn.png"
                height={20}
                className="rotate-180 h-full mb-1 hover:bg-secondary-fontNum rounded-full m-2"
                onClick={handleLeftSlideClick}
              />
            </div>
          </div>
          <div
            className=" hidden md:block absolute w-full h-screen mt-4 bg-primary-bg "
            // style={{ minWidth: slideRef.current?.offsetWidth / 2 }}
          ></div>
          <span className="absolute md:bottom-0 -bottom-32 flex  align-middle left-0 px-6 pl-10 py-2 text-white bg-primary-main rounded-r-full">
            <img src="./icons/location.png" />{' '}
            <p className="m-auto px-4">Hydrabad</p>
          </span>
        </section>
        {/* Section 2 */}
        <section ref={sec2Ref} className="mt-40 relative z-10">
          <div className="md:flex max-w-7xl m-auto ">
            <Heading
              heading="some top restaurant for dining out or in!"
              className="md:w-1/2"
              parentNodeForAnimation={sec2Ref}
            />
            <div className="md:w-1/2 w-full text-2xl p-8 md:p-0 md:px-4 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
          <div className="md:flex-row flex flex-col relative justify-center align-middle items-center max-w-7xl m-auto md:mt-40 gap-10">
            {REST_PRIMARY_CARD.map((card) => {
              return (
                <PrimaryCard
                  bgImgUrl={card.imgUrl}
                  desc={card.desc}
                  title={card.title}
                  location={card.location}
                />
              );
            })}
            <div className="flex flex-col m-auto -z-10 justify-center align-middle">
              <Link href="#">
                <>
                  <Image
                    className="w-20"
                    height={35}
                    width={80}
                    src={`${appURL}/icons/more-arrow.png`}
                  />
                  <p>see more</p>
                </>
              </Link>
            </div>
            {/* Background */}
            <img
              src="./bg/dotted-bg.png"
              width={250}
              className="absolute hidden md:block -top-10 -z-10 md:-left-10 left-0" //md:-top-10  md:-mr-40 -mr-60"
            />

            <img
              src="./bg/dotted-bg.png"
              width={250}
              className="hidden md:block absolute bottom-16 md:-bottom-10 lg:right-auto right-40 -z-10 md:-mr-40 -mr-40"
            />
          </div>
        </section>

        {/* Section 3 */}

        <section className=" relative">
          <div className="md:mt-40 mt-20 md:py-60 py-20 bg-secondary-bg  relative  overflow-hidden">
            <div className="relative m-auto  max-w-4xl text-center ">
              <div className="bg-white md:p-20 px-6 mx-8 md:mx-auto py-20 md:px-40 relative z-10">
                <div className="relative z-40">
                  <div className="bg-primary-main w-14 h-2 m-auto" />
                  <p className="my-4 mb-8 text-2xl text-primary-font">
                    advanced booking{' '}
                  </p>
                  <Input
                    rounded="rounded-none"
                    btnText="GO"
                    className="rounded-none z-40 relative"
                    btnClasses=" rounded-none w-28"
                  />
                </div>
              </div>

              <img
                src="./bg/dotted-bg.png"
                width={250}
                className="absolute -mt-40 -right-20 -z-0"
              />
              <img
                src="./bg/dotted-bg.png"
                width={250}
                className=" absolute -left-20 -top-20 -z-0"
              />
            </div>
            <img
              src="./bg/leave2.png"
              width={350}
              className="absolute  hidden lg:block top-1/2 -right-28  transform  -translate-y-1/2"
            />
          </div>
          <img
            src="./bg/leave.png"
            className="absolute hidden lg:block bottom-0 -left-60 "
            style={{ height: 1050 }}
          />
        </section>

        {/* Section 4 */}
        <section ref={sec4Ref} className="md:mt-40 mt-20 relative z-10">
          <div className="md:flex max-w-7xl m-auto ">
            <Heading
              heading="Our Services"
              className="w-2/6 pr-8 lg:pr-16 2xl:pr-20"
              parentNodeForAnimation={sec4Ref}
            />
            <div className="md:w-4/6 w-full text-2xl p-8 md:p-0 md:px-4 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
          <div
            className="text-primary-font"
            style={{ backgroundImage: "url('./bg/full-dotted.png')" }}
          >
            <div
              className="md:flex max-w-7xl m-auto text-primary-font mt-20 py-6"
              style={{ backgroundImage: "url('./bg/full-dotted.png')" }}
            >
              <div className=" flex flex-col m-10 justify-around">
                <div className="flex relative">
                  <div className="bg-secondary-bg w-1/2 py-10 flex items-center justify-center">
                    <Image
                      height={100}
                      width={100}
                      src={`${appURL}/icons/meeting.png`}
                      className="m-auto text-center"
                    />
                  </div>
                  <img
                    src={`${appURL}/icons/arrow.png`}
                    className="absolute w-20 top-1/2 rotate-180 left-2/4  transform -translate-x-1/4 -translate-y-1/2"
                  />
                  <div className="p-4 pl-16 pr-2 pt-6 w-1/2">
                    <div className=" text-xl text-primary-font">
                      advanced table
                      <div className="flex items-end gap-1">
                        <p className="text-primary-font">booking </p>
                        <div className="w-10 h-1 mb-1 bg-primary-main rounded-full" />
                        <div className="w-3 h-1 mb-1 bg-primary-main rounded-full" />
                      </div>
                    </div>
                    <p className="text-primary-font opacity-50">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do{' '}
                    </p>
                  </div>
                </div>
                <div className="flex relative">
                  <div className="p-4 pr-16 pl-2 pt-6 w-1/2">
                    <div className=" text-xl text-primary-font">
                      <h2>Food for Free</h2>
                      <div className="flex items-end gap-1">
                        <div className="w-10 h-1 mb-1 bg-primary-main rounded-full" />
                        <div className="w-3 h-1 mb-1 bg-primary-main rounded-full" />
                        <p className="text-primary-font">24/7</p>
                      </div>
                    </div>

                    <p className="text-primary-font opacity-50">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do{' '}
                    </p>
                  </div>
                  <img
                    src={`${appURL}/icons/arrow.png`}
                    className="absolute w-20 top-1/2 -ml-6 left-2/4  transform -translate-x-2/4 -translate-y-1/2"
                  />
                  <div className="bg-secondary-bg w-1/2 py-10 flex items-center justify-center">
                    <Image
                      height={100}
                      width={100}
                      src={`${appURL}/icons/dish.png`}
                      className="m-auto text-center"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 w-full py-20 bg-secondary-bg md:m-10 flex flex-col items-center justify-center">
                <div className="bg-secondary-bg max-w-xs flex flex-col items-center justify-center text-center">
                  <Image
                    height={100}
                    width={150}
                    src={`${appURL}/icons/scooter.png`}
                    className="m-auto "
                  />
                  <h2 className="text-primary-font text-2xl px-12 my-4">
                    free home delivery at your door steps
                  </h2>
                  <p className="text-primary-font px-12 opacity-50">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do{' '}
                  </p>
                </div>
                <div className="flex gap-2 my-3">
                  <div className="w-40 h-1 mb-1 bg-primary-main rounded-full" />
                  <div className="w-6 h-1 mb-1 bg-primary-main rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 5 */}
        <section className="max-w-7xl m-auto mb-20">
          <div className=" text-primary-font text-2xl text-center max-w-lg m-auto mb-10 mt-20">
            <h2>Explore Our Foods </h2>
            <p className=" text-primary-font text-xl opacity-50">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>
          </div>
          <div className="sm:m-10 m-4">
            <div className="w-full grid-auto-fit gap-8 max-w-4xl m-auto">
              {REST_SECONDARY_CARD.map((rest) => {
                return (
                  <SecondaryCard
                    bgImgUrl={rest.imgUrl}
                    desc={rest.desc}
                    title={rest.title}
                    price={rest.price}
                  />
                );
              })}
            </div>
          </div>
        </section>
        {/* Section 6 */}
        <section ref={sec6Ref} className="  bg-secondary-bg">
          <div className="md:flex max-w-7xl m-auto">
            <div className="flex flex-col m-auto gap-10 md:w-1/2 w-full">
              <Heading
                heading="Download app for Exciting Deals"
                className="mt-20"
                parentNodeForAnimation={sec6Ref}
              />
              <div className="w-full text-2xl px-8 md:p-0  md:pl-14 md:px-4 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
              <img width={300} className="pl-10 " src="./icons/app-store.png" />
            </div>
            <div className="flex flex-col m-auto gap-10 md:w-1/2 w-full">
              <img src="./img/mobile-leaves.png" />
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="relative">
          <div className=" text-primary-font text-3xl text-center max-w-lg m-auto mb-10 mt-20">
            <h2>
              Get notified <br /> about new amazing products{' '}
            </h2>
            <p className=" text-primary-font text-xl opacity-50 mt-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. It has been the industry's standard dummy text ever
              since.
            </p>
            <Input
              // btnText="GO"
              className="my-10 max-w-xs mx-auto"
              btnClasses=" rounded-full px-4"
              btnImgUrl={`${appURL}/icons/white-arrow.png`}
            />
            <div className="flex text-sm justify-center align-middle items-center md:gap-10 gap-4">
              <a>Product</a>
              <a>Company</a>
              <a>Learn more</a>
              <a>Get in touch</a>
            </div>
          </div>
          <div className=" text-primary-font text-3xl text-center  m-auto mb-10 mt-20 max-w-7xl">
            <div className="flex text-sm justify-end align-end items-end gap-10 m-10  cursor-pointer">
              {SOCIAL_MEDIA.map((media) => (
                <Link href={media.link} className="cursor-pointer">
                  <a>
                    <img src={media.imgUrl} />{' '}
                  </a>
                </Link>
              ))}
              <a>© 2019 indianpix</a>
            </div>
          </div>
          <img
            src="./bg/leave3.png"
            className="absolute hidden lg:block -bottom-40 -left-10 "
            style={{ height: 700 }}
          />
        </section>
      </main>
    </>
  );
};

export default Home;
