<template>
    <div>
        <span class="count" v-text="count"></span>
        <button @click="count++" class="increment">Increment</button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                count: 0
            }
        }
    }
</script>
