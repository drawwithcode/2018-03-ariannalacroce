function preload(){
  // put preload code here
}
var myColors =['#030f40', '#f478f5', '#5ba3aa', '#538be0', '#8f7ceb'];

function setup() {
  createCanvas(600, 600);
  // put setup code here
}

function draw() {
  background(myColors[0]);

//rect fissi
   for(var x=25; x<width; x+=50){
     for(var y=25; y<height; y+=50){
       var r = random(0,myColors.length -1);
       frameRate(5);
          	r = Math.round(r);
          	noFill();
            stroke(myColors[r]);
            strokeWeight(0.3);
        rect(x, y, 50,50);}
   }

//ellissi muouse
push();

var b = mouseX;
noFill();
stroke(142,124, 240, 70)
strokeWeight(1);

if(b < 300){
   for(var x=0; x<300; x+=50){
     for(var y=25; y<height; y+=50){
       var a = mouseX/10;
        ellipse(x, y, a);}
        }
    for(var x=300; x<width; x+=50){
      for(var y=25; y<height; y+=50){
        ellipse(x, y, 25);}
        }
    } else {
      for(var x=300; x<width; x+=50){
        for(var y=25; y<height; y+=50){
          var a = mouseX/10;
           ellipse(x, y, a);}}
       for(var x=0; x<300; x+=50){
         for(var y=25; y<height; y+=50){
           ellipse(x, y, 20);}
           }
}
   pop();


   push();

   var c = mouseY;
   noFill();
   stroke(142,124, 240, 70);
   strokeWeight(1);

   if(c < 300){
      for(var x=25; x<width; x+=50){
        for(var y=0; y<300; y+=50){
          var d = mouseY/10;
           ellipse(x, y, d);}
           }
       for(var x=25; x<width; x+=50){
         for(var y=300; y<height; y+=50){
           ellipse(x, y, 25);}
           }
       } else {
         for(var x=25; x<width; x+=50){
           for(var y=300; y<height; y+=50){
             var d = mouseY/10;
              ellipse(x, y, d);}}
          for(var x=25; x<width; x+=50){
            for(var y=0; y<300; y+=50){
              ellipse(x, y, 20);}
              }
   }
      pop();

//doppio


      push();

      var b = mouseX;
      noFill();
      stroke(142,124, 240, 70)
      strokeWeight(1);

      if(b < 300){
         for(var x=50; x<300; x+=50){
           for(var y=50; y<height; y+=50){
             var a = mouseX/10;
              ellipse(x, y, a);}
              }
          for(var x=300; x<width; x+=50){
            for(var y=50; y<height; y+=50){
              ellipse(x, y, 25);}
              }
          } else {
            for(var x=300; x<width; x+=50){
              for(var y=50; y<height; y+=50){
                var a = mouseX/10;
                 ellipse(x, y, a);}}
             for(var x=0; x<300; x+=50){
               for(var y=50; y<height; y+=50){
                 ellipse(x, y, 20);}
                 }
      }
         pop();

         push();

         var c = mouseY;
         noFill();
         stroke(142,124, 240, 70);
         strokeWeight(1);

         if(c < 300){
            for(var x=50; x<width; x+=50){
              for(var y=50; y<300; y+=50){
                var d = mouseY/10;
                 ellipse(x, y, d);}
                 }
             for(var x=50; x<width; x+=50){
               for(var y=300; y<height; y+=50){
                 ellipse(x, y, 25);}
                 }
             } else {
               for(var x=50; x<width; x+=50){
                 for(var y=300; y<height; y+=50){
                   var d = mouseY/10;
                    ellipse(x, y, d);}}
                for(var x=50; x<width; x+=50){
                  for(var y=50; y<300; y+=50){
                    ellipse(x, y, 20);}
                    }
         }
            pop();


  // put drawing code here
}
