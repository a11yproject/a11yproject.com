//IndexedDB might be a way to go

//http://www.html5rocks.com/en/tutorials/speed/quick/
// if localStorage is present, use that
if (('localStorage' in window) && window.localStorage !== null) {
  // easy object property API
  //localStorage.wishlist = '["Unicorn","Narwhal","Deathbear"]';

  //LocalStorage Article
  // http://coding.smashingmagazine.com/2010/10/11/local-storage-and-how-to-use-it
  // just modify the localStorage Object duh! Stoopid simple
/*  localStorage.setItem('favoriteflavor','vanilla');
  // this returns the key's value
  var taste = localStorage.getItem('favoriteflavor');
  //this example removes an item
  localStorage.removeItem('favoriteflavor');
  var taste = localStorage.getItem('favoriteflavor');
  console.log(taste); // returns null*/

  //http://playground.html5rocks.com/?codekitCB=379749383.084364#sessionstorage
  //http://css-tricks.com/video-screencasts/96-localstorage-for-forms/
  var el = document.querySelector('$el');
  el.addEventListener( 'click', function() {
    //alert('clicked');
    localStorage.setItem('$key','$value');
    localStorage.setItem('timestamp', (new Date()).getTime());
  }, false);

} else {
  // without sessionStorage we'll have to use a far-future cookie
  // with document.cookie's awkward API :(
  var date = new Date();
  date.setTime(date.getTime()+(365*24*60*60*1000));
  var expires = date.toGMTString();
  var cookiestr = '$key_value'+ ' expires='+expires+'; path=/';
  document.cookie = cookiestr;
}
