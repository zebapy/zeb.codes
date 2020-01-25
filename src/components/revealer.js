import React, { useEffect, useRef, useState } from 'react';

const Revealer = ({ children }) => {
  const ref = useRef(null);
  const [revealed, setReveal] = useState(false);

  useEffect(() => {
    // ref.style.width = ref.current.getBoundingClientBox().width + 'px';
    console.log(ref.current);
  }, []);

  return (
    <div className="reveal">
      <div ref={ref}>{children}</div>
    </div>
  );
};

export default Revealer;
