<template>
    <div class="strength">
        <Header :showBackButton=true />
        <div class="content">
            <div class="desktop">
                <Menu />
            </div>
            <div class="album">
                <a href="http://artflo.gallery/strength" target="_blank">
                    <img id="strength-title" alt="Strength title" src="@/assets/strength-title.png" />
                </a>
                <iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="450" style="width:100%;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/nz/album/strength-original-motion-picture-score/1588965603"></iframe>
                <div class="badges">
                    <a href="https://www.amazon.com/gp/product/B09HSS52SB/?tag=distrokid06-20" target="_blank">
                        <img class="listen" alt="Amazon music badge" src="@/assets/amazon-music.png" />
                    </a>
                    <a href="https://music.apple.com/album/strength-original-motion-picture-score/1588965603" target="_blank">
                        <img class="listen" id="apple-music" alt="Apple music badge" src="@/assets/apple-music.png" />
                    </a>
                    <a href="https://open.spotify.com/album/0ZOJ2Mnx6O7CwISAAnpZXt" target="_blank">
                        <img class="listen" alt="Apple music badge" src="@/assets/spotify.png" />
                    </a>
                </div>
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

#strength-title {
    margin: 0 auto;
    width: 279px;
    height: 44px;
}

iframe {
    margin: 25px 0;
}

.badges {
    margin-bottom: 25px;
}

.listen {
    width: 142px;
    height: 41px;
}

#apple-music {
    margin: 0 10px;
}

@media only screen and (min-width: 600px) {
    .strength {
        height: 100vh;
    }

    .album {
        margin: 0;
        width: 60vw;
    }

    .badges {
        margin-bottom: 0;
    }
}

@media only screen and (min-width: 1000px) {
    .album {
        margin-left: -180px;
        width: 40vw;
    }

    #strength-title {
        width: 419px;
        height: 66px;
    } 
}
</style>
