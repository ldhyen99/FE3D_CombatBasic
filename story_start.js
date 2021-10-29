let hero = document.querySelector('#hero');
let villain = document.querySelector('#villain');
let lightning = document.querySelector('#lightning');
let options = { duration: 1000 }; // how long action should play for in this case; ms

// focus goal good
function focusGoalGood() {
  let lightningStart = { left: '290px' };
  let lightningEnd = { left: '900px' };

  resultLighting(lightningStart, lightningEnd);
}

// focus goal bad
function focusGoalBad() {
  let lightningStart = { left: '290px' };
  let lightningEnd = { left: '900px', top: '70px' };

  resultLighting(lightningStart, lightningEnd);
}

// random good or bad lightning
function randomTypelightning() {
  const numbRandom = Math.floor(Math.random() * 2);
  console.log({ numbRandom });

  if (numbRandom === 0) {
    focusGoalGood();
    return;
  }

  focusGoalBad();
}

// function receive start & end ligntning; return bad of good case
function resultLighting(lightningStart, lightningEnd) {
  lightning.animate([lightningStart, lightningEnd], options);
}