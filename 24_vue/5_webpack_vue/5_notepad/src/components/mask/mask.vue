<template>
    <div class="masker">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Masker'
}
</script>

<style lang="stylus" scoped>
    @import "./mask.styl"
</style>


