import Link from 'next/link';
import Image from 'next/image';
import { appURL } from '../../utils';

function PrimaryCard(props: any) {
  return (
    <div
      className={`max-w-sm relative rounded-lg overflow-hidden shadow-lg text-white`}
      style={{
        backgroundImage: ` url("${props.bgImgUrl}")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="px-6 pt-3 mt-60 bg-primary-lightBg rounded-t-lg">
        <div className="font-bold text-4xl mb-2">{props.title}</div>
        <p className=" text-base text-white">{props.desc}</p>
      </div>
      <div className="flex justify-between px-6 pt-4 pb-2 bg-primary-lightBg text-white">
        <span className="inline-block text-white rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
          <Image height={35} width={25} src={`${appURL}/icons/location.png`} />{' '}
          {props.location}
        </span>
        <span className="inline-block text-primary-main text-sm  bg-white p-4 px-6 mr-2 mb-2">
          <Link href={props.link || '/'}>Book Now</Link>
        </span>
      </div>
    </div>
  );
}

export default PrimaryCard;
