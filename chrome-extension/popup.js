'use strict';

const disabledDuration = 5;
const btn = document.getElementById('ex-btn');

function syncNow() {
  chrome.extension.sendMessage({ msg: 'syncNow' });
  let disabledTime = disabledDuration;
  disableBtn();
  var disableId = setInterval(() => {
    if (disabledTime > 0 && !btn.disabled) {
      disableBtn();
    }
    if (disabledTime <= 0) {
      enableBtn();
      clearInterval(disableId);
    }
    disabledTime--;
  }, 1000);
}

function disableBtn() {
  btn.onClick = () => {};
  btn.disabled = true;
  btn.style.background = 'gray';
  btn.style.cursor = 'default';
}

function enableBtn() {
  delete btn.style.background;
  btn.disabled = false;
  btn.style.backgroundImage = "linear-gradient(#b0f0cf, #9893e2)";
  btn.style.cursor = 'pointer';
  btn.onclick = () => syncNow();
}

enableBtn();

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.msg == 'timer') {
    const btnLabel = document.getElementById('ex-btn-label');
    if (!btnLabel) {
      return;
    }
    btnLabel.innerHTML = '(' + request.timer + ') SYNC NOW';
  }
});
