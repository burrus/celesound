<template>
    <div class="header">
        <div class="row">
            <div class="col-1">
                <router-link v-if="showBackButton" to="/" class="back">
                    &larr;
                </router-link>
                <p v-if="!showBackButton"></p>
            </div>
            <div class="col-2">
                <router-link v-if="showTitle" to="/">
                    <img alt="Celesound logo" src="@/assets/celesound.png" />
                </router-link>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    props: {
        showBackButton: Boolean,
        showTitle: Boolean,
    },
}
</script>

<style scoped>
.header {
    margin-top: 20px;
    text-align: center;
}

.col-1 {
    float: left;
    width: 10%;
}

.col-2 {
    float: left;
    width: 80%;
}

.col-3 {
    float: left;
    width: 10%;
}

.row:after {
    content: "";
    display: table;
    clear: both;
}

.back {
    color: black;
    font-size: 1.5em;
}

.back, .back:hover {
    text-decoration: none;
}

img {
    width: 289px;
    height: 31px;
}

@media only screen and (min-width: 1000px) {
    img {
        width: 434px;
        height: 45px;
    }
}
</style>
