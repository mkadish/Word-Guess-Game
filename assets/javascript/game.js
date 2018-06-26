            var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            var movie = "ThIS ISN'T ABOUT YOU, tONY!";
            var movieB = movie.toUpperCase();
            var movieC = (movieB.replace(/ /g, String.fromCharCode(1)));
            var mysteryWord = (movieC.replace(/A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z/g, "_"));
            var wins = 0
            var vanna = 0
            var firstHalf = ""
            var secondHalf = ""
            var losses = 0
            var points = 0
            var zzz = 0
            var partial = ""
            var movies = ["The Usual Suspects", "American Gangster", "Honey I shrunk the kids", "Terminator II", "Beverly Hills Cop III"]
            var wrong = [];
            var right = [];
            var guessed = ""
            var letters = movieB.split("");
            document.querySelector("#puzzle").innerHTML = mysteryWord;
            document.querySelector("#movie").innerHTML = movieB;
    
function startGame() {
    wrong = [];
    right = [];
    movie = movies[(Math.floor(Math.random())*movies.length)];
    document.querySelector("#temp").innerHTML = movie;
    movieB = movie.toUpperCase();
    movieC = (movieB.replace(/ /g, String.fromCharCode(1)));
    mysteryWord = (movieC.replace(/A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z/g, "_"));
    document.querySelector("#puzzle").innerHTML = mysteryWord;
    document.querySelector("#movie").innerHTML = movieB;
    letters = movieB.split("");
    zzz = 0;
}
    //guessing letter, limiting to letters
    document.onkeyup = function(event){
        var guess = event.key.toUpperCase();
        if (alphabet.includes(guess)){
            guessed = guess;
            document.querySelector("#guess").innerHTML = guessed;
            
//counting letters

            for(var count=-1,index=-2; index != -1; count++,index=movieB.indexOf(guessed,index+1) );
                document.querySelector("#four").innerHTML = count;
        }

        
//not there

        if (count == 0 && wrong.includes(guessed) == false){
            wrong.push(guessed);
            document.querySelector("#wronganswers").innerHTML = "Wrong letters:" + wrong + " <br> You have " + (6 - wrong.length) + " more chances left...";
            }

//game over

        if (wrong.length == 6){
            document.querySelector("#wronganswers").innerHTML = "<em><strong>Game Over</em></strong><br>  The answer was:" + movie;
            losses++;
            wrong = 0;
            var replay = confirm("Play again?");
            if (replay) {
                replay = "";
                document.querySelector("#wronganswers").innerHTML = ""
                startGame();}
            }

//there once
    //if (count == 1 && right.includes(guessed) == false){
      //  if (zzz == 0 ){
        //    partial = mysteryWord;
          //  zzz++;
    //    }
     //   right.push(guessed);
       // vanna = movieC.indexOf(guessed);
     //   firstHalf = partial.slice(0,vanna);
     //   secondHalf = partial.slice(vanna+1);
     //   partial = firstHalf.concat(guessed).concat(secondHalf);
     //   document.querySelector("#puzzle").innerHTML = partial;
     //   document.querySelector("#rightanswers").innerHTML = "Right letters:" + right;
        
      //  console.log(partial)
      //  console.log(movieC)
    //};
        



    //more than once            
    if (count > 0 && right.includes(guessed) == false){
        var m = 0    
        for (n=0; count > m ; n = vanna+1) {
            if (zzz == 0 ){
                partial = mysteryWord;
                zzz++;        
            }
            vanna = movieC.indexOf(guessed,n);
            firstHalf = partial.slice(0,vanna);
            secondHalf = partial.slice(vanna+1);    
            partial = firstHalf.concat(guessed).concat(secondHalf); 
            m++
                   
        }    
    right.push(guessed);
    document.querySelector("#puzzle").innerHTML = partial;
    document.querySelector("#rightanswers").innerHTML = "Right letters:" + right;
    console.log(partial)
console.log(movieC)    
            
        };
        if (partial == movieC){
    document.querySelector("#wronganswers").innerHTML = "<em><strong>You won!</em></strong><br>";
    wins++;
    points = points + 10 - wrong
    var replay = confirm("You Won! \n Play again?");
    if (replay) {
        replay = "";
        partial = ""
        document.querySelector("#wronganswers").innerHTML =""
        startGame();}
    }

    
    };

