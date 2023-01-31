let mint = document.getElementById("mint");
let sec = document.getElementById("seconds");
let mili = document.getElementById("mili");
let intervalControl = null;
let checkInterval = false;
let btnStart = document.getElementById("start");
let btnStop = document.getElementById("stop");
let btnRestart = document.getElementById("restart");
mint = Number(mint.innerHTML);
sec = Number(sec.innerHTML);
mili = Number(mili.innerHTML);

function start() {
  if (checkInterval === false) {
    interval();
    checkInterval = true;
  }
}

function stop() {
  clearInterval(intervalControl);
  checkInterval = false;
}
function restart() {
  checkInterval = false;
  mint = 00;
  document.getElementById("mint").innerHTML = mint.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  });
  sec = 00;
  document.getElementById("seconds").innerHTML = sec.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  });
  mili = 00;
  document.getElementById("mili").innerHTML = mili.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  });
}
function timer() {
  mili++;
  if (mili === 59) {
    mili = 0;
    sec++;
  }
  if (sec === 59) {
    mint++;
    sec = 0;
  }
  document.getElementById("mili").innerHTML = mili.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  });

  document.getElementById("seconds").innerHTML = sec.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  });
  document.getElementById("mint").innerHTML = mint.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  });
}
function interval() {
  intervalControl = setInterval(timer, 10);
}
