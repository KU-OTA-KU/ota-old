<template>
  <section class="ota-top-genres">
    <div class="ota-top-genres-inner">
      <div class="container">
        <div class="container-inner">
          <div class="container-image" @click="goToGenre(31)">
            <img v-lazy="'/img/ts/onepunchman.png'" alt="">
          </div>
          <div class="container-info">
            <h3  @click="goToGenre(31)">Супер сила</h3>
            <span>супергеройский мир с повышенными физическими возможностями.</span>
            <router-link :to="'/anime?animeId=30276'" class="container-link raco-secondary">Сайтама</router-link>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="container-inner">
          <div class="container-image" @click="goToGenre(9)">
            <img v-lazy="'/img/ts/rocksy.png'" alt="">
          </div>
          <div class="container-info">
            <h3 @click="goToGenre(9)">Этти</h3>
            <span>Сексуальная романтика с уникальными сюжетами и яркими персонажами.</span>
            <router-link :to="'/anime?animeId=39535'" class="container-link raco-secondary">Рокси Мигурдия</router-link>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="container-inner">
          <div class="container-image"  @click="goToGenre(27)">
            <img v-lazy="'/img/ts/yudji.png'" alt="">
          </div>
          <div class="container-info">
            <h3 @click="goToGenre(27)">Сёнен</h3>
            <span>Харизматичный герой противостоит силам зла в захватывающих приключениях</span>
            <router-link :to="'/anime?animeId=40748'" class="container-link raco-secondary">Юдзи Итадори</router-link>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="container-inner">
          <div class="container-image" @click="goToGenre(10)">
            <img v-lazy="'/img/ts/erren.png'" alt="">
          </div>
          <div class="container-info">
            <h3 @click="goToGenre(10)">Фентези</h3>
            <span>Мир магии, существ и мифологии в волшебном мире фантазий</span>
            <router-link :to="'/anime?animeId=16498'" class="container-link raco-secondary">Эрен Йегнер</router-link>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="container-inner">
          <div class="container-image" @click="goToGenre(4)">
            <img v-lazy="'/img/ts/megumin.png'" alt="">
          </div>
          <div class="container-info">
            <h3 @click="goToGenre(4)">Комедия</h3>
            <span>Предоставляет веселье, сатиру, забавные ситуации, развлекая аудиторию</span>
            <router-link :to="'/anime?animeId=49458'" class="container-link raco-secondary">Мэгумин</router-link>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="container-inner">
          <div class="container-image" @click="goToGenre(105)">
            <img v-lazy="'/img/ts/dendy.png'" alt="">
          </div>
          <div class="container-info">
            <h3 @click="goToGenre(105)">Жестокость</h3>
            <span>Жестокость. Включает откровенные сцены насилия, кровопролития и ужасов</span>
            <router-link :to="'/anime?animeId=44511'" class="container-link raco-secondary">Дэндзи</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    methods: {
      goToGenre(genreId) {
        this.$router.push(`/catalog?genre=${genreId}`);
      }
    },
  };
</script>
<style lang="scss" scoped>
.ota-top-genres {
  width: 100%;
  padding: 0 10px;

  &-inner {
    max-width: var(--ota-ku-max-width);
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: 40px;
    padding-top: 20px;

    .container {
      width: calc((100% - 80px) / 3);
      cursor: pointer;

      &:hover {
        .container-image img {
          transform: scale(1.04);
        }

        .container-info h3 {
          color: var(--cl-7);
        }
      }

      .container-inner {
        position: relative;
        background-color: #161616;
        height: 100%;
        width: 100%;
        border-radius: 10px;

        .container-image {
          width: 100%;
          top: -20px;
          position: relative;
          min-height: 300px;

          img {
            transition: transform 0.2s ease-in-out;
            width: 100%;
            pointer-events: none;
          }
        }

        .container-info {
          position: absolute;
          width: 100%;
          bottom: 0;
          background-color: #161616;
          box-shadow: 0px -25px 10px 0px rgba(22, 22, 22, 0.5);
          padding: 15px 15px;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;

          h3 {
            transition: color 0.2s ease-in-out;
          }

          .container-link {
            width: 100%;
            margin-top: 5px;
            font-size: 0.9em;
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .container {
      padding: 10px 0;
      width: calc((100% - 40px) / 3);
    }

    .ota-top-genres-inner {
      gap: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    &-inner {
      .container {
        width: calc((100% - 20px) / 2);
      }
    }
  }

  @media screen and (max-width: 550px) {
    &-inner {
      .container {
        width: calc((100%) / 1) !important;
      }
    }
  }
}
</style>
