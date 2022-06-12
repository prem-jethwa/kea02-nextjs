import Image from 'next/image';

function Button(props: any) {
  return (
    <button
      className={` bg-primary-main text-white font-bold uppercase 
      rounded shadow hover:shadow-md outline-none focus:outline-none
      mr-1 mb-1 ease-linear transition-all duration-150 h-full text-lg ${props.btnClasses}`}
      type="button"
    >
      {props.btnImgUrl && (
        <Image
          src={props.btnImgUrl || ''}
          height={15}
          width={20}
          alt={props.imgAlt || 'BTN'}
          className="m-auto"
        />
      )}
      {props.btnText || ''}
    </button>
  );
}

export default Button;
