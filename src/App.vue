<template>
    <v-app>
        <v-content>
            <div id="app">
                <!-- <div id="nav"> -->
                <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>-->
                <!-- </div> -->
                <Calender />
                <router-view />
            </div>
        </v-content>
    </v-app>
</template>

<script>
import Calender from '@/components/Calender.vue'
export default {
    components: {
        Calender,
    },
}
</script>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: url('../src/assets/images/gradient.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
