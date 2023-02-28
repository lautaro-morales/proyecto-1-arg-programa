let cv_sections = Array.from(document.getElementsByClassName('descripcion')[0].getElementsByTagName('section'));
let section_buttons = Array.from(document.getElementsByClassName('section-nav-button'));
let og_display = [];

for (section of cv_sections) {
    og_display.push(section.style);
}

toggle_sections(0);

for (let button of section_buttons) {
    button.addEventListener('click', button_clicked);
}

function button_clicked(event) {
    let index_btn = section_buttons.indexOf(this);
    toggle_sections(index_btn);
}

function toggle_sections(index) {
    for (let i = 0; i < cv_sections.length; i++) {
        cv_sections[i].classList.add('inactive-cv-section');
        section_buttons[i].classList.remove('active-button');
        if (i == index) {
            cv_sections[i].classList.remove('inactive-cv-section');
            section_buttons[i].classList.add('active-button');
        }
    }
}