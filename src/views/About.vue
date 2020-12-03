<template>
  <div class="about">
    <Header/>
    <div class="content">
      <div class="desktop">
        <Menu/>
      </div>
      <div class="bio">
        <img alt="Selfie" src="@/assets/selfie-small.png">
        <p>CELESOUND is a music company from William Anthony - a composer, producer, and multi-instrumentalist based in California.</p>
        <p class="last">An amalgamation of the words Celestino (late grandfather) and sound, this company creates films scores, songs, beats, and original music that makes people feel.</p>
      </div>
      <div></div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: 'About',
  components: {
    Footer,
    Header,
    Menu,
  }
}
</script>

<style scoped>
.about, .bio {
  display: flex;
}

.about {
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
}

.bio {
  flex-direction: column;
  margin: 0 auto;
  overflow: auto;
  text-align: left;
}

.bio img, .bio p {
  max-width: 90vw;
}

.bio img {
  margin-bottom: 20px;
}

.content {
  margin: 30px 0 20px;
}

.last {
  margin-bottom: 0;
}
</style>