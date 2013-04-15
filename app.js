(function($){

  var TumblrRedirect = function(){
    this.tumblrUrl = "http://www.tumblr.com/";
  }


  TumblrRedirect.prototype.redirect = function(){
    window.location.replace(this.tumblrUrl);
  }


  $(document).ready(function(){
    var tRedirect = new TumblrRedirect();
    tRedirect.redirect();
  });

})(jQuery);


