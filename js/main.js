'use strict';
{
  const timer=document.getElementById('timer');
  const start=document.getElementById('start');
  const stop=document.getElementById('stop');
  const reset=document.getElementById('reset');
  const result=document.getElementById('result');
  const mi =document.getElementById('mi');

  let startTime;
  let timeoutId;
  let elTime=0;
  let loc=0;
  let keys="";

  //数字を入力
    window.addEventListener('keydown',e=>{
      setReset();
      if(isNaN(e.key)!==false){
        //数字以外が入力された場合
        alert('数字を入力してください');
        mi.textContent='';
        keys="";
      }else{
        keys+=Number(e.key);
        const k=String(keys).trimStart(2,'0');
        mi.textContent=`${k}秒`;
        // setRunning();
        loc++;
        if(loc===3 || keys >60){
          //入力数字が６０秒以上だった場合
          alert('60秒以内です');
          mi.textContent='';
          keys="";
        }
    }
  });

//時間
  function countUp(){
  const d = new Date(Date.now()-startTime+elTime);
  const m =String(d.getMinutes()).padStart(2,'0');
  const s =String(d.getSeconds()).padStart(2,'0');
  timer.textContent=`${m}:${s}`;
  timeoutId=setTimeout(()=>{
      countUp();
    },10); 
  }

  function setStart(){
    start.classList.add('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
  }

  function setStop(){
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
  }

  function setReset(){
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
  }

  setStart();

  //スタートボタン
  start.addEventListener('click',()=>{
    if(start.classList.contains('inactive')=== true){
      return;
    }
    startTime=Date.now();
    countUp();
    setStop();
    //スタートを押すと入力値が変化
    const k = String(keys).padStart(2,'0');
    mi.textContent=`00:${k}`;
    mi.classList.add('inactive');
    if(mi.classList.contains('inactive')=== true){
      return;
  }
  });

//ストップボタン
  stop.addEventListener('click',()=>{
    if(stop.classList.contains('inactive')=== true){
      return;
    }
    clearTimeout(timeoutId);
    elTime +=Date.now()-startTime;
    setReset();
    
    if(timer.textContent==mi.textContent){
      result.textContent='Good！';
    }else{
      result.textContent=`残念resetを押してもう一度！`;
    }
  });

  //リセットボタン
  reset.addEventListener('click',()=>{
    if(reset.classList.contains('inactive')=== true){
      return;
    }
    timer.textContent='00:00';
    mi.textContent='00:00';
    elTime=0;
    mi.textContent="";
    keys="";
    loc=0;
    setStart();
    result.textContent='数字(60秒以内)を入力してでSTOPを押してね';
    mi.classList.remove('inactive');
  });


}