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
          },
          { 
            component: iro.ui.Slider,
            options: {
              // can also be 'saturation', 'value', 'red', 'green', 'blue', 'alpha' or 'kelvin'
              sliderType: 'alpha'
            }
          },
          
      ]
    
});


