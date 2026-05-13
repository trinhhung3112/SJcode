/* Card Reveal */
window.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.card-3d').forEach((card,i)=>{
    setTimeout(()=>{
      card.style.transition='opacity .5s ease,transform .6s cubic-bezier(.16,1,.3,1)';
      card.style.opacity='1';
      card.style.transform='translateY(0)';
    },900+Math.floor(i/2)*350);
  });
});

/* Hero Switch */
const TITLES=[
  {beyond:'Beyond Performance',sub:'BEYOND PERFORMANCE',big:'YIC'},
  {beyond:'Beyond Performance',sub:'HUMANENESS (仁)',big:'YIC'},
  {beyond:'Beyond Performance',sub:'SYMBIOSIS',big:'YIC'},
];
function switchHero(idx){
  document.querySelectorAll('.vid-bg video').forEach((v,i)=>{
    if(i===idx){v.style.opacity='1';v.play().catch(()=>{});}
    else v.style.opacity='0';
  });
  document.querySelectorAll('.nav-dot').forEach((d,i)=>d.classList.toggle('active',i===idx));
  const t=TITLES[idx];
  const beyond=document.getElementById('hlBeyond');
  if(beyond){
    beyond.style.animation='none';beyond.style.opacity='0';
    void beyond.offsetHeight;
    beyond.textContent=t.beyond;
    beyond.style.animation='';
  }
  if(idx===0){
    runSeq();
  } else {
    stopSeq();
    const seq=document.getElementById('hlSeq');
    if(seq) seq.style.display='none';
    const hr=document.getElementById('homeRight');
    if(hr){
      hr.innerHTML=`<div class="hl-beyond" id="hlBeyond" style="opacity:0;animation:hlFade .6s ease .2s forwards;">${t.beyond}</div>
        <div class="hl-line1"><span class="hl-sub" id="hlSub" style="opacity:0;transform:translateX(40px);animation:hlIn .7s cubic-bezier(.16,1,.3,1) .35s forwards;">${t.sub}</span></div>
        <div class="hl-line2"><span class="hl-big" id="hlBig" style="opacity:0;transform:translateX(40px);animation:hlIn .75s cubic-bezier(.16,1,.3,1) .65s forwards;">${t.big}</span></div>`;
    }
  }
}

let seqTimers=[];
function stopSeq(){
  seqTimers.forEach(t=>clearTimeout(t));
  seqTimers=[];
}
function runSeq(){
  stopSeq();
  const hr=document.getElementById('homeRight');
  if(!hr) return;
  hr.innerHTML=`<div class="hl-beyond" id="hlBeyond" style="opacity:0;animation:hlFade .6s ease .2s forwards;">Beyond Performance</div>
    <div class="hl-seq" id="hlSeq">
      <span class="hl-seq-item" id="hlSeq1">Made by People. For People.</span>
      <span class="hl-seq-item" id="hlSeq2">Where Care Meets Craft.</span>
      <span class="hl-seq-item" id="hlSeq3">We Live It.</span>
      <span class="hl-seq-final" id="hlBig">YIC</span>
    </div>`;

  const items=[
    {id:'hlSeq1', in:0.4,  out:2.0},
    {id:'hlSeq2', in:2.2,  out:3.8},
    {id:'hlSeq3', in:4.0,  out:5.6},
    {id:'hlBig',  in:5.8,  out:null},
  ];
  items.forEach(item=>{
    seqTimers.push(setTimeout(()=>{
      const el=document.getElementById(item.id);
      if(!el) return;
      el.style.opacity='0';
      el.style.transform='translateY(16px)';
      el.style.transition='opacity .5s ease, transform .5s ease';
      void el.offsetHeight;
      el.style.opacity='1';
      el.style.transform='translateY(0)';
    }, item.in*1000));
    if(item.out){
      seqTimers.push(setTimeout(()=>{
        const el=document.getElementById(item.id);
        if(!el) return;
        el.style.opacity='0';
        el.style.transform='translateY(-12px)';
      }, item.out*1000));
    }
  });
}

runSeq();

function forcePlay(){
  document.querySelectorAll('video').forEach((v) => {
    v.muted=true;
    const p=v.play();
    if(p)p.catch(()=>{});}
  );
}

function updateClock(){
  const now=new Date();
  const kst=new Date(now.toLocaleString('en-US',{timeZone:'Asia/Seoul'}));
  const vst=new Date(now.toLocaleString('en-US',{timeZone:'Asia/Ho_Chi_Minh'}));
  const fmt=d => {
    let h=d.getHours(), m=d.getMinutes(), ap=h >= 12 ? 'PM':'AM';
    h = h % 12 || 12;
    return( h < 10 ? '0'+ h : h) + ':' + (m < 10 ? '0' + m : m) +ap;
  };
  const k = document.getElementById('clockKST'), v = document.getElementById('clockVST');
  if (k) {k.textContent=fmt(kst)};
  if(v) {v.textContent=fmt(vst)};
}

updateClock();
setInterval(updateClock,1000);
forcePlay();
document.addEventListener('DOMContentLoaded',forcePlay);
document.addEventListener('click',forcePlay,{once:true});
document.addEventListener('visibilitychange', () => {
  if(!document.hidden) {
    forcePlay();
  }
});
setTimeout(forcePlay,800);
setTimeout(forcePlay,2000);

function locActivate(id){
  document.querySelectorAll('.loc-item').forEach((el) => {
    el.classList.toggle('active',el.id==='loc-'+id);
  });
  document.querySelectorAll('.loc-pin').forEach((el) => {
    el.classList.toggle('active',el.id==='pin-'+id);
  });
}

document.addEventListener('DOMContentLoaded',()=>{
  setTimeout(()=>{
    const io= new IntersectionObserver((entries) => {entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('v');});},{threshold:.12});
    document.querySelectorAll('.rv').forEach((el) => {io.observe(el);});
    const srIo=new IntersectionObserver((entries) => {entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on');});},{threshold:.12});
    document.querySelectorAll('.sr').forEach((el) => {srIo.observe(el);});
  },150);
});

