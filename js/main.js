(function(){
  var tg=document.getElementById('tg'),seg=document.querySelectorAll('.seg button');
  function show(o){tg.classList.toggle('open',o);seg.forEach(function(b){b.setAttribute('aria-pressed',(+b.dataset.s===1)===o)})}
  seg.forEach(function(b){b.addEventListener('click',function(){show(b.dataset.s==='1')})});
  tg.addEventListener('click',function(){show(!tg.classList.contains('open'))});
  var lb=document.getElementById('lb'),li=lb.querySelector('img'),lv=lb.querySelector('video'),
    imgs=[].slice.call(document.querySelectorAll('#masonry img')),cur=0;
  function openAt(i){
    cur=(i+imgs.length)%imgs.length;
    var el=imgs[cur],v=el.dataset.video;
    lv.pause();
    if(v){
      li.hidden=true;lv.hidden=false;lv.src=v;lv.poster=el.src;
      lv.play().catch(function(){});
    }else{
      lv.hidden=true;li.hidden=false;li.src=el.src;li.alt=el.alt;
    }
    if(!lb.open)lb.showModal();
}
document.getElementById('masonry').addEventListener('click',function(e){
  if(e.target.tagName==='IMG')openAt(imgs.indexOf(e.target));
});
lv.addEventListener('click',function(e){e.stopPropagation()});
lb.querySelector('.lb-p').addEventListener('click',function(e){e.stopPropagation();openAt(cur-1)});
lb.querySelector('.lb-n').addEventListener('click',function(e){e.stopPropagation();openAt(cur+1)});
lb.addEventListener('click',function(){lb.close()});
lb.addEventListener('close',function(){lv.pause()});
document.addEventListener('keydown',function(e){
  if(!lb.open)return;
  if(e.key==='ArrowLeft')openAt(cur-1);
  if(e.key==='ArrowRight')openAt(cur+1);
});
  var nav=document.getElementById('nav'),m=document.getElementById('menu');
  m.addEventListener('click',function(){m.setAttribute('aria-expanded',nav.classList.toggle('open'))});
  nav.addEventListener('click',function(){nav.classList.remove('open')});

})();
