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
});

function name_validation(value){
        let p=true;
        value=value.trim();
        if(value.length<=2) return false;
        for(var i=0;i<value.length;i++){
            if((value[i]>='A'&&value[i]<='Z')||(value[i]>='a'&&value[i]<='z')||value[i]==" "){
                // (value[i]=='_')||(value[i]=='-')||(value[i]=='&')||(value[i]>='0'&&value[i]<='9')
            }
            else{
                p=false;
                break;
            }
        }
        return p;
}
function contact_validation(value){
    if(value.length==10){
        for(let i=0;i<value.length;i++){
            if(value[i]>='0'&&value[i]<='9'){}
            else{
                return false;
            }
        }
        return true;
    }
    else return false;
}
let name1=document.querySelector(".name1");
let contact=document.querySelector(".number");
let contact_border=document.querySelector(".call_border");
let name_box=document.querySelector(".name_border");
function validation(){
    let p=true;
    if(!name_validation(name1.value)){
        name_box.style.border="5px solid red";
        return false;
    }
    else{
        name_box.style.border="none";
    }
    if(!contact_validation(contact.value)){
        contact_border.style.border="5px solid red";
        return false;
    }
    else{
        contact_border.style.border="none";
    }
    return true;
}
