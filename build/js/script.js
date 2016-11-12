/**
 * Created by Ярик on 09.11.2016.
 */
"use strict";
/* menu */
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
/*slider*/
var leftNarrow = document.getElementById('sliderFirst__left-button');
var rightNarrow = document.getElementById('sliderFirst__right-button');
var sliderFirst = {
    slides:[
        {img:'Ty_N_Steel.jpg', title: 'TY', w:446,h:237,position:1},
        {img:'Max_N_Steel_Camo.jpg', title: 'MAX', w:474,h:274,position:2},
        {img:'Emme_S_Pink.jpg', title: 'EMME', w:465,h:237,position:3},
        {img:'Camile_Navy_3Quarter.jpg', title: 'CAMILLE', w:452,h:423,position:4},
        {img:'Noel_Bracken.jpg', title: 'NOEL', w:452,h:350,position:5},
        {img:'Roan_L_White.jpg', title: 'ROAN', w:459,h:235,position:6},
        {img:'Nat_Navy.jpg', title: 'Nat', w:457,h:233,position:7}],
    frame: 0, // текущий кадр для отбражения - индекс картинки из массива
    set: function(obj) { // установка нужного фона слайдеру
        var slide = document.getElementById("sliderFirst__img");
        if(obj.title == "CAMILLE"){
            document.getElementById("sliderFirst").style.marginTop = 0+"px";
            document.getElementById("sliderFirst").style.marginBottom = 200+"px";
            leftNarrow.style.top = 253+"px";
            rightNarrow.style.top = 253+"px";
        }else{
            document.getElementById("sliderFirst").style.marginTop = 100+"px";
            document.getElementById("sliderFirst").style.marginBottom = 0+"px";
            leftNarrow.style.top = 153+"px";
            rightNarrow.style.top = 153+"px";
        }
        slide.style.backgroundImage = "url(build/img/shoes/"+obj.img+")";
        slide.style.width = obj.w+"px";
        slide.style.height = obj.h+"px";
        var sliderNumber = document.body.getElementsByClassName('slider-number');
        var sliderName = document.body.getElementsByClassName('slider-name');
        sliderNumber[0].innerText = obj.position + ' / 7';
        sliderName[0].innerText = obj.title;

    },
    left: function() { // крутим на один кадр влево
        this.frame--;
        if(this.frame < 0) this.frame = this.slides.length-1;
        this.set(this.slides[this.frame]);
    },
    right: function() { // крутим на один кадр вправо
        this.frame++;
        if(this.frame == this.slides.length) this.frame = 0;
        this.set(this.slides[this.frame]);
    }
};

leftNarrow.addEventListener('click', function () {
    sliderFirst.left();
});
rightNarrow.addEventListener('click', function () {
    sliderFirst.right();
});

/* scrolling */
window.onscroll = function() {

    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var menuItem;
    var menuHeader = document.body.getElementsByClassName('menu-header')[0];
    var menuAbout = document.body.getElementsByClassName('menu-about')[0];
    var menuReviewFirst = document.body.getElementsByClassName('menu-reviewFirst')[0];
    var menuSlider = document.body.getElementsByClassName('menu-slider')[0];
    var menuAdvantages = document.body.getElementsByClassName('menu-advantages')[0];
    var menuAddress = document.body.getElementsByClassName('menu-address')[0];

    if(+scrolled<=500){
        menuItem = menuHeader;
    }else if((+scrolled>500)&&(+scrolled<=1400)){
        menuItem = menuAbout;
    }else if((+scrolled>1400)&&(+scrolled<=3000)){
        menuItem = menuReviewFirst;
    }else if((+scrolled>3000)&&(+scrolled<=3750)){
        menuItem = menuSlider;
    }else if((+scrolled>3750)&&(+scrolled<=4600)){
        menuItem = menuAdvantages;
    }else{
        menuItem = menuAddress;
    }
    document.body.getElementsByClassName('menu-active')[0].classList.remove('menu-active');
    menuItem.classList.add('menu-active');
};
