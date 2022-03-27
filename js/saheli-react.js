$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  
 
});

$(function(){
  $('.bxslider').bxSlider({
   minSlides: 1,
			maxSlides: 4,
            minSlides:1,
			moveSlides: 1,
			mode: 'horizontal',
			slideWidth: 350,
			startSlide: 0,
			slideMargin: 0,
      touchEnabled:true,
			captions: false,
      pager:false
  });
});

$(function(){
  $('.bxsliderphoto').bxSlider({
   minSlides: 1,
			maxSlides: 3,
            minSlides:1,
			moveSlides: 1,
			mode: 'horizontal',
			slideWidth: 450,
			startSlide: 0,
			slideMargin: 10,
      touchEnabled:true,
			captions: false,
      pager:false
  });
});

$(function(){
  $('.bxsliderweek').bxSlider({
   minSlides: 1,
			maxSlides: 10,
            minSlides:2,
			moveSlides: 1,
			mode: 'horizontal',
			slideWidth: 150,
			startSlide: 0,
			slideMargin: 10,
      touchEnabled:true,
			captions: false,
      pager:false
  });
});

//search
$(function(){
  var $searchlink = $('#searchtoggl i');
  var $searchbar  = $('#searchbar');
  
  $('.serchicon').on('click', function(e){
    e.preventDefault();
    
    if($(this).attr('id') == 'searchtoggl') {
      if(!$searchbar.is(":visible")) { 
        // if invisible we switch the icon to appear collapsable
        $searchlink.removeClass('fa-search').addClass('fa-times');
      } else {
        // if visible we switch the icon to appear as a toggle
        $searchlink.removeClass('fa-times').addClass('fa-search');
      }
      
      $searchbar.slideToggle(300, function(){
        // callback after search bar animation
      });
    }
  });
  
  $('#searchform').submit(function(e){
    e.preventDefault(); // stop form submission
  });
});

//smooth scroll

$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})})


//navigation

$(document).ready(function(){
  $(".menu").click(function(){
  $(".navigationtop ul").toggleClass("navigationtopshow")
  
  
})
  })

  $(document).ready(function(){
    $(".bcnormal").click(function(){
      $(".menu").toggleClass("boxshadowtogle")
     
    
  })
    })


//video expand

$(document).ready(function(){
    
    $(".videobutton").click(function(){    
     $(".maintextarticle").addClass("videoexpandheight")   
    $(".videobutton").hide()
    })
    
    $(".videobuttonless").click(function(){    
     $(".maintextarticle").removeClass("videoexpandheight")   
    $(".videobutton").show()
        })
})










