
var daysEL = document.getElementById('days');
var hoursEL = document.getElementById('hours');
var minsEL = document.getElementById('mins');
var secondsEL = document.getElementById('seconds');

const newYears = '1 January 2023'; // khởi tạo ngày bằng string 


function cowntDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEL.innerHTML = days;
    hoursEL.innerHTML = hours;
    minsEL.innerHTML = minutes;
    secondsEL.innerHTML = seconds;

    if(totalSeconds < 0){
        clearInterval(cowntDown);
        document.querySelector('.heading').innerHTML = "Happy New Year";
        document.querySelector('.countDown').style.display = "none";
    }

}

// initial call
cowntDown();
setInterval(cowntDown,1000);

var day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function watchTime(){

    var nowTime = new Date();
    var hours = nowTime.getHours();
    var Minutes = nowTime.getMinutes();
    var Seconds = nowTime.getSeconds();

    document.querySelector('.day').innerHTML = day[nowTime.getDay()];
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = Minutes;
    document.querySelector('.seconds').innerHTML = Seconds;

    
}
watchTime();
setInterval(watchTime,1000);



