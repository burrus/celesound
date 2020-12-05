<template>
    <div id="app">
        <router-view />
        <p id="openSource">
            This site is
            <a href="https://github.com/burrus/celesound" target="_blank">open source</a>
        </p>
    </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap");

#app {
    color: #2c3e50;
    font-family: "Roboto Mono", sans-serif;
    text-align: center;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}

.content {
    display: flex;
}

.desktop {
    align-self: center;
    display: none;
    margin: 0 50px;
}

#openSource {
    color: black;
    font-size: 0.8em;
    margin: 20px 0;
}

#openSource a {
    color: black;
}

#openSource a:hover {
    text-decoration: line-through;
}

@media only screen and (min-width: 600px) {
    .content {
        justify-content: space-between;
    }

    .desktop {
        display: initial;
    }
}
</style>
