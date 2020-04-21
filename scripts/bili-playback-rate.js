setTimeout(function callee() {
  if (!window.$) {
    setTimeout(callee, 500);
    return;
  }

  console.log('B站播放倍数插件已加载');

  const rates = [
    { name: '0.5', value: 0.5 },
    { name: '正常', value: 1 },
    { name: '1.5', value: 1.5 },
    { name: '2.0', value: 2 },
    { name: '3.0', value: 3 },
    { name: '4.0', value: 4 },
  ];

  /** 替换倍率标签 */
  function reSetSpan(idx, el) {
    const { name, value } = rates[idx];
    $(el).attr('data-rate', value).text(name); // 修改倍率属性

    // 高亮设置
    if ($('video')[0].playbackRate === value) {
      $(el).addClass('bppl-state-selected');
    } else {
      $(el).removeClass('bppl-state-selected');
    }

    // 点击时间重写
    $(el).on('click', function () {
      setTimeout(() => {
        $('video').prop('playbackRate', value);
        try {
          const skey = 'bilibili_player_settings';
          const state = JSON.parse(sessionStorage.getItem(skey));
          state.video_status.videospeed = value;
          sessionStorage.setItem(skey, JSON.stringify(state));
        } catch (err) {
          console.error('B站播放倍数插件错误:');
          console.error(err);
        }
      }, 50);
    });
  }

  // 劫持 jq 的 append 方法
  const _append = $.fn.append;
  $.fn.append = function (content) {
    if (this.html() === '<span>播放速度</span>') {
      // 需要延迟处理，子节点还没插入
      setTimeout(() => {
        this.find('.bilibili-player-contextmenu-subwrapp > span').each(reSetSpan);
      }, 16);
    }
    return _append.call(this, content);
  };
}, 1000);
