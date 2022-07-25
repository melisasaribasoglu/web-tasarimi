const buton = document.getElementById("submit")
const gizli = document.getElementById("gizli")
const board = document.getElementById("board")
const main = document.getElementById("main")



var point = 0;
var arr = [
  "1000",
  "9999",
  "98 < 102 < 109",
  "110",
  "480",
  "14",
  "3",
  "6",
  "3",
  "2",
]; // doğru cevap dizisi  
var pointArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function control(qn, ans) {
  var par_id = document.getElementById("qp" + qn);

  if (arr[qn - 1] == ans) {
    // cevap doğru ise
    par_id.style.backgroundColor = "#5cfa91";
    if (pointArr[qn - 1] == 0) {
      point += 10;
    }
    pointArr[qn - 1] = 1;


  } else {
    // cevap yanlış ise
    par_id.style.backgroundColor = "#ffcac4";
    if (pointArr[qn - 1] == 1) {
      point -= 10;
    }
    pointArr[qn - 1] = 0;
  }

  
  document.getElementById("point").innerHTML = "Puan: " + point;
}

var time_id = document.getElementById("time");
var seconds =300;                         
t_int = setInterval(timer, 1000);

function timer() {
  if (seconds <= 0) {
    time_id.innerHTML = "Süre: --:--";
    let sayac = 5;
  board.style.opacity=0.1
  main.style.opacity=0.1
  
  gizli.innerHTML ="<div> Süreniz dolmuştur. Puan : "+point +" <br />  "+sayac+" saniye sonra anasayfaya yönlendirileceksiniz.  </div>";
  gizli.style.display="flex";
  gizli.style.justifyContent="center";
  gizli.style.alignItems="center";
  gizli.style.flexDirection="column";
  gizli.style.fontWeight="bold";
  setInterval(function(){
    sayac--
    if(sayac == 0) document.location.href = "../../index.html"
  }, 1000); //1 saniyede sayac azalıyor

  } else {
    var m = Math.floor(seconds);
    var s = seconds % 60;
    if (m < 10) {
      m = "0" + m;
    }
    if (s < 10) {
      s = "0" + s;
    }
    time_id.innerHTML = "Süre: " + m ;
    seconds--;
  }
}
buton.addEventListener('click',function(){
  let sayac = 5;
  board.style.opacity=0.1
  main.style.opacity=0.1
  gizli.innerHTML +="<div> Puan : "+point +" <br />  "+sayac+" saniye sonra anasayfaya yönlendirileceksiniz.  </div>";
  gizli.style.display="flex";
  gizli.style.justifyContent="center";
  gizli.style.alignItems="center";
  gizli.style.flexDirection="column";
  gizli.style.fontWeight="bold";
  setInterval(function(){
    sayac--
    if(sayac == 0) document.location.href = "../../index.html"
  }, 1000);
})

