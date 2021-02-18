'use strict'
// X-RapidAPI-Key

// X-RapidAPI-Host

const startButton = document.getElementById("searchButton");

startButton.addEventListener("click", function(){
    testApi();


});

function getMovieDatabaseApi(){
    const imdbUrl = new URL ("GET", "https://movie-database-imdb-alternative.p.rapidapi.com") // Tror länken är fel
    imdbUrl.searchParams.append("x-rapidapi-key", ""); 
    imdbUrl.searchParams.append("page", "1");
    imdbUrl.searchParams.append("r", "json");
    imdbUrl.searchParams.append("s", "Avengers Endgame");

    return imdbUrl;
}
/*
async function testApi(){
    const imdbUrl = getMovieDatabaseApi();
    const serverResponse = await fetch(imdbUrl)
    const test = await serverResponse.json();
    console.log(test);
}
*/




function testApi(){
    const url = getMovieDatabaseApi();
    fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&page=1&r=json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "",
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
	}
})
.then(response => {
    const test = response.json;
	console.log(response); // response.text()
})
.catch(error => {
	console.error(error);
});
}





/*
sendRequest = (title) => {
   const req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/");
   req.query({
     "page": "1",
     "r": "json",
     "s": title
   });
   req.headers({
     "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
     "x-rapidapi-key": "YOUR_API_KEY"
   });
   req.end(function (res) {
     if (res.error) throw new Error(res.error);
     console.log(res.body);
   });
 }
 */








/**/


/*
function testApi(){

    const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&page=1&r=json");
xhr.setRequestHeader("x-rapidapi-key", "");
xhr.setRequestHeader("x-rapidapi-host", "movie-database-imdb-alternative.p.rapidapi.com");

xhr.send(data);

}
*/


