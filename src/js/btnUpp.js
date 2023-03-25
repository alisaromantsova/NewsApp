// add up button

const btnUp = {
  el: document.querySelector('.btn-up'),
  scrolling: false,
  show() {
    if (
      this.el.classList.contains('btn-up_hide') &&
      !this.el.classList.contains('btn-up_hiding')
    ) {
      this.el.classList.remove('btn-up_hide');
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  hide() {
    if (
      !this.el.classList.contains('btn-up_hide') &&
      !this.el.classList.contains('btn-up_hiding')
    ) {
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.add('btn-up_hide');
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  addEventListener() {
    // when scrolling the window
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (this.scrolling && scrollY > 0) {
        return;
      }
      this.scrolling = false;
      // if the user has scrolled the page more than 300px
      if (scrollY > 300) {
        // make the .btn-up button visible
        this.show();
      } else {
        // otherwise hide the .btn-up button
        this.hide();
      }
    });
    // when clicking on the .btn-up button
    document.querySelector('.btn-up').onclick = () => {
      this.scrolling = true;
      this.hide();
      //move to the top of the page
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};

const result = btnUp.addEventListener();
