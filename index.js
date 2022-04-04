let img;
let num = 1;
function slider(num) {
   img = document.getElementById('slider');
    img.style.cssText = `
    background-image: url(./img/${num}.jpg)
    `
}
    setInterval(()=>{
        slider(num);
        num++;
    }, 5000);   
