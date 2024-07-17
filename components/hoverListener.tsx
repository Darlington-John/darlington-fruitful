import { useContext, useEffect } from 'react';
import { FruitfulContext } from './context';

const LinkHoverListener = () => {
  const { handleMouseEnter } = useContext(FruitfulContext);

  useEffect(() => {
    const links = document.querySelectorAll('a');

    const handleClick = (event) => {
      handleMouseEnter(event);
    };

    links.forEach((link) => {
      link.addEventListener('mouseenter', handleMouseEnter);
    });

    document.addEventListener('click', handleClick);

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleMouseEnter);
      });
      document.removeEventListener('click', handleClick);
    };
  }, [handleMouseEnter]);

  return null;
};

export default LinkHoverListener;
