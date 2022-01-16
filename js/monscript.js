$(document).ready(function() {
  var x = 0;
  $( ".burger-open" ).click(function() {
    x = 1;
    $('body').css("overflow","hidden");
    $( ".burger" ).animate({
        display: "block",
        height: "toggle",
      }, "slow", function() {
      });
  });
  
  $( ".close-div" ).click(function() {
    x = 0;
    $('body').css("overflow","scroll");
    $( ".burger" ).animate({
        display: "none",
        height: "toggle",
      }, "slow", function() {
      });
  });

  $(".scroll_to_projects").click(function() {
    if(x==0){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".upper-gallery").offset().top
    }, 2000);
    } else {
      $('body').css("overflow","scroll");
      $( ".burger" ).animate({
        display: "none",
        height: "toggle",
      }, "slow", function() {
      });
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".upper-gallery").offset().top
    }, 2000);
    }
});

$(".scroll_to_about").click(function() {
  if(x==0){
    
    }else{
      $('body').css("overflow","scroll");
      $( ".burger" ).animate({
        display: "none",
        height: "toggle",
      }, "slow", function() {
      });
    }
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".upper-about").offset().top
  }, 2000);
});
$(".scroll_to_hia").click(function() {
  if(x==0){
    
    }else{
      $('body').css("overflow","scroll");
      $( ".burger" ).animate({
        display: "none",
        height: "toggle",
      }, "slow", function() {
      });
    }
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".upper-hia").offset().top
  }, 2000);
});
$(".scroll_to_hia1").click(function() {
  if(x==0){
    
    }else{
      $('body').css("overflow","scroll");
      $( ".burger" ).animate({
        display: "none",
        height: "toggle",
      }, "slow", function() {
      });
    }
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".upper-hia1").offset().top
  }, 2000);
});
$(window).scroll( function(){
    var bottom_of_object = $('.hard-skill').offset().top + $('.hard-skill').outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if( bottom_of_window > bottom_of_object ){
        $('.adobe').css({'width':'90%','transition-duration': '1s'},500);
        $('.html').css({'width':'90%','transition-duration': '1s'},500);
        $('.js').css({'width':'55%','transition-duration': '1s'},500);
    }
$('.soft-skill').each( function(i){
  var bottom_of_object = $(this).offset().top + $(this).outerHeight();
  var bottom_of_window = $(window).scrollTop() + $(window).height();
  if( bottom_of_window > bottom_of_object ){
      $('.ts').css({'width':'95%','transition-duration': '1s'},500);
      $('.collab').css({'width':'90%','transition-duration': '1s'},500);
      $('.crea').css({'width':'60%','transition-duration': '1s'},500);
  }
}); 
$('.w-i-like').each( function(i){
  var bottom_of_object = $(this).offset().top + $(this).outerHeight();
  var bottom_of_window = $(window).scrollTop() + $(window).height();
  if( bottom_of_window > bottom_of_object ){
      $('.f-b').css({'width':'65%','transition-duration': '1s'},500);
  }
}); 
  $('.project-div').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > bottom_of_object ){
          $(this).animate({'opacity':'1'},500);
      }
  });
  

});
});

 