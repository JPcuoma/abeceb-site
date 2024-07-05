// scroll effect 

        const lenis = new Lenis({
            // Valeur entre 0 et 1
            // Valeur par défaut : 0,1
            // Plus la valeur est faible, plus le scroll sera fluide
            lerp: 0.05,
            // Valeur par défaut : 1
            // Plus la valeur est haute, plus le défilement sera rapide 
            smooth: true,
            direction: "vertical"
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);


// menu
    const burgerToggle = document.querySelector('#burger-toggle');
    const navMenu = document.querySelector('#menu');

    burgerToggle.addEventListener('click', ()=>{
      if (burgerToggle.classList.contains('open')) {
        burgerToggle.classList.remove('open')
        navMenu.classList.add('hide')
        return
      }
      burgerToggle.classList.add('open')
      navMenu.classList.remove('hide')
    })


// form
      const formSubmit = document.querySelector('#form-submit');
      const formMsgSucces = document.querySelector('.form-message__succes');

      formSubmit.addEventListener('click', (e)=>{
        e.preventDefault()
        formSubmit.classList.add("disabled")
        setTimeout(() => {
          formSubmit.classList.remove("disabled")
          formMsgSucces.classList.add("show")
        }, 2000);
        setTimeout(() => {
          formMsgSucces.classList.remove("show")
        }, 5000);
        return
      })

// dropdowns

const dropLabel = document.querySelectorAll('.isolate-dropdown__label');
// const dropsClose = document.querySelectorAll('.dropdown')
function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}

dropLabel.forEach((dropDownBox)=>{
    dropDownBox.addEventListener('click', ()=>{
        // const parentContainer = dropDownBox.parentElement
        const parentContainer = findAncestor(dropDownBox, 'isolate-dropdown') 
        if (parentContainer.classList.contains('active')) {
          lenis.scrollTo(parentContainer.offsetTop - 80)
        }

        parentContainer.classList.toggle('active')
        }
    )
}
)