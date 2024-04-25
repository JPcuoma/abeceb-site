document.addEventListener("DOMContentLoaded", function () {

    'use strict';

    Splitting();
	gsap.registerPlugin(ScrollTrigger);
    
    // set element nav and Hero
    gsap.set('#brand-logo-sticky', {
        opacity: 0
    });
    gsap.set('.anm_heading_title_1', {
        opacity: 1,        
    });
    // gsap.set('.anm_heading_title_2', {
    //     opacity: 1,
    //     y: `${+innerHeight}px`
    // });

    gsap.from(".anm_heading_title_1 .char", 
        1, {
             delay:0.5,
             opacity: 0,
             yPercent: 30, 
             stagger: 0.03, 
             ease: "back.out" 
            });

    gsap.from(".anm_heading_title_2 .char",  {
            delay:0.5,
            opacity: 0,
            yPercent: 30, 
            stagger: 0.02, 
            ease: "back.out",
            scrollTrigger: {
                    trigger: ".anm_heading_title_2",
                    start: 'top bottom',
                    toggleActions: "play none none reverse",
                    // markers: true,	
                    // scrub: 3
                },  
          
        });

    gsap.to('#anm_brand_home',{       
        scale:0.5,
        scrollTrigger: {
            //  trigger: "#one",
                start: 'bottom bottom',
                toggleActions: "play none none reverse",	
                scrub: true 
            },  
        }); 

    function parallax(){
        gsap.to(".image_three", {
            yPercent: 20,
            // backgroundPosition: `50% ${-innerHeight / 3}px`,
            ease: "none",
            scrollTrigger: {
                trigger: ".image_three",
                scrub: true
            }, 
        });

        gsap.to(".parallax__layer_three", {
            backgroundPosition: `50% ${-innerHeight / 3}px`,
            ease: "none",
            scrollTrigger: {
                trigger: ".parallax__layer_three",
                scrub: true
            }, 
        });
      }
      parallax(); 
    

    // set time line Hero Home
    const tlHomeHero = gsap.timeline({
        scrollTrigger: {           
            start: 'top+=350',	
            end: '+=1',            			
            toggleActions: "play none none reverse",
            //  markers: true,
            scrub: 2            
        }
    });

    tlHomeHero      
        .to('#anm_brand_home',{
           opacity: 0,
           scale:0.5,
           scrub: 1
         })
         .to('#brand-logo-sticky',{
            opacity: 1,    
            scrub: 1    
        }, '<')
        .to(".image_hero", {
            // backgroundPosition: `50% ${-innerHeight / 2}px`,
            yPercent: -30,
            ease: "none",
            scrollTrigger: {
                trigger: ".image_hero",
                scrub: true 
            },  
        });
    
    function sectionTwo() {
        gsap.from(".partners", {
            opacity: 0, 
            y: 50,
            scrollTrigger: {
                trigger: "#two",
                start: "top+=150 center",
                toggleActions: "play none none reverse",
                //  markers: true
            }
        })
    };
    sectionTwo();

    function sectionThree(){
        const tlSectionThree = gsap.timeline({
            scrollTrigger: {     
                trigger: "#three", 
                start: 'top+=150 center',    			
                toggleActions: "play none none reverse",
                //  markers: true,
                // scrub: 2            
            }
        });
        tlSectionThree.from(".anm_cta_title", {
            y: 30,
            opacity: 0
            
        });
        tlSectionThree.from(".anm_cta_btn", {
            y: 50,
            opacity: 0,
            delay: 1          
        },'<');
        tlSectionThree.to(".anm_cta_title", {
            y: -20,       
        },'<');
        
        };
    sectionThree();

    function sectionFour() {
        gsap.from(".box", {
            opacity: 0, 
            y: 50,
            stagger: 0.5,
            scrollTrigger: {
                trigger: "#four",
                start: "top+=150 center",
                toggleActions: "play none none reverse",
                //  markers: true
            }
        })
    };
    sectionFour();

    function sectionFive() {       
        const tlSectionFive = gsap.timeline({
            scrollTrigger: {     
                trigger: "#five", 
                start: 'top+=150 center',    			
                toggleActions: "play none none reverse",
                //  markers: true,
                // scrub: 2            
            }
        });
        tlSectionFive.from(".five_item_animation", {
            opacity: 0, 
            y: 50,
            stagger: 0.5
        })
        tlSectionFive.from(".img-insights-desk", {
            opacity: 0, 
            x: 100,
            scrollTrigger: {
                trigger: "#five",                
                toggleActions: "play none none reverse",
                scrub: true 
            }  
        },'<');

    };
    sectionFive();

    function sectionSix() {
        gsap.from(".six_animation", {
            opacity: 0, 
            y: 50,
            stagger: 0.5,
            scrollTrigger: {
                trigger: "#six",
                start: "top+=150 center",
                toggleActions: "play none none reverse",
                //  markers: true
            }
        })
    };
    sectionSix();


    function sectionForm() {       
        gsap.from(".form_animation", {
            opacity: 0, 
            y: 50,
            stagger: 0.5,
            scrollTrigger: {
                trigger: "#form",
                start: "top+=150 center",
                toggleActions: "play none none reverse",
                //  markers: true
            }
        })
    };
    sectionForm();

    function sectionFooter() {       
        gsap.from(".footer-column", {
            opacity: 0, 
            y: 50,
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#footer",
                start: "top center",
                toggleActions: "play none none reverse",
                //  markers: true
            }
        })
    };
    sectionFooter();

    

	
    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
            // desktop setup code here...
            gsap.set('.anm_heading_title_2', {
                opacity: 1,
                y: `${+innerHeight}px`
            });

            tlHomeHero.to(".header-logo-box", {          
                background: "linear-gradient(0deg, rgba(0, 0, 0, 0) -9%, rgba(0, 0, 0, 1) 154%)",               
            });   
                
        });

    mm.add("(max-width: 799px)", () => {
            // mobile setup code here...
            gsap.set('.anm_heading_title_2', {
                opacity: 1,
                y: `${+innerHeight}px`
            });
            gsap.set('#one.parallax__layer_hero', {                
                height: `${+innerHeight * 2}px`
            });
            gsap.set('.image_three', {                
                  backgroundPositionX: `30%`,
            });
          
            
            tlHomeHero.to(".header-logo-box", {          
                background: "linear-gradient(0deg, rgba(0, 0, 0, 0) -9%, rgba(0, 0, 0, 1) 154%)",               
            })
            .to(".menu-close-logo-mob", {          
                opacity: 1,               
            })   
            
        });



})