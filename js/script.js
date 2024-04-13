const click = document.querySelector('.burder__logo_block');
const ol = document.querySelector('.burger__block2');
const burger = document.querySelector('.burger__container');
const li1 = document.querySelectorAll('.header__li1');
click.addEventListener('click',()=>{
    if(ol.style.display == "flex"){
        ol.style.display = "none"
        document.querySelector('.container').style.height = "auto"
        document.querySelector('.header').style.height = 70+'vh'
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
        document.querySelector('.header').style.height = 'auto';
        document.querySelector('.container').style.height = 'auto';
        console.log("hello");
        ol.style.display = "none"
        burger.style.background = "rgb(0,0,0,0.0001)"
        document.querySelector('.burger__1').style.opacity = 1
        document.querySelector('.burger__2').style.opacity = 1
    });
});

const clickCircle = document.querySelectorAll('.clickCircle');

clickCircle.forEach((item) => {
    item.addEventListener('click', () => {
        const currentStatus = item.getAttribute('data-status');
        if (currentStatus === "empty") {
            item.src = '/img/sircleXl.png';
            item.setAttribute('data-status', 'filled');
        } else {
            item.src = "/img/sircleEmptyXl.png";
            item.setAttribute('data-status', 'empty');
        }
    });
});




const buttonBaby = document.querySelector('.baby__button');
const buttonTeen = document.querySelector('.tenn__button');

function toggleButton(activeButton, inactiveButton) {
    activeButton.style.background = 'black';
    activeButton.style.color = 'white';
    inactiveButton.style.background = 'white';
    inactiveButton.style.color = 'black';
}

buttonBaby.addEventListener('click', () => {
    toggleButton(buttonBaby, buttonTeen);
});

buttonTeen.addEventListener('click', () => {
    toggleButton(buttonTeen, buttonBaby);
});

// Встановлення початкових стилів
toggleButton(buttonTeen, buttonBaby);

////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


var textToCopy_1 = document.getElementById('textToCopy_1').innerText;
var textToCopy_2 = document.getElementById('textToCopy_2').innerText;
var copyButton_1 = document.getElementById('buttonCopy_1');
var copyButton_2 = document.getElementById('buttonCopy_2');

function CopyText(text, button){
     var textarea = document.createElement('textarea');
     textarea.value = text;
     document.body.appendChild(textarea);
     textarea.select();
     document.execCommand('copy');
     document.body.removeChild(textarea);
     button.innerText = 'Скопійовано!';
}
copyButton_1.addEventListener('click', () =>{
    CopyText(textToCopy_1,copyButton_1)
})
copyButton_2.addEventListener('click', () =>{
    CopyText(textToCopy_2,copyButton_2)
})
