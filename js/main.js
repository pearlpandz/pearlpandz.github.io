$(document).ready(function () {
	
	"use strict";
	
	
	// Vertical Sidebar
	$('#sidebarCollapse').on('click', function () {
                     $('#sidebar').toggleClass('active');
                     $(this).toggleClass('active');
    });
	
	
	
	// Page Loader
	setTimeout(function(){
		$('body').addClass('loaded');
		
	}, 3000);
				 
	// Vertical Sidebar	 cross icon		 
	var trigger = $('.hamburger'),
    overlay = $('.overlay'),
    isClosed = false;

    trigger.on('click',function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed === true) {          
        overlay.on(hide);
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.on(show);
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
    }
  
	$('[data-toggle="offcanvas"]').on('click',function () {
        $('#wrapper').toggleClass('toggled');
	}); 
	
});






