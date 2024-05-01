document.addEventListener("DOMContentLoaded", function () {

 
    gsap.registerPlugin(ScrollTrigger);

    let bodyScrollBar = Scrollbar.init(document.body, {
        damping: 0.1,
        delegateTo: document,
    });

    ScrollTrigger.scrollerProxy(".scroller", {
        scrollTop(value) {
            if (arguments.length) {
            bodyScrollBar.scrollTop = value;
            }
            return bodyScrollBar.scrollTop;
        },
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

//  ######
    gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });

    var texts = gsap.utils.toArray('.panel-text');
    
    texts.forEach((text, i) => {

        var tl = gsap.timeline({
        
            scrollTrigger: {
                trigger: "section.us_partners_animate",
                scroller: ".scroller",
                start: () => "top -" + (window.innerHeight*i),
                end: () => "+=" + window.innerHeight,
                scrub: true,
                toggleActions: "play none reverse none",
                invalidateOnRefresh: true,     
            }
            
        })
    
    tl
    .to(text, { duration: 0.33, opacity: 1, y:"50%" })  
    .to(text, { duration: 2, y:"-100%" })
    ;
    
    });



    ScrollTrigger.create({

        trigger: "section.us_partners_animate",
        scroller: ".scroller",
        scrub: true,
        // markers: true,
        pin: true,
        start: () => "top top",
        end: () => "+=" + ((texts.length) * window.innerHeight),
        invalidateOnRefresh: true,

    });

    // console.log(texts.length)

 
    // function sectionUsValues(){
      
    //     var UsValues = gsap.utils.toArray('#us_valores .item_us_values');
    
    //     UsValues.forEach((item, i) => {

    //         var tl = gsap.timeline({
            
    //             scrollTrigger: {
    //                 trigger: "#us_valores", 
    //                 start: 'top+=150 center',   
    //                 end: 'bottom center', 			
    //                 toggleActions: "play none reverse none",
    //                  markers: true,
    //                 // scrub: 2       
    //             }
                
    //         })
        
    //     tl.to(item, { duration: 0.33, opacity: 1, y:"50%" });
        
    //     });
        
        
    // };
    // sectionUsValues();



    // let mm = gsap.matchMedia();

    // mm.add("(min-width: 800px)", () => {
    //         // desktop setup code here...


    //     });

    // mm.add("(max-width: 799px)", () => {
    //         // mobile setup code here...


    //     });

})