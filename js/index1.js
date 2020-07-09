//global variables
const productDropdown = document.getElementById('product');
const courseNavDropdown = document.getElementById('course');
const cancelBtn = document.querySelector('.cancel');

// functions
const toggleMenu = (class_id) => {
    const class_name = 'hide-item';
    itemId = document.querySelector(`.${class_id}`)
    itemId.classList.toggle(class_name);
    if(!itemId.classList.contains(class_name)) {
        document.querySelector('body').style.overflowY = 'hidden';
        document.querySelector('.showcase').style.transform = 'scale(1.01)';
        document.querySelector('.dim-effect').style.opacity = '0.2';
    } else {
        document.querySelector('body').style.overflowY = 'visible';
        document.querySelector('.showcase').style.transform = 'scale(1)';
        document.querySelector('.dim-effect').style.opacity = '1';
    }
}

const cancel = (itemId, class_name) => {
    itemId.classList.add(class_name);
}

// *eventlisteners 

// **product dropdown
// productDropdown.addEventListener('click', () => {
//     const product_menu = document.querySelector('#product-item');
//    toggleMenu(product_menu);
// });


//course nav dropdown
// courseNavDropdown.addEventListener('click', () => {
//     const courseId = document.querySelector(".course-item");
//     toggleMenu(courseId)
// })

// course dropdown options
const courseDropdowns = document.querySelectorAll('.course-drop-btn');
[].forEach.call(courseDropdowns, (courseDropdown, indexA) => {
    const dropItems = document.querySelectorAll('.dropdown-content-container');
    [].forEach.call(dropItems, (dropItem, indexB) => {
        courseDropdown.addEventListener('mouseover', () => {
            if(indexA === indexB) {
                dropItem.style.display = 'block';
            }else {
                dropItem.style.display = 'none';
            }
        })
    })  

})

// nav
const navDrop = document.querySelectorAll('.nav-list');

// [].forEach.call(navDrop, (navDropBtn, dropIndex) => {
//     navDropBtn.addEventListener('click', () => {
//         const navDropItems = document.querySelectorAll('.drop-nav-item');
//         [].forEach.call(navDropItems, (navDropItem, itemIndex) => {
//         if(dropIndex === itemIndex) {

//         } else {
//             return false
//         }
//         })
//     })
    
// })

for(let i = 0; i < navDrop.length; i++) {
    navDrop[i].addEventListener('click', () => {
        const navDropItems = document.querySelectorAll('.drop-nav-item');
        for(let j = 0; j > navDropItems.length; j++) {
            if(i === j) {
                navDropItems[j].classList.remove('hide-item');
            } else {
                navDropItems[j].classList.add('hide-item');
            }
        }
    })
}




<div class="dim-effect">
        <section class="showcase">
            <div class="header-container">
                 <section class="header-acticle-container">
                    <h1 class="header-title">UPSKILL YOUR TECH <br>TEAMS FROM ANYWHERE</h1>
                    <p class="header-article">Technologists need the latest skills to do their jobs effectively. And technology leaders need visibility into how their teams work to put the right people on the right  projects. Pluralsight gives you both—the skills and data you need to succeed.</p>
                    <div class="header-buttons">
                        <button id="view">VIEW PLANS</button>
                        <button id="try-free">TRY FOR FREE</button>
                    </div>
                </section>
                <section class="header-image">
                    <img src="./img/boy and dog.png" alt="header-image" >
                </section>
            </div>  
        </section>
    </div>