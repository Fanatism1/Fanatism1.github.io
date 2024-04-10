const click = document.querySelector('.burder__logo_block');
const ol = document.querySelector('.burger__block2');
const burger = document.querySelector('.burger__container');
const li1 = document.querySelectorAll('.header__li1');
click.addEventListener('click',()=>{
    if(ol.style.display == "flex"){
        ol.style.display = "none"
        document.querySelector('.container').style.height = "auto"
        document.querySelector('.header').style.height = 60 +'vh'
        burger.style.background = "rgb(0,0,0,0.0001)"
        document.querySelector('.burger__1').style.opacity = 1
        document.querySelector('.burger__2').style.opacity = 1
    }else{
        ol.style.display = 'flex'
        document.querySelector('.container').style.height = 100 +'vh'
        document.querySelector('.header').style.height = 100 +'vh'
        burger.style.background = "rgb(0,0,0,0.5)"
        document.querySelector('.burger__1').style.opacity = 0
        document.querySelector('.burger__2').style.opacity = 0
    }
})
li1.forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector('.header').style.height = 60+'vh';
        document.querySelector('.container').style.height = 'auto';
        console.log("hello");
        ol.style.display = "none"
        burger.style.background = "rgb(0,0,0,0.0001)"
        document.querySelector('.burger__1').style.opacity = 1
        document.querySelector('.burger__2').style.opacity = 1
    });
});





// buttonBaby.addEventListener('click' , () => {
//     buttonBaby.style.background = 'black';
//     buttonTeen.style.background = 'white';
//     buttonBaby.style.color = 'white';
//     buttonTeen.style.color = 'black';
// });
// buttonTeen.style.background = 'black';
// buttonTeen.style.color = 'white';
// buttonBaby.style.background = 'white';
// buttonBaby.style.color = 'black';

// const parent =  document.querySelectorAll('.block3__slide_subtext2');
// const circles = parent.querySelectorAll('.clickCircle');
// const res = document.querySelectorAll('.clickCircle');
// circles.forEach(circles => {
//     res.addEventListener('click', () => {
//         if(res.src !=="/img/sircleEmptyXl.png"){
//             res.src = "/img/sircleXl.png";
//         }else{
//             res.src =="/img/sircleEmptyXl.png"
//         }
//     });
// });


