import { Power2, TimelineMax } from 'gsap';

const tween = new TimelineMax();

tween.from('nav', 1, {
  x: 100,
  display: 'none',
  ease: Power2.easeOut,
});
