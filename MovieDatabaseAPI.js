// X-RapidAPI-Key

// X-RapidAPI-Host

const startButton = document.getElementById("searchButton");

startButton.addEventListener("click", function(){
    testApi();


});

function getMovieDatabaseApi(){
    const imdbUrl = new URL ("GET", "https://movie-database-imdb-alternative.p.rapidapi.com"); // Tror länken är fel

    
    imdbUrl.searchParams.append("s", "Avengers Endgame");
    imdbUrl.searchParams.append("page", "1");
    imdbUrl.searchParams.append("r", "json");

    return imdbUrl;
}

/*async function testApi(){
    const imdbUrl = getMovieDatabaseApi();
    const serverResponse = await fetch(imdbUrl)
    const test = await serverResponse.json();
    console.log(test);
}*/

fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&page=1&r=json",{ 
	"method": "GET", 
	"headers": {
		"x-rapidapi-key": "310a6c29c0mshc92100364ef585ap11ca38jsndf5fb43f6d40",
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        "s": "",
        "page": "1",
        "r": "json",
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});









/*


const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&page=1&r=json");
xhr.setRequestHeader("x-rapidapi-key", "SIGN-UP-FOR-KEY");
xhr.setRequestHeader("x-rapidapi-host", "movie-database-imdb-alternative.p.rapidapi.com");

xhr.send(data);
*/