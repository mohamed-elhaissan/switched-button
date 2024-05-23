const checkboxlight = document.getElementById("checked1");
const checkboxdark = document.querySelector(".c");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

const circle = document.querySelector(".circle");
const cont = document.querySelector(".container > div");

console.log(checkboxdark);
console.log(checkboxlight);
console.log(img1);
console.log(img2);
console.log(circle);




checkboxlight.addEventListener("change",()=>{
    if (checkboxlight.checked) {
        document.body.style.background = "0077b6";
        cont.style.background = "linear-gradient(to top,#FFC8AC,#FFC6DC)";
        circle.style.left = "8%";
        img1.style.right = "10%";
        img2.style.right = "20%";
        checkboxdark.checked = false;
    }
    
})
checkboxdark.addEventListener("change",()=>{
    if (checkboxdark.checked) {
        cont.style.background = "linear-gradient(to top,#190160,#8D71FE)";
        document.body.style.background = "#0077b6";
        circle.style.left = "50%";
        img1.style.right = "60%";
        img2.style.right = "50%";
        checkboxlight.checked = false;
    }
    
})

