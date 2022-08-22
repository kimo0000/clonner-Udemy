//Nav Menu Show Hide
let navMenuClick = document.querySelector('.nav_menu i');
let navMenuDrop = document.querySelector('.nav_menu_drop');
let closeDropMenu = document.querySelector('.nav_menu_close')

navMenuClick.addEventListener('click', (e) => {
  navMenuDrop.classList.add('show_menu');
  closeDropMenu.addEventListener('click', (e) => {
    navMenuDrop.classList.remove('show_menu');
  })
})

//Slide Image One
let slideImg = document.querySelector('.slider .container img');
let slidePlus = document.querySelector('.fill_plus');
let slideMoins = document.querySelector('.fill_moins');
let requestDemo = document.querySelector('.request_demo');

let arrayImg = ['slider_1', 'slider_2'];

let imgInterval = setInterval(() => {
    let rondomNum = Math.floor(Math.random() * arrayImg.length);
    slideImg.src = `imgs/${arrayImg[rondomNum]}.jpg`;
}, 3000);

slidePlus.addEventListener('click', (e) => {
      clearInterval(imgInterval);
      slideImg.src = `imgs/slider_2.jpg`;
         slidePlus.style.display = 'none';
         slideMoins.style.display = 'block';
         requestDemo.style.display = 'none';
})

slideMoins.addEventListener('click', (e) => {
      clearInterval(imgInterval);
      slideImg.src = `imgs/slider_1.jpg`;
          slideMoins.style.display = 'none';
          slidePlus.style.display = 'block';
          requestDemo.style.display = 'block';
})

//slide Two 
let sliderBox = document.querySelectorAll('.two .slider_box');
let btnIconLeft = document.querySelector('.two .slide .fill_left');
let btnIconRight = document.querySelector('.two .slide .fill_right');
//console.log(sliderBox);
//console.log(btnIconLeft);
//console.log(btnIconRight);

for(let ele of sliderBox) {
       //console.log(ele);
       btnIconRight.addEventListener('click', () => {
         ele.scrollLeft += 150;
         //console.log(ele.scrollLeft);
      })

       btnIconLeft.addEventListener('click', () => {
         ele.scrollLeft -= 150;
         //console.log(ele.scrollLeft);
      })      
   }

//Slider Two Exel
let sliderLinks = document.querySelectorAll('.slider_two ul li');
let sliderContents = document.querySelectorAll('.two .slide .slider_box');
//console.log(sliderLinks);
//console.log(sliderContents);

tabs = () => {
   toggle = (targetId) => {
   
      sliderContents.forEach(ele => {
         ele.style.display = ele.id === targetId ? 'grid' : 'none';
         
         document.querySelector(`[data-target = ${ele.id}]`)
         .classList[ele.id === targetId ? 'add' : 'remove']('active');
         
      })
   }

  sliderLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle(link.dataset.target);
    })
   
      link.classList.contains('active') && toggle(link.dataset.target);

  })
}

tabs();

//Start Slider Three
let sliderThree = document.querySelector('.three .thre');
let sliderThreeImg = document.querySelectorAll('.three .box img')
let slidDecrement = document.querySelector('.decriment');
let slidIncrement = document.querySelector('.increment');
//console.log(sliderThree)
//console.log(sliderThreeImg);
//console.log(slidDecrement);
//console.log(slidIncrement);

sliderThreeImg.forEach(img => {
  let counter = 1;
      img.src = `https://picsum.photos/id/${counter++}/300/150`;
       console.log(img.src);
})

slidIncrement.addEventListener('click', (e) => {
    sliderThree.scrollLeft -= 300;
    if(sliderThree.scrollLeft === 0) {
        slidIncrement.style.display = 'none';
        slidDecrement.style.display = 'block';
    }
})

slidDecrement.addEventListener('click', (e) => {
    sliderThree.scrollLeft += 300;
    if(sliderThree.scrollLeft === 1200) {
        slidIncrement.style.display = 'block';
        slidDecrement.style.display = 'none';
    }
})

//Galerries
let galeriesBox = document.querySelector('.galeries_boxs .box');
let galeriesImg = document.querySelectorAll('.galeries_boxs .box img');
console.log(galeriesImg);

galeriesImg.forEach(img => {
  img.addEventListener('click', (e) => {
      let overlay = document.createElement('div');
      overlay.classList = 'overlay';

      let image = document.createElement('img');
      image.src = e.target.src;
      image.classList = 'overlay_img';

      let btnClose = document.createElement('btn');
      btnClose.classList = 'btn_close';
      let btnCloseText = document.createTextNode('X');
      btnClose.append(btnCloseText);

      overlay.appendChild(btnClose);

      overlay.appendChild(image);

      document.body.append(overlay);

      btnClose.addEventListener('click', (e) => {
        overlay.remove();
      })
    
    })
})


