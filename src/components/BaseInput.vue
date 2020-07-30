<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <input
            @input="updateValue"
            v-bind="$attrs"
            :value="value"
            v-on="listeners"
        />
    </div>
</template>

<script>
import { formFieldMixin } from '../mixins/formFieldMixin'
export default {
    mixins: [formFieldMixin],
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                input: this.updateValue,
            }
        },
    },
}
</script>

<style></style>
