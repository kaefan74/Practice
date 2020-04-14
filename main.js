'use strict'
{
  const re=document.getElementById("re");
  const aite=document.getElementById("aite");
  const janken=[
    [1,0,2],
    [2,1,0],
    [0,2,1]
  ];
//グー 0(key1)チョキ 1(key2)パー 2(key3)
  window.addEventListener('keydown',e=>{

    //入力
    const input=["dmy",0,1,2];
    const n=input[e.key];
    //相手
    const cpu=Math.floor(Math.random()*3);

    function ja(){
      const results=["勝ち","引き分け","負け"]
      const k=janken[n][cpu];
      re.textContent=results[k];
      
      setTimeout(()=>{
        const kekka=["グー","チョキ","パー"];
        console.log(kekka[cpu]);
        aite.textContent ='相手は['+kekka[cpu]+']です!';
      },1000);
  }
  setTimeout(ja,750);
  });
}