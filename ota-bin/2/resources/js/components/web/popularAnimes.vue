<template>
  <section class="top-popular-animes">
    <div class="top-popular-animes-inner">
      <div class="top-popular-animes-tit">
        <div class="top-popular-animes-title-h2">
          <h2>Популярное</h2>
          <h6>Самые популярные произведения в {{ currentYear }}
          </h6>
        </div>
        <div class="top-popular-animes-content" ref="topPopularAnimesContent">
          <div class="movie">
            <div class="movie-image">
            </div>
            <div class="movie-name">
              <div class="status">
                <div class="type"></div>
                <div class="rating">
                </div>
              </div>
              <div class="name">
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div class="movie">
            <div class="movie-image">
            </div>
            <div class="movie-name">
              <div class="status">
                <div class="type"></div>
                <div class="rating">
                </div>
              </div>
              <div class="name">
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div class="movie">
            <div class="movie-image">
            </div>
            <div class="movie-name">
              <div class="status">
                <div class="type"></div>
                <div class="rating">
                </div>
              </div>
              <div class="name">
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div class="movie">
            <div class="movie-image">
            </div>
            <div class="movie-name">
              <div class="status">
                <div class="type"></div>
                <div class="rating">
                </div>
              </div>
              <div class="name">
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div class="movie">
            <div class="movie-image">
            </div>
            <div class="movie-name">
              <div class="status">
                <div class="type"></div>
                <div class="rating">
                </div>
              </div>
              <div class="name">
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div class="movie">
            <div class="movie-image">
            </div>
            <div class="movie-name">
              <div class="status">
                <div class="type"></div>
                <div class="rating">
                </div>
              </div>
              <div class="name">
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div class="movie">
            <div class="movie-image">
            </div>
            <div class="movie-name">
              <div class="status">
                <div class="type"></div>
                <div class="rating">
                </div>
              </div>
              <div class="name">
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div class="movie">
            <div class="movie-image">
            </div>
            <div class="movie-name">
              <div class="status">
                <div class="type"></div>
                <div class="rating">
                </div>
              </div>
              <div class="name">
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div class="movie">
            <div class="movie-image">
            </div>
            <div class="movie-name">
              <div class="status">
                <div class="type"></div>
                <div class="rating">
                </div>
              </div>
              <div class="name">
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div class="movie">
            <div class="movie-image">
            </div>
            <div class="movie-name">
              <div class="status">
                <div class="type"></div>
                <div class="rating">
                </div>
              </div>
              <div class="name">
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div class="movie">
            <div class="movie-image">
            </div>
            <div class="movie-name">
              <div class="status">
                <div class="type"></div>
                <div class="rating">
                </div>
              </div>
              <div class="name">
                <a href="#"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Flickity from 'flickity';
import 'flickity/css/flickity.css';

export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  },
  mounted() {
    let elem = this.$refs.topPopularAnimesContent;
    let flcky = new Flickity(elem, {
      cellAlign: "center",
      pageDots: false,
      wrapAround: true,
      prevNextButtons: false
    });

    let isDragging = false;
    flcky.on('dragStart', function () {
      isDragging = true;
      elem.style.pointerEvents = 'none';
    });

    flcky.on('dragEnd', function () {
      setTimeout(() => {
        elem.style.pointerEvents = 'auto';
      }, 500);

      isDragging = false;
    });

    setTimeout(() => {
      this.fetchPopularAnimes(11);
    }, 500);
  },
  methods: {
    async fetchPopularAnimes(limit) {
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

        const data = await response.json();
        console.log("%cSuccessfully fetched popular anime data!", "color: greenyellow");
        const animeList = data.data.animes;
        this.displayAnimeListPopular(animeList, ".top-popular-animes-content");

      } catch (error) {
        console.warn("Request error => ", error);
        this.fetchPopularAnimes(limit);
      }
    },

    displayAnimeListPopular(animeList, selector) {
      let mainContent = this.$el.querySelector(selector);
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
                <div class="rating">${anime.score}<i class="fa-solid fa-star"></i></div>
              </div>
              <div class="name" style="background: transparent !important;">
                <router-link :to="/anime?animeId=${anime.id}">${anime.russian}</router-link>
              </div>
            </div>
          `;
        currentCell.insertAdjacentHTML("beforeend", animeHTML);
        currentCell.onclick = () => {
          this.$router.push(`/anime.php?animeId=${anime.id}`);
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.movie {
  height: 100%;
  text-align: center;
  cursor: pointer;
}

.movie:hover .name {
  color: var(--content-movie-name-color-hover);
}

.movie:hover .movie-image img {
  transform: scale(1.1);
}

.movie:hover .rating i {
  color: var(--content-movie-hover-rating-star-color);
}

.movie-image {
  width: 100%;
  margin-bottom: 5px;
  background: var(--content-movie-movie-image-background-gradient);
  aspect-ratio: 1 / 1.4;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
}

.movie-image img {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  transition: transform 0.1s ease-in-out;
  pointer-events: none;
  user-select: none;
  /*object-fit: cover;*/
}

.status {
  display: flex;
  font-size: 0.8em;
  color: var(--content-movie-status-color);
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  height: 18px !important;
  border-radius: 5px;
  background: var(--content-movie-movie-status-background-gradient);
}

.rating i {
  font-size: 1em;
  transition: color 0.2s ease-in-out;
  margin-left: 3px;
}

.rating {
  display: flex;
  align-items: center;
}


.top-popular-animes {
  width: 100%;
}

.top-popular-animes .top-popular-animes-inner {
  padding: 0 10px;
  width: 100%;
}

.top-popular-animes-inner .top-popular-animes-tit {
  max-width: var(--ota-ku-max-width);
  margin: 0 auto;
}

.top-popular-animes-tit .top-popular-animes-title-h2 {
  margin-bottom: 5px;
  color: var(--popular-content-title-h2-color);
}

.top-popular-animes-tit .top-popular-animes-title-h2 h6 {
  font-weight: normal;
  color: var(--popular-content-title-h6-color);
}

.top-popular-animes-content {
  width: 100%;
}

.top-popular-animes-content .movie {
  width: 150px !important;
  margin-right: 10px;
  height: 255px !important;
}

.top-popular-animes-content .movie::after {
  content: '';
  display: block;
  clear: both;
}

.is-dragging .movie {
  pointer-events: none;
}

.top-popular-animes-content::-webkit-scrollbar {
  height: 0;
}


@media screen and (max-width: 425px) {

  /*.top-popular-animes-title-h2 h2 {*/
  /*  display: none;*/
  /*}*/
  .top-popular-animes {
    display: none;
  }
}
</style>
