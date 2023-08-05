let collection=[
    "Web Developer",
    "Front-end Developer",
    "Competitive Programmer",
    "Coder",
    "App Developer",
    "Developer"
];
let count=0;
let texts = document.querySelector(".myself");
setInterval(()=>{
    texts.innerHTML = collection[count];
    if(count<5) count++;
    else count=0;
},5000
);
let p=0;
let nav= document.querySelector(".navigation");
let bar = document.querySelector(".bar");
bar.addEventListener("click",()=>{
    if(p==0){
        nav.style.display="flex";
        p=1;
    }
    else{
        nav.style.display="none";
        p=0;
    }
})