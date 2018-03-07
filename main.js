var $ = function(id) {
  return document.getElementById(id);
}

function replaceClass(_class, _html) {
  var _classValue = document.getElementsByClassName(_class);
  [].slice.call(_classValue).forEach(function(_classValue) {
    _classValue.innerHTML = _html;
  });
}

function replaceID(_id, _html) {
  $(_id).innerHTML = _html;
}

function testRun() {
  replaceID("introMessage", 'This is a debugging atmosphere.');
  replaceClass('userName', 'Fabio');
  replaceClass('useTime', '3 minutes');
  replaceClass('pagesPrinted', '10  ');
  var toDate = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:"numeric", minute:"numeric" };
  replaceID( 'timestamp', toDate.toLocaleDateString("en-US", options) );

}

function main() {
  replaceClass('userName', _userName);
  replaceClass('useTime', _useTime);
  replaceClass('pagesPrinted', _pagesPrinted);
  replaceID('timestamp', _timestamp);
}

var refresh = function(){
  window.location.reload(true);
}

window.onload = function() {
  $('refreshButton').onclick = refresh;
  main();
  //testRun();
}
