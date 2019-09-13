// CANVAS CIRCEL DRAW
// requestAnimationFrame Shim
(function () {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();






var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
// var x = canvas.width / 2;
var x = 250;
// var y = canvas.height / 2;
var y = 170;
// var radius = 75;
var radius = 150;
var endPercent = 85;
var curPerc = 0;
var counterClockwise = false;
var circ = Math.PI * 2;
var quart = Math.PI / 2;

context.lineWidth = 10;
// context.strokeStyle = '#ad2323';
context.strokeStyle = '#DFCF77';
context.shadowOffsetX = 0;
context.shadowOffsetY = 0;
context.shadowBlur = 10;
context.shadowColor = '#656565';


function animate(current) {
  // DOC : https://developer.mozilla.org/fr/docs/Web/API/CanvasRenderingContext2D/clearRect
  // context.clearRect(0, 0, canvas.width, canvas.height);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
  context.stroke();
  curPerc++;
  if (curPerc < endPercent) {
    requestAnimationFrame(function () {
      animate(curPerc / 100)
    });
  }
}

// DOC https://greensock.com/docs/TimelineMax/to
var bbAnim = new TimelineMax();
bbAnim
  .from("#underscore", 1, {y:-100, scale:2 , ease:Elastic.easeOut},1)
  .to("#underscore", 1, {opacity:1},1)
  .to("#b0", 1, {y: -185, ease: Power4.easeOut},2)
  .to("#b1", 0.5, {y: -90, ease: Power4.easeOut},3)
  .to("#b1", 0.5, {y: 0, ease: SteppedEase.config(4)})
  .to("#b1", 1, {y: -185, ease: Elastic.easeOut})
  .add( animate )
  // .to("#b0", 1, {rotationY:180})
  // .to("#canvas-wrap", 1, {rotationY:360})

// animate();