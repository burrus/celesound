<template>
    <div class="openSource">
        <p>
            This site is
            <a href="https://github.com/burrus/celesound" target="_blank">open source</a>
        </p>
    </div>
</template>

<script>
export default {
    name: "OpenSource",
}
</script>

<style scoped>
p {
    color: black;
    font-size: 0.8em;
    margin-bottom: -20px;
}

p a {
    color: black;
}

p a:hover {
    text-decoration: line-through;
}

.openSource {
    margin-bottom: 40px;
}
</style>
