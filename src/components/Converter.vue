<template>
    <div class="converter">
        <form @submit.prevent="displayValue">
            <BaseInput
                label="Temperature"
                v-model.number="temperature"
                placeholder="900"
                type="text"
                class="inputField"
            />
            <BaseButton type="submit">Submit</BaseButton>
        </form>

        <div v-if="displayValue">
            <p>{{ temperature }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            temperature: '',
        }
    },
    methods: {
        displayValue() {
            this.temperature = this.temperature * 4
            this.clearForm()
        },
        clearForm() {
            this.temperature = ''
        },
    },
}
</script>

<style lang="scss" scoped>
.converter {
    height: 100vh;
}
</style>