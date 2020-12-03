<template>
  <div class="films">
    <Header/>
    <div class="content">
      <div class="desktop">
        <Menu/>
      </div>
      <div class="posters">
        <img alt="The Impending Loop poster" src="@/assets/the-impending-loop.png">
        <img alt="Strength poster" src="@/assets/strength.png">
      </div>
      <div></div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: 'Films',
  components: {
    Footer,
    Header,
    Menu,
  }
}
</script>

<style>
.desktop {
  align-self: center;
  display: none;
  margin: 0 30px;
}

.content, .films, .posters {
  display: flex;
}

.films {
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
}

.content {
  margin: 30px 0 20px;
}

.posters {
  overflow: auto;
}

.posters img {
  margin-right: 10px;
  max-height: 100%;
  max-width: 90%;
}

@media only screen and (min-width: 600px) {
    .desktop {
        display: initial;
    }

    .content {
      justify-content: space-between;
    }

    .posters img {
      max-height: 70vh;
    }
}

@media only screen and (min-width: 1000px) {
  .posters {
      margin-left: -105px;
    }
}
</style>
