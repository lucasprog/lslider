
/** Init full */

/**
 * Verificando se existe algum slide com o active
 */
const classesItem = document.querySelector("#carousel .content-slide .item-slide").classList.value.split(" ");

if( classesItem.filter( v => v === 'active').length === 0 ){
    document.querySelector("#carousel .content-slide .item-slide:first-child").classList.add('active');
}

//Pegando o  tamanho full do banner e aplicando a cada item
let widthPerSlide = document.querySelector("#carousel .content-slide").clientWidth;

let perSlide = document.querySelectorAll("#carousel .content-slide .item-slide");

perSlide.forEach( i => i.style.width = `${widthPerSlide}px` );

/** Click Prev */
document.querySelector('.direction.dire-left').addEventListener('click',function(e){
    e.preventDefault();

    let prev = document.querySelector(".item-slide.active").previousElementSibling;

    if( !prev ){
        prev = document.querySelector("#carousel .content-slide .item-slide:last-child");
    }

    document.querySelector("#carousel .content-slide").scrollTo({ 
        left : prev.offsetLeft,
        behavior: 'smooth'
    });

    document.querySelector("#carousel .content-slide .item-slide.active").classList.remove('active');

    prev.classList.add('active');

});

/** Click Next */
document.querySelector('.direction.dire-right').addEventListener('click',function(e){
    e.preventDefault();

    let next = document.querySelector(".item-slide.active + .item-slide");

    if( !next ){
        next = document.querySelector("#carousel .content-slide .item-slide:first-child");
    }

    document.querySelector("#carousel .content-slide .item-slide.active").classList.remove('active');

    next.classList.add('active');

    document.querySelector("#carousel .content-slide").scrollTo({ 
        left : next.offsetLeft,
        behavior: 'smooth'
    });


});