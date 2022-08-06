<template>
    <div :class="['staticClass', showOpenSource ? 'open-source' : 'footer']">
        <div class="container" :class="{ 'open-source-container': showOpenSource }">
            <Menu />
            <div class="social">
                <a href="https://www.imdb.com/name/nm12156346" target="_blank">
                    <img alt="IMDb logo" src="@/assets/imdb.svg" />
                </a>
                <a href="https://discord.gg/YpbkrZXg9b" target="_blank">
                    <img alt="Discord logo" src="@/assets/discord.svg" />
                </a>
                <a href="https://instagram.com/wyatony" target="_blank">
                    <img alt="Instagram logo" src="@/assets/instagram.svg" />
                </a>
            </div>
        </div>
        <OpenSource v-if="showOpenSource" />
    </div>
</template>

<script>
import Menu from "@/components/Menu.vue"
import OpenSource from "@/components/OpenSource.vue"

export default {
    name: "Footer",
    components: {
        Menu,
        OpenSource,
    },
    props: {
        showOpenSource: Boolean,
    },
}
</script>

<style scoped>
a {
    padding: 5px;
}

.container {
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    width: 100%;
}

.footer {
    margin-bottom: 20px;
}

.social {
    align-self: flex-end;
}

@media only screen and (min-width: 600px) {
    .container {
        justify-content: space-around;
    }

    .footer {
        margin-bottom: 10px;
    }

    .open-source {
        /* 
            (h) height(<OpenSource />) = 16px
            margin-bottom = -2h
         */
        margin-bottom: -32px;
    }

    .open-source-container {
        margin-bottom: -8px;
    }

    .menu {
        display: none;
    }
}
</style>
