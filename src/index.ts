import { Power2, TimelineMax } from 'gsap';

document.querySelector('span').onclick = () => {
  const t1 = new TimelineMax();

  t1.from('div', 1, {
    height: '0',
    ease: Power2.easeInOut,
  });

  t1.to('div', 1, {
    height: '100%',
    ease: Power2.easeInOut,
  });
};
