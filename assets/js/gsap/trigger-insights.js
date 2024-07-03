document.addEventListener("DOMContentLoaded", function () {

 
    gsap.registerPlugin(ScrollTrigger);

  // HERO
    function sectionHero() {

        const tl= gsap.timeline({
            scrollTrigger: {
                trigger: "#us_equipo",
                start: "top+=150 center",
                toggleActions: "play none none reverse",
                // markers: true
            }
        });
        tl.from("#us_equipo .title_animate", {
            opacity: 0, 
            y: 50,           
        })
        tl.from("#us_equipo .sub_title_animate", {
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

    sectionHero();

    
    



    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
            // desktop setup code here...
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

        });

    mm.add("(max-width: 799px)", () => {
            // mobile setup code here...


        });

})