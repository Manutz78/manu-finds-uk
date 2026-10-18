const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    navigation.classList.toggle('open', !expanded);
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

// Load optional analytics only with explicit visitor consent.
(function(){
 var banner=document.getElementById('analytics-choice');
 if(!banner)return;
 var key='manufinds-analytics-choice';
 var choice=null;
 try{choice=localStorage.getItem(key)}catch(e){}
 function loadAnalytics(){if(document.getElementById('metricool-tracker'))return;var s=document.createElement('script');s.id='metricool-tracker';s.src='https://tracker.metricool.com/resources/be.js';s.onload=function(){if(window.beTracker)window.beTracker.t({hash:'fc36cf789cc2bf448206803948aaf98a'})};document.head.appendChild(s)}
 if(choice==='yes'){loadAnalytics()}else if(choice!=='no'){banner.hidden=false}
 function save(v){try{localStorage.setItem(key,v)}catch(e){}banner.hidden=true;if(v==='yes')loadAnalytics()}
 document.getElementById('analytics-accept').addEventListener('click',function(){save('yes')});
 document.getElementById('analytics-reject').addEventListener('click',function(){save('no')});
})();
