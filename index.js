const checkboxlight = document.getElementById("checked1");
const checkboxdark = document.querySelector(".c");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

const circle = document.querySelector(".circle");
const cont = document.querySelector(".container > div");
const spans = document.querySelectorAll("span");
console.log(checkboxdark);
console.log(checkboxlight);
console.log(img1);
console.log(img2);
console.log(circle);
const h2 = document.querySelector("h2");
const p = document.querySelectorAll("p");
console.log(p);
const a = document.querySelectorAll(".circle div:first-of-type a");
checkboxlight.addEventListener("change",()=>{
    if (checkboxlight.checked) {
        document.body.style.background = "#0077b6";
        spans[0].style.opacity = 1;
        spans[1].style.opacity = 0;
        a.forEach(link=>{
            link.style.width = "10px";
            link.style.height = "10px";
        })
        circle.style.left = "8%";
        h2.style.borderRadius = "50px 50px 0 0";
        img1.style.right = "10%";
        circle.style.background = "#FFF2C5";
        circle.style.boxShadow = "0 0 10px #FFF2C5";
        img2.style.right = "20%";
        p.forEach(para => {
            para.style.opacity = 0;
        });
        checkboxdark.checked = false;
    }
    
})
checkboxdark.addEventListener("change",()=>{
    if (checkboxdark.checked) {
        document.body.style.background = "#012a4a";
        circle.style.left = "55%";
        spans[0].style.opacity = 0;
        a.forEach(link=>{
            link.style.height = "4px";
            link.style.width = "15px";
            link.style.borderRadius = "10px"
        })
        h2.style.borderRadius = "0 0 50px 50px";
        spans[1].style.opacity = 1;
        circle.style.background = "#E1E2F2";
        circle.style.boxShadow = "0 0 10px #E1E2F2";
        img1.style.right = "60%";
        img2.style.right = "50%";
        p.forEach(para => {
            para.style.opacity = 1;
        });
        checkboxlight.checked = false;
    }
    
})
