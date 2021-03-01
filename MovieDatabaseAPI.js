'use strict'
// X-RapidAPI-Key

// X-RapidAPI-Host
// const search = document.getElementById("searchBar");
/*

function getMovieDatabaseApi(search){
    const imdbUrl = new URL ("https://movie-database-imdb-alternative.p.rapidapi.com")
    imdbUrl.searchParams.append("page", "1");
    imdbUrl.searchParams.append("r", "json");
    imdbUrl.searchParams.append("s", search);
    

    return imdbUrl;
}

function getMovieDatabaseApiId(id){
    const imdbUrl = new URL ("https://movie-database-imdb-alternative.p.rapidapi.com")
    imdbUrl.searchParams.append("i", id);
    imdbUrl.searchParams.append("r", "json");
    imdbUrl.searchParams.append("plot", "full");
    imdbUrl.searchParams.append("poster", "");

    return imdbUrl;
}

async function callMdApi(search){
    const imdbUrl = getMovieDatabaseApi(search);
    const serverResponse = await fetch(imdbUrl, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "310a6c29c0mshc92100364ef585ap11ca38jsndf5fb43f6d40",
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
	}
})
    const info = await serverResponse.json();
    console.log(info);

//Kallar på api med ID

    const idUrl = getMovieDatabaseApiId(info.Search[0].imdbID);
    const serverResponseId = await fetch(idUrl, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "310a6c29c0mshc92100364ef585ap11ca38jsndf5fb43f6d40",
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
	}
})
    const infoId = await serverResponseId.json();
    console.log(infoId);

    return infoId;
}
*/
