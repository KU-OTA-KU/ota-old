function displayAnimeListPopular(animeList, selector) {
    let mainContent = document.querySelector(selector);
    let movie = mainContent.querySelectorAll('.movie');

    animeList.forEach((anime, index) => {
        let currentCell = movie[index];
        currentCell.innerHTML = '';
        let animeHTML = `
          <div class="movie-image">
            <img src="${anime.poster.mainUrl}" alt="${anime.name}">
          </div>
          <div class="movie-name">
          <div class="status" style="background: transparent !important;">
            <div class="type">${anime.kind}</div>
              <div class="rating">
                  ${anime.score}
                  <i class="fa-solid fa-star"></i>
              </div>
            </div>
            <div class="name" style="background: transparent !important;">
              <a href="anime.php?animeId=${anime.id}">${anime.russian}</a>
            </div>
          </div>
      `;
        currentCell.insertAdjacentHTML("beforeend", animeHTML);
        setTimeout(() => {
            currentCell.querySelector('.movie-image img').style.opacity = '1';
        }, 100);
        currentCell.onclick = function () {
            window.location.href = `anime.php?animeId=${anime.id}`;
        };
    });
}

async function fetchPopularAnimes(limit) {
    try {
        const response = await fetch("https://shikimori.one/api/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                query: `
                    query {
                      animes(season: "2024", limit: ${limit}, order: popularity, status: "released", kind: "tv") {
                        id
                        name
                        russian
                        kind
                        score
                        poster {
                           mainUrl
                        }
                      }
                    }
                `,
            }),
        });

        if (!response.ok) {
            //throw new Error('Network response was not ok');
            window.location.href = "TechOperations.html";
        }

        const data = await response.json();
        console.log("%cУСПЕШНО!", "color: greenyellow");
        const animeList = data.data.animes.filter(anime =>
            !blacklistedAnimeIds.includes(anime.id) &&
            anime.name !== null && anime.name.trim() !== ""
        );

        if (animeList.length < limit) {
            await delay(1000);
            await fetchPopularAnimes(limit);
        } else {
            displayAnimeListPopular(animeList, ".top-popular-animes-content");
        }
    } catch (error) {
        // console.warn("Request error => ", error);
        // console.log("Trying again to fetch popular animes");
        await delay(1000);
        await fetchPopularAnimes(limit);
    }
}
