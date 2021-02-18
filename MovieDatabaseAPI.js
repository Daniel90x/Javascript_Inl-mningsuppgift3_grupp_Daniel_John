'use strict'
// X-RapidAPI-Key

// X-RapidAPI-Host



function getMovieDatabaseApi(){
    const imdbUrl = new URL ("https://movie-database-imdb-alternative.p.rapidapi.com")
    imdbUrl.searchParams.append("page", "1");
    imdbUrl.searchParams.append("r", "json");
    imdbUrl.searchParams.append("s", "inception");

    return imdbUrl;
}

async function callMdApi(){
    const imdbUrl = getMovieDatabaseApi();
    const serverResponse = await fetch(imdbUrl, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "310a6c29c0mshc92100364ef585ap11ca38jsndf5fb43f6d40",
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
	}
})
    const info = await serverResponse.json();
    console.log(info);
}
