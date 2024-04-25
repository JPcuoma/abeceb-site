    var optDivs = document.querySelectorAll('.opt');
    var liElements = document.querySelectorAll('.partners li');
    
    liElements.forEach(function(li) {
        li.addEventListener('click', function() {
             
             liElements.forEach(function(el) {
                el.classList.remove('active');
            });

            
            this.classList.add('active');

            
            var id = this.id;
            console.log(id);
           
            optDivs.forEach(function(div) {
                if (div.classList.contains('o-' + id)) {
                    div.style.display = 'block';
                    div.style.opacity = '1';
                } else {
                    div.style.display = 'none';
                    div.style.opacity = '0';
                }
            });
        });
    });


    

  /* menu */
    const hambToggle = document.querySelectorAll('#hamb-toggle');
    const hambOpenMenu = document.querySelector('.hamb-toggle');
    const hamburguer = document.querySelector('.header-logo-box');
    const menu = document.querySelector('#menu');
    // const closeButton = document.querySelector('.close');
    
    hambToggle.forEach((btn) => {
          btn.addEventListener('click', function() {
            if( menu.classList.contains('hide')){
              hamburguer.classList.add('hide')
              hambOpenMenu.classList.add('hide')
              menu.classList.remove('hide');
            }else{
              hambOpenMenu.classList.remove('hide')
              hamburguer.classList.remove('hide')
              menu.classList.add('hide')
            }
          });
        }
      )
    
    // closeButton.addEventListener('click', function() {
    //   menu.classList.toggle('hide');
    //   hamburguer.classList.toggle('hide');
    // });


    



/* fade in elementos */ 

// window.addEventListener('scroll', function() {
//     const items = document.querySelectorAll('.fade-in-el');
  
//     items.forEach(item => {
//       if (isElementInViewport(item)) {
//         item.classList.add('show');
//       }
//     });
//   });
  
//   function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }



