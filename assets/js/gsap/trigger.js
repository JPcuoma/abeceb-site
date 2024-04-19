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
    gsap.set('.anm_heading_title_2', {
        opacity: 1,
        y: `${+innerHeight}px`
    });

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
                    start: 'bottom bottom',
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
            // yPercent: -10,
            backgroundPosition: `50% ${-innerHeight / 3}px`,
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

    function sectionThree(){
        const tlSectionThree = gsap.timeline({
            scrollTrigger: {     
                trigger: "#three", 
                start: 'top+=250 center',    			
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
        
      }
      sectionThree();
    

    // set time line Hero Home
    const tlHomeHero = gsap.timeline({
        scrollTrigger: {           
            start: 'top+=250',	
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
        })
        // .to(".parallax__layer_hero", {
        //     // backgroundPosition: `50% ${-innerHeight / 3}px`,
        //     yPercent: -20,
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: ".parallax__layer_hero",
        //         scrub: true
                
        //     }, 
        // });     
        // .to('#one',{
        //     yPercent: -100
        // }, '<')

    

   

     

       


	

   let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
            // desktop setup code here...
          
                
        });

    mm.add("(max-width: 799px)", () => {
            // mobile setup code here...
           
        });



})