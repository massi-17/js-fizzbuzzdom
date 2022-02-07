// container nel DOM
const container = document.getElementById("container");

// ciclo numeri da 1 a 100
 for (let i = 1; i <= 100; i++) { 
    // inizio dalla condizione più specifica alla più comune
    if (i % 3 == 0 && i % 5 == 0){ // numeri multipli di 3(diviso 3(%3) danno(==)0) E(&&) 5(diviso 5(%5) danno(==)0)
        console.log("fizzbuzz"); 
        // aggiunta DIV con class box fizzbuzz
        container.innerHTML += '<div class="box fizzbuzz">fizzbuzz</div>';
    } else if (i % 5 == 0) { // numeri multipli di 5     
        console.log("buzz");
        // aggiunta DIV con class box buzz
        container.innerHTML += '<div class="box buzz">buzz</div>';
    } else if (i % 3 == 0) { // numeri multipli di 3    
        console.log("fizz");
        // aggiunta DIV con class box frizz
        container.innerHTML += '<div class="box fizz">fizz</div>';
    } else {           
        // inserimento numeri nelle celle(div) del container
        container.innerHTML += '<div class="box">' + i + '</div>';
    }

}


