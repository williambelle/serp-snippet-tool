'use strict';

$(document).ready(function() {
  retrieveData();
});

function retrieveData() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tab) {
    if (typeof tab[0] === 'undefined') {
      setTimeout(retrieveData(), 1000);
    } else {
      if (tab[0].url.substring(0, 6) !== 'chrome') {
        chrome.tabs.sendMessage(tab[0].id, 'getHTML', function(data) {
          if (typeof tab[0] === 'undefined') {
            setTimeout(retrieveData(), 1000);
          } else {
            processHtml(data, tab[0]);
          }
        });
      }
    }
  });
}

function processHtml(data,tab) {
  var htmlObj = buildHtml(data);
  var serp = {
    title: buildTitle(tab.title),
    url: buildUrl(tab.url),
    description: buildDescription(htmlObj),
  };
  updatePopup(serp);
}

function buildHtml(htmlString) {
  var htmlObj = $('<div></div>');
  htmlObj.html(htmlString.match(/<head[^>]*>[\s\S]*<\/head>/gi));
  return htmlObj;
}

function buildDescription(htmlObj) {
  var description = htmlObj.find('meta[name=description]').attr('content') ||
    htmlObj.find('meta[property=\'og\\:title\']').attr('content') ||
    ' ';
  if (description.length > 156) {
    description = description.substring(0,156) + ' ...';
  }
  return description.trim();
}

function buildTitle(title) {
  if (title.length > 60) {
    title = title.substring(0,60) + ' ...';
  }
  return title.trim();
}

function buildUrl(url) {
  if (url.length > 69) {
    url = url.substring(0,69) + ' ...';
  }
  return url;
}

function updatePopup(serp) {
  $('#title').text(serp.title);
  $('#url').text(serp.url);
  $('#description').text(serp.description);
}
