function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  //var a = document.getElementById("truck")
  // create svg drawing
  var elem = SVG.select('#truck').get(0)
  //var back = elem.select('moveable-part-1')
  elem.animate().rotate(45)
})
