let img;
let cap;

function preload() {
  img = createCapture(VIDEO);
  img.size(1000, 1000);
  img.position(750, 0);
  img.hide();

}


function setup() {
  
  textAlign(LEFT, TOP);


  createCanvas(1000, 1000);
  colorMode(HSB, 360, 100, 100, 1);;
//  slider = createSlider(0, 360, 60, 40);
 // slider.position(10, 10);
 // slider.style('width', '80px');

}



function draw() {

 // let val = slider.value();
 
  background(0, 0, 0, 1);
  
  let cap = img.get();
  for (let x = 0; x < img.width; x += 6) {
    for (let y = 0; y < img.height; y += 6) {
      let c = img.get(x, y);


      //fill(val, 100, 100, 1);

    fill(120, 100, 80)
      noStroke();

      
colorMode(RGB, 255);

let r = red(c);
let g = green(c);
let b = blue(c);

colorMode(HSB, 360, 100, 100, 1);


let brit = int(0.2126*r + 0.7152*g + 0.0722*b); // 0–255
brit = map(brit, 0, 255, 0, 100);


            
           if (brit <= 15) {
        updateText(' ', x, y);
           }
      
           else if (brit <= 20) {
        updateText('.', x, y);
           }
      
      
      else if  (brit <= 30) {
        updateText(':', x, y);
           }
      
      else if (brit <= 40) {
        updateText('-', x, y);
           }
      
      else if (brit <=45) {
        updateText('|', x, y);
           }
      
      else if (brit <= 50) {
        updateText('=', x, y);

      }
      
      else if (brit <= 60) {
        updateText('+', x, y);

      }
      
      else if (brit <= 62) {
        updateText('%', x, y);

      }
      
      else if (brit <= 64) {
        updateText('O', x, y);

      }
      
      else if (brit <= 68) {
        updateText('#', x, y);
      }
    
      
      else if (brit >68) {
        updateText('@', x, y);
      
    
      }
      




    }

  }

}


function updateText(word, a, b) {
  textSize(5);
  text(word, a, b);
}
