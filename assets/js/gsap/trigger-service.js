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
        tl.from("#us_equipo .item_animate", {
            y: 50,
            opacity: 0,
            delay: 0.5,
            stagger: 0.05
        },'<');
    };

    sectionHero();

    // consultoria-economica
    function sectionConsultoria() {

        const tl= gsap.timeline({
            scrollTrigger: {
                trigger: "#consultoria-economica",
                start: "top+=150 center",
                toggleActions: "play none none reverse",
                // markers: true
            }
        });
        tl.from("#consultoria-economica .title_animate", {
            opacity: 0, 
            y: 50,           
        })
        tl.from("#consultoria-economica .title_animate_p", {
            opacity: 0, 
            y: 50,           
        },'<')
        tl.from("#consultoria-economica .dropdown", {
            opacity: 0, 
            y: 50, 
            delay: 0.5,          
        },'<')

    };
    // sectionConsultoria();
    // consultoria-estrategica
    function section_estrategica() {

        const tl= gsap.timeline({
            scrollTrigger: {
                trigger: "#consultoria-estrategica",
                start: "top+=150 center",
                toggleActions: "play none none reverse",
                // markers: true
            }
        });
        tl.from("#consultoria-estrategica .title_animate", {
            opacity: 0, 
            y: 50,           
        })
        tl.from("#consultoria-estrategica .title_animate_p", {
            opacity: 0, 
            y: 50,           
        },'<')
        tl.from("#consultoria-estrategica .dropdown", {
            opacity: 0, 
            y: 50, 
            delay: 0.5,          
        },'<')

    };
    // section_estrategica();
     // consultoria-negocios
     function section_negocios() {

        const tl= gsap.timeline({
            scrollTrigger: {
                trigger: "#negocios",
                start: "top+=150 center",
                toggleActions: "play none none reverse",
                // markers: true
            }
        });
        tl.from("#negocios .title_animate", {
            opacity: 0, 
            y: 50,           
        })
        tl.from("#negocios .title_animate_p", {
            opacity: 0, 
            y: 50,           
        },'<')
        tl.from("#negocios .dropdown", {
            opacity: 0, 
            y: 50, 
            delay: 0.5,          
        },'<')

    };
    // section_negocios();
     
    // consultoria-red-global
     function section_red() {

        const tl= gsap.timeline({
            scrollTrigger: {
                trigger: "#red-global",
                start: "top+=150 center",
                toggleActions: "play none none reverse",
                // markers: true
            }
        });
        tl.from("#red-global .title_animate", {
            opacity: 0, 
            y: 50,           
        })
        tl.from("#red-global .title_animate_p", {
            opacity: 0, 
            y: 50,           
        },'<')
        tl.from("#red-global .nuestra-red-slider", {
            opacity: 0, 
            y: 50, 
            delay: 0.5,          
        },'<')

    };
    // section_red();
    

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
    // sectionForm();

    function sectionFooter() {       
        gsap.from(".footer-column", {
            opacity: 0, 
            y: 50,
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#footer",
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