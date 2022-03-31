<template>
    <div class="button" @click="$emit('onClick')">
        {{ label }}
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend ( {
        name: 'Button',
        props: {
            label: {
                type: String,
                required: true
            }
        }
    } );
</script>

<style lang="css" scoped>
    .button {
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        background-color: cornflowerblue;
        padding: 0.75rem 2rem;
        color: #FFF;
        text-align: center;
        cursor: pointer;
        border-radius: 25px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        -webkit-user-select: none;
        user-select: none;
        font-weight: bold;
    }
</style>