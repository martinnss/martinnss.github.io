
/*Burger Menu */

const burgerMenuIcon=document.querySelector('.nav-burger-menu')
const mobileMenu = document.querySelector('.nav-inside-burger-menu')

burgerMenuIcon.addEventListener('click',toggleMobileMenu)

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}



/* automate tech list */

const techList=[
    {
        image:"https://cdn-icons-png.flaticon.com/512/8091/8091918.png",
        title:"SQL"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/512/1822/1822921.png",
        title:"Python"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/512/1240/1240970.png",
        title:"Git"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/512/721/721790.png",
        title:"HTML"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/512/721/721778.png",
        title:"CSS"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/512/5486/5486400.png",
        title:"Javascript"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/512/9326/9326906.png",
        title:"ML & AI"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/512/6847/6847526.png",
        title:"Excel"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/512/149/149209.png",
        title:"GCP"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/512/3024/3024078.png",
        title:"BigQuery"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/512/2782/2782058.png",
        title:"Power BI"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/512/2329/2329087.png",
        title:"Data Studio"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/512/1241/1241024.png",
        title:"Wordpress"
    },
]

const techContainer=document.querySelector('.technologies')

function renderTechs(arr){
    for (tech of arr){
        const divTech = document.createElement('div')
        divTech.classList.add('tech')

        const imgTech= document.createElement('img')
        imgTech.setAttribute('src',tech.image)
        const imgName = document.createElement('p')
        imgName.innerText=tech.title

        divTech.appendChild(imgTech)
        divTech.appendChild(imgName)

        techContainer.appendChild(divTech)
    }
}

renderTechs(techList)