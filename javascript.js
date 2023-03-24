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

function WxHInput() {
  let WidthInput = document.getElementById("WidthPixels").value;
  let HeightInput = document.getElementById("HeightPixels").value;

  if (WidthInput > 65 && HeightInput > 65) {
    WidthInput = 64;
    HeightInput = 64;
  } else if (WidthInput < 2 && HeightInput < 2) {
    WidthInput = 2;
    HeightInput = 2;
  } else if (WidthInput < 2) {
    WidthInput = 2;
  } else if (HeightInput < 2) {
    HeightInput = 2;
  } else if (HeightInput > 64) {
    HeightInput = 64;
  } else if (WidthInput > 64) {
    WidthInput = 64;
  } else {
    // Inputs are smaller than 64
  }

  console.log(WidthInput);
  console.log(HeightInput);
  console.log(WidthInput, "x", HeightInput);
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