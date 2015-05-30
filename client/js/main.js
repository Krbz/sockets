var modules = {
    variables: function() {
        var draw = document.getElementById('draw'),
        addNewPinBtn = document.getElementById('addNewPinBtn'),
        togglePinsBtn = document.getElementById('togglePinsBtn'),
        copyUrlBtn = document.getElementById('copyUrlBtn');
        console.log(modules.uuid());
    },
    init: function() {
        modules.variables();
        
        //fake background - tempaltka
        draw.style.backgroundImage = 'url('+template.pics()[Math.floor(Math.random()*template.pics().length)]+')';

        togglePinsBtn.addEventListener('click', function(){
            togglePinsBtn.classList.toggle('success');
            togglePinsBtn.classList.contains('success') ? modules.pin.showAllPins() : modules.pin.closeAllPins();
        });
        
        addNewPinBtn.addEventListener('click', function() {
            addNewPinBtn.classList.toggle('success');
            //w pin.init musi sprawdzac czy chcesz dodac nowy czy tylko zamknac lub otworzyc obecny...
            addNewPinBtn.classList.contains('success') ? draw.addEventListener('click', modules.pin.init) : false;
        });
    },
    pin: {
        init: function(ev) {
            if (addNewPinBtn.classList.contains('success')) {
    
                togglePinsBtn.classList.add('success');

                if (ev.target.classList.contains('circ')) {
                    ev.target.addEventListener('click', modules.pin.commentArea(ev));
                } else if (ev.target === draw) {
                    modules.pin.showAllPins();
                    modules.pin.closeAllCommentArea();
                    modules.pin.addNew(ev);
                }
            }
        },
        addNew: function(ev) {
                var drawY = draw.offsetTop, //20
                    drawX = draw.offsetLeft; //130~
                var span = document.createElement("span");
                    span.classList.add('circ');
                    span.style.left = (ev.pageX-drawX-18)+'px';
                    span.style.top = (ev.pageY-drawY-18)+'px';
                    span.innerHTML = template.pin.mainComment;
                    // span.querySelector('commentArea').innerHTML = template.pin.textarea;
                    console.log('json', template.pin.mainComment)
                    //
                draw.appendChild(span)
                //innerHTML z json'a export wateva
        },
        commentArea: function(ev) {
            if (ev.target.querySelector('.commentArea').classList.contains('displayNone')) {
                modules.pin.closeAllCommentArea();
                ev.target.querySelector('.commentArea').classList.remove('displayNone');
                ev.target.classList.add('activePin');
            } else {
                ev.target.querySelector('.commentArea').classList.add('displayNone');
            }
        },
        closeAllCommentArea: function() {
            var circs = document.querySelectorAll('.circ');
            for (var i=0; i < circs.length; i++) {
                circs[i].querySelector('.commentArea').classList.add('displayNone');
                circs[i].classList.remove('activePin');
            }
        },
        closeAllPins: function() {
            var circs = document.querySelectorAll('.circ');
            for (var i = 0; i < circs.length; i++) {
                circs[i].classList.add('displayNone');
            }
        },
        showAllPins: function() {
            var circs = document.querySelectorAll('.circ');
            for (var i = 0; i < circs.length; i++) {
                circs[i].classList.remove('displayNone');
            }
        }
   },
   uuid: function() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
   }
};
                    //wyswietla komentarz
                    //mozliwosc edycji
var io = io();
modules.init();


//TODO

//pinz
//dodaje pin do obj, pobiera dane z json'a jako templatka,
//kazdy pin losuje _id
//kazdy _id ma swoje komentarze + score system (feature)
//Score system - dodaje usera do komentarza + blokuje mozliwosc ponownego oceniania 
//for each != user.name = score available + emit
//...
//Toggle na pinie + close X inside.
//Templatka do commentArea + inputy do komentarza + komentowania
//


//login
//login system, moze jakies auth via gmail, fb, tw, github
//...

//





// var colors = ['#b00b00', '#de1e7e', '#e1e100', '#BADA55', '#F0FEAF', '#ac1d1c', '#facade'];


//They see me rolling, they hating.. 
//Stop propagation bad behaviours..
//Stop making excuses..


