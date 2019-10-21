
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
        else {
            li.innerHTML += `<a href="#content-${navItem.toLowerCase()}"><p>${navItem}</p></a>`;
            li.id = navItem;
            li.className = "navbar-item box";
            ul.appendChild(li);
        }

    }

}

createNav();


function createSec() {

    const sectionNames = ['About', 'Features', 'Pricing', 'Download', 'Testimonials'];

    const content = document.getElementById('content');

    for (let sectionName of sectionNames) {
        section = document.createElement("section");
        section.className = "content box";
        section.id = `content-${sectionName.toLowerCase()}`;
        content.appendChild(section);
    }

}

createSec();

function createTest() {
    const quoteBox = document.createElement('div');
    const testSection = document.getElementById('content-testimonials');
    quoteBox.id = "quoteBox";
    testSection.appendChild(quoteBox);

    const testimonials = [
        {
            quote: "Best ever app to do whatever you want to do!",
            source: "Head of NewIndustryBuzzword - Fony"
        },
        {
            quote: "Couldn't imagine how our business would function these days if we never had invested in BestApp!",
            source: "Growth Marketing Head - Samesong Electronics"
        },
        {
            quote: "5 Stars all the way! They should create a Michelin Star system just for this app!",
            source: "Tony Handsome - Virgin Pacific"
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
        timer = setInterval(printTest, 3500);
    }

    myTimer();
}

createTest();