'use strict'



function getomdbApi(){
    const omdbUrl = new URL ("http://www.omdbapi.com/?apikey=[7fb63476]&")
    omdbUrl.searchParams.append("plot", "short");
    omdbUrl.searchParams.append("r", "json");
    omdbUrl.searchParams.append("s", "inception");

    return omdbUrl;
}

async function callomdApi(){
    const url = getomdbApi();
    const serverrespone = await fetch(url);
    const info = await serverrespone.json;
    console.log(info);
}

callomdApi();

