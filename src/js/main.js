import { setInterval } from "timers";

let next = document.querySelector(".next")
let prev = document.querySelector(".prev")
let video = document.querySelector(".video-main")
let icons = document.querySelectorAll(".icon_more")


function nextVideo() {
  video.classList.add("addnext")
  next.classList.add("dont")
  prev.classList.remove("dont")
}

function prevVideo() {
  video.classList.remove("addnext")
  prev.classList.add("dont")
  next.classList.remove("dont")
}

next.addEventListener("click", nextVideo )
prev.addEventListener("click", prevVideo )

//let next = document.querySelector(".next")
let inner = document.querySelectorAll(".inner")
next.addEventListener("mouseover", function(){
  inner.forEach(function(el){
    el.classList.remove("nona")
  })
})
next.addEventListener("mouseout", function(){
  inner.forEach(function(el){
    el.classList.add("nona")
  }) 
})


//flagselect
let flagrus = document.querySelector(".flagrus")
let flagusa = document.querySelector(".flagusa")
let flagimg = document.querySelector(".flagimg")
let flagbtn = document.querySelector(".flagbtn")
let flagsselect = document.querySelector(".flagsselect")


flagbtn.addEventListener("mouseover", function(){
  flagsselect.classList.add("voton") 
  console.log("rus")
})


flagusa.addEventListener("click", function(){
  flagimg.src = this.src;
} )
flagrus.addEventListener("click", function(){
  flagimg.src = this.src;
  console.log("rus")
} )
