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

/* ==========================================
   LUXVORA MOBILE PRODUCT DETAILS
========================================== */


/* ==========================================
   PRODUCT DATABASE
========================================== */

const products = {

    iphone17: {

        name: "iPhone 17 Pro",

        brand: "Apple",

        rating: "4.9 ★",

        reviews: "2,845 Ratings & Reviews",

        price: 129999,

        mrp: 149999,

        discount: "13% OFF",

        images: [

            "images/mobile/iphone17-1.jpg",
            "images/mobile/iphone17-2.jpg",
            "images/mobile/iphone17-3.jpg",
            "images/mobile/iphone17-4.jpg"

        ],

        colors: [
            "Cosmic Orange",
            "Silver",
            "Deep Blue"
        ],

        storage: [
            "128 GB",
            "256 GB",
            "512 GB"
        ],

        features: [

            "A-Series powerful processor",
            "Pro camera system",
            "Super Retina display",
            "All-day battery",
            "5G connectivity",
            "Face ID"

        ],

        specifications: {

            "General": {

                "Brand": "Apple",

                "Model": "iPhone 17 Pro",

                "Operating System": "iOS",

                "Launch Year": "2026"

            },

            "Display": {

                "Display Type": "Super Retina XDR",

                "Screen Size": "6.3 inches",

                "Resolution": "2622 × 1206 pixels",

                "Refresh Rate": "120 Hz"

            },

            "Performance": {

                "Processor": "Apple A-Series",

                "RAM": "8 GB",

                "GPU": "Apple GPU"

            },

            "Camera": {

                "Rear Camera": "Triple Camera",

                "Front Camera": "12 MP",

                "Video": "4K Video Recording"

            },

            "Battery": {

                "Capacity": "All-day battery",

                "Charging": "Fast Charging",

                "Wireless Charging": "Supported"

            },

            "Connectivity": {

                "5G": "Yes",

                "Wi-Fi": "Wi-Fi 7",

                "Bluetooth": "Bluetooth 6"

            }

        }

    },


    samsungS26: {

        name: "Samsung Galaxy S26 Ultra",

        brand: "Samsung",

        rating: "4.8 ★",

        reviews: "1,920 Ratings & Reviews",

        price: 119999,

        mrp: 139999,

        discount: "14% OFF",

        images: [

            "images/mobile/samsung-s26-1.jpg",
            "images/mobile/samsung-s26-2.jpg",
            "images/mobile/samsung-s26-3.jpg"

        ],

        colors: [

            "Titanium Black",
            "Titanium Silver",
            "Titanium Blue"

        ],

        storage: [

            "256 GB",
            "512 GB",
            "1 TB"

        ],

        features: [

            "Ultra performance processor",
            "Advanced camera system",
            "Dynamic AMOLED display",
            "Large battery",
            "5G connectivity",
            "S-Pen support"

        ],

        specifications: {

            "General": {

                "Brand": "Samsung",

                "Model": "Galaxy S26 Ultra",

                "Operating System": "Android",

                "Launch Year": "2026"

            },

            "Display": {

                "Display Type": "Dynamic AMOLED",

                "Screen Size": "6.9 inches",

                "Resolution": "QHD+",

                "Refresh Rate": "120 Hz"

            },

            "Performance": {

                "Processor": "Snapdragon",

                "RAM": "12 GB",

                "GPU": "Adreno"

            },

            "Camera": {

                "Rear Camera": "Quad Camera",

                "Front Camera": "12 MP",

                "Video": "8K Video Recording"

            },

            "Battery": {

                "Capacity": "5000 mAh",

                "Charging": "Fast Charging",

                "Wireless Charging": "Supported"

            }

        }

    }

};


/* ==========================================
   GET SELECTED PRODUCT
========================================== */

let selectedProduct =
    localStorage.getItem("selectedMobile");


if (!selectedProduct) {

    selectedProduct = "iphone17";

}


/* ==========================================
   GET PRODUCT
========================================== */

const product =
    products[selectedProduct] || products.iphone17;


/* ==========================================
   ELEMENTS
========================================== */

const mainImage =
    document.getElementById("mainProductImage");

const thumbnailContainer =
    document.getElementById("thumbnailContainer");

const colorOptions =
    document.getElementById("colorOptions");

const storageOptions =
    document.getElementById("storageOptions");

const featureGrid =
    document.getElementById("featureGrid");

const specifications =
    document.getElementById("specifications");


/* ==========================================
   BASIC INFORMATION
========================================== */

document.title =
    `${product.name} | LUXVORA`;

document.getElementById("productName")
    .textContent = product.name;

document.getElementById("productBrand")
    .textContent = product.brand;

document.getElementById("productRating")
    .textContent = product.rating;

document.getElementById("productPrice")
    .textContent =
        "₹" + product.price.toLocaleString("en-IN");

document.getElementById("productMrp")
    .textContent =
        "₹" + product.mrp.toLocaleString("en-IN");

document.getElementById("discountText")
    .textContent = product.discount;


/* ==========================================
   MAIN IMAGE
========================================== */

mainImage.src = product.images[6] || product.images[6];
images: [
        "https://m.media-amazon.com/images/I/31xdwGWyB6L._SX342_SY445_QL70_FMwebp_.jpg",
        "images/mobile/iphone17-2.jpg",
        "images/mobile/iphone17-3.jpg",
        "images/mobile/iphone17-4.jpg"
    ]


/* ==========================================
   CREATE THUMBNAILS
========================================== */

product.images.forEach((image, index) => {

    const thumbnail =
        document.createElement("button");

    thumbnail.className =
        "thumbnail";

    if (index === 0) {

        thumbnail.classList.add("active");

    }

    thumbnail.innerHTML = `
        <img src="${image}"
             alt="${product.name}">
    `;

    thumbnail.addEventListener("click", () => {

        mainImage.src = image;

        document
            .querySelectorAll(".thumbnail")
            .forEach(item =>
                item.classList.remove("active")
            );

        thumbnail.classList.add("active");

    });

    thumbnailContainer.appendChild(thumbnail);

});


/* ==========================================
   COLORS
========================================== */

product.colors.forEach((color, index) => {

    const button =
        document.createElement("button");

    button.className = "color-option";

    button.textContent = color;

    if (index === 0) {

        button.classList.add("selected");

    }

    button.addEventListener("click", () => {

        document
            .querySelectorAll(".color-option")
            .forEach(item =>
                item.classList.remove("selected")
            );

        button.classList.add("selected");

    });

    colorOptions.appendChild(button);

});


/* ==========================================
   STORAGE
========================================== */

product.storage.forEach((storage, index) => {

    const button =
        document.createElement("button");

    button.className = "storage-option";

    button.textContent = storage;

    if (index === 0) {

        button.classList.add("selected");

    }

    button.addEventListener("click", () => {

        document
            .querySelectorAll(".storage-option")
            .forEach(item =>
                item.classList.remove("selected")
            );

        button.classList.add("selected");

    });

    storageOptions.appendChild(button);

});


/* ==========================================
   FEATURES
========================================== */

product.features.forEach(feature => {

    const item =
        document.createElement("div");

    item.className =
        "feature-card";

    item.innerHTML = `

        <i class="fa-solid fa-circle-check"></i>

        <span>${feature}</span>

    `;

    featureGrid.appendChild(item);

});


/* ==========================================
   SPECIFICATIONS
========================================== */

for (const category in product.specifications) {

    const categoryBox =
        document.createElement("div");

    categoryBox.className =
        "spec-category";

    let rows = "";

    for (
        const key
        in product.specifications[category]
    ) {

        rows += `

            <div class="spec-row">

                <span class="spec-name">
                    ${key}
                </span>

                <span class="spec-value">
                    ${product.specifications[category][key]}
                </span>

            </div>

        `;

    }

    categoryBox.innerHTML = `

        <h3>${category}</h3>

        ${rows}

    `;

    specifications.appendChild(categoryBox);

}


/* ==========================================
   IMAGE ZOOM
========================================== */

function zoomImage() {

    const modal =
        document.getElementById("zoomModal");

    const zoomedImage =
        document.getElementById("zoomedImage");

    zoomedImage.src =
        mainImage.src;

    modal.classList.add("active");

}


function closeZoom() {

    document
        .getElementById("zoomModal")
        .classList.remove("active");

}


/* ==========================================
   DELIVERY
========================================== */

function checkDelivery() {

    const pin =
        document.getElementById("pinCode").value;

    const message =
        document.getElementById("deliveryMessage");


    if (!/^[0-9]{6}$/.test(pin)) {

        message.textContent =
            "Please enter a valid 6-digit PIN code.";

        message.className = "error";

        return;

    }


    message.textContent =
        "✓ Delivery available to this PIN code.";

    message.className = "success";

}


/* ==========================================
   WISHLIST
========================================== */

function addWishlist() {

    let wishlist =
        JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];

    if (!wishlist.includes(selectedProduct)) {

        wishlist.push(selectedProduct);

        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );

        alert("Added to Wishlist ❤️");

    } else {

        alert("Already in Wishlist ❤️");

    }

}


/* ==========================================
   ADD TO CART
========================================== */

function addCart() {

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];


    cart.push({

        id: selectedProduct,

        name: product.name,

        price: product.price,

        image: product.images[0]

    });


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    alert("Added to Cart 🛒");

}


/* ==========================================
   BUY NOW
========================================== */

function buyNow() {

    addCart();

    window.location.href =
        "cart.html";

}


/* ==========================================
   BACK
========================================== */

function goBack() {

    window.location.href =
        "mobiles.html";

}


/* ==========================================
   ESCAPE KEY
========================================== */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeZoom();

        }

    }
);

