$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('body,html').animate({
      scrollTop: $(hash).offset().top
      }, 1200, function(){
      window.location.hash = hash;
     });
     } 
    });
});

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


//var element = document.getElementById("links");

//function scroll() {
//  if (window.pageYOffset >= 100) {
  //     element.classList.add("sticky");
    //   element.style.position = "fixed";
      // element.style.height = "initial";
  //} else {
    //   element.classList.remove("sticky");
      // element.style.position = "absolute";
  //     element.style.height = "75px";
  //}
//}
