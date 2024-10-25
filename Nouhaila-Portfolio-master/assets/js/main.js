const navMenu = document.getElementById('sideber'); // Correction ID
const navToggle = document.getElementById('nav-toggle'); 
const navClose = document.getElementById('nav-close');

if(navMenu) {
    console.log("Sidebar found:", navMenu);
} else {
    console.error("Sidebar element not found");

}

if(navToggle){
    console.log("navToggle button found");
    navToggle.addEventListener("click", () => {
        console.log("Toggle button clicked");
        navMenu.classList.add('show-sideber');
    });
} else {
    console.error("navToggle button not found");

}
if(navClose){
    console.log("navClose button found");
    navClose.addEventListener("click", () => {
        console.log("Close button clicked");
        navMenu.classList.remove('show-sideber');
    });
} else {
    console.error("navClose button not found");
}

/*download cv*/
document.getElementById("downloadBtn").addEventListener("click", function() {
    alert("Le CV a été téléchargé.");
});
/* mail botton */ 
document.getElementById("gmailButton").addEventListener("click", function() {
    const email = "nouhailaahran@gmail.com";
    const subject = "Sujet de l'email";
    const body = "Rédigez votre message";

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile 
        ? `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` 
        : `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(url, '_blank');
});




/*Work Popup */
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work__button")) {
       
        togglePortfolioPopup(); 
        portfolioItemDetails(e.target.parentElement);
    }
});

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup);
function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML
}
/*Scroll section*/

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link");
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link");
        }
    });
}



