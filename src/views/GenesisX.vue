<template>
    <div class="genesis-x">
        <Header :showBackButton=true />
        <div class="content">
            <div class="desktop">
                <Menu />
            </div>
            <div class="teaser">
                <a href="https://www.imdb.com/title/tt20836014/fullcredits/?ref_=tt_cl_sm" target="_blank">
                    <h3 id="title">GENESIS X</h3>
                </a>
                <iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/nYFBphSp4Oo"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
                <p>Album coming soon (^_-)+*</p>
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
    name: "GenesisX",
    components: {
        Footer,
        Header,
        Menu,
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Iceland&display=swap');

.genesis-x, .teaser {
    display: flex;
    flex-direction: column;
}

.genesis-x {
    height: 92vh;
    justify-content: space-between;
}

.teaser {
    margin: 0 auto;
    width: 90vw;
}

.teaser a {
    text-decoration: none;
}

.teaser h3 {
    margin-bottom: 0;
}

.teaser p {
    margin-bottom: 25px;
}

#title {
    color: #bd8eea;
    font-family: "Iceland", sans-serif;
    font-size: 3.5em;
    margin-top: 0;
    text-shadow: -1px 1px black;
}

iframe {
    margin: 50px 0
}

@media only screen and (min-width: 600px) {
    .genesis-x {
        height: 100vh;
    }

    .teaser {
        margin: 0;
        width: 60vw;
    }

    #title {
        font-size: 5em;
    }
}

@media only screen and (min-width: 1000px) {
    .teaser {
        margin-left: -180px;
        width: 40vw;
    }

    #title {
        font-size: 6em;
    }
}
</style>
