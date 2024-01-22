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

let currentImg = 0;
left.addEventListener("click", function(){
    console.log("click left");
    let imageArray = document.querySelectorAll(".container img");
    console.log(imageArray);
    imageArray[currentImg].classList.remove("active");
    if (currentImg == imageArray.length -1){
        currentImg = 0;
    } else {
        currentImg--;
    }
    imageArray[currentImg].classList.add("active");
})


right.addEventListener("click", function(){
    console.log("click right");
    let imageArray = document.querySelectorAll(".container img");
    console.log(imageArray);
    imageArray[currentImg].classList.remove("active");
    if (currentImg == imageArray.length -1){
        currentImg = 0;
    } else {
        currentImg++;
    }
    imageArray[currentImg].classList.add("active");
})

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


