let img;
function slider(num) {
   img = document.getElementById('slider');
    img.style.cssText = `
    background-image: url(./img/${num}.jpg)
    `
} 

setInterval(()=>{
    slider(1)
}, 5000);

setInterval(()=>{
    slider(2)
}, 10000);

setInterval(()=>{
    slider(3)
}, 15000);


