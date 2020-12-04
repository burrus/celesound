<template>
    <div class="footer">
        <Menu />
        <div class="social">
            <a href="https://imdb.com" target="_blank">
                <img alt="IMDB logo" src="@/assets/imdb.svg" />
            </a>
            <a href="https://instagram.com/celesound" target="_blank">
                <img alt="Instagram logo" src="@/assets/instagram.svg" />
            </a>
        </div>
    </div>
</template>

<script>
import Menu from "@/components/Menu.vue"

export default {
    name: "Footer",
    components: {
        Menu,
    },
}
</script>

<style scoped>
a {
    padding: 5px;
}

.footer {
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    width: 100%;
}

.social {
    align-self: flex-end;
}

@media only screen and (min-width: 600px) {
    .menu {
        display: none;
    }

    .footer {
        justify-content: space-around;
    }
}
</style>
