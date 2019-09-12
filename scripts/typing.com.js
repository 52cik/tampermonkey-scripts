(function() {
  // 隐藏广告
  const div = document.createElement('div');
  div.innerHTML = '<style>.advert{display:none;height:0;width:0;opacity:0;visibility:hidden}</style>';
  document.body.appendChild(div);

  // esc 重新开始
  document.body.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
      const el = [...document.querySelectorAll('.js-restart, .js-restart-screen')][0];
      if (el) {
        el.click();
      }
    }
  }, false);
})();
