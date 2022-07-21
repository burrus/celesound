<template>
    <div class="films">
        <Header :showTitle=true />
        <div class="content">
            <div class="desktop">
                <Menu />
            </div>
            <div class="posters">
                <img
                    @click="openFilmDetails('genesisX')"
                    alt="Genesis X poster"
                    src="@/assets/genesis-x.png"
                    id="first"
                />
                <img
                    @click="openFilmDetails('theImpendingLoop')"
                    alt="The Impending Loop poster"
                    src="@/assets/the-impending-loop.png"
                    class="middle"
                />
                <img
                    @click="openFilmDetails('strength')"
                    alt="Strength poster"
                    src="@/assets/strength.png"
                    id="last"
                />
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
    name: "Films",
    components: {
        Footer,
        Header,
        Menu,
    },
    methods: {
        openFilmDetails(film) {
            switch (film) {
                case "genesisX":
                    this.$router.push("genesisX")
                    break
                case "theImpendingLoop":
                    // this.$router.push("theImpendingLoop")
                    window.open("https://distrokid.com/hyperfollow/williamanthony1/the-impending-loop-original-motion-picture-score", "_blank")
                    break
                case "strength":
                    this.$router.push("strength")
                    break
            }
        },
    },
}
</script>

<style scoped>
::-webkit-scrollbar {
    display: none;
}

.films,
.posters {
    display: flex;
}

.films {
    flex-direction: column;
    height: 92vh;
    justify-content: space-between;
}

.content {
    max-height: 85%;
}

.posters img {
    margin: auto 0;
    margin-left: 10px;
    max-height: 85% !important;
    max-width: 85%;
}

.posters {
    margin: 10px -10px 0 -10px;
    overflow: auto;
    scroll-snap-type: x mandatory;
}

.posters img {
    scroll-snap-align: start;
}

.posters img:hover {
    cursor: pointer;
}

#first {
    padding-left: 10px;
}

#last {
    padding-right: 20px;
}

@media only screen and (min-width: 600px) {
    .content {
        margin-top: 30px;
        max-height: 100%;
    }

    .films {
        height: 100vh;
    }

    #first {
        margin-left: 0;
        padding-left: 0;
    }

    .posters {
        margin-top: 0;
    }
    
    .posters img {
        max-height: 70vh;
    }
}

@media only screen and (min-width: 1100px) {
    .posters {
        margin-right: 0;
    }

    #first {
        margin-left: 0;
        padding-left: 0;
    }

    #last {
        padding-right: 0;
    }
}

@media only screen and (min-width: 1800px) {
    .posters {
        margin-left: -170px;
    }
}
</style>
