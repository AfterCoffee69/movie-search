function searchMovies() {
  console.log("done")
  var searchInput = document.getElementById("searchInput").value;
  var url = "http://www.omdbapi.com/?i=tt3896198&apikey=5e222928&s=" + encodeURIComponent(searchInput);

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayResults(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function displayResults(data) {
  var results = document.getElementById("results");
  results.style.display = 'grid';
  results.innerHTML = "";
  

  if (data.Response === "True") {
    var movies = data.Search;

    movies.forEach(function (movie) {
      var title = movie.Title;
      var year = movie.Year;
      var poster = movie.Poster;

      var movieElement = document.createElement("div");
      movieElement.className = "movie";

      var titleElement = document.createElement("h2");
      titleElement.textContent = title;

      var yearElement = document.createElement("p");
      yearElement.textContent = "Год выпуска: " + year;

      var posterElement = document.createElement("img");
      posterElement.src = poster;

      movieElement.appendChild(posterElement);
      movieElement.appendChild(titleElement);
      movieElement.appendChild(yearElement);

      results.appendChild(movieElement);
    });
  } else {
    var errorElement = document.createElement("p");
    errorElement.textContent = "Фильмы не найдены";
    results.appendChild(errorElement);
  }
}