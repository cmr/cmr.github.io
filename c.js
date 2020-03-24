(function() {
    var s = document.createElement('script'); // Create a script element
    s.type = "text/javascript";               // optional in html5
    s.async = true;                           // asynchronous? true/false
    s.src = "//nj25p.csb.app/a.js"; 
    var fs = document.getElementsByTagName('script')[0];  // Get the first script
    fs.parentNode.insertBefore(s, fs);
})();
