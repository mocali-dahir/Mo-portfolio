/* =====================================  typing animation ============================*/
var typed = new typed(".typing", {
    String:["", "Soft Developer", "Web Designer", "Graphic desinger", "Vedio Editor",],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})

/*    ===================================  Aside ==========================*/
const nav = document.querySelector(".nav"),
navlist  = nav.querySelectorAll("li"),
totalNavlist = navlist.length;
for(let i=0; i<totalNavlist; i++)
{
   
    const a = navlist[i].querySelector("a");
    a.addEventListener("click", function()
        {
            for(let j=0; j<totalNavlist; j++)
            {
                navlist[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
        }
          )
}
function showSection(element)
{
    console.log(element.getAttribute("href"))
}
