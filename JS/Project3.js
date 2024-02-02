// ---------------------- ----------------------Carousel--------------------------------------------------
const slides=document.querySelectorAll('.pic');
const radiobtns=document.querySelectorAll('.rdo input[type="radio"]');
var counter=0;
const delay = 2000;

slides.forEach(
  (slide,index)=>{
    slide.style.left = `${index * 100}%`;
  }
);

const slideImage = () => {
  slides.forEach(
    (slide,index)=>{
      slide.style.transform = `translateX(-${counter * 100}%)`;
    }
  );
};

const goPrev = () => {
  counter--;
  if (counter < 0){
    counter = slides.length - 1;
  }
  slideImage();
};

const goNext = () => {
  counter++
  if (counter >= slides.length){
    counter=0;
  } 
  slideImage();
};

const autoslide=setInterval(goNext, delay);

// -----------------stopping for autoslide-------------------------
const btns=document.querySelectorAll('.shift button');
btns.forEach((button)=>{
  button.addEventListener('click',()=>{
    clearInterval(autoslide);
  });
});

// -------------------- radio buttons--------------------
 const selectradio=()=>{
  radiobtns.forEach((radio,index)=>{
    radio.checked = index === counter;
  });
 };

//  -----------------Event Listener of radio buttons---------------------------------
radiobtns.forEach((radio,index)=>{
  radio.addEventListener('click',()=>{
    counter=index;
    slideImage();
    clearInterval(autoslide);
  });
});

// --------------------------------------------Array of Objects---------------------------------------------------------
let data = [
  {
    img: 'Assets/product-2.jpg',
    title: 'Oculus Quest',
    content: 'All-in-one gaming headset with lightweight, flexible design',
    price: '399'
  },
  {
    img: 'Assets/product-2.jpg',
    title: 'Oculus Quest',
    content: 'All-in-one gaming headset with lightweight, flexible design',
    price: '399'
  },
  {
    img: 'Assets/product-2.jpg',
    title: 'Oculus Quest',
    content: 'All-in-one gaming headset with lightweight, flexible design',
    price: '399'
  }
];

const productSection = document.getElementById('productSection');

data.forEach(product => {
  const productDiv = document.createElement('div');
  productDiv.innerHTML = `
    <div >
      <img src="${product.img}" alt=""><br>
      <div class="quest">
        <h4>${product.title}</h4>
        <p class="para">${product.content}</p>
        <div class='rs'>
          <p class="price">$&nbsp;${product.price}</p>
          <button class='cart'> Add to Cart</button>
        </div>
      </div>
    </div>
  `;

  productSection.appendChild(productDiv);
});

//------------------------------------ Add array of Images------------------------------------------------------------
var mainImage = document.querySelector('.thunb');
var imgElements = document.querySelectorAll('.images img');
var imgArray = Array.from(imgElements);

imgArray.forEach(function (imgElement, index) {
  imgElement.addEventListener('click', function () {
    var clickedImageSrc = imgElement.getAttribute('src');
    mainImage.style.backgroundImage = 'url(' + clickedImageSrc + ')';
  })
})


// -----------------------------------Add to Cart-----------------------------------------------

var cart1=document.querySelectorAll('.cart');
var num=document.querySelector('.number');
var a=0;
var cart2=Array.from(cart1);

function update(){
  a++;
  console.log(a);
  num.innerHTML=a;
}

cart2.forEach(function (item){
  item.addEventListener('click',function (){
   update();
  })
})
 

// -------------------------------------menubar-----------------------------

var menuIcon = document.querySelector('#menubar');
var navMenu = document.querySelector('.listitems');

menuIcon.addEventListener('click', function () {
  navMenu.classList.toggle('menu-open');
  
  menuIcon.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-times');
});



