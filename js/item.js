"use strict";


// append popular items - Ana
function appendItems() {
    let htmlTemplate = "";
    for (const item of _posts) {
        if (item.categories.includes(3)) {
            console.log(item.title.rendered, item.acf.category, item.acf.image, item.acf.category_image);
            htmlTemplate += /*html*/ `
            <article id="item-container">
                <header class="white-head">
                <i class="fas fa-angle-left back-arrow" onclick="navigateTo('homepage')"></i>
                <h2>${item.title.rendered}</h2>
            </header>
            <div class="item-image-container">
                <img src= "${item.acf.image}" id="item-image" alt=${item.acf.category}>
             </div>
                <h3>Where to throw it</h3>
                <img src= "${item.acf.category_image}" id="item-category-image" alt="waste category">
                <div id="map-button"><button class="yellow-button" onclick="navigateTo('map')">Go to Map</button></div>
                <div class="description-container item-pack">
                    <p>${item.content.rendered}</p>
                </div>
                
            </article>
     `;
        }
        document.querySelector(`#${item.acf.category}-page`).innerHTML += htmlTemplate;
        htmlTemplate = "";
    }
}