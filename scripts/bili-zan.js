setTimeout(function() {
  // 1分钟后自动点赞
  document.querySelectorAll('.video-toolbar .like:not(.on)')[0]?.click();
}, 60000);
