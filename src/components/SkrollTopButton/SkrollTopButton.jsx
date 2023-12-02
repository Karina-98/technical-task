import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { ButtonTop } from './SkrollTopButton.styled';
import image from '../../assets/images/BtnUp/btnUp.png';

export const SkrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottomThreshold = window.innerHeight * 0.25;
      const isScrolledToBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight - bottomThreshold;

      setIsVisible(isScrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    scrollSpy.update();
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      {isVisible && (
        <ButtonTop visible={true} onClick={scrollToTop}>
          <img src={image} alt='button top' />
        </ButtonTop>
      )}
      <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500}></Link>
    </div>
  );
};
