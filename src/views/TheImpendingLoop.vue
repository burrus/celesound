<template>
    <div class="the-impending-loop">
        <Header :showBackButton=true />
        <div class="content">
            <div class="desktop">
                <Menu />
            </div>
            <div class="album">
                <a href="https://vimeo.com/472857059" target="_blank">
                    <img id="the-impending-loop-title" alt="The Impending Loop title"
                        src="@/assets/the-impending-loop-title.png" />
                </a>
                <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0"
                    height="450" style="width:100%;max-width:660px;overflow:hidden;background:transparent;"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src="https://embed.music.apple.com/us/album/the-impending-loop-original-motion-picture-score-ep/1635782777"></iframe>
                <div class="badges">
                    <a href="https://music.apple.com/us/album/the-impending-loop-original-motion-picture-score-ep/1635782777"
                        target="_blank">
                        <img class="listen" id="apple-music" alt="Apple music badge" src="@/assets/apple-music.png" />
                    </a>
                    <a href="https://open.spotify.com/album/0tKOqtql9tsgRpD4n675Ag?si=CXM6CQJ4QaC-MgOkivrt6w"
                        target="_blank">
                        <img class="listen" alt="Spotify badge" src="@/assets/spotify.png" />
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
    name: "TheImpendingLoop",
    components: {
        Footer,
        Header,
        Menu,
    },
}
</script>

<style scoped>
.the-impending-loop, .album {
    display: flex;
    flex-direction: column;
}

.the-impending-loop {
    height: 92vh;
    justify-content: space-between;
}

.album {
    margin: 0 auto;
    width: 90vw;
}

#the-impending-loop-title {
    margin: 15px auto 10px;
    width: 300px;
    height: 25px;
}

iframe {
    margin: 25px auto;
}

.badges {
    margin-bottom: 50px;
}

.listen {
    width: 142px;
    height: 41px;
}

#apple-music {
    margin: 0 10px;
}

@media only screen and (min-width: 600px) {
    .the-impending-loop {
        height: 100vh;
    }
    
    #the-impending-loop-title {
        width: 350px;
        height: 28px;
    }

    .album {
        margin: 0;
        width: 60vw;
    }

    .badges {
        margin: 15px 0 25px;
    }
}

@media only screen and (min-width: 1000px) {
    .album {
        margin-left: -180px;
        width: 40vw;
    }
    
    #the-impending-loop-title {
        width: 400px;
        height: 31px;
    }
}
</style>
