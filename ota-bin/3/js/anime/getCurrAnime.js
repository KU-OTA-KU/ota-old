async function getCurrAnime(GET) {

  fetch("https://shikimori.one/api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: `
    query {
      animes(ids: "${GET}", limit: 1) {
        id
        name
        russian
        english
        japanese
        kind
        score
        status
        poster {
          originalUrl
        }
        genres {
          id
          name
          russian
          kind
        }
        airedOn {
          year
        }
        screenshots { 
          id
          x332Url
        }
        characterRoles {
          id
          rolesRu
          rolesEn
          character { 
            id 
            name
            russian
            poster { 
              id 
              mini2xUrl
            }
          }
        }   
        related {
          anime {
           id
           russian
           kind  
           airedOn {
             year
           }
           poster {
              mini2xUrl
           }
          }
         relationRu
        }
        description
      }
    }
    `,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("%cУСПЕШНО!", "color: greenyellow");
      const anime = data.data.animes;
      appendAnimeInSite(anime);
    })
    .catch((error) => {
      console.warn("Request error => ", error);
    });
}
