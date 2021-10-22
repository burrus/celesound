<template>
    <div class="strength">
        <Header />
        <div class="content">
            <div class="desktop">
                <Menu />
            </div>
            <div class="album">
                <iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="500" style="width:100%;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/nz/album/strength-original-motion-picture-score/1588965603"></iframe>
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

/* iframe {
    width: 100%;
} */

@media only screen and (min-width: 600px) {
    .strength {
        height: 100vh;
    }

    .album {
        margin: 0;
        width: 60vw;
    }
}

@media only screen and (min-width: 1000px) {
    .album {
        margin-left: -180px;
        width: 40vw;
    }
}
</style>
