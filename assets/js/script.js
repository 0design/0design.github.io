  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-77722386-1', 'auto');
  ga('send', 'pageview');

  var win = window,
      docEl = document.documentElement,
      $logo = document.getElementById('dis');

  win.onscroll = function(){
     var sTop = (this.pageYOffset || docEl.scrollTop)  - (docEl.clientTop || 0);
     $logo.style.fontSize =  sTop > 10 ? "0":"32px" ;
  };

  window.onload = init();

$work = document.getElementById('work');
$about = document.getElementById('about');
$contact = document.getElementById('contact');


function work(){
  $work.className = "buttactive";
  $about.className = "butt";
  $contact.className = "butt";
}

function about(){
  $work.className = "butt";
  $about.className = "buttactive";
  $contact.className = "butt";
}

function contact(){
  $work.className = "butt";
  $about.className = "butt";
  $contact.className = "buttactive";
}
