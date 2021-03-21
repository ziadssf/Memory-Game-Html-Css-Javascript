const levelBtn = document.querySelectorAll('.level');
const loadingPage = document.querySelector('.loading');
const gameDom = document.querySelector('.game');
const levelsDom = document.querySelector('.levels');
const levelsDomH1 = document.querySelector('.game h1')
const form = gameDom.querySelector('form');
let scores = parseInt(document.querySelector('.scores').textContent);
const myInput = form.querySelector('input');
const visible = document.querySelector('.visible');
const level_1 = document.querySelector('.level-1');
const level_2 = document.querySelector('.level-2');
const level_3 = document.querySelector('.level-3');
const level_4 = document.querySelector('.level-4');
const level_5 = document.querySelector('.level-5');
const level_6 = document.querySelector('.level-6');
const level_7 = document.querySelector('.level-7');
const level_8 = document.querySelector('.level-8');
const level_9 = document.querySelector('.level-9');
const level_10 = document.querySelector('.level-10');
const level_11 = document.querySelector('.level-11');
const level_12 = document.querySelector('.level-12');
const level_13 = document.querySelector('.level-13');


levelBtn.forEach(btn => {
   btn.addEventListener('click', () => {
      if (!btn.querySelector('i')) {
         loadingPageTimer = setTimeout(loadingPageFunc, 0);
         const levelsTextContent = parseInt(btn.querySelector('h1').textContent);
         randomNumbersUi(levelsTextContent,btn);
      }
   })
});

document.querySelector('.scores').textContent = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;


function loadingPageFunc() {
   loadingPage.style.display = 'flex';
   document.body.style.overflow = 'hidden';
   window.scrollBy(0, -100000);
   loadingPageFuncClose();
}

function loadingPageFuncClose() {
   setTimeout(() => {
      loadingPage.style.display = 'none';
      document.body.style.overflow = 'auto';
      gameDisplay();
   },1500)
}

function gameDisplay() {
   gameDom.style.display = 'block';
   levelsDom.style.display = 'none';
}

function randomNumbersUi(levelsTextContent,btn) {
   const numLength = [1, 2, 3, 4, 5, 6];
   const randNum = numLength[Math.floor(Math.random() * numLength.length)];
   levelsDomH1.innerHTML = data[0][levelsTextContent][randNum];
   form.querySelector('input').focus()
   setTimeout(formShow, ((levelsTextContent * 2) * 1000) + 2500);
   form.addEventListener('submit', (e) => {
      formFunc(levelsTextContent,e,btn);
   })
}

function formFunc(levelsTextContent,e,btn) {
   e.preventDefault();
   if (parseInt(levelsDomH1.textContent) == parseInt(myInput.value)) {
      levelsDomH1.innerHTML = `True <span>+💰100</span>`;
      form.style.display = 'none';
      myInput.value = ''
      let scoreLs = localStorage.getItem('score')
      if (scoreLs) {
         localStorage.setItem('score', parseInt(localStorage.getItem('score')) + 100);
         document.querySelector('.scores').textContent = parseInt(localStorage.getItem('score'));
      } else {
         localStorage.setItem('score', 100)
         document.querySelector('.scores').textContent = parseInt(localStorage.getItem('score'));
      }
      setTimeout(()=>next(levelsTextContent),1200)
   } else if (parseInt(levelsDomH1.textContent) != parseInt(myInput.value)) {
      form.style.display = 'none';
      myInput.value = '';
      setTimeout(()=>next(levelsTextContent),1200)
   }
}

function next() {
   loadingPageFunc();
   window.location.reload();
   document.querySelector('#winner').pause();
}

window.addEventListener('load', () => {
   document.body.style.overflow = 'hidden';
   loadingPage.style.display = 'flex';
   setTimeout(() => {
      loadingPage.style.display = 'none';
      document.body.style.overflow = 'auto';
   },1800)
})

window.addEventListener('reset', () => {
   window.scrollBy(0,-100000)
})

function allLevels() {
   const scoresLs = localStorage.getItem('score');
   if (scoresLs >= 200) {
      const i = document.createElement('i');
      i.classList = 'fa fa-star';
      level_1.appendChild(i);
      level_2.querySelector('i').remove();
   } if (scoresLs >= 400) {
      const i = document.createElement('i');
      i.classList = 'fa fa-star';
      level_2.appendChild(i)
      level_3.querySelector('i').remove();
   } if (scoresLs >= 600) {
      const i = document.createElement('i');
      i.classList = 'fa fa-star';
      level_3.appendChild(i)
      level_4.querySelector('i').remove();
   } if (scoresLs >= 800) {
      const i = document.createElement('i');
      i.classList = 'fa fa-star';
      level_4.appendChild(i)
      level_5.querySelector('i').remove();
   } if (scoresLs >= 1000) {
      const i = document.createElement('i');
      i.classList = 'fa fa-star';
      level_5.appendChild(i)
      level_6.querySelector('i').remove();
   } if (scoresLs >= 1200) {
      const i = document.createElement('i');
      i.classList = 'fa fa-star';
      level_6.appendChild(i)
      level_7.querySelector('i').remove();
   } if (scoresLs >= 1400) {
      const i = document.createElement('i');
      i.classList = 'fa fa-star';
      level_7.appendChild(i)
      level_8.querySelector('i').remove();
   } if (scoresLs >= 1600) {
      const i = document.createElement('i');
      i.classList = 'fa fa-star';
      level_8.appendChild(i)
      level_9.querySelector('i').remove();
   } if (scoresLs >= 1800) {
      const i = document.createElement('i');
      i.classList = 'fa fa-star';
      level_9.appendChild(i)
      level_10.querySelector('i').remove();
   } if (scoresLs >= 2000) {
      const i = document.createElement('i');
      i.classList = 'fa fa-star';
      level_10.appendChild(i)
      level_11.querySelector('i').remove();
   } if (scoresLs >= 2200) {
      const i = document.createElement('i');
      i.classList = 'fa fa-star';
      level_11.appendChild(i)
      level_12.querySelector('i').remove();
   } if (scoresLs >= 2400) {
      const i = document.createElement('i');
      i.classList = 'fa fa-star';
      level_12.appendChild(i);
      visible.style.display = 'block';
      document.body.style.overflow = 'hidden';
      document.querySelector('#winner').play();
      setTimeout(() => {
         localStorage.removeItem('score');
         next();
      }, 5000);
   }
} allLevels();



function formShow() {
   form.style.display = 'block';
}


function endGame() {
   const stars = document.createElement('div');
   stars.classList.add('stars');
   stars.innerHTML = `<i class="fa fa-star" aria-hidden="true"></i>`;
   visible.appendChild(stars);
   stars.style.left = Math.random() * 90 + 'vw';
   stars.style.animationDuration = Math.random() * 2 + 3 + 's';
}

setInterval(endGame, 400);