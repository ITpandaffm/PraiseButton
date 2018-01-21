class PraiseButton {
  constructor(count, element) {
    this.count = count;
    this.element = element;
  }
  setHandleClick() {
    this.element.click(() => {
      if(this.count < 10) {
        this.element.css('filter', 'grayscale(0)');
        //+1动画效果
        $('#J_AddOneLabel').addClass('active');
        this.count = add(this.count);
        setTimeout(function () {
          $('#J_AddOneLabel').removeClass('active');
        }, 1000);
      } else {
        this.element.css('filter', 'grayscale(1)');
        this.count = 0;
      }
      console.log(this.count);
    })
  }
}

class Thumb extends PraiseButton {
  constructor (count, element) {
    super(count, element);
  }
}

export default Thumb;