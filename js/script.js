// JS
wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
})
wow.init(); 

// JQ
$(document).ready(function () {
  $(".counter1").counterUp({
    delay: 10,
    time: 1000,
  });
  // couter2

  $("#circle-1").Circlebar({
    maxValue: 20,
    fontSize: "14px",
    triggerPercentage: true
});
var t2 = new Circlebar({
    element: ".circle-2",
    maxValue: 252,
    dialWidth: 40,
    fontColor: "#777",
    fontSize: "30px",
    skin: "fire",
    type: "manual"
});

new Circlebar({
    element: "#circle-3",
    maxValue: 230,
    size: "240px",
    fontSize: "30px",
    type: "progress"
});
//  counter3
// Selector
const counters = document.querySelectorAll('.counter');
// Main function
for(let n of counters) {
  const updateCount = () => {
    const target = + n.getAttribute('data-target');
    const count = + n.innerText;
    const speed = 5000; // change animation speed here
    const inc = target / speed; 
    if(count < target) {
      n.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      n.innerText = target;
    }
  }
  updateCount();
}
//  counter4
$('.counter4').countUp({
  'time': 2000,
  'delay': 10
});

// parralox
$('#particles').particleground({
  minSpeedX: 0.1,
  maxSpeedX: 0.7,
  minSpeedY: 0.1,
  maxSpeedY: 0.7,
  directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
  directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
  density: 10000, // How many particles will be generated: one particle every n pixels
  dotColor: '#666666',
  lineColor: '#666666',
  particleRadius: 9, // Dot size
  lineWidth: 2,
  curvedLines: false,
  proximity: 100, // How close two dots need to be before they join
  parallax: true,
  parallaxMultiplier: 8, // The lower the number, the more extreme the parallax effect
  onInit: function() {},
  onDestroy: function() {}
});


});
