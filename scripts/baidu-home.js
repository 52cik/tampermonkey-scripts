(function () {
  const style = document.createElement('style');
  style.innerText = `
    .s-skin-hasbg #s_main { background-color: transparent; }
    #bottom_layer, #s_side_wrapper, #s_lm_wrap, .s-menu-container { display: none; }
  `;
  document.body.appendChild(style);
})();
