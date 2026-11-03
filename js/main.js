(function(){
  var tg=document.getElementById('tg'),seg=document.querySelectorAll('.seg button');
  function show(o){tg.classList.toggle('open',o);seg.forEach(function(b){b.setAttribute('aria-pressed',(+b.dataset.s===1)===o)})}
  seg.forEach(function(b){b.addEventListener('click',function(){show(b.dataset.s==='1')})});
  tg.addEventListener('click',function(){show(!tg.classList.contains('open'))});
  var lb=document.getElementById('lb'),li=lb.querySelector('img'),
    imgs=[].slice.call(document.querySelectorAll('#masonry img')),cur=0;
function openAt(i){
  cur=(i+imgs.length)%imgs.length;
  li.src=imgs[cur].src;li.alt=imgs[cur].alt;
  if(!lb.open)lb.showModal();
}
document.getElementById('masonry').addEventListener('click',function(e){
  if(e.target.tagName==='IMG')openAt(imgs.indexOf(e.target));
});
lb.querySelector('.lb-p').addEventListener('click',function(e){e.stopPropagation();openAt(cur-1)});
lb.querySelector('.lb-n').addEventListener('click',function(e){e.stopPropagation();openAt(cur+1)});
lb.addEventListener('click',function(){lb.close()});
document.addEventListener('keydown',function(e){
  if(!lb.open)return;
  if(e.key==='ArrowLeft')openAt(cur-1);
  if(e.key==='ArrowRight')openAt(cur+1);
});
  var nav=document.getElementById('nav'),m=document.getElementById('menu');
  m.addEventListener('click',function(){m.setAttribute('aria-expanded',nav.classList.toggle('open'))});
  nav.addEventListener('click',function(){nav.classList.remove('open')});

})();
