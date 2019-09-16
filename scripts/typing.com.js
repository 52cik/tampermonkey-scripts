(function() {
  // 隐藏广告
  const div = document.createElement('div');
  div.innerHTML = '<style>.advert{display:none;height:0;width:0;opacity:0;visibility:hidden}</style>';
  document.body.appendChild(div);

  // esc 重新开始
  document.body.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
      // 优先级: 不及格重试，结束后本课重试，测试中重新开始
      const el = [...document.querySelectorAll('.js-continue-button, .js-restart, .js-restart-screen')][0];
      if (el) {
        el.click();
      }
    }
  }, false);
})();
