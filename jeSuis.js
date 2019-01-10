
var ID;
var nume, prenume;
var parag;
var btn;


function Apa (producator, cantitate, tip)
{
    {
        this.producator = producator;
        this.cantitate = cantitate;
        this.tip = tip;
    }
    
    this.readPrompt = function()
    {
        this.producator = prompt("Producator");
        this.cantitate = parseInt( prompt("Cantitate") );
        this.tip = prompt ("Tip");
    }
    
    this.afis = function()
    {
        var prod = this.producator + " | " + this.cantitate + "L | " + this.tip;
        return prod;
    }
}

function main()
{
    ID = "Alin Florentin";
    prenume = ID.slice(0,ID.indexOf(" "));
    nume = ID.slice(ID.lastIndexOf(" ")+1,ID.length);
    parag = document.getElementById("p4");
    parag.textContent = "Nume : "+nume+" Prenume: "+prenume; 
    var a = new Apa ("Borsec",2,"Plata");
    parag.textContent = a.afis();
    btn = document.getElementById("btn");
    btn.onclick = a.readPrompt;
}


window.onload = main;