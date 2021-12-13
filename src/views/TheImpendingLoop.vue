<template>
    <div class="the-impending-loop">
        <Header :showBackButton=true />
        <div class="content">
            <div class="desktop">
                <Menu />
            </div>
            <div class="coming-soon">
                <h3>Coming soon</h3>
                <p>Album scheduled for early <b>2022</b></p>
                <img alt="The Impending Loop credits" src="@/assets/the-impending-loop-small.png" />
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
.the-impending-loop, .coming-soon {
    display: flex;
    flex-direction: column;
}

.the-impending-loop {
    height: 92vh;
    justify-content: space-between;
}

.coming-soon {
    margin: 0 auto;
    width: 90vw;
}

.coming-soon h3 {
    margin-bottom: 0;
}

.coming-soon p {
    margin-bottom: 25px;
}

@media only screen and (min-width: 600px) {
    .the-impending-loop {
        height: 100vh;
    }

    .coming-soon {
        margin: 0;
        width: 60vw;
    }
}

@media only screen and (min-width: 1000px) {
    .coming-soon {
        margin-left: -180px;
        width: 40vw;
    }
}
</style>
