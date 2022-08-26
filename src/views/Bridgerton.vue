<template>
    <div class="bridgerton">
        <Header :showBackButton=true />
        <div class="content">
            <div class="desktop">
                <Menu />
            </div>
            <div class="score">
                <a href="https://youtu.be/M8JrZ6W7Q9E" target="_blank">
                    <img id="bridgerton-title" alt="Bridgerton title" src="@/assets/bridgerton-title.png" />
                </a>
                <div id="youtube">
                    <iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/M8JrZ6W7Q9E"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
                <div id="soundcloud">
                    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1331557804&color=%23865636&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                    </iframe>
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
    name: "Bridgerton",
    components: {
        Footer,
        Header,
        Menu,
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Iceland&display=swap');

.bridgerton, .score {
    display: flex;
    flex-direction: column;
}

.bridgerton {
    height: 92vh;
    justify-content: space-between;
}

#bridgerton-title {
    margin: 15px auto 40px;
    width: 200px;
    height: 30px;
}

.score {
    margin: 0 auto;
    width: 90vw;
}

iframe {
    margin-top: 10px;
}

iframe:last-child {
    margin-bottom: 25px;
}

@media only screen and (min-width: 600px) {
    .bridgerton {
        height: 100vh;
    }

    #bridgerton-title {
        width: 240px;
        height: 36px;
    }

    .score {
        margin: 0;
        width: 60vw;
    }
}

@media only screen and (min-width: 1000px) {
    .score {
        margin-left: -180px;
        width: 40vw;
    }
}
</style>
