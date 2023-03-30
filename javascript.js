let colorPicker = new iro.ColorPicker('#picker', {
    width: 250 , 
    borderWidth: 2 ,
    color: "#ff0099" ,
    layout: [
        { 
          component: iro.ui.Box, 
          options: {}
        },
        { 
            component: iro.ui.Slider,
            options: {
              // can also be 'saturation', 'value', 'red', 'green', 'blue', 'alpha' or 'kelvin'
              sliderType: 'hue'
            }
          },
          { 
            component: iro.ui.Slider,
            options: {
              // can also be 'saturation', 'value', 'red', 'green', 'blue', 'alpha' or 'kelvin'
              sliderType: 'saturation'
            }
          },
          { 
            component: iro.ui.Slider,
            options: {
              // can also be 'saturation', 'value', 'red', 'green', 'blue', 'alpha' or 'kelvin'
              sliderType: 'value'
            }
          }
      ]
    
});
let options = document.getElementById("options");

const MenuClick = document.getElementById("menu");
MenuClick.addEventListener("click", ()=> {
  if (options.style.display === "none") {
    options.style.display = "block";
  } else {
    options.style.display = "none";
  }
});

const XClick = document.getElementById("XText");
XClick.addEventListener("click", () => {
  PopUpCreate.style.display = "none";
  if (options.style.display === "block") {
    options.style.display = "none";
  }
});

let ColorSwatches = document.getElementById("ColorSwatches");
ColorSwatches.addEventListener("click", function(e){
  let clickTarget = e.target;
  if(clickTarget.dataset.color) {
    colorPicker.color.set(clickTarget.dataset.color);
  }
});

const ColorPreview = document.getElementById("ColorPreview");
colorPicker.on(['color:init', 'color:change'], function(color) {
  // log the current color as a HEX string
  ColorPreview.style.backgroundColor = color.hexString;
  // console.log(color.hexString);
});

const PopUpCreate = document.getElementById("PopUpAbsolPos");

document.getElementById("WidthPixels").addEventListener("change", function () {
  let v = parseInt(this.value);
  if (v < 2) this.value = 2;
  if (v > 64) this.value = 64;
});

document.getElementById("HeightPixels").addEventListener("change", function () {
  let v = parseInt(this.value);
  if (v < 2) this.value = 2;
  if (v > 64) this.value = 64;
});

function WxHInput() {
  
  let WidthInput = document.getElementById("WidthPixels").value;
  let HeightInput = document.getElementById("HeightPixels").value;

  console.log(+WidthInput);
  console.log(+HeightInput);
  console.log(+WidthInput, "x", +HeightInput);
  
  let CanvasContainer = document.getElementById("Canvas");

  if (CanvasContainer.hasChildNodes()){
    while(CanvasContainer.firstChild){
      CanvasContainer.removeChild(CanvasContainer.lastChild);
    }};
  

  const CreateWidthContainer = document.createElement("div");
  CreateWidthContainer.id = "PixelContainer";

  CanvasContainer.appendChild(CreateWidthContainer);

  if (+WidthInput === +HeightInput){
    document.getElementById("PixelContainer").style.width = "100%";
    document.getElementById("PixelContainer").style.height = "100%";
  }else if (+WidthInput > +HeightInput){
    document.getElementById("PixelContainer").style.width = "100%";
  } else {
    document.getElementById("PixelContainer").style.height = "100%";
  };

  for (let i = 0; i < WidthInput; i++) {
    const CreateWidth = document.createElement("div");
    CreateWidth.classList.add("PixelBoxes");
    
    let PixelWidthContainer = document.getElementById("PixelContainer");
    PixelWidthContainer.appendChild(CreateWidth);
  };

  for (let j = 0; j < HeightInput-1; j++){
    let container = CreateWidthContainer.cloneNode(true);
    CanvasContainer.appendChild(container);
  };
  
  document.querySelectorAll(".PixelBoxes").forEach( element => {
    element.addEventListener("click", () => {
      console.log(colorPicker.color.hexString);
      element.style.backgroundColor = colorPicker.color.hexString;

      // delete this below if doesnt work
      document.querySelectorAll(".PixelBoxes").forEach( element => {
          element.addEventListener("mouseover", () => {
            element.style.backgroundColor = colorPicker.color.hexString;

          })
      })
      //
    })
  });
  
}

const CreateButton = document.getElementById("CreateButton");
CreateButton.addEventListener("click", () => {
  if (PopUpCreate.style.display === "block"){
    WxHInput();
    PopUpCreate.style.display = "none";
    options.style.display = "none";
  }else {
    PopUpCreate.style.display = "block";
  }
});

const NewCreateOption = document.getElementById("NewCreateOption");
NewCreateOption.addEventListener("click" , () => {
  if (PopUpCreate.style.display === "none"){
    PopUpCreate.style.display = "block";
  }else if (PopUpCreate.style.display = "block"){
    
  }else {
    PopUpCreate.style.display = "none";
  }
})

document.querySelectorAll(".PixelBoxes").forEach( element => {
  element.addEventListener("click", () => {
    console.log(colorPicker.color.hexString);
  })
});

document.addEventListener("DOMContentLoaded" , () => {
  console.log(colorPicker.color.hexString)
});

document.querySelectorAll("i").forEach( element => {
  element.addEventListener("click", () => {
    console.log(colorPicker.color.hexString);
  })
});
