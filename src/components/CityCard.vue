<template>
    <div>
        <div class="pad-5-hor pad-15-ver search-parent">
            <div class="search-bar">
                <b-form-input
                    @input="search_text()"
                    v-model="search.text"
                    type="text"
                    placeholder="Search by Name"
                ></b-form-input>
                <span class="search-icon">
                    <i class="fas fa-search"></i>
                </span>
            </div>
            <div>
                <span class="bold">Total Likes:</span>
                {{ likes.count }}
                <span class="bold">Hits:</span>
                {{ likes.hit }}
            </div>
            <div>
                <b-form-select
                    @input="sort()"
                    v-model="search.filter"
                    :options="options"
                />
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div
                    class="col-md-6 pad-15-ver"
                    v-for="wonder in wonders_data_actual"
                    :key="wonder.id"
                >
                    <div
                        class="card-inner"
                        @mouseover="show_hover(true, wonder.id)"
                        @mouseout="show_hover(false, 0)"
                    >
                        <img
                            :src="wonder.imageURL"
                            alt="image"
                            class="card-img"
                        />
                        <div
                            class="card-bottom pad-15-hor"
                            v-show="!hover_flag || active_id != wonder.id"
                        >
                            <div class="mid-width-160">
                                <span class="bold">Ratings:</span>
                                <star-rating
                                    :rating="wonder.ratings"
                                    :show-rating="false"
                                    :inline="true"
                                    :star-size="15"
                                >
                                </star-rating>
                            </div>
                            <div class="max-width-160">
                                <span class="bold">{{ wonder.place }}</span>
                            </div>
                        </div>
                        <div
                            :class="{ 'card-holder': 1 }"
                            v-show="hover_flag && active_id == wonder.id"
                        >
                            <span
                                @click="make_active(wonder.id)"
                                :class="{
                                    fas: 1,
                                    'fa-heart': 1,
                                    absolute: 1,
                                    green: check_active(wonder.id),
                                }"
                            >
                                {{ wonder.likes }}
                            </span>
                            <h5>{{ wonder.place }}</h5>
                            <p>{{ wonder.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import StarRating from 'vue-star-rating'

export default {
    components: {
        StarRating,
    },
    mounted() {
        this.hover_flag = false
        // var inside = this
        axios
            .get('https://www.mocky.io/v2/5c7b98562f0000c013e59f07')
            .then(response => {
                this.wonders_data_actual = response.data.data
                console.log(response)
                this.wonders_data_actual.map(wonder => {
                    this.likes.count += wonder.likes
                    wonder.active_like = false
                    return wonder
                })
                this.wonders_data = response.data.data
            })
            .catch(error => {
                console.log(error)
            })
    },
    data() {
        return {
            hover_flag: false,
            wonders_data_actual: [],
            wonders_data: [],
            active_id: 0,
            options: [
                { value: null, text: 'Sort By' },
                { value: 'a', text: 'Ratings' },
                { value: 'b', text: 'Likes' },
            ],
            search: { filter: null, text: '' },
            likes: { count: 0, hit: 0 },
        }
    },

    methods: {
        show_hover(flag, active_id) {
            this.hover_flag = flag
            this.active_id = active_id
        },
        sort() {
            console.log(this.search.filter)
            this.search.filter == 'b'
                ? this.wonders_data.sort((a, b) => b.likes - a.likes)
                : this.wonders_data.sort((a, b) => b.ratings - a.ratings)
        },
        search_text() {
            this.wonders_data = this.wonders_data_actual.filter(wonder => {
                if (
                    wonder.place
                        .toLowerCase()
                        .indexOf(this.search.text.toLowerCase() !== '-1')
                ) {
                    return wonder
                }
            })
        },
        check_active(id) {
            let flag = false
            this.wonders_data_actual.map(wonder => {
                if (wonder.id == id) {
                    flag = wonder.active_like
                }
            })
            return flag
        },
        make_active(id) {
            this.likes.hit++
            this.wonders_data_actual = this.wonders_data_actual.map(wonder => {
                if (wonder.id === id) {
                    wonder.active_like = !wonder.active_like
                    wonder.active_like ? wonder.likes++ : wonder.likes--
                }
                return wonder
            })
            this.likes.count = 0
            this.wonders_data_actual.map(wonder => {
                this.likes.count += wonder.likes
            })
        },
    },
}
</script>

<style scoped>
/* Styles are scoped to this component only.*/
/* Style for Desktop/Tablet  */
.search-parent {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    background-color: lightgray;
}
.card-inner {
    position: relative;
    overflow: hidden;
    box-shadow: 2px 2px 8px grey;
}
.card-img {
    width: 100%;
}
.card-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 30px;
    width: 100%;
    background-color: white;
    opacity: 0.7;
    display: flex;
    justify-content: space-between;
}
.card-hover {
    position: absolute;
    right: 15px;
    left: 15px;
    top: 15px;
    bottom: 15px;
    background-color: white;
    opacity: 0.7;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
}
.absolute-star {
    position: absolute;
    top: 10px;
    right: 10px;
}
.card-hover p {
    font-size: 10px;
    text-align: center;
}
.bold {
    font-weight: 500;
}
.rating-div {
    width: 200px;
}
.search-bar {
    position: relative;
}
.search-bar input {
    padding-left: 30px;
}
.search-icon {
    position: absolute;
    top: 8px;
    left: 8px;
}
/* For Mobile Device, we will be going with column wrap approach */
@media screen and (max-width: 550px) {
    .search-parent {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        background-color: lightgray;
    }
    .search-parent div {
        width: 100%;
        text-align: center;
    }
}
</style>
