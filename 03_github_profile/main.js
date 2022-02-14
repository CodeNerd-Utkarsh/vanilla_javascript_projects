const APIURL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getData(user);
    search.value = "";
  }
});
async function getData(user) {
  const res = await (await fetch(APIURL + user)).json();
  createUserCard(res);
}
function createUserCard(userData) {
  //   console.log(userData);
  const userCardDiv = `<div class="userCard ">
        <div class="avatarWrapper">
            <img src="${userData.avatar_url}" alt="${userData.login}" class="userAvatar" />
        </div>
        <div class="userInfo">
            <h2 class="userName">Utkarsh Singh</h2><spna>(${userData.login})</spna>
            <h3>${userData.location}</h3>
            <p>Hireable: ${userData.hireable}</p>
            <br>
            <ul>
                <li>followers: ${userData.followers}</li>
                <li>following: ${userData.following}</li>
                <li>public repo: ${userData.public_repos}</li>
            </ul>
        </div>
    </div>
    <br/>
    <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=${userData.login}&amp;theme=dark&amp;hide_langs_below=1" style="max-width:100%;">
  &nbsp;&nbsp;&nbsp;&nbsp;
<img align="center" src="https://github-readme-stats.vercel.app/api?username=${userData.login}&amp;show_icons=true&amp;theme=dracula&amp;line_height=27" style="max-width:100%;" alt="utkarsh singh" /></p>
    `;
  document.body.innerHTML += userCardDiv;
}

// getData("CodeNerd-Utkarsh");
