// ************** Header Scroller************

$(window).scroll(function(){

    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 47) sticky.addClass('fixed');
    else sticky.removeClass('fixed');

  });


//  ************ Header Scroll And Change Logo ****************

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 47) { 
            $('.main_header .main_logo img').attr('src','https://themexbd.com/htmlpv/poket/assets/images/delivery/logo2.png');
        }
        if ($(this).scrollTop() < 47) { 
            $('.main_header .main_logo img').attr('src','https://themexbd.com/htmlpv/poket/assets/images/delivery/logo1.png');
        }
    })
});


$(document).ready(function(){
                    // *************** Main Slider **************

    $('#main_slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        center:true,
        smartSpeed:2000,
        autoplay:true,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    });

    //************* Video Page *********     

    $('#main_video_slider').owlCarousel({
        loop:false,
        margin:10,
        navText:false,
        dots:false,
        center:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    });

                    // *************** Service Slider ******************

    $('#service_slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:false,
        center:true,
        smartSpeed:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

                // *************** Service Slider ******************

    $('#member_slider').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:false,
        center:true,
        smartSpeed:2000,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
                
                // **************** Testimonial Slider *****************

    $('#testimonial_slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        smartSpeed:2000,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:2
            }
        }
    });

    // Testimonial Page ....

    $('#t_testimonial_slider').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:false,
        smartSpeed:2000,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });


                //********************** Logo Slider ************************
    
    $('#logo_slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        center:true,
        smartSpeed:2000,
        autoplay:true,
        autoplayTimeout:7000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });


            //********************* Scroll To Top ************************

    $("#top").hide();
        $(function toTop() {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 200) {
                    $('#top').fadeIn();
                } else {
                    $('#top').fadeOut();
                }
            });

            $('#top').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 1000);
                return false;
            });
        });

});


            //********************* Faq Page Accordion ************************

        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                panel.style.display = "none";
                } else {
                panel.style.display = "block";
                }
            });
        }