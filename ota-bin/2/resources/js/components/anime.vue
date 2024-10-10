<template>
  <primary-header></primary-header>
  <anime-header ref="AnimeHeader"></anime-header>
  <anime-description ref="AnimeDescription"></anime-description>
  <anime-stills ref="AnimeStills"></anime-stills>
  <section class="ad-container">
    <div class="ad-container-inner">
      <div id="yandex_rtb_R-A-7609325-4"></div>
    </div>
  </section>
  <player ref="player"></player>
  <section class="ad-container">
    <div class="ad-container-inner">
      <div id="yandex_rtb_R-A-7609325-5"></div>
    </div>
  </section>
  <anime-characters ref="AnimeCharacters"></anime-characters>
  <anime-related ref="AnimeRelated"></anime-related>
  <Footer></Footer>
</template>

<script>
import Footer from "@/components/web/footer.vue";
import PrimaryHeader from "@/components/web/primaryHeader.vue";
import AnimeHeader from "@/components/web/anime/animeHeader.vue";
import AnimeDescription from "@/components/web/anime/animeDescription.vue"
import AnimeStills from "@/components/web/anime/animeStills.vue";
import Player from "@/components/web/anime/player.vue";
import AnimeCharacters from "@/components/web/anime/animeCharacters.vue";
import AnimeRelated from "@/components/web/anime/animeRelated.vue";

import { notFoundPage } from "@/ts/techOperation.ts";

export default {
  data() {
    return {
      animeDataReadyEventCreated: false,
      notFoundPage
    };
  },
  components: {
    PrimaryHeader, AnimeHeader, AnimeDescription, AnimeStills, Player, AnimeCharacters, AnimeRelated, Footer
  },
  mounted() {
    window.yaContextCb.push(() => {
      Ya.Context.AdvManager.render({
        "blockId": "R-A-7609325-4",
        "renderTo": "yandex_rtb_R-A-7609325-4"
      })
    })

    window.yaContextCb.push(() => {
      Ya.Context.AdvManager.render({
        "blockId": "R-A-7609325-5",
        "renderTo": "yandex_rtb_R-A-7609325-5"
      })
    })

    console.log('Anime mounted!');
    window.scrollTo({ top: 0 });
    let header = document.getElementsByTagName("header")[0];
    header.style.position = "fixed";
    header.style.backgroundColor = "transparent";
    header.style.backdropFilter = "blur(7px)";
    header.style.boxShadow = "none";
    const animeId = this.$route.query.animeId;
    // console.log(animeId)
    this.getCurrAnime(animeId)

    this.$watch(
      () => this.$route.query.animeId,
      (newValue, oldValue) => {
        if (newValue !== oldValue) {
          this.getCurrAnime(newValue);
          this.$refs.player.fetchData();
        }
      }
    );
  },
  methods: {
    async appendAnimeInSite(data) {
      sessionStorage.removeItem("CurrentAnime");
      data = JSON.stringify(data);
      sessionStorage.setItem("CurrentAnime", data);
      window.myData = data;

      await this.$nextTick();
      this.$refs.AnimeHeader.main();
      this.$refs.AnimeStills.main();
      this.$refs.AnimeDescription.main();
      this.$refs.AnimeCharacters.main();
      this.$refs.AnimeRelated.main();
    },
    async getCurrAnime(animeId) {
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
                    animes(ids: "${animeId}", limit: 1) {
                      id
                      name
                      russian
                      english
                      japanese
                      kind
                      score
                      status
                      duration
                      rating
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
                            mainUrl
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
                      nextEpisodeAt
                      description
                    }
                  }
                `,
          }),
        });

        const data = await response.json();
        if (response.ok) {
          const anime = data.data.animes;
          this.appendAnimeInSite(anime);
          document.title = `${anime[0].russian} Смотреть аниме онлайн`;
        } else {
          this.notFoundPage();
        }
      } catch (e) {
        this.notFoundPage();
      }
    },
  }
}
</script>
<style lang="scss" scoped>
.anime-cont {
  padding: 10px;
  width: 100%;

  &-inner {
    max-width: var(--ota-ku-max-width);
    width: 100%;
    margin: 0 auto;
    display: flex;

    .anime-cont-info-bar {
      width: 25%;
    }

    .anime-cont-anime-contents-bar {
      width: 75%;
    }
  }
}
</style>
