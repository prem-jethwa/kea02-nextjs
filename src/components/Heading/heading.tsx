import React from 'react';

const Heading = (props: any) => {
  return (
    <div
      className={`h-min ml-6 my-4 text-primary-font relative ${props.className}`}
    >
      <div className="h-full w-2 bg-primary-main bottom-0 absolute"></div>
      <div className="h-min text-3xl md:text-6xl max-w-xl ml-8">
        {props.heading}
      </div>
    </div>
  );
};

export default Heading;
