
var picture = chrome.runtime.getURL("images/musk.jpeg"),
    images = document.getElementsByTagName("img");

for (var i = 0; i < images.length; i++) {
    if(
      (images[i].alt != null && (images[i].alt.toLowerCase().includes('elon') || images[i].alt.toLowerCase().includes('musk'))) ||
      (images[i].src != null && (images[i].src.toLowerCase().includes('musk') || images[i].src.toLowerCase().includes('elon'))) ||
      (images[i]['data-src'] != null && (images[i]['data-src'].toLowerCase().includes('musk') || images[i]['data-src'].toLowerCase().includes('elon'))) ||
      (images[i].baseUri != null && (images[i].baseUri.toLowerCase().includes('elon') || images[i].baseUri.toLowerCase().includes('musk')))
    ) {
    images[i].setAttribute("src", picture);
  }
};
