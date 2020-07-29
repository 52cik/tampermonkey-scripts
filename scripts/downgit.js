setTimeout(function() {
  const p = document.createElement('p');
  p.innerHTML = `<a href="https://downgit.github.io/#/home?url=${encodeURIComponent(location.href)}" target="_blank" class="btn btn-sm BtnGroup-item empty-icon">DownGit</a>`;
  document.querySelector('.BtnGroup.float-right').appendChild(p.firstChild);
}, 500);
