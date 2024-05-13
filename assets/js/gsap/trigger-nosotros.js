document.addEventListener("DOMContentLoaded", function () {

 
    gsap.registerPlugin(ScrollTrigger); 

        

    // const scroller = document.querySelector('.scroller');

    // const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.1, delegateTo: document, alwaysShowTracks: true });
    
    // ScrollTrigger.scrollerProxy(".scroller", {
    //   scrollTop(value) {
    //     if (arguments.length) {
    //       bodyScrollBar.scrollTop = value;
    //     }
    //     return bodyScrollBar.scrollTop;
    //   }
    // });
    
    // bodyScrollBar.addListener(ScrollTrigger.update);
    
    // ScrollTrigger.defaults({ scroller: scroller });

     // HERO
     function sectionHeroUs() {

        const tl= gsap.timeline({
            scrollTrigger: {
                trigger: "#us_equipo",
                start: "top+=150 center",
                toggleActions: "play none none rseverse",
                // markers: true
            }
        });
        tl.from("#us_equipo .title_animate", {
            opacity: 0, 
            y: 50,           
        })
        tl.from("#us_equipo .item_animate", {
            y: 50,
            opacity: 0,
            delay: 0.5,
            stagger: 0.05
        },'<');
    };
    sectionHeroUs();

    // Us partners
    function sectionUsPartner() {
        gsap.set('#us_partners .item_animate', {
            opacity: 0,
            y: 50
        });    

        gsap.to('#us_partners .item_animate', {  
            opacity: 1, 
            y: 0,
            stagger: 0.5,
            scrollTrigger: {
                trigger: "#us_partners",
                // scroller: ".scroller",
                start: () => "top center-=100",
                end: () => "bottom center",
                scrub: true,
                // toggleActions: "play none none reverse",
                // invalidateOnRefresh: true, 
                // markers: true,    
            }
        })
    };
    // sectionUsPartner();

   
   

     // us-clientes
     function sectionClient() {       
        const tl = gsap.timeline({
            scrollTrigger: {     
                trigger: "#us-clientes", 
                // scroller: ".scroller",
                start: () => "center center-=100",
                end: () => "bottom center",
                scrub: false,
                toggleActions: "play none none reverse",
                //  markers: true,
                // scrub: 2            
            }
        });
        // tl.from(".us-clientes__left", {
        //     opacity: 0, 
        //     y: 50,
        //     stagger: 0.5
        // });
        tl.from(".us-clientes__right--moleculas", {
            opacity: 0, 
            x: 100,
            scrollTrigger: {
                trigger: "#us-clientes",  
                // scroller: ".scroller",              
                toggleActions: "play none none reverse",
                scrub: true 
            }  
        },'<');

    };
    sectionClient();

     // us_directores
     function sectionDirect() {       
        const tl = gsap.timeline({
            scrollTrigger: {     
                trigger: "#us_directores", 
                // scroller: ".scroller",
                start: () => "center center",
                end: () => "bottom center",
                scrub: true,
                // toggleActions: "play none none reverse",
                //  markers: true,         
            }
        });
        tl.from(".us_directores_description", {
            opacity: 0, 
            y: 50
        });
        tl.from(".large-card", {
            opacity: 0, 
            y: 50,
            stagger: 0.5
        });
    };
    // sectionDirect();

     // us_advisory
     function sectionAdvisory() {       
        const tl = gsap.timeline({
            scrollTrigger: {     
                trigger: "#us_advisory", 
                // scroller: ".scroller",
                start: () => "top center",
                end: () => "bottom+=100 center",
                scrub: true,
                // toggleActions: "play none none reverse",
                //  markers: true,         
            }
        });
        tl.from(".us_advisory_description", {
            opacity: 0, 
            y: 50
        });
        tl.from("#us_advisory .card", {
            opacity: 0, 
            y: 50,
            stagger: 0.5
        });
    };
    // sectionAdvisory();
    // us_talento
    function sectionTalent() {       
        const tl = gsap.timeline({
            scrollTrigger: {     
                trigger: "#us_talento", 
                // scroller: ".scroller",
                start: () => "top center",
                end: () => "bottom+=100 center",
                scrub: true,
                // toggleActions: "play none none reverse",
                //  markers: true,         
            }
        });
        tl.from(".us_talento_description", {
            opacity: 0, 
            y: 50
        });
        tl.from("#us_talento .card", {
            opacity: 0, 
            y: 50,
            stagger: 0.5
        });
    };
    // sectionTalent();

     // us_work
     function sectionWork() {       
        const tl = gsap.timeline({
            scrollTrigger: {     
                trigger: "#us_work", 
                // scroller: ".scroller",
                start: () => "center center",
                end: () => "bottom center",
                scrub: true,
                // toggleActions: "play none none reverse",
                //  markers: true,         
            }
        });
        tl.from(".title", {
            opacity: 0, 
            y: 50
        });
        tl.from(".btn-container", {
            y: 50,
            opacity: 0,
            delay: 1          
        },'<');
    };
    // sectionWork();

    function sectionForm() {       
        gsap.from(".form_animation", {
            opacity: 0, 
            y: 50,
            stagger: 0.5,
            scrollTrigger: {
                trigger: "#form",
                // scroller: ".scroller",
                start: "top+=150 center",
                toggleActions: "play none none reverse",
                //  markers: true
            }
        })
    };
    // sectionForm();

    function sectionFooter() {       
        gsap.from(".footer-column", {
            opacity: 0, 
            y: 50,
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#footer",
                // scroller: ".scroller",
                start: "top-=100 center",
                toggleActions: "play none none reverse",
                //  markers: true
            }
        })
    };
    // sectionFooter();

 
    



    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
            // desktop setup code here...
            // set time line Nav bar
            const tlNavBar = gsap.timeline({
                scrollTrigger: {           
                    start: 'top+=250 top+=150',	
                    end: '+=1',            			
                    toggleActions: "play none none reverse",
                    // markers: true   
                }
            }); 
            tlNavBar.to('#nav-container',{
                backgroundColor:' rgb(62, 117, 120, .4)'           
            })
            // Partners BIOs
              //  Us partners animate fix ping
            function sectionUsPatnerAnimate() {
            
                gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });

                let texts = gsap.utils.toArray('.panel-text'); 
                
                texts.forEach((text, i) => {
                    const tl = gsap.timeline({
                    
                        scrollTrigger: {
                            trigger: "section.us_partners_animate",
                            // scroller: ".scroller",
                            start: () => "top -" + (window.innerHeight*i),
                            end: () => "+=" + window.innerHeight,
                            scrub: true,
                            toggleActions: "play none reverse none",
                            invalidateOnRefresh: true,     
                        }
                    })
                
                tl
                .to(text, { delay: 0.55, duration: 3, opacity: 1, y:"58%" })
                // .fromTo(text.children[2].children[0],{duration: 0.03,opacity: 0},{duration: 0.03,opacity: 1})  
                .to(text.children[2].children[0], {
                    y: "-110%", 
                    ease: "none",
                    duration: 8
                })  
                .to(text, { delay: 0.55, duration: 3, opacity: 0 })
                ;
                
                });
                
                ScrollTrigger.create({
                    trigger: "section.us_partners_animate",
                    // scroller: ".scroller",
                    scrub: true,
                    // markers: true,
                    pin: true,
                    start: () => "top top",
                    end: () => "+=" + ((texts.length) * window.innerHeight),
                    invalidateOnRefresh: false,

                });
            };
            sectionUsPatnerAnimate();

            // Valores
                function sectionUsValues(){
                    const tl = gsap.timeline({
                        scrollTrigger: {     
                            trigger: "#us_valores", 
                            // scroller: ".scroller",
                            start: () => "center center",
                            end: () => "bottom center",
                            scrub: true,                             
                            pin: true, 
                            // markers: true        
                        }
                    });

                    let values = gsap.utils.toArray('#us_valores .item_us_values'); 
                    
                    values.forEach((item, i) => {

                        tl.fromTo(item,
                        {
                        opacity: 0.5, 
                        color: "#3E7578",
                        },
                        {
                        opacity: 1, 
                        fontSize: "60px",
                        fontFamily: 'NexaBold',
                        borderTop: "1px solid gray",
                        borderBottom: "1px solid gray",
                        color: "rgb(147 192 31)",
                        stagger: 1,
                            
                    })  
                    tl.to(item,
                        {
                        opacity: 0.5, 
                        fontSize: "45px",
                        color: "#3E7578",
                        fontFamily: 'NexaLight',
                        borderTop: "0",
                        borderBottom: "0",


                        })   
                    });

                };
                // sectionUsValues();


        });

    mm.add("(max-width: 799px)", () => {
            // mobile setup code here...

              // Partners BIOs
              //  Us partners animate fix ping
              function sectionUsPatnerAnimate() {
            
                gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });

                let texts = gsap.utils.toArray('.panel-text'); 
                
                texts.forEach((text, i) => {
                    const tl = gsap.timeline({
                    
                        scrollTrigger: {
                            trigger: "section.us_partners_animate",
                            // scroller: ".scroller",
                            start: () => "top -" + (window.innerHeight*i),
                            end: () => "+=" + window.innerHeight,
                            scrub: true,
                            toggleActions: "play none reverse none",
                            invalidateOnRefresh: true,     
                        }
                    })
                
                tl        
                .to(text, { delay: 0.55, duration: 3, opacity: 1, y:"60%" })
                // .fromTo(text.children[2].children[0],{duration: 0.03,opacity: 0},{duration: 0.03,opacity: 1})  
                .to(text.children[2].children[0], {
                    y: "-110%", 
                    ease: "none",
                    duration: 8
                })  
                .to(text, { delay: 0.55, duration: 1 ,opacity: 0 })
                ;
                
                });
                
                ScrollTrigger.create({
                    trigger: "section.us_partners_animate",
                    // scroller: ".scroller",
                    scrub: true,
                    // markers: true,
                    pin: true,
                    start: () => "top top",
                    end: () => "+=" + ((texts.length) * window.innerHeight),
                    invalidateOnRefresh: false,

                });
            };
            sectionUsPatnerAnimate();


                // Valores
                function sectionUsValues(){
                    const tl = gsap.timeline({
                        scrollTrigger: {     
                            trigger: "#us_valores", 
                            // scroller: ".scroller",
                            start: () => "center center",
                            end: () => "bottom center",
                            scrub: 2,
                            // delay: 0.5,
                            pin: true,
                            // markers: true,       
                        }
                    });

                    let values = gsap.utils.toArray('#us_valores .item_us_values'); 
                    
                    values.forEach((item, i) => {

                        tl.fromTo(item,
                        {
                        opacity: 0.5, 
                        color: "#3E7578",
                        textAling: "center",
                        },
                        {
                        opacity: 1, 
                        fontSize: "2rem",
                        fontFamily: 'NexaBold',
                        borderTop: "1px solid gray",
                        borderBottom: "1px solid gray",
                        textAling: "center",
                        color: "rgb(147 192 31)",
                        stagger: 1,
                            
                    })  
                    tl.to(item,
                        {
                        opacity: 0.5, 
                        fontSize: "1.5rem",
                        color: "#3E7578",
                        fontFamily: 'NexaLight',
                        borderTop: "0",
                        borderBottom: "0",


                        })   


                    });



                    
                    
                };
                // sectionUsValues();


        });

})