'use strict'
let colorsArr = document.querySelectorAll('.color-parameters__frame');
colorsArr.forEach(item =>{
        item.addEventListener('click',event =>{
            event.preventDefault();
            colorsArr.forEach(item =>{
                item.classList.remove('color-parameters__frame_black_frame');
            })

            item.classList.add('color-parameters__frame_black_frame');
        })
    })


let lang = document.querySelector('.home__lang');
let svg = document.querySelector('.home__svg');
lang.addEventListener('click',event =>{
    event.preventDefault();
    svg.classList.toggle('home__svg_active');

})

let productName = document.querySelectorAll('.product-name');
productName.forEach(item =>{
    item.addEventListener('click',event => {
        event.preventDefault();
    })
})


let menu = document.querySelector('.home__menu');
console.log(menu)
menu.addEventListener('click', event =>{
    event.preventDefault();
    menu.classList.toggle('active');
})
