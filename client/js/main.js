"use strict";
//https://www.atlassian.com/git/tutorials/saving-changes/git-add
//https://www.atlassian.com/git/tutorials/using-branches/git-branch
var modules = {
    variables: function() {
        var draw = document.getElementById('draw'),
            addNewPinBtn = document.getElementById('addNewPinBtn'),
            togglePinsBtn = document.getElementById('togglePinsBtn'),
            copyUrlBtn = document.getElementById('copyUrlBtn'),
            voteProjectBtn = document.getElementById('voteProjectBtn');
    },
    init: function() {
        var self = this;
        self.variables();
        self.url();
        self.pin();
        //fake background - tempaltka
        draw.style.backgroundImage = 'url('+template.pics()[Math.floor(Math.random()*template.pics().length)]+')';
    },
    project: function() {
        var self = this;
        this.init = function() {
            
        };
        this.properties = function() {
            var created_date;
            var authro_name;
            var project_name;
            var score_all;
        };
    },
    pin: function() {
        var self = this;
        this.init = function(ev) {
            togglePinsBtn.addEventListener('click', function(){
                togglePinsBtn.classList.toggle('active');
                togglePinsBtn.classList.contains('active') ? self.showAllPins() : self.closeAllPins();
            });
            
            addNewPinBtn.addEventListener('click', function() {
                addNewPinBtn.classList.toggle('active');
                self.closeAllCommentArea();
            });
            //evHandler na '.circ', '.draw' (stopPropagation), '.others'
            draw.addEventListener('click', self.clickHandler );
        };
        this.clickHandler = function(ev) {
            if (addNewPinBtn.classList.contains('active')) {
    
                togglePinsBtn.classList.add('active');
                
                if (ev.target.classList.contains('circ')) {
                    ev.target.addEventListener('click', self.commentArea(ev));
                    self.activePin(ev.target);
                } else if (ev.target === draw) {
                    self.showAllPins();
                    self.closeAllCommentArea();
                    self.addNew(ev);
                    self.clearAllActivePin();
                } else if (ev.target.classList.contains('close-commentArea')) {
                    ev.target.parentNode.classList.add('displayNone');
                    ev.target.parentNode.parentNode.classList.remove('activePin');
                    ev.target.parentNode.parentNode.classList.remove('fa-dot-circle-o');
                }
            }
        };
        this.activePin = function(ev) {
            ev.classList.toggle('fa-dot-circle-o');
            ev.classList.toggle('activePin');
        };
        this.clearAllActivePin = function() {
            for (var i = 0; i < draw.querySelectorAll('.circ').length; i++) {
                draw.querySelectorAll('.circ')[0].classList.remove('fa-dot-circle-o'+'activePin');
            }
        };
        this.addNew = function(ev) {
            var drawY = draw.offsetTop, //20
                drawX = draw.offsetLeft; //130~
            var span = document.createElement("span");
                span.classList.add('circ');
                span.style.left = (ev.pageX-drawX-18)+'px';
                span.style.top = (ev.pageY-drawY-18)+'px';
                
                if (ev.pageX-drawY-18 > draw.offsetWidth/2) {
                    span.innerHTML = template.pin.rightComment;
                    span.querySelector('.commentArea').classList.add('commentAreaLeft')
                } else {
                    span.innerHTML = template.pin.leftComment;
                }

                span.id = self.getPrivatId();
                self.activePin(span);

            draw.appendChild(span)
            //innerHTML z json'a export wateva
        };
        this.commentArea = function(ev) {
            if (ev.target.querySelector('.commentArea').classList.contains('displayNone')) {
                self.closeAllCommentArea();
                ev.target.querySelector('.commentArea').classList.remove('displayNone');
            } else {
                ev.target.querySelector('.commentArea').classList.add('displayNone');
            }
        };
        this.closeAllCommentArea = function() {
            var circs = document.querySelectorAll('.circ');
            for (var i=0; i < circs.length; i++) {
                circs[i].querySelector('.commentArea').classList.add('displayNone');
                circs[i].classList.remove('activePin');
                circs[i].classList.remove('fa-dot-circle-o');
            }
        };
        this.closeAllPins = function() {
            var circs = document.querySelectorAll('.circ');
            for (var i = 0; i < circs.length; i++) {
                circs[i].classList.add('displayNone');
            }
        };
        this.showAllPins = function() {
            var circs = document.querySelectorAll('.circ');
            for (var i = 0; i < circs.length; i++) {
                circs[i].classList.remove('displayNone');
            }
        };
        this.getPrivatId = function() {
            return modules.uuid(8);
        };
        return this.init();
    },
    uuid: function(num) {
        var d = new Date().getTime();
        var arr = ''; 
        while (num-- > 0) arr += 'x'; 
    
        var uuid = arr.replace(/[x]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
        },
    url: function() {
        var self = this;
        this.init = function() {
            copyUrlBtn.addEventListener('click', function() {
                console.log(self.getUrl());
                // https://github.com/zeroclipboard/zeroclipboard
            });
        };
        this.getUrl = function() {
          return window.location.href;  
        };
        return self.init();
    },
    // /r/ data
    //http://www.reddit.com/r/javascript.json
    

    
    
    // https://css-tricks.com/star-ratings/
    // http://codepen.io/rogie/pen/jgrIu
    
    // votingSystem: function() {
    //     var self = this;
    //     this.init = function(ev) {
    //         voteProjectBtn.addEventListener('click', function(ev) {
    //             ev.stopPropagation();
    //             voteProjectBtn.classList.toggle('active');
    //             if (voteProjectBtn.classList.contains('active')) {
    //                 voteProjectBtn.querySelector('.vote').classList.remove('displayNone');
    //             }  else {
    //                 voteProjectBtn.querySelector('.vote').classList.add('displayNone');
    //             }
    //         });
    //         //event ktory lapie i, score system
    //         for (var i=0; i < voteProjectBtn.querySelectorAll('.vote i').length; i++) {
    //             switch (i) {
    //                 case 1:
    //                     console.log('1');
    //                 default:
    //                     console.log('default');
    //             }
                
                
    //             voteProjectBtn.querySelectorAll('.vote i')[i].addEventListener('mouseenter', function(){
    //                 this.classList.remove('fa-star-o');
    //             });
    //         }
            
    //         voteProjectBtn.querySelector('.vote').addEventListener('mouseleave', function(){
    //             for (var i=0; i < voteProjectBtn.querySelectorAll('.vote i').length; i++) {
    //                 this.querySelectorAll('i')[i].classList.add('fa-star-o');
    //             }
    //         });
    //     };
    //     this.whichStar = function(num) {
    //       console.log('num', num);  
    //     };
    //     return this.init();
    // }
};
                    //wyswietla komentarz
                    //mozliwosc edycji
var io = io();
modules.init();


//TODO

//kazdy _id ma swoje komentarze + score system (feature)
//Score system - dodaje usera do komentarza + blokuje mozliwosc ponownego oceniania 
//for each != user.name = score available + emit
//...
//Templatka do commentArea + inputy do komentarza + komentowania
//...


//login
//login system, moze jakies auth via gmail, fb, tw, github
//...

//





// var colors = ['#b00b00', '#de1e7e', '#e1e100', '#BADA55', '#F0FEAF', '#ac1d1c', '#facade'];


//They see me rolling, they hating.. 
//Stop propagation bad behaviours..
//Stop making excuses..


