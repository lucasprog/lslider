export default class Slider{

    constructor(){}

    init(){
        /**
         * Verificando se existe algum slide com o active
         */
        const classesItem = this.selectEl("#carousel .content-slide .item-slide").classList.value.split(" ");

        if( classesItem.filter( v => v === 'active').length === 0 ){
            this.selectEl("#carousel .content-slide .item-slide:first-child").classList.add('active');
        }

        this.setWidthSlideItem();
    }

    selectEl(el) {
        return document.querySelector(el);
    }
    
    selectElAll(el) {
        return document.querySelectorAll(el);
    }

    setWidthSlideItem(){
        //Pegando o  tamanho full do banner e aplicando a cada item
        let widthPerSlide = this.selectEl("#carousel .content-slide").clientWidth;

        let perSlide = this.selectElAll("#carousel .content-slide .item-slide");

        perSlide.forEach( i => i.style.width = `${widthPerSlide}px` );
    }

    clearActive(){
        this.selectElAll("#carousel .content-slide .item-slide").forEach( m => {
            if( m ){
                m.classList.remove('active');
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    const slider = new Slider();
    slider.init();
});

/** Click Prev */
document.querySelector('.direction.dire-left').addEventListener('click',function(e){
    e.preventDefault();

    let prev = document.querySelector(".item-slide.active").previousElementSibling;

    if( !prev ){ prev = document.querySelector("#carousel .content-slide .item-slide:last-child"); }

    document.querySelector("#carousel .content-slide").scrollTo({ left : prev.offsetLeft, behavior: 'smooth' });

    document.querySelector("#carousel .content-slide .item-slide.active").classList.remove('active');

    prev.classList.add('active');

});

/** Click Next */
document.querySelector('.direction.dire-right').addEventListener('click',function(e){
    e.preventDefault();

    let next = document.querySelector(".item-slide.active + .item-slide");

    if( !next ){ next = document.querySelector("#carousel .content-slide .item-slide:first-child"); }

    document.querySelector("#carousel .content-slide .item-slide.active").classList.remove('active');

    next.classList.add('active');

    document.querySelector("#carousel .content-slide").scrollTo({ left : next.offsetLeft, behavior: 'smooth' });

});