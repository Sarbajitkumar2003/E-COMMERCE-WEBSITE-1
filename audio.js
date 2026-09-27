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


/* ==========================================
   LUXVORA LAPTOP STORE
========================================== */


/* ================= PRODUCT DATA ================= */

const products = [

    {
        id: "BOAT-HEADPHONES",

        name: "BOAT Headphones",

        brand: "BOAT",

        price: 129999,

        oldPrice: 139999,

        rating: 4.9,

        image: ["https://m.media-amazon.com/images/I/61-XNG5lPBL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71CxStVfn+L._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/81LAnho9rRL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71FBURyvT-L._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71F19MU236L._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71M93nZCwEL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/61CifXC74pL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71jxqNqBYKL._SL1500_.jpg",
        ]

    },


    {
        id: "BOSE-QUIETCOMFORT",

        name: "Bose QuietComfort",

        brand: "BOSE",

        price: 119999,

        oldPrice: 129999,

        rating: 4.8,

        image: ["images/audio/bose-quietcomfort.jpg"]
    },


    {
        id: "JBL-TOURONE",

        name: "JBL Tour One",

        brand: "JBL",

        price: 69999,

        oldPrice: 74999,

        rating: 4.7,

        image: "images/audio/jbl-tourone.jpg"
    },


    {
        id: "Realme-Buds-Air-3",

        name: "Realme Buds Air 3",

        brand: "Realme",

        price: 79999,

        oldPrice: 84999,

        rating: 4.6,

        image: "images/audio/realme-buds-air-3.jpg"
    },


    {
        id: "Audio-Technica-ATH-M50X",

        name: "Audio-Technica ATH-M50X",

        brand: "Audio-Technica",

        price: 69999,

        oldPrice: 75999,

        rating: 4.5,

        image: "images/audio/audio-technica-ath-m50x.jpg"
    },


    {
        id: "BOAT-HEADPHONES",

        name: "BOAT Headphones",

        brand: "BOAT",

        price: 69999,

        oldPrice: 79999,

        rating: 4.8,

        image: "https://m.media-amazon.com/images/I/61-XNG5lPBL._SL1500_.jpg"
    }

];


/* ================= ELEMENTS ================= */

const grid =
    document.getElementById("productGrid");

const searchInput =
    document.getElementById("searchInput");

const priceRange =
    document.getElementById("priceRange");

const priceText =
    document.getElementById("priceText");

const sortSelect =
    document.getElementById("sortSelect");

const resultText =
    document.getElementById("resultText");

const emptyBox =
    document.getElementById("emptyBox");

const clearBtn =
    document.getElementById("clearBtn");


const brandFilters =
    document.querySelectorAll(
        ".brandFilter"
    );

const ratingFilters =
    document.querySelectorAll(
        'input[name="rating"]'
    );


/* ================= PRICE FORMAT ================= */

function formatPrice(value) {

    return "₹" +
        Number(value).toLocaleString(
            "en-IN"
        );

}


/* ================= RENDER ================= */

function renderProducts(list) {

    grid.innerHTML = "";


    resultText.textContent =
        `Showing ${list.length} product${list.length !== 1 ? "s" : ""}`;


    if (list.length === 0) {

        emptyBox.style.display =
            "block";

        return;

    }


    emptyBox.style.display =
        "none";


    list.forEach((product, index) => {

        const discount =
            Math.round(
                (
                    (product.oldPrice -
                    product.price)
                    /
                    product.oldPrice
                ) * 100
            );


        const card =
            document.createElement("article");


        card.className =
            "product-card";


        card.style.animationDelay =
            `${index * 70}ms`;


        card.innerHTML = `

            <div class="product-image">

                <span class="badge">
                    ${discount}% OFF
                </span>


                <button
                    class="wishlist"
                    aria-label="Add to wishlist">

                    <i class="fa-regular fa-heart"></i>

                </button>


                <img
                    src="${product.image}"
                    alt="${product.name}">

            </div>


            <div class="product-info">

                <div class="brand">
                    ${product.brand}
                </div>


                <h3>
                    ${product.name}
                </h3>


                <div class="rating">

                    ${"★".repeat(
                        Math.round(product.rating)
                    )}

                    <span>
                        ${product.rating}
                    </span>

                </div>


                <div class="price">

                    <span class="current-price">
                        ${formatPrice(product.price)}
                    </span>

                    <span class="old-price">
                        ${formatPrice(product.oldPrice)}
                    </span>

                </div>


                <button class="view-button">
                    View Details
                </button>

            </div>
        `;


        /*
            IMPORTANT:
            Wishlist button click should NOT
            open product details.
        */

        const wishlist =
            card.querySelector(
                ".wishlist"
            );


        wishlist.addEventListener(
            "click",
            function(event) {

                event.stopPropagation();

                const icon =
                    this.querySelector("i");

                icon.classList.toggle(
                    "fa-regular"
                );

                icon.classList.toggle(
                    "fa-solid"
                );

                icon.style.color =
                    "#00bfdc";

            }
        );


        /*
            PRODUCT CARD CLICK
            ONLY THAT PRODUCT OPENS
        */

        card.addEventListener(
            "click",
            function() {

                openProductDetails(
                    product.id
                );

            }
        );


        /*
            View Details button
        */

        card.querySelector(
            ".view-button"
        ).addEventListener(
            "click",
            function(event) {

                event.stopPropagation();

                openProductDetails(
                    product.id
                );

            }
        );


        grid.appendChild(card);

    });

}


/* ================= OPEN DETAILS ================= */

function openProductDetails(id) {

    /*
        localStorage stores ONLY selected
        product ID.
    */

    localStorage.setItem(
        "selectedMobile",
        id
    );


    /*
        Dedicated product details page
    */

    window.location.href =
        "mobile-details.html";

}


/* ================= FILTER ================= */

function applyFilters() {

    const search =
        searchInput.value
            .trim()
            .toLowerCase();


    const selectedBrands =
        [...brandFilters]
            .filter(input =>
                input.checked
            )
            .map(input =>
                input.value.toLowerCase()
            );


    const ratingInput =
        [...ratingFilters]
            .find(input =>
                input.checked
            );


    const minimumRating =
        ratingInput
            ? Number(
                ratingInput.value
              )
            : 0;


    const maximumPrice =
        Number(
            priceRange.value
        );


    let filtered =
        products.filter(product => {

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(search)
                ||
                product.brand
                    .toLowerCase()
                    .includes(search);


            const matchesBrand =
                selectedBrands.length === 0
                ||
                selectedBrands.includes(
                    product.brand.toLowerCase()
                );


            const matchesPrice =
                product.price <=
                maximumPrice;


            const matchesRating =
                product.rating >=
                minimumRating;


            return (
                matchesSearch &&
                matchesBrand &&
                matchesPrice &&
                matchesRating
            );

        });


    /* ================= SORT ================= */

    if (
        sortSelect.value ===
        "low"
    ) {

        filtered.sort(
            (a,b) =>
                a.price - b.price
        );

    }


    if (
        sortSelect.value ===
        "high"
    ) {

        filtered.sort(
            (a,b) =>
                b.price - a.price
        );

    }


    if (
        sortSelect.value ===
        "rating"
    ) {

        filtered.sort(
            (a,b) =>
                b.rating - a.rating
        );

    }


    renderProducts(filtered);

}


/* ================= SEARCH ================= */

searchInput.addEventListener(
    "input",
    applyFilters
);


/* ================= BRAND ================= */

brandFilters.forEach(
    checkbox => {

        checkbox.addEventListener(
            "change",
            applyFilters
        );

    }
);


/* ================= RATING ================= */

ratingFilters.forEach(
    radio => {

        radio.addEventListener(
            "change",
            applyFilters
        );

    }
);


/* ================= PRICE ================= */

priceRange.addEventListener(
    "input",
    function() {

        priceText.textContent =
            formatPrice(
                this.value
            );

        applyFilters();

    }
);


/* ================= SORT ================= */

sortSelect.addEventListener(
    "change",
    applyFilters
);


/* ================= CLEAR ================= */

clearBtn.addEventListener(
    "click",
    function() {

        searchInput.value = "";


        brandFilters.forEach(
            checkbox => {

                checkbox.checked =
                    false;

            }
        );


        ratingFilters.forEach(
            radio => {

                radio.checked =
                    false;

            }
        );


        priceRange.value =
            150000;


        priceText.textContent =
            "₹1,50,000";


        sortSelect.value =
            "default";


        applyFilters();

    }
);


/* ================= INITIAL ================= */

renderProducts(products);