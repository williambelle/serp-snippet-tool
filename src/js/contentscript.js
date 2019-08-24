'use strict';

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request === 'getHTML') {
      sendResponse(document.all[0].outerHTML);
    }
  }
);
