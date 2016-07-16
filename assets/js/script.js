  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-77722386-1', 'auto');
  ga('send', 'pageview');

  /*var win = window,
      docEl = document.documentElement,
      $logo = document.getElementById('dis');

  win.onscroll = function(){
     var sTop = (this.pageYOffset || docEl.scrollTop)  - (docEl.clientTop || 0);
     $logo.style.fontSize =  sTop > 10 ? "0":"32px" ;
  };

  window.onload = init();
*/

  var lastScrollTop = 0;
  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
     var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
     if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
         // some code..
     if (st == 0){
       //downscroll
       document.getElementById('downheader').style.top = "-52px";
     } else if (st > lastScrollTop){
       //downscroll
       document.getElementById('downheader').style.top = "-52px";

     } else {
       //upscroll
       document.getElementById('downheader').style.visibility = "visible";
       document.getElementById('blogheader').style.visibility = "visible";
       document.getElementById('downheader').style.top = "0px";
     }
   }
     lastScrollTop = st;
  }, false);
