var width = $(window).width(); 

window.onscroll = function(){
if ((width >= 900)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#middle").css("background-size","150% auto");
    }else{
        $("#middle").css("background-size","100% auto");        
    }
}
};

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1450);

function getLatestSoftware(e) {
  var nonprofit = e;
  var url = 'https://raw.githubusercontent.com/EIGpennyhelper/' + nonprofit + '/master/master';
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var link = this.responseText;
      window.alert(link);
      window.open(link, '_blank');
    }
  };
  xhttp.open("GET", url , true);
  xhttp.send();
}