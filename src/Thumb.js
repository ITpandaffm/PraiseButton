import PraiseButton from './PraiseButton.js';

export default class Thumb extends PraiseButton {
  constructor() {
    super();
    console.log('Thumb init! count: ', this.count);
  }
  handleClickOnThumb() {
    if (10 <= this.count ) { 
      this._resetCount();
      this._disableBtn();
    } else {  
      this.increase(this.count);
    }
    console.log('thumb count: ',this.count);
  }
  _resetCount() {
    this.count = 0;
  }
  _disableBtn() {
    const wist = document.querySelectorAll('.wist')[0];
    const fist = document.querySelectorAll('.fist')[0];
    const thumb = document.querySelectorAll('.thumb')[0];
    [wist, fist, thumb].map((item) => {
      item.style.background = '#ccc'
    })
  }
}
