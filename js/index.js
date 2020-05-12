// Your code goes here

const body = document.querySelector('body');
const busImage = document.querySelector(".intro img");
const nav = document.querySelector('.main-navigation');
const footer = document.querySelector('.footer');
const el = document.querySelector('h2');
const button = document.querySelectorAll('.btn')

// mouseover event (1)
window.addEventListener('mouseover', () => {
    body.style.backgroundColor = '#ccffff';
})

//mouseleave event (2)
body.addEventListener('mouseleave', () => {
body.style.backgroundColor = '';
})

// doubleclick event (3)
busImage.addEventListener('dblclick', () => {
 busImage.style.transform = "scale(1.2)";
 busImage.style.transition = "all 0.4s";
})

// click event (4.a)
busImage.addEventListener('click', () => {
    busImage.style.transform = "scale(1)";
    busImage.style.transition = "all 0.4s";
    event.stopPropagation();
})

// click event (4.b) - for propagation
body.addEventListener('click', () => {
    body.style.border = '5px dotted grey';
})

// click event (4.c) - for prevent default nav
nav.addEventListener('click', () => {
    event.preventDefault()
})

// scroll event (5)
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 80) {
    nav.style.backgroundColor = 'green';
    footer.style.backgroundColor = 'green';
    }
    else {
    nav.style.backgroundColor = 'white';
    }
})

//resize event (6)
window.addEventListener('resize', () => {
    busImage.style.border = 'thick solid green';
})

//keydown event (7)
window.addEventListener('keydown', (event) => {
    alert(`This is key ${event.keyCode}`);
})

//wheel event (8);

document.addEventListener('wheel', () => {
    event.preventDefault();

  if (event.deltaY < 0) {
    scale *= event.deltaY * -2;
  }
  else {
    scale /= event.deltaY * 2;
  }
  scale = Math.min(Math.max(.125, scale), 4);
  el.style.transform = `scale(${scale})`;
  el.style.transition = "all 0.5s";
})
let scale = .5;

// mouseenter event (9)
button.forEach ( title => {
    title.addEventListener('mouseenter', () => {
        title.style.transform = 'scale(1.2)';
        title.style.transition = 'all 0.4s'
    })
})

// load event (10)
window.addEventListener('load', () => {
    console.log(`Page has loaded!`)
})










// attempted selection event:  
//   const input = document.querySelector('p');

//   input.addEventListener('select', (event) => {
//       const log = document.querySelector('h2')
//       const select =  event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//       log.textContent = `You selected: ${select}`;
//   });

// attempted focus event:
// images[2].addEventListener('focus', (ev) => {
//     images[2].style.transform = 'scale(1.2)';
// }, true)

// drag event: 
// var dragged;
// document.addEventListener("drag", function(event) {
// }, false);

// document.addEventListener("dragstart", function(event) {
//   dragged = event.target;
//   event.target.style.opacity = .5;
// }, false);

// document.addEventListener("dragend", function(event) {
//   event.target.style.opacity = "";
// }, false);

// document.addEventListener("dragover", function(event) {
//   event.preventDefault();
// }, false);

// document.addEventListener("dragenter", function(event) {
//   if (event.target.className == "btn") {
//     event.target.style.background = "green";
//   }
// }, false);

// document.addEventListener("dragleave", function(event) {
//   // reset background of potential drop target when the draggable element leaves it
//   if (event.target.className == "btn") {
//     event.target.style.background = "";
//   }
// }, false);

// document.addEventListener("drop", function(event) {
//   // prevent default action (open as link for some elements)
//   event.preventDefault();
//   // move dragged elem to the selected drop target
//   if (event.target.className == "btn") {
//     event.target.style.background = "";
//     dragged.parentNode.removeChild( dragged );
//     event.target.appendChild( dragged );
//   }
// }, false);
