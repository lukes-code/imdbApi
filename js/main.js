// Main JavaScript bruh

const apiKey = '8c565e9a';

$(document).ready(() => {
    $('#searchForm').on('keyup', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
    $('.favourites').click(function(e) {
        //Remove quote
        document.getElementById('no-listings').innerText = '';
        document.getElementById('no-listings').classList.remove('no-listings');
        //Set hard coded favouites to find
        films = ['Joker', 'Halloween', 'Deadpool', 'The Walking Dead'];
        var i;
        let output = '';
        //Loop through favourites
        for(i = 0; i < films.length; i++){
            axios.get('http://www.omdbapi.com?apiKey=' + apiKey + '&s=' + films[i])
            .then((response) => {
                let movies = response.data.Search[0];
                    output += `
                        <div class="col-md-3 movie-listing">
                            <a onclick="movieSelected('${movies.imdbID}')" href="#" id="goToMovie">
                                <div class="well text-center">
                                    <img src="${movies.Poster}" alt="${movies.Title}"/>
                                    <h6 class="search-title">${movies.Title}</h5>
                                    <p class="search-year">Released: ${movies.Year}</h5>
                                </div>
                            </a>
                        </div>
                    `;
                $('#movies').html(output);
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
        }
    });
});



function getMovies(searchText){
    // console.log(searchText);
    axios.get('http://www.omdbapi.com?apiKey=' + apiKey + '&s=' + searchText)
        .then((response) => {
            let movies = response.data.Search;
            let output = '';
            let film = 'You should search for a movie you like, I like ';
            if(response.data.Response == 'False'){
                document.getElementById('no-listings').classList.add('no-listings');
                let math = Math.floor(Math.random() * 10);
                if(math < 2){
                     film += 'Halloween!';
                } else if (math < 3){
                     film += 'Joker played by J. Phoenix!';
                } else if (math < 4){
                    film += 'The Big Bang Theory';
                } else if (math < 5){
                    film += 'Blood Diamond!';
                } else if (math < 6){
                    film += "Venom! (can't wait for canage)";
                } else{
                     film += 'The Walking Dead (not as much as the comics though!)';
                }
                document.getElementById('no-listings').innerText = film;
                console.log(film);
            } else{
                document.getElementById('no-listings').innerText = '';
                document.getElementById('no-listings').classList.remove('no-listings');
                $.each(movies, (index, movie) => {
                    output += `
                        <div class="col-md-3 movie-listing">
                            <a onclick="movieSelected('${movie.imdbID}')" href="#" id="goToMovie">
                                <div class="well text-center">
                                    <img src="${movie.Poster}" alt="${movie.Title}"/>
                                    <h6 class="search-title">${movie.Title}</h5>
                                    <p class="search-year">Released: ${movie.Year}</h5>
                                </div>
                            </a>
                        </div>
                    `;
                });
            }
           

            $('#movies').html(output);
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
}

function movieSelected(id){
    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';
    return false;
}

function getMovie(){
    let movieId = sessionStorage.getItem('movieId');
    axios.get('http://www.omdbapi.com?apiKey=' + apiKey + '&i=' + movieId)
        .then((response) => {
            console.log(response);
            let movie = response.data;

            let output = `
                <div class="row">
                    <div class="col-md-4">
                        <img src="${movie.Poster}" alt="${movie.Title}" class="thumbnail"/>
                    </div>
                    <div class="col-md-8">
                        <h2>${movie.Title}</h2>
                        <ul class="list-group">
                            <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
                            <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
                            <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
                            <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
                            <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
                            <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
                            <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
                            <li class="list-group-item"><strong>Country:</strong> ${movie.Country}</li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                <div class="well">
                    <h3>Plot</h3>
                    <div class="co-md-12 list-group-item">
                        <p>${movie.Plot}</p>
                    </div>
                    <hr>
                    <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
                    <a href="index.html" class="btn btn-default">Go back to search</a>
                </div>
                </div>
            `;

            $('#movie').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}
