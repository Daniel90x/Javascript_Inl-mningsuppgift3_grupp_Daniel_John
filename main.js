'use strict'

// https://www.programmableweb.com/api/moviepilot
// https://www.programmableweb.com/api/rotten-tomatoes

const startButton = document.getElementById("searchButton");

let response;

startButton.addEventListener("click", async function(){
    let search = document.getElementById("searchBar").value;
    response = await callMdApi(search);
    console.log(response);

    buildmainLayout();


});

function buildmainLayout(){


    document.getElementById("filmTitel").innerHTML = response.Title;

    document.getElementById("criticId").innerHTML = response.Ratings[1].Value;

    document.getElementById("descriptionId").innerHTML = response.Plot;



    document.getElementById("poster").src=response.Poster;


//flexTitle2


}