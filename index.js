// Scroll Up
$(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('#scroll').fadeIn(); 
      } else { 
          $('#scroll').fadeOut(); 
      } 
  }); 
  $('#scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 
});

// 
function scrollID(e) {
  var elmnt = document.getElementById(e);
  elmnt.scrollIntoView();
}


// Download URL 
var url = document.URL;
if (url.includes('#')){
    var pieces = url.split('#');
    var id_name = pieces[pieces.length-1];
    if (id_name.includes('pennyhelper-n')) {
      getLatestSoftware(id_name);
    }
}


// Cover Photo Collapse
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


//  Loading effects
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1450);


// Download newest software from Github
function getLatestSoftware(e) {
  var nonprofit = e;
  var url = 'https://raw.githubusercontent.com/EIGpennyhelper/' + nonprofit + '/master/master';
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var link = this.responseText;
      window.open(link, '_blank');
    }
  };
  xhttp.open("GET", url , true);
  xhttp.send();
}


// Button links
function homeButton(){
  window.open('nonprofits', '_self');
}

function contactButton(){
  window.open('contact', '_self');
}

function aboutButton(){
  window.open('about', '_self');
}

function projectButton(){
  window.open('https://www.github.com/EIGpennyhelper', '_self');
}