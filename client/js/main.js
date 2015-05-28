var io = io();

var modules = {
    variables: function(){
        var draw = document.getElementById('draw');
    },
    init: function() {
        modules.variables();
        draw.addEventListener('click', modules.pin.addNew);
    },
    pin: {
       addNew: function(ev) {

            ev.target === draw ? 
            z() :
            ev.target.classList.contains('circ') ? 
                ev.target.addEventListener('click', modules.pin.commentArea(ev)) :
            ev.preventDefault();
            //poprawa if'a


            function z(){
                //wat the heck is z()...
                var drawY = draw.offsetTop, //20
                    drawX = draw.offsetLeft; //130~
                var span = document.createElement("span");
                    span.classList.add('circ');
                    span.style.left = (ev.pageX-drawX-18)+'px';
                    span.style.top = (ev.pageY-drawY-18)+'px';
                    span.innerHTML = '<div class="commentArea displayNone"><p>Some lorem</p></div>'
                draw.appendChild(span)
                //innerHTML z json'a export wateva
                modules.pin.commentArea();

            };
        },
        clearCommentArea: function() {
          var circs = document.querySelectorAll('.circ');

            for (var i=0; i < circs.length; i++) {
                    circs[i].querySelector('.commentArea').classList.add('displayNone');
                    circs[i].classList.remove('activePin');
            };  
        },
        commentArea: function(ev) {
            modules.pin.clearCommentArea();
            ev.target.querySelector('.commentArea').classList.contains('displayNone') ? 
            (
                ev.target.querySelector('.commentArea').classList.remove('displayNone'), 
                ev.target.classList.add('activePin')
            ) : ev.preventDefault();
        }
   } 
};
                    //wyswietla komentarz
                    //mozliwosc edycji

modules.init();


//
//TODO:

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


