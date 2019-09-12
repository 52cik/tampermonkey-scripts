/**
 * BiliBili - 画中画
 * @version 0.1.0
 */
(function() {
  // 进入画中画
  function requestPictureInPicture() {
    const video = document.querySelector('video');
    if (document.pictureInPictureElement === video) {
      return Promise.resolve(true);
    }
    return video
      ? video
          .requestPictureInPicture()
          .then(() => true)
          .catch(() => false)
      : Promise.resolve(false);
  }

  // 检测
  function tick() {
    requestPictureInPicture().then((res) => {
      console.log('画中画', res);
      setTimeout(tick, 2 * 1000);
    });
  }

  // 开始
  tick();
})();
