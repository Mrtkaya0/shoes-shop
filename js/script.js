const searchForm = document.querySelector(".search-form");
const cartıtem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

//! button
const searchBtn = ocument.querySelector("#search-btn");
const cartbtn = document.querySelector("#cart-btn");
const menubtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function (){
searchForm.classList.toggle("active"); 
document.addEventListener("click",function(e){
if(
    !e.composedPath().includes(searcform) &&
    !e.composedPath().includes(searchBtn)
    ) {
searchForm.classList.remove("active");
    }
  })
});
cartBtn.addEventListener("click", function (){
    cartıtem.classList.toggle("active"); 
    document.addEventListener("click",function(e){
    if(
        !e.composedPath().includes(cartbtn) &&
        !e.composedPath().includes(cartıtem)
        ) {
    cartıtem.classList.remove("active");
        }
      })
    });
    menuBtn.addEventListener("click", function (){
        navbar.classList.toggle("active"); 
        document.addEventListener("click",function(e){
        if(
            !e.composedPath().includes(menubtn) &&
            !e.composedPath().includes(navbar)
            ) {
        navbar.classList.remove("active");
            }
          })
        });