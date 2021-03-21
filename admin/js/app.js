
 let step1=document.querySelector(".first");
 let step2=document.querySelector(".second");
 let step3=document.querySelector(".third")
 let detail=document.querySelector(".tick");
 let detail2=document.querySelector(".back");
 let detail3=document.querySelector(".next");
 let detail4=document.querySelector(".tickshoe");

 detail.addEventListener("click",()=>{
   step1.classList.remove("step2")
   step1.classList.add("step1")
   step2.classList.remove("step1")
   step2.classList.add("step2")
 })
 detail2.addEventListener("click",()=>{
  step2.classList.remove("step2")
  step2.classList.add("step1")
  step1.classList.add("step2")
})
detail3.addEventListener("click",()=>{
  step2.classList.remove("step2")
  step2.classList.add("step1")
  step3.classList.remove("step1")
  step3.classList.add("step2")
})
detail4.addEventListener("click",()=>{
  step3.classList.remove("step2")
  step3.classList.add("step1")
  step2.classList.remove("step1")
  step2.classList.add("step2")
})


let manual=document.querySelector(".man")
let automatic=document.querySelector(".auto")
let active=document.getElementById("active")
let active2=document.getElementById("active2")
manual.addEventListener("click",()=>{
  automatic.classList.remove("row")
  automatic.classList.remove("column")
  manual.classList.add("row")
  manual.classList.add("column")
  active2.checked=false
  active.checked=true
  
})
automatic.addEventListener("click",()=>{
  manual.classList.remove("row")
  manual.classList.remove("column")
  automatic.classList.add("row")
  automatic.classList.add("column")
  active.checked=false
  active2.checked=true
})
document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
  const dropZoneElement = inputElement.closest(".drop-zone");

  dropZoneElement.addEventListener("click", (e) => {
    inputElement.click();
  });

  inputElement.addEventListener("change", (e) => {
    if (inputElement.files.length) {
      updateThumbnail(dropZoneElement, inputElement.files[0]);
    }
  });

  dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.classList.add("drop-zone--over");
  });

  ["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });

  dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
      inputElement.files = e.dataTransfer.files;
      updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove("drop-zone--over");
  });
});

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
  let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

  // First time - remove the prompt
  if (dropZoneElement.querySelector(".drop-zone__prompt")) {
    dropZoneElement.querySelector(".drop-zone__prompt").remove();
  }

  // First time - there is no thumbnail element, so lets create it
  if (!thumbnailElement) {
    thumbnailElement = document.createElement("div");
    thumbnailElement.classList.add("drop-zone__thumb");
    dropZoneElement.appendChild(thumbnailElement);
  }

  thumbnailElement.dataset.label = file.name;

  // Show thumbnail for image files
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
    };
  } else {
    thumbnailElement.style.backgroundImage = null;
  }
}

