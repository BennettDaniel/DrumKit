var sounds = {
65 : 'snare', // key 'A'
83 : 'kick', // key 'S'
68 : 'rim', // key 'D'
70 : 'heavytom', // key 'F'
71 : 'hitom', // key 'G'
72 : 'closedhat', // key 'H'
74 : 'openhat', // key 'J'
75 : 'ride', // key 'K'
76 : 'crashcymbal', // key 'L'
 };

 function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  };

 document.onkeydown = function player (e) {
     var soundId = sounds[e.keyCode];
     if (soundId) document.getElementById(soundId).play();
     else console.log("key not mapped : code is", e.keyCode);
     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
     key.classList.add('playing');

 };

 const keys = Array.from(document.querySelectorAll('.key'));
 keys.forEach(key => key.addEventListener('transitionend', removeTransition));
