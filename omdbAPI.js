'use strict'


function getMovieDatabaseApi(search){
    const omdbUrl = new URL ("https://www.omdbapi.com/?apikey=7fb63476")
    omdbUrl.searchParams.append("page", "1");
    omdbUrl.searchParams.append("r", "json");
    omdbUrl.searchParams.append("s", search);
    

    return omdbUrl;
}

function getMovieDatabaseApiId(id){
    const omdbUrl = new URL ("https://www.omdbapi.com/?apikey=7fb63476")
    omdbUrl.searchParams.append("i", id);
    omdbUrl.searchParams.append("r", "json");
    omdbUrl.searchParams.append("plot", "full");
    omdbUrl.searchParams.append("poster", "");

    return omdbUrl;
}

async function callMdApi(search){
    const omdbUrl = getMovieDatabaseApi(search);
    const serverResponse = await fetch(omdbUrl, {
	    "method": "GET",
    })

    const info = await serverResponse.json();
    console.log(info);

    if(info.Response === "False"){
        return undefined;
    }

    //Kallar på api med ID
    const idUrl = getMovieDatabaseApiId(info.Search[0].imdbID);

    const serverResponseId = await fetch(idUrl, {
	    "method": "GET",
    })

    const infoId = await serverResponseId.json();
    console.log(infoId);

    return infoId;
}
