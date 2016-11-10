/**
 * Created by Ярик on 09.11.2016.
 */
"use strict";
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
/*slider*/
var sliderFirst = {
    slides:[
        {img:'img/shoes/Ty_N_Steel.jpg', title: 'TY', w:446,h:237},
        {img:'img/shoes/Max_N_Steel_Camo.jpg', title: 'MAX', w:474,h:274},
        {img:'img/shoes/Emme_S_Pink.jpg', title: 'EMME', w:465,h:237},
        {img:'img/shoes/Camile_Navy_3Quarter.jpg', title: 'CAMILLE', w:452,h:423},
        {img:'img/shoes/Noel_Bracken.jpg', title: 'NOEL', w:452,h:350},
        {img:'img/shoes/Roan_L_White.jpg', title: 'ROAN', w:459,h:235},
        {img:'img/shoes/Nat_Navy.jpg', title: 'Nat', w:457,h:233}],
    frame: 0, // текущий кадр для отбражения - индекс картинки из массива
    set: function(obj) { // установка нужного фона слайдеру
        var slide = document.getElementById("sliderFirst__img");
        if(obj.title == "CAMILLE"){
            document.getElementById("sliderFirst").style.marginTop = 0+"px";
            document.getElementById("sliderFirst").style.marginBottom = 200+"px";
            document.getElementById("sliderFirst__left-button").style.top = 253+"px";
            document.getElementById("sliderFirst__right-button").style.top = 253+"px";
        }else{
            document.getElementById("sliderFirst").style.marginTop = 100+"px";
            document.getElementById("sliderFirst").style.marginBottom = 0+"px";
            document.getElementById("sliderFirst__left-button").style.top = 153+"px";
            document.getElementById("sliderFirst__right-button").style.top = 153+"px";
        }
        slide.style.backgroundImage = "url("+obj.img+")";
        slide.style.width = obj.w+"px";
        slide.style.height = obj.h+"px";

    },
    left: function() { // крутим на один кадр влево
        console.log('крутим на один кадр влево');
        this.frame--;
        if(this.frame < 0) this.frame = this.slides.length-1;
        this.set(this.slides[this.frame]);
    },
    right: function() { // крутим на один кадр вправо
        console.log('крутим на один кадр вправо');
        this.frame++;
        if(this.frame == this.slides.length) this.frame = 0;
        this.set(this.slides[this.frame]);
    }
};