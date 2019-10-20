
let navItems = [];


navItems = ['About', 'Features', 'Pricing', 'Testimonials', 'Download Now'];


function createNav() {

    const navList = document.createElement('ul')

    navList.className="navbar";

    const header = document.querySelector('header');

    for (let navItem of navItems) {
        let li = navItems(navItem);
        let listItem = document.createElement("li");
        let listValue = document.createTextNode(li);
        listItem.appendChild(listValue);
        myList.appendChild(listItem);
    }

    header.appendChild(ul);

}

createNav();