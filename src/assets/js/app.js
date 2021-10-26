// title)
  window.addEventListener("load", function() {
    console.log("test");
    var domain = window.location.hostname;
    var origTitle = document.title;
    var newtitle = `${origTitle} • ${domain}`;
    document.title = newtitle;
  });