/******************************************
    File Name: custom.js
/*******************************************/

"use strict";

/**== wow animation ==**/

new WOW().init();

/**== loader js ==**/

// Only run preloader code if we're on index.html
if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
    // Add CSS styles through JavaScript
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
        #preloader {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(119, 107, 93, 0.9);
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(5px);
        }

        .counter-wrapper {
            padding: 20px;
            border-radius: 10px;
            animation: fadeIn 0.5s ease-in;
        }

        .counter-content {
            opacity: 0;
            animation: fadeIn 0.5s ease-in forwards;
            animation-delay: 0.2s;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(styleSheet);

    // Preloader HTML
    $("body").prepend(`
        <div id="preloader">
            <div class="counter-wrapper">
                <div class="counter-content" style="text-align: center; color: #EBE3D5;">
                    <span id="counter" style="font-size: 48px; font-weight: bold;">0</span>
                    <span style="font-size: 48px; font-weight: bold;"> units</span>
                    <p style="font-size: 24px; margin-top: 10px; color: #B0A695;">Done since 2022</p>
                </div>
            </div>
        </div>
    `);

    // Counter animation function
    function animateCounter(callback) {
        const counter = $('#counter');
        const target = 210;
        const duration = 2000; // 2 seconds
        const steps = 50;
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
                if (callback) callback();
            }
            counter.text(`> ${Math.round(current)}`);
        }, duration / steps);
    }

    // Window load handler
    $(window).on('load', function() {
        // Start counter animation
        animateCounter(() => {
            // After counter animation completes, fade out the preloader
            setTimeout(() => {
                $('#preloader').fadeOut('slow');
                $('body').css({
                    'overflow': 'visible'
                });
            }, 500);
        });
    });
}

/**== menu js ==**/

$("#navbar_menu").menumaker({
    title: "Menu",
    format: "multitoggle"
});

/**== map ==**/

function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: {lat: 40.645037, lng: -73.880224},
      styles: [
               {
                 elementType: 'geometry',
                 stylers: [{color: '#fefefe'}]
               },
               {
                 elementType: 'labels.icon',
                 stylers: [{visibility: 'off'}]
               },
               {
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#616161'}]
               },
               {
                 elementType: 'labels.text.stroke',
                 stylers: [{color: '#f5f5f5'}]
               },
               {
                 featureType: 'administrative.land_parcel',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#bdbdbd'}]
               },
               {
                 featureType: 'poi',
                 elementType: 'geometry',
                 stylers: [{color: '#eeeeee'}]
               },
               {
                 featureType: 'poi',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#757575'}]
               },
               {
                 featureType: 'poi.park',
                 elementType: 'geometry',
                 stylers: [{color: '#e5e5e5'}]
               },
               {
                 featureType: 'poi.park',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#9e9e9e'}]
               },
               {
                 featureType: 'road',
                 elementType: 'geometry',
                 stylers: [{color: '#eee'}]
               },
               {
                 featureType: 'road.arterial',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#3d3523'}]
               },
               {
                 featureType: 'road.highway',
                 elementType: 'geometry',
                 stylers: [{color: '#eee'}]
               },
               {
                 featureType: 'road.highway',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#616161'}]
               },
               {
                 featureType: 'road.local',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#9e9e9e'}]
               },
               {
                 featureType: 'transit.line',
                 elementType: 'geometry',
                 stylers: [{color: '#e5e5e5'}]
               },
               {
                 featureType: 'transit.station',
                 elementType: 'geometry',
                 stylers: [{color: '#000'}]
               },
               {
                 featureType: 'water',
                 elementType: 'geometry',
                 stylers: [{color: '#c8d7d4'}]
               },
               {
                 featureType: 'water',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#b1a481'}]
               }
             ]
    });

        var image = 'images/map_icon.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: 40.645037, lng: -73.880224},
          map: map,
          icon: image
        });
      }

/**== portfolio tab ==**/

$(document).ready(function() {

    $(".filter-button").on('click', function() {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        } else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});

/**== search bar ==**/

function myFunction() {
    var x = document.getElementById("searchbar");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

/** owl slider **/

$(document).ready(function() {

  
    /** theme slider **/

    var themeOwl = $('.theme-owl-carousel');
    themeOwl.owlCarousel({
        items:1,
        loop:true,
        margin:500,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false
    });

    $('.play').on('click',function(){
      themeOwl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
      themeOwl.trigger('stop.owl.autoplay')
    })

    /** slider 1 **/

    $('.owl-carousel-team').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: true,
                margin: 30
            }
        }
    })

    /** slider 2 **/

    $('.client_slider_main').owlCarousel({
        items: 1,
        margin: 10,
        autoHeight: false
    });

    /** half slider **/

    var owl = $('.owl-carousel_haf');
    owl.owlCarousel({
        stagePadding: 50,
        margin: 30,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })

    /** mousewheel slider **/

    var owl = $('.owl-carousel-mousewheel');
    owl.owlCarousel({
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            960: {
                items: 3
            },
            1200: {
                items: 4
            },
            1640: {
                items: 5
            }
        }
    });
    owl.on('mousewheel', '.owl-stage', function(e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });



})

/** end owl slider **/

/** datetimepicker js **/

$(function () {
    $('#datetimepicker1').datetimepicker();
});

/** sidebar **/

function openNav() {
    if (screen.width < 1200) {
      document.getElementById("mySidenav").classList.add("w-100")
    } else {
      document.getElementById("mySidenav").classList.add("w-25")
    }
    
}
      
function closeNav() {
  if (screen.width < 1200) {
    document.getElementById("mySidenav").classList.remove("w-100")
  } else {
    document.getElementById("mySidenav").classList.remove("w-25")
  }
}

