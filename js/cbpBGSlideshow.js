
var cbpBGSlideshow = (function() {

	var $slideshow = $( '#cbp-bislideshow' ),
		$items = $slideshow.children( 'li' ),
		itemsCount = $items.length,
		$controls = $( '#cbp-bicontrols' ),
		navigation = {
			$navPrev : $controls.find( 'img.cbp-biprev' ),
			$navNext : $controls.find( 'img.cbp-binext' ),
			$navPlayPause : $controls.find( 'img.cbp-bipause' )
		},
		// current item´s index
		current = 0,
		// timeout
		slideshowtime,
		// true if the slideshow is active
		isSlideshowActive = true,
		// it takes 6 seconds to change the background image
		interval = 6000;

	function init( config ) {

		// preload the images
		$slideshow.imagesLoaded( function() {
			
			if( Modernizr.backgroundsize ) {
				$items.each( function() {
					var $item = $( this );
					$item.css( 'background-image', 'url(' + $item.find( 'img' ).attr( 'src' ) + ')' );
				} );
			}
			else {
				$slideshow.find( 'img' ).show();
				// for older browsers add fallback here (image size and centering)
			}
			// show first item
			$items.eq( current ).css( 'opacity', 1 );
			// initialize/bind the events
			initEvents();
			// start the slideshow
			startSlideshow();

		} );
		
	}

	function initEvents() {

		navigation.$navPlayPause.on( 'click', function() {

			var $control = $( this );
			if( $control.hasClass( 'cbp-biplay' ) ) {
				$control.removeClass( 'cbp-biplay' ).addClass( 'cbp-bipause' );
				startSlideshow();
			}
			else {
				$control.removeClass( 'cbp-bipause' ).addClass( 'cbp-biplay' );
				stopSlideshow();
			}

		} );

		navigation.$navPrev.on( 'click', function() { 
			navigate( 'prev' ); 
			if( isSlideshowActive ) { 
				startSlideshow(); 
			} 
		} );
		navigation.$navNext.on( 'click', function() { 
			navigate( 'next' ); 
			if( isSlideshowActive ) { 
				startSlideshow(); 
			}
		} );

	}

	function navigate( direction ) {

		// current item
		var $oldItem = $items.eq( current );
		
		if( direction === 'next' ) {
			current = current < itemsCount - 1 ? ++current : 0;
		}
		else if( direction === 'prev' ) {
			current = current > 0 ? --current : itemsCount - 1;
		}

		// new item
		var $newItem = $items.eq( current );
		// show / hide items
		$oldItem.css( 'opacity', 0 );
		$newItem.css( 'opacity', 1 );

	}

	function startSlideshow() {

		isSlideshowActive = true;
		clearTimeout( slideshowtime );
		slideshowtime = setTimeout( function() {
			navigate( 'next' );
			startSlideshow();
		}, interval );

	}

	function stopSlideshow() {
		isSlideshowActive = false;
		clearTimeout( slideshowtime );
	}

	return { init : init };

})();






// Preloader Part

// Preloader Welcome Screen
			jQuery(document).ready(function ($) {
			    $(window).load(function () {
			        setTimeout(function(){
			            $('#preloader-welcome').fadeOut('slow',function(){$(this).remove();});
			        },4000); // 
			        $('#preloader-welcome').click(function() {
			    			$('#preloader-welcome').slideUp('slow', function(){
			    				$(this).remove();}
			    				)
			    		})
			    });  
			});
// Preloader Loading gif
			jQuery(document).ready(function ($) {
			    $(window).load(function () {
			        setTimeout(function(){
			            $('#preloader').fadeOut('slow',function(){$(this).remove();});
			        },2000); // set the time here
			    });  
			});
			
// OPEN INFO
			$(document).ready(function(){
				$('.showpanel').hide();
		    $('.open').click(function(){
		        var link = $(this);
		        $('.showpanel').slideToggle('slow', function() {
		            if ($(this).is(":visible")) {
		                 link.text('  -');
		            } else {
		                 link.text('OPEN INFO');                
		            }        
		        });     
			   });
			});
			// Projects Function
			$(document).ready(function(){
				$('.project-down').hide();
		    $('.project-up').click(function(){
		    	$('.service-down').hide();
		        var link = $(this);
		        $('.project-up').show(); 
		        $('.project-down').slideToggle('slow', function() {
		           if ($(this).is(":active")) {
		                 link.text('PROJECTS');
		            } else {
		                 link.text('PROJECTS');                
		            }  
		        });

			   });
			});
			// Service Function
			$(document).ready(function(){
				$('.service-down').hide();
		    $('.service-up').click(function(){
		    	$('.project-down').hide();
		        var link = $(this);
		        $('.service-up').show(); 
		        $('.service-down').slideToggle('slow', function() {
		           if ($(this).is(":active")) {
		                 link.text('SERVICES');
		            } else {
		                 link.text('SERVICES');                
		            }  
		        });

			   });
			});

