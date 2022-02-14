const myApi =
  "https://api.themoviedb.org/3/trending/all/week?api_key=c927ef4a96e15faf1afcde138b41e5b4&language=en-US";
const baseImgPath = "https://image.tmdb.org/t/p/w500";

const main = document.querySelector("main");
async function loadAPIData() {
  const { results } = await (await fetch(myApi)).json();
  console.log(results);
  results.forEach((result) => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");
    const newImg = document.createElement("img");
    newImg.src = `${baseImgPath}${result.poster_path}`;
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("movie_info");
    const newh3 = document.createElement("h3");
    newh3.innerText = `${result.title}`;
    const newSpan = document.createElement("span");
    newSpan.innerText = `${result.vote_average}`;
    infoDiv.append(newh3, newSpan);
    movieDiv.append(newImg, infoDiv);
    main.appendChild(movieDiv);
  });
}
loadAPIData();
{
  /* <div class="movie">
        <img
          src="https://image.tmdb.org/t/p/w500//aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg"
          alt="image"
        />
        <div class="movie_info">
          <h3>Title</h3>
          <span>9.2</span>
        </div>
</div> */
}
