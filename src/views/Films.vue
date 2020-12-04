<template>
    <div class="films">
        <Header />
        <div class="content">
            <div class="desktop">
                <Menu />
            </div>
            <div class="posters">
                <img alt="The Impending Loop poster" src="@/assets/the-impending-loop.png" />
                <img alt="Strength poster" src="@/assets/strength.png" />
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
}
</script>

<style scoped>
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
    overflow: auto;
}

.posters img {
    margin-right: 10px;
    max-height: 100%;
    max-width: 90%;
}

@media only screen and (min-width: 600px) {
    .posters img {
        max-height: 70vh;
    }
}

@media only screen and (min-width: 1100px) {
    .posters {
        margin-left: -160px;
    }
}
</style>
