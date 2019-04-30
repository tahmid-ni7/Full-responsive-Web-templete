(function($){
    'use strict';
    
    jQuery(document).ready(function(){

    			// mobile layout menu===========
    			
    			 $("#main-nav").slicknav({
    			 	prependTo:".mobile-menu-wrap"
    			 });

    			 // Home slider===========

			     $(".slider-img").owlCarousel({
			        items: 1,
			        loop:true,
			        nav: true,
			       	dots:false,
			       	autoplay: true,
			       	navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]

			    }); 
			     
			     // Team member slider===========
			     
			     $(".member-slider").owlCarousel({
			        margin: 30,
			        loop:true,
			       	dots:true,
			       	autoplay: true,
			       	responsive:{
					        0:{
					            items:1
					           
					        },
					        600:{
					            items:2
					           
					        },
					        1000:{
					            items:3
					            
					        }
					    }
								       

			    });

			     // Testomonial slider===========

			     $(".member-quote").owlCarousel({
			        
			        margin: 30,
			        loop:true,
			       	dots:true,
			       	autoplay: true,
			       	responsive:{
					        0:{
					            items:1
					           
					        },
					        600:{
					            items:2
					           
					        },
					        1000:{
					            items:3
					            
					        }
					    }
			       

			    });

			     // Brand logo slider===========

			    $(".logo-carousel").owlCarousel({
			        
			        margin: 30,
			        loop:true,
			        dots:false,
			       	autoplay: true,
			       	responsive:{
					        0:{
					            items:2
					           
					        },
					        600:{
					            items:3
					           
					        },
					        1000:{
					            items:5
					            
					        }
					    }
			       

			    });

			    	//--- circleProgressBar js ---//

			     $("#web-design-bar").circleProgress({

			     	value: .9,
			     	size: 220,
			     	fill: '#11C0C5',
			     	thickness: 4

			     }).on('circle-animation-progress', function(event, progress) {
				    $(this).find('.skill-count').html(Math.round(90 * progress) + '<i>%</i>');
				 });

				 $("#graphic-design-bar").circleProgress({

			     	value: .95,
			     	size: 220,
			     	fill: '#11C0C5',
			     	thickness: 4

			     }).on('circle-animation-progress', function(event, progress) {
				    $(this).find('.skill-count').html(Math.round(95 * progress) + '<i>%</i>');
				 });

				 $("#digital-marketing-bar").circleProgress({

			     	value: .84,
			     	size: 220,
			     	fill: '#11C0C5',
			     	thickness: 4

			     }).on('circle-animation-progress', function(event, progress) {
				    $(this).find('.skill-count').html(Math.round(84 * progress) + '<i>%</i>');
				 });



				 // portfolio filtering ===========
			     //--- isotope js --- //
			     
			    $(".portfolio-filter li").on('click', function(){
			    	$(".portfolio-filter li").removeClass("active");
			    	$(this). addClass("active");

			    	var filterValue = $(this).attr("data-filter");

			    	$(".portfolio-list").isotope({

			    		filter: filterValue,

			    		layoutMode: 'masonry',
					 	masonry:{
					 		columnWidth: '.col-md-3',
					 		horizontalOrder: false
				 	}


			    	});


			    });

				 $(".portfolio-list").isotope({
		
				 	layoutMode: 'masonry',
				 	masonry:{
				 		columnWidth: '.col-md-3',
				 		horizontalOrder: false
				 	}
				 });

    });
    
    
})(jQuery);