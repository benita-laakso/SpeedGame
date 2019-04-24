let buttons = [// The circles in HTML
  document.getElementById("one"),
  document.getElementById("two"),
  document.getElementById("three"),
  document.getElementById("four")
];
// ad event handler
buttons[0].onclick = function() {
  clicked(0)
};
buttons[1].onclick = function() {
  clicked(1)
};
buttons[2].onclick = function() {
  clicked(2)
};
buttons[3].onclick = function() {
  clicked(3)
};

let current = 0; // current active button
let score = 0; //score
let pace = 1500; //speed

function clicked(i) {
  console.log('clicked:', i);

  if (i !== current) {
    console.log('ups');
    gameOver();
  } else {
    score++;
    pace = pace - 10;
    document.getElementById('score').innerHTML = score;
  }
}
// Random
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function pickNext() { // button we are calling and changing of color every tick
  let next = pickNew(current);
  buttons[current].style.backgroundColor = '#f3f3f3'; //reffers to array
  buttons[next].style.backgroundColor = 'green';

  current = next;
  console.log('current', current);

  timer = setTimeout(pickNext, pace);

  function pickNew(previous) {//piking the color
    let next = getRndInteger(0, 4);

    if (next != previous) {
      return next;
    } else {
      return pickNew(previous);
    }
  }
}

function gameOver() {
  clearTimeout(timer);
  for (let i = 0; i < 4; i++) {
    buttons[i].style.backgroundColor = "red";
    buttons[i].onclick = null;
  }
  let overlay = document.getElementById('background');
    overlay.style.visibility = 'visible';
  let gameover = document.getElementById('message');
  gameover.innerHTML = `Ups,game over <br> Your final score is ${score}`;
}
