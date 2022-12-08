const calculBtn = document.querySelector('#calculBtn');

calculBtn.addEventListener('click', function brthDayCalc() {
  const now = new Date();
  const dayInput = document.querySelector('#dayField').value;
  let dob = new Date(dayInput);
   
 // console.log(dob);

  const diff = dob - now;

  const msInSecond = 1000;
  const msInMinute = 60 * 1000;
  const msInHour = 60 * msInMinute;
  const msInDay = 24 * msInHour;

  const displayDay = Math.floor(diff / msInDay);
  document.querySelector('.daysCalculator').textContent = displayDay;

  const displayHour = Math.floor((diff % msInDay) / msInHour);
  document.querySelector('.hoursCalculator').textContent = displayHour;

  const displayMinute = Math.floor((diff % msInHour) / msInMinute);
  document.querySelector('.minutesCalculator').textContent = displayMinute;

  const displaySecond = Math.floor((diff % msInMinute) / msInSecond);
  document.querySelector('.secondsCalculator').textContent = displaySecond;

  if (diff <= 0) {
    document.querySelector('.daysCalculator').textContent = 0;
    document.querySelector('.hoursCalculator').textContent = 0;
    document.querySelector('.minutesCalculator').textContent = 0;
    document.querySelector('.secondsCalculator').textContent = 0;
    clearInterval(timerID);
  }

  let timerID = setInterval(brthDayCalc, 1000);
 
});


calculBtn.addEventListener('click', function(){
    document.querySelector('#myaudio').play();
})
const pauseBtn = document.querySelector('#myButton');
console.log(pauseBtn);

pauseBtn.addEventListener('click', function () {
  document.querySelector('#myaudio').pause();
});
