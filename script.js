/*========================================================
                HAPPY BIRTHDAY ZAHRA ❤️
                    SCRIPT.JS
                    PART 1
========================================================*/


/*=========================
      GET ALL ELEMENTS
=========================*/

const loadingScreen = document.getElementById("loadingScreen");

const giftSection = document.getElementById("giftSection");
const welcomeSection = document.getElementById("welcomeSection");
const bouquetSection = document.getElementById("bouquetSection");
const letterSection = document.getElementById("letterSection");
const illustrationSection = document.getElementById("illustrationSection");
const endingSection = document.getElementById("endingSection");

const closedGift = document.getElementById("closedGift");
const openedGift = document.getElementById("openedGift");

const lightFlash = document.getElementById("lightFlash");

const continueBtn = document.getElementById("continueBtn");

const music = document.getElementById("birthdaySong");

const illustrationImage = document.querySelector(".illustrationImage");
const thankYou = document.querySelector(".thankYou");



/*=========================
      START WEBSITE
=========================*/

window.addEventListener("load", () => {

    giftSection.style.display = "none";

    setTimeout(() => {

        loadingScreen.style.opacity = "0";

        setTimeout(() => {

            loadingScreen.style.display = "none";

            giftSection.style.display = "flex";

        },1000);

    },2500);

});



/*=========================
      OPEN THE GIFT
=========================*/

closedGift.addEventListener("click", () => {

    closedGift.classList.add("giftBounce");

    setTimeout(() => {

        closedGift.classList.add("hide");

        openedGift.classList.add("show");

        lightFlash.classList.add("show");

        music.play().catch(()=>{});

    },500);



    setTimeout(() => {

        lightFlash.classList.remove("show");

    },900);



    setTimeout(() => {

        giftSection.style.display = "none";

        welcomeSection.style.display = "flex";

        welcomeSection.classList.add("fadeIn");

    },1500);



    setTimeout(() => {

        continueBtn.classList.add("show");

    },2800);

});/*========================================================
                    SCRIPT.JS
                    PART 2
========================================================*/


/*=========================
      NEXT SECTION LOGIC
=========================*/

continueBtn.addEventListener("click", () => {

    welcomeSection.style.display = "none";

    bouquetSection.style.display = "flex";

    bouquetSection.classList.add("fadeIn");

});


/*=========================
      CONTINUE BUTTONS
=========================*/

const nextButtons = document.querySelectorAll(".nextBtn");

nextButtons.forEach(button => {

    button.addEventListener("click", () => {

        const currentSection = button.closest("section");

        const nextSection = document.getElementById(
            button.dataset.next
        );

        currentSection.style.display = "none";

        nextSection.style.display = "flex";

        nextSection.classList.add("fadeIn");


        /*=========================
            ILLUSTRATION EFFECT
        =========================*/

        if(nextSection.id === "illustrationSection"){

            setTimeout(() => {

                illustrationImage.classList.add("show");

            },600);

        }


        /*=========================
             FINAL THANK YOU
        =========================*/

        if(nextSection.id === "endingSection"){

            setTimeout(() => {

                thankYou.classList.add("show");

            },2500);

        }

    });

});/*========================================================
                    SCRIPT.JS
                    PART 3
========================================================*/


/*=========================
      FLOATING PETALS
=========================*/

const petalsContainer = document.getElementById("petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration =
        (8 + Math.random() * 6) + "s";

    petal.style.opacity =
        0.5 + Math.random() * 0.5;

    petal.style.transform =
        `rotate(${Math.random()*360}deg)`;

    petalsContainer.appendChild(petal);

    petal.addEventListener("animationend", () => {

        petal.remove();

    });

}


/*=========================
      START PETALS
=========================*/

setInterval(() => {

    createPetal();

},1200);



/*=========================
        SPARKLES
=========================*/

const sparkleContainer = document.getElementById("sparkles");

function createSparkle(){

    const sparkle = document.createElement("div");

    sparkle.classList.add("sparkle");

    sparkle.style.left =
        Math.random()*100 + "vw";

    sparkle.style.top =
        Math.random()*100 + "vh";

    sparkleContainer.appendChild(sparkle);

    sparkle.addEventListener("animationend",()=>{

        sparkle.remove();

    });

}


/*=========================
      START SPARKLES
=========================*/

function startSparkles(){

    for(let i = 0; i < 3; i++){

        createSparkle();

    }

}

startSparkles();

setInterval(startSparkles, 1200);



/*=========================
    PAGE VISIBILITY
=========================*/

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        music.pause();

    }
    else{

        music.play().catch(()=>{});

    }

});/*========================================================
                    SCRIPT.JS
                    PART 4
========================================================*/


/*=========================
      PREVENT DOUBLE CLICK
=========================*/

let giftOpened = false;

closedGift.addEventListener("click", () => {

    if(giftOpened) return;

    giftOpened = true;

});



/*=========================
      SMOOTH SCROLL
=========================*/

function scrollToTop(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}



/*=========================
      RESET SCROLL
=========================*/

nextButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        setTimeout(scrollToTop,100);

    });

});



continueBtn.addEventListener("click",()=>{

    setTimeout(scrollToTop,100);

});



/*=========================
      ENDING EFFECT
=========================*/

const endingContent = document.querySelector(".endingContent");

if(endingContent){

    endingContent.style.opacity = "0";

    endingContent.style.transform = "translateY(40px)";

}



const endingObserver = new MutationObserver(()=>{

    if(endingSection.style.display === "flex"){

        setTimeout(()=>{

            endingContent.style.transition = "1.5s";

            endingContent.style.opacity = "1";

            endingContent.style.transform = "translateY(0)";

        },300);

    }

});



endingObserver.observe(endingSection,{

    attributes:true,

    attributeFilter:["style"]

});



/*=========================
      CONSOLE MESSAGE
=========================*/

console.log(`
🌹 Happy Birthday Website

Made with ❤️ by Rehan

For Zahra

May this little journey always bring a smile.
`);/*=========================
        EASTER EGG
=========================*/

const secretTrigger = document.getElementById("secretTrigger");
const secretPopup = document.getElementById("secretPopup");
const closeSecret = document.getElementById("closeSecret");

nextButtons.forEach(button => {

    button.addEventListener("click", () => {

        const nextSection = document.getElementById(button.dataset.next);

        if(nextSection && nextSection.id === "endingSection"){

            setTimeout(() => {

                secretTrigger.style.display = "block";

                setTimeout(() => {

                    secretTrigger.classList.add("show");

                },50);

            },5000);

        }

    });

});

secretTrigger.addEventListener("click", () => {

    secretPopup.classList.add("show");

});

closeSecret.addEventListener("click", () => {

    secretPopup.classList.remove("show");

});