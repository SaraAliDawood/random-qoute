

var qouteList = [
    {'qoute' : `"It's not what happens to you, but how you react to it that matters."` ,
        'author' : "--Epictetus "
    },
    {'qoute' : `"The best revenge is massive success."` ,
        'author' : "--Frank Sinatra "
    },
    {'qoute' : '"Do not take life too seriously. You will not get out alive."' ,
        'author' : "--Elbert Hubbard"
    },
    {'qoute' : `"Resentment is like drinking poison and waiting for your enemies to die."` ,
        'author' : '--Nelson Mandela'
    }
]


function getRandomQuote(){
 
var randomQoute = Math.floor(Math.random()*qouteList.length);
console.log(randomQoute);

document.getElementById("qoute").innerHTML=qouteList[randomQoute].qoute;
document.getElementById("author").innerHTML=qouteList[randomQoute].author;

}