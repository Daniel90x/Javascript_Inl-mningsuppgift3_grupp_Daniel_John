// X-RapidAPI-Key

// X-RapidAPI-Host

const startButton = document.getElementById("searchButton");

startButton.addEventListener("click", function(){
    testApi();


});

function getMovieDatabaseApi(){
    const imdbUrl = new URL ("https://movie-database-imdb-alternative.p.prapidapi.com"); // Tror länken är fel

    imdbUrl.searchParams.append("x-rapidapi-Key", "33266da421msh80c117b3f150bb6p1fcdefjsnad22d10e7871");
    imdbUrl.searchParams.append("x-rapidapi-host", "movie-database-imdb-alternative.p.rapidapi.com");
    imdbUrl.searchParams.append("r", "json");
    imdbUrl.searchParams.append("s", "Avengers Endgame");
    imdbUrl.searchParams.append("page", "1");

    return imdbUrl;
}

async function testApi(){
    const imdbUrl = getMovieDatabaseApi();
    const serverResponse = await fetch(imdbUrl)
    const test = await serverResponse.json();
    console.log(test);
}