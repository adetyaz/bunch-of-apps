<template>
    <div class="converter">
        <h3>Pick A Your Conversion</h3>
        <BaseInput
            label="Temperature"
            v-model.number="temperature"
            placeholder="900"
            type="text"
            class="inputField"
        />

        <BaseSelect
            label="Convert From"
            :options="conversions"
            v-model="convert.name"
        />
        <BaseSelect
            label="Convert To"
            :options="conversions"
            v-model="convert.name"
        />

        <BaseButton type="submit">Submit</BaseButton>

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
            conversions: [{ name: 'farenheit' }, { name: 'celsius' }],
            from: 'farenheit',
            to: 'celsius',
        }
    },
    computed: {
        final: function() {
            var from = this.from
            var to = this.to
            var final

            switch (from) {
                case 'farenheit':
                    {
                        if (to == 'celsius') {
                            final = this.temperature * 5
                        }
                    }
                    break
                case 'celsius': {
                    if (to == 'farenheit') {
                        final = this.temperature * 10
                    }
                }
            }
            return final
        },
    },
}
</script>

<style lang="scss" scoped>
.converter {
    height: 100vh;
}
</style>
