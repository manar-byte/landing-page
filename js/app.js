/**
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
//variable of all sections in the DOM
const allSections = document.querySelectorAll('section');
//variable for the ul
const unOrderdList = document.querySelector('#navbar__list');
//variable for the virtual DOM
const fragment = document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 */



/**
 * End Helper Functions
 * Begin Main Functions
 */

// build the navigation menu
allSections.forEach(element => {
    //create a li for each section
    const navNode = document.createElement("LI");
    //create an a for each section
    const navLink = document.createElement('a');
    //setting the data-nav identical to each section
    const navText = element.getAttribute('data-nav');
    navNode.setAttribute('data-nav', navText);
    //set the text content of the links idential to each section
    navLink.textContent = navText;
    //append each link to each li
    navNode.appendChild(navLink);
    //append each li to the virtual DOM
    fragment.appendChild(navNode);

    // Scroll to section on link click and set its behaviour to smooth
    navLink.addEventListener('click', () => {
        element.scrollIntoView({
            behavior: "smooth"
        });
    });
});
//append the virtual DOM to the ul for links to actually appear on the page
unOrderdList.appendChild(fragment);

//define another global variable which contains all li
const listItems = document.querySelectorAll('li');



//set sections as active when near top of viewport using 'your-active-class'
window.addEventListener('scroll', () => {
    //loop over each section
    allSections.forEach(section => {
        //use getBoundingClientRect method to see
        const domRect = section.getBoundingClientRect();
        //if the top of the section is within our first 200px view port
        if (domRect.top >= 0 && domRect.top < 200) {
            //it's confirmed then that this section is the active section
            const activeSection = section;
            //loop over each section
            allSections.forEach(eachSection => {
                //remove 'your-active-class' from all sections
                eachSection.classList.remove('your-active-class');
                //add 'your-active-class' to the active section only
                activeSection.classList.add("your-active-class");



                //active states for nav buttons using 'active__class'

                //variable for the active section's data-nav
                const activeNav = activeSection.getAttribute('data-nav');
                //loop over each li
                listItems.forEach(item => {
                    //variable to put the data-nav for each li
                    const navTwo = item.getAttribute("data-nav");
                    //check if this nav coressponds to the active class
                    if (activeNav == navTwo) {
                        //it's confirmed
                        const activeUl = item;
                        //loop over each li
                        listItems.forEach(oneItem => {
                            //remove 'active__class' from all li
                            oneItem.classList.remove('active__class');
                            //add 'active__class' to only the button coressponding to the active section only
                            activeUl.classList.add('active__class');
                        });
                    }
                });
            });
        }
    });
});
/**
 * End Main Functions
 * Begin Events
 */