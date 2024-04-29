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
    const formBtn = document.querySelector('a[href="#form"]');
    
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
      formBtn.addEventListener('click', ()=>{
        hambOpenMenu.classList.remove('hide')
        hamburguer.classList.remove('hide')
        menu.classList.add('hide')
      })
    

// dropdowns
    
  //   const dropLabel = document.querySelectorAll('.dropdown__label');
  //   const dropsClose = document.querySelectorAll('.dropdown')
    
  //   dropLabel.forEach((dropDownBox)=>{
  //       dropDownBox.addEventListener('click', ()=>{
  //         const parentContainer = dropDownBox.parentElement
  //         if (parentContainer.classList.contains('active')) {
  //           parentContainer.classList.remove('active')
  //           return
  //         }else{
  //           dropsClose.forEach(parent=>parent.classList.remove('active'))
  //         }
  //         parentContainer.classList.add('active')
  //       }
  //     )
  //   }
  // )
    




