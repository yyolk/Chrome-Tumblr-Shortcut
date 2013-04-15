(function($){

  var TumblrRedirect = function(){
    this.tumblrUrl = "http://tumblr.com/";
  }

  TumblrRedirect.prototype.setAccountID = function(accountID){
    if(accountID) {
      localStorage["bcAccountID"] = accountID;
      return true;
    } else {
      $("#error").html("Non numeric ID not supported!");
      return false;
    }
  }

  TumblrRedirect.prototype.getAccountID = function(){
    accountID = parseInt(localStorage["bcAccountID"]);
    if(accountID) return accountID;
  }

  TumblrRedirect.prototype.save = function(){
    if(this.setAccountID(parseInt($("#bc_account_id").val())))
      this.redirect();
  };

  TumblrRedirect.prototype.load = function(){
    $("#bc_account_id").val(this.getAccountID());
  };

  TumblrRedirect.prototype.redirect = function(){
    if(this.getAccountID()) {
      window.location.replace(this.tumblrUrl + this.getAccountID());
    } else {
      window.location.replace("/options.html");
    }
  }

  TumblrRedirect.prototype.setup = function(){
    var that = this;
    if(window.location.pathname === "/options.html") {
      $("#save_bc_account_id").on("click", function(ev){ that.save() });
      this.load();
    } else {
      this.redirect();
    }
  }

  $(document).ready(function(){
    var tRedirect = new TumblrRedirect();
    tRedirect.setup();
  });

})(jQuery);


