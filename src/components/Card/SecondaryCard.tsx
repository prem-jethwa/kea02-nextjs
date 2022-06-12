function PrimaryCard(props: any) {
  return (
    <div
      className={`relative rounded-lg overflow-hidden max-w-sm shadow-lg text-primary-font m-auto`}
    >
      <img className="w-full" src={props.bgImgUrl} />
      <div className="flex justify-between bg-white p-4 pb-0 text-xl  bg-primary-lightBg text-primary-font rounded-t-lg">
        <span className="inline-block  text-primary-font rounded-full px-3 py-1 text-xl font-semibold  mr-2 mb-2">
          {props.title}
        </span>
        <span className="inline-block text-secondary-fontNum text-xl">
          {props.price}
        </span>
      </div>
      <div className="p-6 pt-0 bg-primary-lightBg bg-white ">
        <p className=" text-base text-primary-font">{props.desc}</p>
      </div>
    </div>
  );
}

export default PrimaryCard;
