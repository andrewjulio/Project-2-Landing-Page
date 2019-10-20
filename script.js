
function createNav() {

    const navItems = ['About', 'Features', 'Pricing', 'Testimonials', 'Download Now'];

    const ul = document.createElement('ul')

    ul.className="navbar";

    const header = document.getElementById('header');

    for (let navItem of navItems) {
        let li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML += navItem;
    }

    header.appendChild(ul);

}

createNav();