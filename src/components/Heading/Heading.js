import React, { useEffect, useState } from 'react';
import { useIntersect } from '../../hooks/useIntersect';
const Heading = (props) => {
  const [globalWindow, setGlobalWindow] = useState(null);
  const [setNode, entry] = useIntersect({
    threshold: globalWindow?.innerWidth < 500 ? 0.2 : 0.4,
    rootMargin: '20px',
  });

  const [isIntersected, setIsIntersected] = useState(false);

  useEffect(() => {
    setNode && setNode(props.parentNodeForAnimation);
  }, [props.parentNodeForAnimation]);

  useEffect(() => {
    entry?.isIntersecting && setIsIntersected(true);
  }, [entry]);

  useEffect(() => {
    setGlobalWindow(window);
  }, []);

  return (
    <div
      className={`h-min ml-6 my-4 text-primary-font relative ${props.className}`}
    >
      <div
        className={`h-full w-2 bg-primary-main bottom-0 absolute ${
          isIntersected ? ' heading-dash opacity-1 ' : ' opacity-0 '
        }`}
      />
      <div
        className={`h-min text-3xl md:text-6xl max-w-xl ml-8 ${
          isIntersected ? ' heading-content opacity-1' : ' opacity-0 '
        }`}
      >
        {props.heading}
      </div>
    </div>
  );
};

export default Heading;
