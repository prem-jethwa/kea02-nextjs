import Button from '../Button/Button';

function Input(props: any) {
  return (
    <div
      className={`relative flex flex-wrap items-stretch my-3  ${props.className}`}
    >
      <input
        type="text"
        placeholder="Placeholder"
        className={`px-8 py-4 placeholder-slate-300 text-primary-font border-primary-lightBg relative bg-white 
         ${
           props.rounded ? props.rounded : 'rounded-full'
         } text-sm shadow-2xl  outline-none focus:outline-none focus:ring w-full pr-10`}
      />
      <span
        className={`z-10 h-full absolute leading-snug font-normal  text-center 
      text-slate-300 bg-transparent text-base items-center justify-center 
       right-0 left-auto pr-1 p-1  `}
      >
        <Button
          btnClasses={`${props.btnClasses || ''}`}
          btnImgUrl={props.btnImgUrl}
          imgHight={props.imgHight || 20}
          imgWidth={props.imgWidth || 20}
          imgAlt={props.imgAlt || 'BTN'}
          btnText={props.btnText}
        />
      </span>
    </div>
  );
}

export default Input;
