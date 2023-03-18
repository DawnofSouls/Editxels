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


const MenuClick = document.getElementById("menu");
MenuClick.addEventListener("click", ()=> {
  let options = document.getElementById("options");
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
