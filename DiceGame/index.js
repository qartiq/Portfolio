var images = [                  /*   Making array of images                  */
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png"
]

var dice = document.querySelector('#image1');                           /* GETTING the default appearing image on webpage  */

function roll(){   
    dice.classList.add("shake")                                        /*  giving class to img tag in html*/  

    setTimeout(() => {
        dice.classList.remove("shake");                               /* taking away that class from ing tag in html  */

        let diceValue = Math.floor(Math.random()*6);                    /* Generating Random number and converting into integer */

        dice.setAttribute("src",images[diceValue]);                     /*  To change the image based on the random value which we generated */
    },1000);
}

var btn = document.querySelector('[id="diceButton"]');
if(btn){                                                             /* applied if to get rid of the error we were getting */
    btn.addEventListener("click",()=>{
        roll();
    })
}


