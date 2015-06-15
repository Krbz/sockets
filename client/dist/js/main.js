"use strict";var modules={variables:function(){document.getElementById("draw"),document.getElementById("addNewPinBtn"),document.getElementById("togglePinsBtn"),document.getElementById("copyUrlBtn"),document.getElementById("voteProjectBtn")},init:function(){var t=this;t.variables(),t.url(),t.pin(),draw.style.backgroundImage="url("+template.pics()[Math.floor(Math.random()*template.pics().length)]+")"},project:function(){this.init=function(){},this.properties=function(){}},pin:function(){var t=this;return this.init=function(e){togglePinsBtn.addEventListener("click",function(){togglePinsBtn.classList.toggle("active"),togglePinsBtn.classList.contains("active")?t.showAllPins():t.closeAllPins()}),addNewPinBtn.addEventListener("click",function(){addNewPinBtn.classList.toggle("active"),t.closeAllCommentArea()}),draw.addEventListener("click",t.clickHandler)},this.clickHandler=function(e){addNewPinBtn.classList.contains("active")&&(togglePinsBtn.classList.add("active"),e.target.classList.contains("circ")?(e.target.addEventListener("click",t.commentArea(e)),t.activePin(e.target)):e.target===draw?(t.showAllPins(),t.closeAllCommentArea(),t.addNew(e),t.clearAllActivePin()):e.target.classList.contains("close-commentArea")&&(e.target.parentNode.classList.add("displayNone"),e.target.parentNode.parentNode.classList.remove("activePin"),e.target.parentNode.parentNode.classList.remove("fa-dot-circle-o")))},this.activePin=function(t){t.classList.toggle("fa-dot-circle-o"),t.classList.toggle("activePin")},this.clearAllActivePin=function(){for(var t=0;t<draw.querySelectorAll(".circ").length;t++)draw.querySelectorAll(".circ")[0].classList.remove("fa-dot-circle-oactivePin")},this.addNew=function(e){var n=draw.offsetTop,i=draw.offsetLeft,a=document.createElement("span");a.classList.add("circ"),a.style.left=e.pageX-i-18+"px",a.style.top=e.pageY-n-18+"px",e.pageX-n-18>draw.offsetWidth/2?(a.innerHTML=template.pin.rightComment,a.querySelector(".commentArea").classList.add("commentAreaLeft")):a.innerHTML=template.pin.leftComment,a.id=t.getPrivatId(),t.activePin(a),draw.appendChild(a)},this.commentArea=function(e){e.target.querySelector(".commentArea").classList.contains("displayNone")?(t.closeAllCommentArea(),e.target.querySelector(".commentArea").classList.remove("displayNone")):e.target.querySelector(".commentArea").classList.add("displayNone")},this.closeAllCommentArea=function(){for(var t=document.querySelectorAll(".circ"),e=0;e<t.length;e++)t[e].querySelector(".commentArea").classList.add("displayNone"),t[e].classList.remove("activePin"),t[e].classList.remove("fa-dot-circle-o")},this.closeAllPins=function(){for(var t=document.querySelectorAll(".circ"),e=0;e<t.length;e++)t[e].classList.add("displayNone")},this.showAllPins=function(){for(var t=document.querySelectorAll(".circ"),e=0;e<t.length;e++)t[e].classList.remove("displayNone")},this.getPrivatId=function(){return modules.uuid(8)},this.init()},uuid:function(t){for(var e=(new Date).getTime(),n="";t-->0;)n+="x";var i=n.replace(/[x]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)});return i},url:function(){var t=this;return this.init=function(){copyUrlBtn.addEventListener("click",function(){console.log(t.getUrl())})},this.getUrl=function(){return window.location.href},t.init()}},io=io();modules.init();