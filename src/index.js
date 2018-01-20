import PraiseButton from './PraiseButton.js';
import Thumb from './Thumb.js';

const hand = document.getElementById('J_Hand');

let thumb = new Thumb();
hand.addEventListener('click', () => {
  thumb.handleClickOnThumb();
})

