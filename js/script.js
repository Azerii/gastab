let option=document.querySelector(".using");
let delete2=document.querySelector(".edit1");
option.addEventListener("click",()=>{
    delete2.classList.toggle("step2")
    delete3.classList.remove("step2")
    delete4.classList.remove("step2")
    delete5.classList.remove("step2")
   
  })

  let option1=document.querySelector(".using2");
let delete3=document.querySelector(".edit2");
option1.addEventListener("click",()=>{
    delete3.classList.toggle("step2")
    delete2.classList.remove("step2")
    delete4.classList.remove("step2")
    delete5.classList.remove("step2")
  })

  let option2=document.querySelector(".using3");
let delete4=document.querySelector(".edit3");
option2.addEventListener("click",()=>{
    delete4.classList.toggle("step2")
    delete3.classList.remove("step2")
    delete2.classList.remove("step2")
    delete5.classList.remove("step2")
  })

  let option3=document.querySelector(".using4");
let delete5=document.querySelector(".edit4");
option3.addEventListener("click",()=>{
    delete5.classList.toggle("step2")
    delete3.classList.remove("step2")
    delete4.classList.remove("step2")
    delete2.classList.remove("step2")
  })




  let modalbutton=document.querySelector(".btn-m");
let modalbg=document.querySelector(".modal-bg");
let modalclose=document.querySelector(".close");

//open the modal
modalbutton.addEventListener("click",()=>{
    modalbg.classList.add("bg-active")
    delete2.classList.remove("step2")

});
//close the modal
modalclose.addEventListener("click",()=>{
    modalbg.classList.remove("bg-active")

});

 let modalbutton2=document.querySelector(".btn-m2");
modalbutton2.addEventListener("click",()=>{
  modalbg.classList.add("bg-active")
  delete3.classList.remove("step2")

});
//close the modal
modalclose.addEventListener("click",()=>{
  modalbg.classList.remove("bg-active")
  

});

let modalbutton3=document.querySelector(".btn-m3");
modalbutton3.addEventListener("click",()=>{
  modalbg.classList.add("bg-active")
  delete4.classList.remove("step2")

});
//close the modal
modalclose.addEventListener("click",()=>{
  modalbg.classList.remove("bg-active")
 

});
let modalbutton4=document.querySelector(".btn-m4");
modalbutton4.addEventListener("click",()=>{
  modalbg.classList.add("bg-active")
  delete5.classList.remove("step2")
});
//close the modal
modalclose.addEventListener("click",()=>{
  modalbg.classList.remove("bg-active")
});


let hideBtn=document.querySelector(".list-btn")
let showBtn=document.querySelector(".hide-listing")
hideBtn.addEventListener("click",()=>{
  console.log("false")
showBtn.classList.toggle("show-listing")
})


let card=document.querySelector("#mode");
card.addEventListener("click",()=>{
  console.log("piss")
  modalbg.classList.remove("bg-active")

})