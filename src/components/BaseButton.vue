<template>
    <div>
        <button v-on="$listeners" v-bind="$attrs" class="button">
            <slot />
        </button>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
}
</script>

<style scoped></style>
