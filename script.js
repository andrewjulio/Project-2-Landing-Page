
function createNav() {

    const navItems = ['About', 'Features', 'Pricing', 'Testimonials', 'Download'];

    const ul = document.createElement('ul')

    ul.className = "navbar";

    const navigation = document.getElementById('navigation');

    for (let navItem of navItems) {
        let li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML += `<a href="#content-${navItem.toLowerCase()}">${navItem}</a>`;
        li.id = navItem;
        li.className = "navbar-item box";
    }

    navigation.appendChild(ul);

}

createNav();