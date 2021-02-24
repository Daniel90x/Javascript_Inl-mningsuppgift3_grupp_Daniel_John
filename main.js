'use strict'

// https://www.programmableweb.com/api/moviepilot
// https://www.programmableweb.com/api/rotten-tomatoes

const startButton = document.getElementById("searchButton");

let response;

document.getElementById("searchBar").addEventListener("keyup", function(event){
    if (event.key === "Enter") {
      callApi()
    }
  });

startButton.addEventListener("click", callApi);

async function callApi(){
    let search = document.getElementById("searchBar").value;
    response = await callMdApi(search);
    console.log(response);

    buildmainLayout();
}

function buildmainLayout(){


    document.getElementById("filmTitel").innerHTML = response.Title;
    criticColor();
    document.getElementById("criticId").innerHTML = response.Ratings[1].Value;

    document.getElementById("descriptionId").innerHTML = response.Plot;



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





}

function criticColor(){
    let str = response.Ratings[1].Value.slice(0,2);
    var res = str.substring(str.length - 1, str.length);
    if(res==="%"){
        str = response.Ratings[1].Value.slice(0,1);
    }
    if(str <= 30){
        document.getElementById("criticId").style.color = "red";

    }

    if(str > 30 && str < 70 ){
        document.getElementById("criticId").style.color = "black";
    }

    if(str >= 70){
        document.getElementById("criticId").style.color = "springgreen";

    }

}