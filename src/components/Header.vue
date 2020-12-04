<template>
    <div class="header">
        <img alt="Celesound logo" src="@/assets/celesound.png" />
    </div>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style scoped>
.header {
    margin-top: 20px;
    text-align: center;
}

img {
    width: 289px;
    height: 31px;
}

@media only screen and (min-width: 600px) {
    img {
        width: 578px;
        height: 60px;
    }
}
</style>
