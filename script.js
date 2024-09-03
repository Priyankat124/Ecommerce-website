const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")
const menuBtnIcon = menuBtn.querySelector("i")
const cross = document.querySelector(".crosss")
cross.classList.add("hidden");
const cartmaterial = document.getElementById("container_cart");
menuBtn.addEventListener("click",(e)=>{
navLinks.classList.toggle("open");

const isOpen = navLinks.classList.contains("open");
menuBtnIcon.setAttribute("class",isOpen ? "ri-close-line" : "ri-menu-line");


  
});
document.addEventListener('DOMContentLoaded', function() {
  ScrollReveal().reveal('.header_image img', {
      distance: '20px',
      duration: 600,
      easing: 'ease-out',
      origin: 'bottom',
      reset: true
  });
});
document.addEventListener('DOMContentLoaded', function() {
  ScrollReveal().reveal('.header_content h1', {
      distance: '20px',
      duration: 1000,
      easing: 'ease-out',
      origin: 'bottom',
      reset: true
  });
});
document.addEventListener('DOMContentLoaded', function() {
  ScrollReveal().reveal('.header_content p', {
      distance: '20px',
      duration: 1500,
      easing: 'ease-out',
      origin: 'bottom',
      reset: true
  });
});
document.addEventListener('DOMContentLoaded', function() {
  ScrollReveal().reveal('.header_image_card', {
      distance: '20px',
      duration: 1700,
      easing: 'ease-out',
      origin: 'right',
      reset: true
  });
});
const addproduct = document.querySelector('#items');
let count = parseInt(addproduct.innerText);

const localImageMap = {
"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg": "Assets/bracelete.webp",
"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg": "Assets/princess.jpg",
"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg": "Assets/tshirt1.png"
};
let productdiv =  document.querySelector(".product");
var categorylistdiv = document.querySelector(".categorylist");
let allcat = [];
 let displayproduct = async(allcheckcat=[])=>{
   
    productdiv.innerHTML = '';
    let product = await fetch("https://fakestoreapi.com/products");
    let finalproduct = await product.json();
    finalproduct.forEach(element =>{
      let localImage = localImageMap[element.image];
      
if (localImage) {
  console.log(`Updating image from ${element.image} to ${localImage}`);
  const productitems = document.querySelectorAll(`.product_item img[src="${element.image}"]`);
  console.log(`Found ${productitems.length} image elements to update`);
  productitems.forEach(img => {

    console.log(`Updating image src to ${localImage}`);
    img.src = `/Assets/${localImage}`;
  });
}
else {
  console.log(`No local image found for ${element.image}`);
}
     
if (!allcat.includes(element.category)){
categorylistdiv.innerHTML +=` <label for="">
        <input type="checkbox" onclick='categoryfilter()' value = "${element.category}">${element.category}
    </label>`
allcat.push(element.category)
      }
      if(allcheckcat.length == 0){
     allcheckcat=allcat;
}
      if(allcheckcat.includes(element.category)){
  productdiv.innerHTML +=`<div class="product_item">
    <img src="${element.image}" alt=""> 
    <h4>${element.category}</h4>
    <p>Rs.${element.price}</p>
    <h3>${element.title}</h3>
       <h4>Rating : ${element.rating.rate}</h4>
       <button class="cartbtn" onclick="addToCart(event)">Add to cart</button>
</div>`
 };




    });
    
    
  };

  let categoryfilter = ()=>{
 let checkboxinput = document.querySelectorAll("input[type = 'checkbox']");

let checkdata = [];
checkboxinput.forEach((e)=>{
  if(e.checked){
    checkdata.push(e.value);
  }
});
  displayproduct(checkdata);
    };
    displayproduct();
  
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;

  }
},5000)
let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");

signinBtn.onclick = function(){
  namefield.style.maxHeight = 0;
  title.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");

}
signupBtn.onclick = function(){
  namefield.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");

}
let button = document.querySelector(".cartbtn");
function addToCart(event){
  const button = event.target;
  if (!button.classList.contains('added')) {
    count++;
    addproduct.innerText = count;
    button.classList.add('added');
    button.style.background = "darkred"
    button.innerText = 'Remove from Cart';
  } else {
    count--;
    addproduct.innerText = count;
    button.classList.remove('added');
    button.style.background = '#db6f35'
    button.innerText = 'Add to Cart';
  }
}












  

