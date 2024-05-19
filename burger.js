let btnToggle = document.querySelector('.header__burger')
let headMenu = document.querySelector('.header__menu')
btnToggle.addEventListener('click', function(){
    if (headMenu.className === 'header__menu') {
        headMenu.classList.add('new');
    } else {
        headMenu.classList.remove('new');
    }
})

   
