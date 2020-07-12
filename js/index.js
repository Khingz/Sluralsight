//handle nav toggle function
const dropDownEffects = (itemId) => {
    const class_Name = 'hide-item';
    if(!itemId.classList.contains(class_Name)) {
        document.querySelector('body').style.overflowY = 'hidden';
        document.querySelector('.check-light').style.transform = 'scale(1)';
        document.querySelector('.check-light').style.opacity = '0.05';
        
    } else {
        document.querySelector('body').style.overflowY = 'visible';
        document.querySelector('.check-light').style.transform = 'scale(1.02)';
        document.querySelector('.check-light').style.opacity = '1';
    }
}

const toggleNav = id => {
    const navDropItems = document.querySelectorAll('.drop-nav-item');
    for(let j = 0; j < navDropItems.length; j++) {
        let openDropdown = navDropItems[j];
        if(navDropItems[j] !== document.getElementById(id)) {
            openDropdown.classList.add('hide-item');
        }
    }
    const itemID = document.getElementById(id);
    itemID.classList.toggle('hide-item');
    dropDownEffects(itemID);
}



//click dropdown function for nav
const navDrop = document.querySelectorAll('.nav-list');
for(let i = 0; i < navDrop.length; i++) {
    navDrop[i].addEventListener('click', () => {
    const navIcon = document.querySelectorAll('.rotate-icon');            
        for(let k = 0; k < navIcon.length; k++) {
            if (k != i || k == 3) {
                navIcon[k].classList.remove('rotate-nav');
            } else {
                navIcon[k].classList.toggle('rotate-nav');
            }
        }
        toggleNav(`d${i + 1}`)
    })
}

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

//toggle-menu function
const toggleNavHam = id => {
    const navDropItems = document.querySelectorAll('.drop-nav-item');
    for(let j = 0; j < navDropItems.length; j++) {
        let openDropdown = navDropItems[j];
        if(navDropItems[j] !== document.getElementById(id)) {
            openDropdown.classList.add('hide-item');
        }
    }
    const itemID = document.getElementById(id);
    itemID.classList.toggle('hide-item');
    dropDownEffects(itemID);
}

//cancel click event
const cancelButton = document.querySelectorAll('.cancel');
for(let i = 0; i < cancelButton.length; i++) {
    cancelButton[i].addEventListener('click', () => {
        const navIcon = document.querySelectorAll('.rotate-icon');            
        cancelButton[i].parentElement.parentElement.classList.add('hide-item');
        for(let j = 0; j < navIcon.length; j++) {
            if(j === i) {
                navIcon[j].classList.remove('rotate-nav');
            }
        }
    dropDownEffects(cancelButton[i].parentElement.parentElement);
    
        
    })
}

//hamburger menu
const hamMenu = document.getElementById('ham-menu')
hamMenu.addEventListener('click', () => {
    const hamIcon = document.getElementById('ham-icon');
    let hide = document.querySelector('.ham-link-container');
    // hide.classList.toggle('hide-item');
    
    if(hide.style.display === 'block') {
        hide.style.display = 'none';
        hamIcon.innerHTML = `<svg width="25" height="30">
        <path d="M0,5 30,5" stroke="#fff" stroke-width="2"/>
        <path d="M0,14 20,14" stroke="#fff" stroke-width="2"/>
        <path d="M0,23 30,23" stroke="#fff" stroke-width="2"/>
    </svg>`;
    } else {
        hide.style.display = 'block';
        hamIcon.innerHTML = `<h2>X</h2>`;
    }
})

