function showHideExtended() {
    const basic = document.querySelector('[data-element=pd-show-basic]');
    const detail = document.querySelector('[data-element=pd-button-detail]');
    const extended = document.querySelector('[data-element=pd-show-extended]');
    const backToBasic = document.querySelector('[data-element=pd-back-button]');

    detail.addEventListener('click', () => {
      extended.style.display = 'block';
      basic.style.display = 'none';
    })

    backToBasic.addEventListener('click', () => {
      extended.style.display = 'none';
      basic.style.display = 'block';
    })
  }
  showHideExtended();
