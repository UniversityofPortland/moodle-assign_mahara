(function() {
  var body = document.querySelector('body');

  var removeElement = function() {
    body.style.overflow = '';
    body.removeChild(document.querySelector('div.overlay'));
    body.removeChild(document.querySelector('div.portfolio-dialog'));
  };

  document.addEventListener('keyup', function(e) {
    if (e.keyCode === 27) removeElement();
  });

  var createOverlay = function() {
    var overlay = document.createElement('div');
    overlay.setAttribute('class', 'overlay');
    overlay.style.zIndex = 10000;
    overlay.style.width = (document.width) + 'px';
    overlay.style.height = (document.height) + 'px';
    overlay.style.backgroundColor = '#000';
    overlay.style.position = 'absolute';
    overlay.style.top = '0px';
    overlay.style.left = '0px';

    overlay.style.opacity = 0.5;
    overlay.style.filter = 'alpha(opacity=50)';

    body.style.overflow = 'hidden';
    body.appendChild(overlay);
    overlay.addEventListener('click', removeElement);

    return overlay;
  };

  var openDialog = function(url) {
    var overlay = createOverlay();
    var dialog = document.createElement('div');
    dialog.setAttribute('class', 'portfolio-dialog');
    dialog.style.padding = '12px';
    dialog.style.position = 'absolute';
    dialog.style.top = ((document.height - 504) / 2) + 'px';
    dialog.style.left = ((document.width - 824) / 2) + 'px';
    dialog.style.borderRadius = '5px';
    dialog.style.MozBorderRadius = '5px';
    dialog.style.width = '800px';
    dialog.style.height = '480px';
    dialog.style.backgroundColor = '#eee';
    dialog.style.zIndex = overlay.style.zIndex + 1;

    var iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.src = url;

    dialog.appendChild(iframe);
    body.appendChild(dialog);
    return dialog;
  };

  var links = document.querySelectorAll('a.portfolio.popup');

  for(var i = 0; i < links.length; i++) {
    var link = links.item(i);
    link.addEventListener('click', function(e) {
      openDialog(e.target.parentNode.getAttribute('href'));

      if (e.preventDefault) {
        e.preventDefault();
      }
      return false;
    });
  }
})();
