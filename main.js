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

left.addEventListener("click", function(){
    console.log("click left");
})
right.addEventListener("click", function(){
    console.log("click right");
})


for (let i=0; i<elementi.length; i++){
    railHtml.innerHTML += `
    <div class="item">
    <img src="${elementi[i].foto}" alt="">
    </div>
    `
}