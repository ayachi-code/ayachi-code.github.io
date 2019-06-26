function progressBar(elem, einde) {
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= einde) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}

progressBar(document.getElementById('myBar'), 90);
progressBar(document.getElementById('myBar1'), 71);
progressBar(document.getElementById('myBar2'), 82);
progressBar(document.getElementById('myBar3'), 75);
progressBar(document.getElementById('myBar4'), 70);
progressBar(document.getElementById('myBar5'), 75);
progressBar(document.getElementById('myBar6'), 60);
progressBar(document.getElementById('myBar7'), 68)
progressBar(document.getElementById('myBar8'), 74);
