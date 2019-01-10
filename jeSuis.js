
var ID;
var nume, prenume;
var a;
var parag;
var btn, addBtn,  write, testPr, alWt;
var bold = ['<b>An </b>','<b>Tan </b>','<b> TE </b>'];

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
        this.cantitate = parseFloat( prompt("Cantitate") );
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
    
    a = new Apa ("Borsec",2,"Plata");
    parag.textContent = a.afis();
    
    setButtons();
}

function setButtons ()
{
    
    btn = document.getElementById("btn");
    btn.onclick = a.readPrompt;
    
    addBtn = document.getElementById("addBtn");
    addBtn.onclick = function(){
        parag.innerHTML = bold.join("");
        }
    
    write = document.getElementById("wWater");
    write.onclick = function(){
        parag.textContent = a.afis();
        }

    testPr = document.getElementById("testPr");
    testPr.onclick = function () {
        alert(prompt("Wacha say?"));
    }

    alWt = document.getElementById("alrWt");
    alWt.onclick = function(){
        alert(a.afis());
    }
}



window.onload = main;