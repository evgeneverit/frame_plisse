(function(){
  var tg=document.getElementById('tg'),seg=document.querySelectorAll('.seg button');
  function show(o){tg.classList.toggle('open',o);seg.forEach(function(b){b.setAttribute('aria-pressed',(+b.dataset.s===1)===o)})}
  seg.forEach(function(b){b.addEventListener('click',function(){show(b.dataset.s==='1')})});
  tg.addEventListener('click',function(){show(!tg.classList.contains('open'))});
  var lb=document.getElementById('lb'),li=lb.querySelector('img');
  document.getElementById('masonry').addEventListener('click',function(e){
    if(e.target.tagName!=='IMG')return;li.src=e.target.src;li.alt=e.target.alt;lb.showModal();
  });
  lb.addEventListener('click',function(){lb.close()});
  var nav=document.getElementById('nav'),m=document.getElementById('menu');
  m.addEventListener('click',function(){m.setAttribute('aria-expanded',nav.classList.toggle('open'))});
  nav.addEventListener('click',function(){nav.classList.remove('open')});

})();
