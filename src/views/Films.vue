<template>
    <div class="films">
        <Header />
        <div class="content">
            <div class="desktop">
                <Menu />
            </div>
            <div class="posters">
                <img
                    @click="openFilmDetails('strength')"
                    alt="Strength poster"
                    src="@/assets/strength.png"
                    id="strength"
                />
                <img
                    @click="openFilmDetails('theImpendingLoop')"
                    alt="The Impending Loop poster"
                    src="@/assets/the-impending-loop.png"
                    id="theImpendingLoop"
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

const urls = {
    strength: "http://artflo.gallery/strength",
    theImpendingLoop: "https://www.sugrue.com/2020/11/20/39b0viycaqw9h0zfr48ll5tjyr3t31",
}

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
                case "strength":
                    window.open(urls.strength, "_blank")
                    break
                case "theImpendingLoop":
                    window.open(urls.theImpendingLoop, "_blank")
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
    height: 100vh;
    justify-content: space-between;
}

.content {
    margin: 30px 0 20px;
}

.posters {
    margin: 0 -10px;
    overflow: auto;
}

.posters img {
    margin-left: 10px;
    max-height: 90%;
    max-width: 90%;
}

.posters img:hover {
    cursor: pointer;
}

#strength {
    padding-left: 10px;
}

#theImpendingLoop {
    padding-right: 20px;
}

@media only screen and (min-width: 600px) {
    .posters img {
        max-height: 70vh;
    }
}

@media only screen and (min-width: 1100px) {
    .posters {
        margin-left: -170px;
        margin-right: 0;
    }

    #strength {
        margin-left: 0;
        padding-left: 0;
    }

    #theImpendingLoop {
        padding-right: 0;
    }
}
</style>
