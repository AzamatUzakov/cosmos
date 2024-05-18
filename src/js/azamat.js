
/* 
let sputnik = document.querySelector('.sputnik-position')

sputnik.onclick = () => {
sputnik.classList.toggle('animatetSputnik')
} */


let pages = document.querySelectorAll('.first-SPA-box, .second-SPA-box,.third-SPA-box, .fouth-SPA-box, .fifth-SPA-box, .sixth-SPA-box')
let pagesBtn = document.querySelectorAll("[data-page]")

pagesBtn.forEach(btn => {
    btn.onclick = () => {
        let id = btn.getAttribute('data-page')

        pages.forEach(page => {
            if (id === page.id) {
                page.classList.add('show-page')
            }else{
                page.classList.remove('show-page')
            }
        });
    }
})
console.log(pages);
