<template>
    <div class="strength">
        <Header :showBackButton=true />
        <div class="content">
            <div class="desktop">
                <Menu />
            </div>
            <div class="album">
                <img alt="Strength logo" src="@/assets/strength-title.png" />
                <iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="450" style="width:100%;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/nz/album/strength-original-motion-picture-score/1588965603"></iframe>
                <p>
                    Find it on 
                    <a href="https://music.apple.com/nz/album/strength-original-motion-picture-score/1588965603" target="_blank">Amazon Music</a>,
                    <a href="https://music.apple.com/nz/album/strength-original-motion-picture-score/1588965603" target="_blank">Apple Music</a>, and
                    <a href="https://music.apple.com/nz/album/strength-original-motion-picture-score/1588965603" target="_blank">Spotify</a>
                </p>
                <p>
                    Music composed by 
                    <a href="https://music.apple.com/nz/album/strength-original-motion-picture-score/1588965603" target="_blank">William Anthony</a>
                </p>
                <p>
                    A film by
                    <a href="http://artflo.gallery/strength" target="_blank">arthur gallery</a>
                </p>
            </div>
            <div></div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from "@/components/Footer.vue"
import Header from "@/components/Header.vue"
import Menu from "@/components/Menu.vue"

export default {
    name: "Strength",
    components: {
        Footer,
        Header,
        Menu,
    },
}
</script>

<style scoped>
.strength, .album {
    display: flex;
    flex-direction: column;
}

.strength {
    height: 92vh;
    justify-content: space-between;
}

.album {
    margin: 0 auto;
    width: 90vw;
}

.album img {
    margin: 0 auto;
    width: 279px;
    height: 44px;
}

iframe {
    margin: 25px 0;
}

.album p {
    font-size: 0.8em;
    margin: 2px 0;
}

.album a {
    color: black;
    font-weight: bold;
}

.album a:hover {
    text-decoration: line-through;
}

@media only screen and (min-width: 600px) {
    .strength {
        height: 100vh;
    }

    .album {
        margin: 0;
        width: 60vw;
    }

    /* .album img {
        width: 279px;
        height: 44px;
    } */
}

@media only screen and (min-width: 1000px) {
    .album {
        margin-left: -180px;
        width: 40vw;
    }
}
</style>
