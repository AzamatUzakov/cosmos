

let sputnik = document.querySelector('.sputnik-position')

sputnik.onclick = () => {
    sputnik.classList.toggle('animatetSputnik')
}


let pages = document.querySelectorAll('.first-SPA-box, .second-SPA-box,.third-SPA-box, .fouth-SPA-box, .fifth-SPA-box, .sixth-SPA-box')
let pagesBtn = document.querySelectorAll("[data-page]")
let lists = document.querySelectorAll('.fiveth-SPA-notebook-box, .fouth-SPA-notebook-box, .third-SPA-notebook-box, .second-SPA-notebook-box, .first-SPA-notebook-box')
let listBtn = document.querySelectorAll('[data-big]')
pagesBtn.forEach(btn => {
    btn.onclick = () => {
        let id = btn.getAttribute('data-page')

        pages.forEach(page => {
            if (id === page.id) {
                page.classList.add('show-page')
            } else {
                page.classList.remove('show-page')
            }
        });
    }
})


listBtn.forEach(btn => {
    btn.onclick = () => {

        let id = btn.getAttribute('data-big')
        lists.forEach(page => {

       
            if (id === page.id) {
                page.classList.add('show-list')
                pages.forEach(pag => {
                    pag.style.display = 'none'
                })
            } else {
                page.classList.remove('show-list')
            }
        })
    }
})


console.log(listBtn);
