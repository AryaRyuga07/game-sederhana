const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const pop = document.querySelector('#pop');
const papanSkor = document.querySelector('.papan-skor');

let tanahBef;
let selesai;
let skor;

function random(tanah){
    const t = Math.floor(Math.random() * tanah.length);
    const trandom = tanah[t];
    if  (trandom == tanahBef){
        random(tanah);
    }
    tanahBef = trandom;
    return trandom;
}

function randomTime(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

function muncul(){
    const trand = random(tanah);
    const time = randomTime(300, 1000);
    trand.classList.add('muncul');
    setTimeout(() => {
        trand.classList.remove('muncul');
        if (!selesai) {
            muncul();
        } 
    }, time);
}

function mulai() {
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;
    muncul();
    setTimeout(() => {
        selesai = true;       
    }, 60000);
}

function pukul(){
    skor++;
    this.parentNode.classList.remove('muncul');
    pop.play();
    papanSkor.textContent = skor;
}

tikus.forEach(t => {
    t.addEventListener('click', pukul);
});

function start_timer() {
    var timer = document.getElementById("time").innerHTML;
    var arr = timer.split(":");
    var hour = arr[0];
    var min = arr[1];
    var sec = arr[2];
    if (sec == 0) {
        if (min == 0) {
            if (hour == 0) {
                alert("Waktu Habis");
                return;
            }
            hour--;
            min = 60;
            if (hour < 10) hour = "0" + hour;
        }
        min--;
        if (min < 10) min = "0" + min;
        sec = 59;
    }
    else sec--;
    if (sec < 10) sec == "0" + sec;

    document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
    setTimeout(start_timer, 1000);
}