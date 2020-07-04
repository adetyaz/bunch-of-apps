<template>
    <div class="home">
        <div class="home__cards">
            <router-link router-link to="/converter" tag="li">
                <div class="home__card">
                    <h3 class="home__title">Converter</h3>
                </div>
            </router-link>
            <div class="home__card">
                <h3 class="home__title">BorderBox</h3>
            </div>
            <div class="home__card">
                <h3 class="home__title">JSON2CSV</h3>
            </div>
            <router-link router-link to="/citycard" tag="li">
                <div class="home__card">
                    <h3 class="home__title">City Card</h3>
                </div>
            </router-link>
            <div class="home__card">
                <h3 class="home__title">Weather</h3>
            </div>
            <div class="home__card">
                <h3 class="home__title">Todos</h3>
            </div>
            <div class="home__card">
                <h3 class="home__title">ComicBook</h3>
            </div>
            <div class="home__card">
                <h3 class="home__title">Downloader</h3>
            </div>
            <div class="home__card">
                <h3 class="home__title">Blog</h3>
            </div>
        </div>
        <!-- <Header /> -->
        <!-- <CityCard /> -->
        <!-- <Converter /> -->
    </div>
</template>

<script>
// @ is an alias to /src
// import Header from '@/components/Header.vue'
// // import CityCard from '@/components/CityCard.vue'
// import Converter from '@/components/Converter.vue'

export default {
    components: {
        // Header,
        // // CityCard,
        // Converter,
    },
}
</script>

<style lang="scss" scoped>
.home {
    padding: 5rem 5rem;

    &__cards {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    &__card {
        flex: 0 0 30%;
        height: 15rem;
        width: 25rem;
        margin: 3rem 0;
        background: linear-gradient(to left, #df7c7c, #e48f20, #f5d315);
        border-radius: 3px;
        border: 1px solid transparent;
        box-shadow: 0 1rem 1rem rgba($color: #000000, $alpha: 0.5);
        text-decoration: none;
        transition: all 0.5s ease-in;
        &:hover {
            transform: scale(1.05);
        }
    }
    &__title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #ffffff;
        text-align: center;
        text-transform: capitalize;
    }
}
li {
    list-style: none;
    a {
        text-decoration: none;
    }
}
</style>
