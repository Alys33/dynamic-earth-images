var formulaire = document.getElementById("formulaire");
var photo = document.getElementById("photo");
var slider = document.getElementById("slider");
var image = document.getElementById("image");
var numcliche =document.getElementById("numimage");


formulaire.addEventListener("submit", function (e){
    e.preventDefault();
    var annee = document.getElementById("annee").value;
    var mois  = document.getElementById("mois").value;
    var jour = document.getElementById("jour").value;

    fetch(`https://epic.gsfc.nasa.gov/api/enhanced/date/${annee}-${mois}-${jour}`)
    .then (response => response.json())
    .then(response => {

        // récupérer les noms des images dans tableau
        var tableau = []
        for (let i=0; i<response.length; i++) {
            tableau.push(response[i].image);
        };
         // modifier le max du slider pour avoir un range qui correspond au nombre d'images
         slider.max =tableau.length -1;

        // récupérer les liens des images dans table2
        var table2 =[];
        for(let i =0; i< tableau.length; i++){
            var img ="https://epic.gsfc.nasa.gov/archive/enhanced/"+annee+"/" +mois + "/"+ jour + "/png/" +tableau[i]+'.png'
             table2.push(img);
        }
      
        slider.addEventListener("input", function () {
            image.src = table2[parseInt(this.value)];
            num = parseInt(this.value) +1;
            numcliche.innerHTML= `<bold><em>Cliché n° </em> </<bold>: ${num}`;

        })
       



    })


})