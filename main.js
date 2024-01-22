const elementi = [
    {
    titolo : "Berserk",
    desc : "Picco dell'arco narrativo",
    foto : "./assets/01.jpg"
    },
    {
    titolo : "Fight",
    desc : "Guts dopo la battaglia",
    foto : "./assets/02.jpg"
    },
    {
    titolo : "Femto",
    desc : "Grifis asceso a membro della mano di Dio",
    foto : "./assets/03.jpg"
    },
    {
    titolo : "Cavaliere del Teschio",
    desc : "irruzione durante il sacrificio",
    foto : "./assets/04.jpg"
    },
    {
    titolo : "L'eclissi",
    desc : "Visioni del passato",
    foto : "./assets/05.jpg"
    }
]

const left = document.getElementById("arrowLeft");
const right = document.getElementById("arrowRight");
const railHtml = document.getElementById("railContainer")
const mainContainerHtml = document.getElementById("mainContainer")

let currentImg = 0;
function showImage(index) {
    const imageArray = document.querySelectorAll(".container img");
    imageArray[currentImg].classList.remove("active");
    currentImg = index;
    imageArray[currentImg].classList.add("active");
}

function autoChangeImage() {
    showImage((currentImg + 1) % elementi.length);
}

let autoChangeInterval = setInterval(autoChangeImage, 3000);

for (let i=0; i < elementi.length; i++){
    if( i === 0 ){
        mainContainerHtml.innerHTML += `
        <img class="active" src="${elementi[i].foto}" alt="immagini carosello">
        `
    } else {
        mainContainerHtml.innerHTML += `
        <img src="${elementi[i].foto}" alt="immagini carosello">
        `
    }    
}

for (let j = 0; j < elementi.length; j++){
    railHtml.innerHTML += `
    <div class="item">
    <img src="${elementi[j].foto}" alt="">
    </div>    
    `
}

document.querySelectorAll('.item').forEach((element, index) => {
    element.addEventListener('click', () => {
        clearInterval(autoChangeInterval); 
        showImage(index);
        autoChangeInterval = setInterval(autoChangeImage, 3000);
    });
});


left.addEventListener("click", function(){
    showImage((currentImg - 1 + elementi.length) % elementi.length);
})


right.addEventListener("click", function(){
    showImage((currentImg + 1) % elementi.length);
})




