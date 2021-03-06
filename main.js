'use strict'

const startButton = document.getElementById("searchButton");

let response, responseTrailer;



document.getElementById("searchBar").addEventListener("keyup", function(event){
    if (event.key === "Enter") {
      callApi()
    }
  });

startButton.addEventListener("click", callApi);

async function callApi(){
    let search = document.getElementById("searchBar").value;

    resetAll();
    try{
        response = await callMdApi(search);
        console.log(response);
        if(response === undefined){
            buildErrorLayout();
            return;

        }

        responseTrailer = await getImdbApi(response.imdbID);
        console.log(responseTrailer);

    }

    catch{
        noConnection();
        return;
    }

    buildmainLayout();

}

function buildmainLayout(){
    document.getElementById("backGround").style.display = "none";
    document.getElementById("containerTitle").style.display = "flex";
    document.getElementById("containerMain").style.display = "flex";
    document.getElementById("movieInfoContanier").style.display = "flex";
    document.getElementById("trailercontainer").style.display = "block";


    document.getElementById("filmTitel").innerHTML = response.Title;
    try{
        criticColor();
        document.getElementById("criticId").innerHTML = response.Ratings[1].Value;
    }

    catch{
        document.getElementById("criticId").innerHTML = response.Ratings[0].Value;
    }

    document.getElementById("descriptionId").innerHTML = response.Plot;


    document.getElementById("poster").style.display = "initial";
    document.getElementById("poster").src=response.Poster;

    // Cast:
    let castSplit = response.Actors.split(",");

    document.getElementById("castList1").innerHTML = castSplit[0];
    document.getElementById("castList2").innerHTML = castSplit[1];
    document.getElementById("castList3").innerHTML = castSplit[2];
    document.getElementById("castList4").innerHTML = castSplit[3];

    // MovieInfo under:
    document.getElementById("movieyearresultId").innerHTML = response.Year;
    document.getElementById("directorresultId").innerHTML = response.Director;
    document.getElementById("studioresultId").innerHTML = response.Production;
    document.getElementById("genreresultId").innerHTML = response.Genre;


    // Trailer
    console.log("https://www.imdb.com/video/imdb/"+responseTrailer.videoId+"/imdb/embed?autoplay=false&width=480");
    

    document.getElementById("trailerId").src = "https://www.imdb.com/video/imdb/"+responseTrailer.videoId+"/imdb/embed?autoplay=false&width=853";

    

}

// Felhantering
function buildErrorLayout(){
    document.getElementById("backGround").style.display = "none";
    document.getElementById("containerTitle").style.display = "flex";
    document.getElementById("containerMain").style.display = "flex";
    document.getElementById("movieInfoContanier").style.display = "flex";
    document.getElementById("filmTitel").innerHTML = "Movie not found!";
}

function noConnection(){
    document.getElementById("backGround").style.display = "none";
    document.getElementById("containerTitle").style.display = "flex";
    document.getElementById("containerMain").style.display = "flex";
    document.getElementById("movieInfoContanier").style.display = "flex";
    document.getElementById("filmTitel").innerHTML = "No connection!";


}




//Färg på ratings texten
function criticColor(){
    let str = response.Ratings[1].Value.slice(0,2);
    let res = str.substring(str.length - 1, str.length);
    if(res==="%"){
        str = response.Ratings[1].Value.slice(0,1);
    }
    if(str < 30){
        document.getElementById("criticId").style.color = "red";

    }

    if(str >= 30 && str < 70 ){
        document.getElementById("criticId").style.color = "black";
    }

    if(str >= 70){
        document.getElementById("criticId").style.color = "springgreen";

    }

}

// Reset funtion
function resetAll(){
    document.getElementById("criticId").innerHTML = "";
    document.getElementById("trailercontainer").style.display = "none";

    document.getElementById("descriptionId").innerHTML = "";


    document.getElementById("poster").style.display = "none";
    document.getElementById("poster").src="";

    // Cast:

    document.getElementById("castList1").innerHTML = "";
    document.getElementById("castList2").innerHTML = "";
    document.getElementById("castList3").innerHTML = "";
    document.getElementById("castList4").innerHTML = "";

    // MovieInfo under:
    document.getElementById("movieyearresultId").innerHTML = "";
    document.getElementById("directorresultId").innerHTML = "";
    document.getElementById("studioresultId").innerHTML = "";
    document.getElementById("genreresultId").innerHTML = "";


    
}