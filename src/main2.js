import string from './css.js'


const player={
  n:1,
  time:50,
  id:undefined,
  ui:{
    demo1:document.querySelector('#demo1'),
    demo2:document.querySelector('#demo2')
  },
  init:()=>{
    player.ui.demo1.innerText=string.substr(0, player.n)
    player.ui.demo2.innerHTML=string.substr(0, player.n)
    player.bindEvents()
    player.play()
  },
  events:{
    '#btnPause':'pause',
    '#btnPlay':'play',
    '#btnSlow':'slow',
    '#btnNormal':'normal',
    '#btnFast':'fast'
  },
  bindEvents:()=>{
    for(let key in player.events){
      if(player.events.hasOwnProperty(key)){
        let value = player.events[key]
        document.querySelector(key).onclick=player[value]
      }
    } 
  },

  run : ()=>{
    player.n+=1
    if(player.n>string.length){
        window.clearInterval(player.id)
        return
    }
    demo1.innerText=string.substr(0,player.n)
    demo2.innerHTML=string.substr(0,player.n)
    demo1.scrollTop=demo1.scrollHeight //拉到最底下
  },
  play : ()=>{
    player.id= setInterval(player.run,player.time)
  },
  pause :()=>{
    window.clearInterval(player.id)
  },
  slow:()=>{
    player.pause()
    player.time=300
    player.play()
  },
  normal:()=>{
    player.pause()
    player.time=50
    player.play()
  },
  fast:()=>{
    player.pause()
    player.time=0
   player.play()
  }
}

player.init()




