
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDyIydxo9C0zZK5AqCO7aXaZiGPNQJ9DKM",
    authDomain: "prova1-ad8ce.firebaseapp.com",
    databaseURL: "https://prova1-ad8ce.firebaseio.com",
    projectId: "prova1-ad8ce",
    storageBucket: "prova1-ad8ce.appspot.com",
    messagingSenderId: "627700350371",
    appId: "1:627700350371:web:3b7ec0eb0eeb8a6f0c2e16"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// melodies & levels 

function choose_level(lvl) {
  level = lvl;
  document.getElementById("livello").innerHTML = "Livello: " + level;
  switch (level) {
  case 1:
    melody = "aaaassssaaaassss";
    break;
  case 2:
    melody = "aaaaaaaaaaaaaaaa";
    break;
  case 3:
    melody = "agesfasaagesfasa";
    break;
  case 4:
    melody = "afhsfsgaafhsfsga";
    break;
}
}

// player sequence
sequence = new Array();
p = 0;

// points

points = 500;



// removing obstacles & rules
function remove_obs(nota) {
  console.log("You pressed " + nota);
  sequence[p] = nota;
  console.log("p is equal to: " + p);
  block = document.getElementsByClassName("obstaclep");
  switch(level) {
    case 1: 
      if(sequence[p] == melody[k]) {
         if(p>0) {
            if(sequence[p-1] == melody[k-1]) {
               block[0].classList.remove("obstaclep");
               points = points+100;
               document.getElementById("punteggio").innerHTML = "points: "+ points ;
               block = document.getElementsByClassName("obstaclep");
               p++;
               if(block.length == 0) {
                  console.log("Hai vinto!");
             }
          } else { 
               points = points-50;
               document.getElementById("punteggio").innerHTML = "points: "+ points ;
               p++;
                 if(points == 0) {
                     console.log("Hai perso");
               }
          }
       } else {
            p++;
       }
    } else { 
         points = points-50;
         document.getElementById("punteggio").innerHTML = "points: "+ points ;
         p++;
         if(points == 0) {
             console.log("Hai perso");
       } 
    } 
    break;
    case 2: 
      a = keys.indexOf(melody[k]);
      b = keys.indexOf(melody[k-1]);
      if(sequence[p] != sequence[p-1]) {
         if(sequence[p] == keys[a+3] || sequence[p] == keys[a+4] || sequence[p] == keys[a+7] || sequence[p] == keys[a+8] || sequence[p] == keys[a+9]) {
           if(sequence[p] == melody[k] && block.length == 8) {
               block[0].classList.remove("obstaclep");
               points = points+100;
               document.getElementById("punteggio").innerHTML = "points: "+ points ;
               block = document.getElementsByClassName("obstaclep");
               p++;
               if(block.length == 0) {
                    console.log("Hai vinto!");
             }
         } else if(sequence[p] == melody[k] && block.length == 1) {
               block[0].classList.remove("obstaclep");
               points = points+100;
               document.getElementById("punteggio").innerHTML = "points: "+ points ;
               block = document.getElementsByClassName("obstaclep");
               p++;
               if(block.length == 0) {
                     console.log("Hai vinto!");
             }
         } else if(p>0) {
             if(sequence[p-1] == keys[b+3] || sequence[p-1] == keys[b+4] || sequence[p-1] == keys[b+7] || sequence[p-1] == keys[b+8] || sequence[p-1] == keys[b+9]) {
                 block[0].classList.remove("obstaclep");
                 points = points+100;
                 document.getElementById("punteggio").innerHTML = "points: "+ points ;
                 block = document.getElementsByClassName("obstaclep");
                 p++;
                 if(block.length == 0) {
                     console.log("Hai vinto!");
               }
           } else { 
               points = points-50;
               document.getElementById("punteggio").innerHTML = "points: "+ points ;
               p++;
                 if(points == 0) {
                     console.log("Hai perso");
               }
           } 
         } else {
             p++;
         }
       } else { 
           points = points-50;
           document.getElementById("punteggio").innerHTML = "points: "+ points ;
           p++;
           if(points == 0) {
              console.log("Hai perso");
         }
       } 
    } else { 
          points = points-50;
          document.getElementById("punteggio").innerHTML = "points: "+ points ;
          p++;
          if(points == 0) {
              console.log("Hai perso");
        }
    } break;  
  }  
  console.log(sequence);
  console.log(points);
}

// character animation


// sounds & keyboard & metronome
const c = new AudioContext();

keys = "awsedftgyhujikolp";
beat = 0;
n = 0;
l = 0;

function play_note(freq) {
  const lfoo = c.createOscillator();
  lfoo.type = 'square';
  lfoo.frequency.value = 440*Math.pow(2, freq/12);
  lfoo.start();
  const g = c.createGain();
  lfoo.connect(g);
  g.gain.value = 0;
  g.gain.linearRampToValueAtTime(0.6, c.currentTime + 0.01);
  g.gain.linearRampToValueAtTime(0, c.currentTime + 0.4);
  g.connect(c.destination);
}


setInterval(function () {
  if(n != 0) {
  l++; 
  metronome();
}
},10)

function metronome() {
    if(l == 100) {
     l = 0;
     play_note(12)
     metron = document.getElementsByClassName("tempo");
     metron[beat].classList.remove("metro");
     beat++;
     if(beat>7) {
        beat = 0;
        metron[0].classList.add("metro");
        metron[1].classList.add("metro");
        metron[2].classList.add("metro");
        metron[3].classList.add("metro");
        metron[4].classList.add("metro");
        metron[5].classList.add("metro");
        metron[6].classList.add("metro");
        metron[7].classList.add("metro");
  }
}
}


function start_tempo() {
   if(n==0) {
      n = 1;
 } else {
      n = 0;
      beat = 0;
      metron[0].classList.add("metro");
      metron[1].classList.add("metro");
      metron[2].classList.add("metro");
      metron[3].classList.add("metro");
      metron[4].classList.add("metro");
      metron[5].classList.add("metro");
      metron[6].classList.add("metro");
      metron[7].classList.add("metro");
  }
}

// keypress event
block = new Array(8);

document.body.onkeypress = function(e) {
  
     if(e.repeat) return;
   if(block.length != 0 && points > 0) {
     if(l < 60 && l > 40) {
     k = p;
     remove_obs(e.key)
 } 
     //else if(l > 90) {
     //k = p + 1;
    //console.log("k is equal to: " + k);
     //remove_obs(e.key)
 //} 
     else {
       play_note(-10)
       points = points - 100;
       document.getElementById("punteggio").innerHTML = "points: "+ points ;
     } 
   } else {
            return;
}
  const tone = keys.indexOf(e.key);
  play_note(tone)
      
}

//restart game

function restart_game() {
  level = 1;
  document.getElementById("livello").innerHTML = "Livello: "+ level ;
  points = 500;
  document.getElementById("punteggio").innerHTML = "points: "+ points ;
  sequence = new Array();
  p = 0;
  a = 0;
  l = 0;
  block = document.getElementsByClassName("obstacle");
       
  if(block.classList != "obstaclep") {
   for(i=0; i<=7; i++) {
  block[i].classList.add("obstaclep");
  }
 }
}