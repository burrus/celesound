<template>
    <div class="about">
        <Header :showTitle=true />
        <div class="content">
            <div class="desktop">
                <Menu />
            </div>
            <div class="bio">
                <img alt="Selfie" src="@/assets/studio-small.png" class="small" />
                <img alt="Selfie" src="@/assets/studio-large.png" class="large" />
                <p>
                    <b>CELESOUND</b> is a music company from <b>William Anthony</b> - a composer,
                    producer, and multi-instrumentalist based in California. <br /><br />
                    An amalgamation of the words <b>Celestino</b> (late grandfather) and
                    <b>sound</b>, this company creates original music, beats, songs, and film scores
                    that make people <b>feel</b>.<br /><br />Have a project with music needs?
                    <router-link to="/contact" class="cta">Let's talk</router-link>.
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
    name: "About",
    components: {
        Footer,
        Header,
        Menu,
    },
}
</script>

<style scoped>
.bio {
    margin: 0 auto;
    margin-bottom: 20px;
    text-align: left;
}

.bio img,
.bio p {
    max-width: 90vw;
}

.bio img {
    margin: 20px 0;
}

.bio p {
    align-self: center;
    color: black;
    margin-bottom: 0;
}

.content {
    margin-top: 30px;
}

.cta {
    color: black;
    font-weight: bold;
}

.cta:hover {
    text-decoration: line-through;
}

.large {
    display: none;
}

@media only screen and (min-width: 500px) {
    .about {
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: space-between;
    }

    .bio img {
        max-width: 80vw;
    }
}

@media only screen and (min-width: 768px) {
    .bio img {
        max-width: 60vw;
    }
}

@media only screen and (min-width: 1000px) {
    .bio {
        display: flex;
    }

    .bio img {
        max-height: 70vh;
        margin-right: 50px;
    }

    .bio p {
        max-width: 430px;
    }

    .small {
        display: none;
    }

    .large {
        display: initial;
    }
}

@media only screen and (min-height: 1300px) {
    .bio img {
        max-width: 40vw;
    }
}
</style>
