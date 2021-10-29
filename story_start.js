let hero = document.querySelector('#hero');
let villain = document.querySelector('#villain');
let lightning = document.querySelector('#lightning');
let btnLetPlay = document.querySelector('#button_play');

// focus goal good
function focusGoalGood() {
  let lightningStart = { left: '290px' };
  let lightningEnd = { left: '900px' };
  let options = { duration: 1000 }; // how long action should play for in this case; ms
  let type = 'goodGoal';

  resultLighting(lightningStart, lightningEnd, options, type);
}

// focus goal bad
function focusGoalBad() {
  let lightningStart = { left: '290px' };
  let lightningEnd = { left: '900px', top: '70px' };
  let options = { duration: 1000 }; // how long action should play for in this case; ms
  let type = 'badGoal';

  resultLighting(lightningStart, lightningEnd, options, type);
}

// function receive start & end ligntning; return bad of good case
function resultLighting(lightningStart, lightningEnd, options, type) {
  btnLetPlay.disabled = true;
  setTimeout(() => {
    btnLetPlay.disabled = false;
  }, options.duration);

  if (type === 'goodGoal') {
    lightning.animate([lightningStart, lightningEnd], options).onfinish =
      hitTheVillain;
  }

  lightning.animate([lightningStart, lightningEnd], options);
}

// animation if we hit the villain
function hitTheVillain() {
  let villainStart = {
    transform: 'rotate(0deg)',
    opacity: 100,
    transition: '0.4s',
  };
  let villainEnd = { transform: 'rotate(1000deg)', opacity: 0 };

  let options = { duration: 1500 };

  actionOfVillain(villainStart, villainEnd, options);
}

// action of Villain character
function actionOfVillain(villainStart, villainEnd, options) {
  btnLetPlay.disabled = true;
  setTimeout(() => {
    btnLetPlay.disabled = false;
  }, options.duration);

  villain.animate([villainStart, villainEnd], options);
}

// random good or bad lightning by onclick
function randomTypelightning() {
  const numbRandom = Math.floor(Math.random() * 2);

  if (numbRandom === 0) {
    focusGoalGood();
    return;
  }

  focusGoalBad();
}
