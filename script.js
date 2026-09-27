const moreBtn = document.getElementById("moreBtn");
const moreMenu = document.getElementById("moreMenu");

moreBtn.addEventListener("click", function(event){

    event.stopPropagation();

    moreMenu.classList.toggle("active");

});


/* CLOSE DROPDOWN */

document.addEventListener("click", function(event){

    if(!moreMenu.contains(event.target)){
        moreMenu.classList.remove("active");
    }

});


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function(){

    navLinks.classList.toggle("active");

});


/* CLOSE MOBILE MENU WHEN LINK CLICKED */

document.querySelectorAll(".nav-links > a").forEach(link => {

    link.addEventListener("click", function(){

        navLinks.classList.remove("active");

    });

});

// ----------------------------

// your login page

/* ================= FORM SWITCH ================= */

function showForm(formName,button){

    document.querySelectorAll(".form")
    .forEach(form=>{
        form.classList.remove("active");
    });

    document.querySelectorAll(".tab")
    .forEach(tab=>{
        tab.classList.remove("active");
    });

    document.getElementById(formName)
    .classList.add("active");

    button.classList.add("active");

}


/* ================= PASSWORD ================= */

function togglePassword(inputId,icon){

    const input=document.getElementById(inputId);

    if(input.type==="password"){

        input.type="text";

        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");

    }else{

        input.type="password";

        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");

    }

}

/*========== CLOSE BUTTON ===============*/

document.addEventListener("DOMContentLoaded", function () {

    const closeAuth = document.getElementById("closeAuth");

    if (closeAuth) {

        closeAuth.addEventListener("click", function () {

            window.location.href = "index.html";

        });

    }

});



/* ================= REGISTER ================= */

function registerUser(event){

    event.preventDefault();

    const password=
    document.getElementById("registerPassword").value;

    const confirmPassword=
    document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){

        alert("Passwords do not match!");

        return;

    }

    alert(
        "Registration successful! Welcome to LUXVORA."
    );

}


/* ================= LOGIN ================= */

function loginUser(event){

    event.preventDefault();

    alert(
        "Login system is ready to connect with your backend."
    );

}

// ==========================================
// LUXVORA - ANIMATED SEARCH SYSTEM
// ==========================================

const searchBox = document.querySelector(".search-box");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");


// ==========================================
// OPEN / CLOSE SEARCH BAR
// ==========================================

searchBtn.addEventListener("click", function(event) {

    event.stopPropagation();

    searchBox.classList.toggle("active");

    if (searchBox.classList.contains("active")) {

        setTimeout(function() {
            searchInput.focus();
        }, 300);

    } else {

        searchInput.value = "";

    }

});


// ==========================================
// CLOSE SEARCH WHEN CLICK OUTSIDE
// ==========================================

document.addEventListener("click", function(event) {

    if (!searchBox.contains(event.target)) {

        searchBox.classList.remove("active");

    }

});


// ==========================================
// SEARCH WITH ENTER KEY
// ==========================================

searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        const searchValue = searchInput.value.trim();

        if (searchValue !== "") {

            console.log("Searching for:", searchValue);

            alert(
                "LUXVORA Search: " + searchValue
            );

        }

    }

});


// ==========================================
// ESC KEY CLOSE SEARCH
// ==========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        searchBox.classList.remove("active");

        searchInput.value = "";

    }

});


// ==========================================
// SEARCH INPUT ANIMATION
// ==========================================

searchInput.addEventListener("input", function() {

    const value = searchInput.value.trim();

    if (value.length > 0) {

        searchBox.classList.add("typing");

    } else {

        searchBox.classList.remove("typing");

    }

});
/* ========================================= SCROLL REVEAL ANIMATION ========================================= */ 
const revealElements = document.querySelectorAll(".reveal"); const revealObserver = new IntersectionObserver( function(entries){ entries.forEach(function(entry){ if(entry.isIntersecting){ entry.target.classList.add("show"); revealObserver.unobserve( entry.target ); } }); }, { threshold:0.12 } ); revealElements.forEach(function(element){ revealObserver.observe(element); }); 
/* ========================================= FLASH SALE COUNTDOWN ========================================= */ 
let totalSeconds = 12 * 60 * 60 + 30 * 60 + 45; function updateCountdown(){ if(totalSeconds <= 0){ totalSeconds = 12 * 60 * 60; } let hours = Math.floor( totalSeconds / 3600 ); let minutes = Math.floor( (totalSeconds % 3600) / 60 ); let seconds = totalSeconds % 60; document.getElementById("hours") .textContent = String(hours).padStart(2,"0"); document.getElementById("minutes") .textContent = String(minutes).padStart(2,"0"); document.getElementById("seconds") .textContent = String(seconds).padStart(2,"0"); totalSeconds--; } updateCountdown(); setInterval( updateCountdown, 1000 ); 
/* ========================================= PRODUCT BUTTON ANIMATION ========================================= */ 
const productButtons = document.querySelectorAll(".product-btn"); productButtons.forEach(function(button){ button.addEventListener( "click", function(){ const originalText = button.innerHTML; button.innerHTML = '<i class="fa-solid fa-check"></i> Added'; button.style.background = "#00c8da"; button.style.color = "#ffffff"; setTimeout(function(){ button.innerHTML = originalText; button.style.background = ""; button.style.color = ""; },1500); } ); }); 
/* ========================================= MOUSE PARALLAX FOR HERO GADGET ========================================= */ 
const gadgetArea = document.querySelector(".gadget-area"); const phone = document.querySelector(".phone"); document.addEventListener( "mousemove", function(event){ if(window.innerWidth < 800){ return; } const x = (window.innerWidth / 2 - event.clientX) / 80; const y = (window.innerHeight / 2 - event.clientY) / 80; phone.style.marginLeft = x + "px"; phone.style.marginTop = y + "px"; } );