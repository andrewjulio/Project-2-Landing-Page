/* Creating the Navigation bar */
function createNav() {

    const navItems = ['About', 'Features', 'Pricing', 'Testimonials', 'Download'];

    const ul = document.querySelector('ul')

    for (let navItem of navItems) {
        let li = document.createElement("li");
        if (navItem == 'Download') {
            li.innerHTML += `<a href="#content-${navItem.toLowerCase()}"><button><p>${navItem}</p></button></a>`;
            li.id = navItem;
            li.className = "navbar-item box";
            ul.appendChild(li);
        }
        else if (navItem == 'About') {
            li.innerHTML += `<a href="#top"><p>${navItem}</p></a>`;
            li.id = navItem;
            li.className = "navbar-item box";
            ul.appendChild(li);
        }
        else {
            li.innerHTML += `<a href="#content-${navItem.toLowerCase()}"><p>${navItem}</p></a>`;
            li.id = navItem;
            li.className = "navbar-item box";
            ul.appendChild(li);
        }

    }

}

createNav();


/* Creating the Content Sections */
function createSec() {

    const sectionNames = ['About', 'App', 'Features', 'Pricing', 'Download', 'Testimonials'];

    const content = document.getElementById('content');

    for (let sectionName of sectionNames) {
        section = document.createElement("section");
        section.className = "content box";
        section.id = `content-${sectionName.toLowerCase()}`;
        content.appendChild(section);
    }

}

createSec();


/* Creating the App Section */
function createApp() {
    const app = document.getElementById('content-app');
    const imgCard = document.createElement('div');
    app.appendChild(imgCard);
    imgCard.className = "phoneCard box";
    imgCard.id = "phoneCard";
}

createApp();



/* Creating the About Section */
function createAbout() {
    const aboutText = document.createElement('div');
    const about = document.getElementById('content-about');
    aboutText.className = "aboutText box";
    aboutText.innerHTML = "<p>CompareStays is the ultimate app for your weekend getaways, business and holiday trips.</br></br>Pay less for more by comparing holiday providers as well as host reviews across sites!</p>"
    about.appendChild(aboutText);
}

createAbout();


/* Creating the Features Section */
function createFeat() {

    const featureCards = [
        {
            feature: "feature1",
            description: "Save money on your accommodation that you can spend on Margaritas instead!"
        },
        {
            feature: "feature2",
            description: "Stay in the best rated places, whether they be hotels, rooms or apartments!"
        },
        {
            feature: "feature3",
            description: "Compare across all Global major sites, such as, Boo-king.com & AirRnR!"
        },
        {
            feature: "feature4",
            description: "Our customer service is online 24/7/365 and there to help you whenever they can!"
        },
        {
            feature: "feature5",
            description: "Make the right choice by reducing Carbon footprint by choosing our Green Filters!"
        },
        {
            feature: "feature6",
            description: "We feature only the best hosts with exceptional ratings and friendliness!"
        }
    ];

    const features = document.getElementById('content-features');

    const featHeading = document.createElement('p');
    featHeading.textContent = "Features";
    featHeading.className = "featTitle";
    features.appendChild(featHeading);

    const featCards = document.createElement('div');
    featCards.className = "featCards";
    features.appendChild(featCards);

    for (let featureCard of featureCards) {
        feature = document.createElement("div");
        feature.className = "card box";
        feature.innerHTML = `<img src="images/${featureCard.feature}.png" alt="picture of ${featureCard.feature}"><p>${featureCard.description}</p>`
        featCards.appendChild(feature);
    }
}

createFeat();


/* Creating the Pricing Section */
function createPricing() {

    const pricingCards = [
        {
            pricing: "Free",
            description: "Free CompareStays offers excellent options.",
            price: "$0"
        },
        {
            pricing: "Deluxe",
            description: "Exclusive offers for those that enjoy the finer things in life.",
            price: "$20pcm"
        },
        {
            pricing: "Luxor",
            description: "Open to LAMEX Platinum and Black Card holders only!",
            price: "$400pcy"
        }
    ];

    const pricing = document.getElementById('content-pricing');

    const priceHeading = document.createElement('p');
    priceHeading.textContent = "Membership";
    priceHeading.className = "priceTitle";
    pricing.appendChild(priceHeading);

    const priceCards = document.createElement('div');
    priceCards.className = "priceCards";
    pricing.appendChild(priceCards);

    for (let pricingCard of pricingCards) {
        price = document.createElement("div");
        price.className = "pricingCard box";
        price.innerHTML = `<img src="images/${pricingCard.pricing}.png" alt="${pricingCard.pricing} Membership"><p class="pricingName">${pricingCard.pricing}</p><p class="membership">${pricingCard.description}</p><p class="prices">${pricingCard.price}</p>`
        priceCards.appendChild(price);
    }
}

createPricing();


/* Creating the Testimony Section */
function createTest() {
    const quoteBox = document.createElement('div');
    const testSection = document.getElementById('content-testimonials');
    quoteBox.id = "quoteBox";
    testSection.appendChild(quoteBox);

    const testimonials = [
        {
            quote: "Best holiday bookings app ever! Found the best bargain for an apartment rated 5 Stars and was more expensive on Boo-king.com than on AirRnR!",
            source: "Head of NewIndustryBuzzword - Fony"
        },
        {
            quote: "These days I couldn't imagine how our business would function, if we never had invested in CompareStays! Not only did we increase passngers on flights but fully book our hotels.",
            source: "Richard Handsome - Virgin Pacific"
        },
        {
            quote: "5 Stars all the way! They should create a Michelin Star system just for this app!",
            source: "Another happy customer - Somewhere over the Rainbow"
        }
    ];

    function getRandomTest() {
        let randomNumber = Math.floor(Math.random()*testimonials.length);
        return(testimonials[randomNumber]);
    }

    function printTest() {
        let test = getRandomTest();
        let htmlString = "";

        htmlString += `<p class='quote'>"${test.quote}"</p><br>`;
        htmlString += `<p class='source'>${test.source}`;
        htmlString += "</p>";

        document.getElementById("quoteBox").innerHTML = htmlString;
    }

    printTest();

    let timer;

    function myTimer() {
        timer = setInterval(printTest, 4500);
    }

    myTimer();
}

createTest();