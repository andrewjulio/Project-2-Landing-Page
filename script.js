
function createNav() {

    const navItems = ['About', 'Features', 'Pricing', 'Testimonials', 'Download'];

    const ul = document.querySelector('ul')

    for (let navItem of navItems) {
        let li = document.createElement("li");
        if (navItem == 'Download') {
            li.innerHTML += `<a href="#content-${navItem.toLowerCase()}"><button>${navItem}</button></a>`;
            li.id = navItem;
            li.className = "navbar-item box";
            ul.appendChild(li);
        }
        else {
            li.innerHTML += `<a href="#content-${navItem.toLowerCase()}">${navItem}</a>`;
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
