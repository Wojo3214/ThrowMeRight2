"use strict";
function appendCategories(categories) {
    let htmlTemplate = "";

    for (let category of _categories) {
        console.log(category);
        htmlTemplate += /*html*/
        `
        <header class="green-head">
            <h2>${category.name}</h2>
        </header>
        <div class="description-container">
            <p>${category.description}</p>
        </div>
        <h3>Items</h3>
        <div class="items-container">
            <div class="item"><p>Item</p><a href="#"><i class="fas fa-angle-right"></i></a></div>
        </div>
        `;
    };
    document.querySelector("#category").innerHTML += htmlTemplate;
};

/*
let _trashCategories = [{
    name: "Glass Plastic Metal",
      description: "Don't trash them! The best option is pass them on reuse or find a good e-waste recycler. E-Stewards are recyclers who meet the highest standards for how they recycle our stuff, including not just shipping  it off to poor countries.",
      items: ["Bottle", "Can", "Jar"]
  }];

class Category {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    };

    template(){
        document.querySelector("#webapp").innerHTML += 
        `
        <section id="category" class="page"></section>
        `;
    }

    appendCategories(categories) {
        let htmlTemplate = "";

        for (const category of categories) {
            htmlTemplate += 
            `
            <header class="green-head">
                <h2>${category.name}</h2>
            </header>
            <div class="description-container">
                <p>${category.description}</p>
            </div>
            <h3>Items</h3>
            <div class="items-container">
                <div class="item"><p>Item</p><a href="#"><i class="fas fa-angle-right"></i></a></div>
            </div>
            `;
        }
        document.querySelector("#category").innerHTML += htmlTemplate;
    };

    appendCategory();

}



let glass = new Category("Glass Plastic Metal", "Don't trash them! The best option is pass them on reuse or find a good e-waste recycler. E-Stewards are recyclers who meet the highest standards for how they recycle our stuff, including not just shipping  it off to poor countries.");
let paper = new Category("Paper", "Don't trash them! The best option is pass them on reuse or find a good e-waste recycler. E-Stewards are recyclers who meet the highest standards for how they recycle our stuff, including not just shipping  it off to poor countries.");


// function appendCategory() {
//     let htmlTemplate = "";

//     for (const category of _trashCategories) {
//         htmlTemplate += `
//         <article>
//           <h1>${category.name}</h1>
//           <p>${category.description}</p>
//           <h2>Items</h2>
//         </article>
//      `;
//     }

//     document.querySelector("").innerHTML = htmlTemplate;
// };
*/