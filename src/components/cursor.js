import React, { useEffect } from 'react';
import { useRef } from 'react';
import anime from 'animejs';
import { useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [x, setX] = useState(-100);
  const [y, setY] = useState(-100);
  const [hovered, setHovered] = useState(false);

  let cursorHeight = 32;
  let cursorWidth = 32;

  let clientX = 0;
  let clientY = 0;

  const updateCursor = event => {
    // console.log(cursorRef.current.offsetWidth);
    // cursorRef.current.style.top = cursorHeight - event.clientY + 'px';
    // cursorRef.current.style.left = cursorWidth - event.clientX + 'px';

    const el = cursorRef.current;

    el.style.top = y + 'px';
    el.style.left = x + 'px';

    requestAnimationFrame(updateCursor);
  };

  const handleMouseMove = event => {
    // console.log(event);
    setY(event.clientY);
    setX(event.clientX);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    document.body.classList.add('cursor-none');

    document.querySelectorAll('a, button').forEach(el => {
      console.log(el);
      el.addEventListener('mouseenter', () => {
        console.log('hover', el);
        setHovered(true);
      });

      el.addEventListener('mouseleave', () => {
        console.log('hover', el);
        setHovered(false);
      });
    });

    // requestAnimationFrame(updateCursor);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`cursor ${hovered ? 'cursor--hovering' : ''}`}
      style={{
        top: y - 16,
        left: x - 16
      }}
    ></div>
  );
};

export default CustomCursor;
