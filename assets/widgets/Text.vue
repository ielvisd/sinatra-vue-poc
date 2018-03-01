<template>
    <div class="text">
        This is a static text.
    </div>
</template>

<script>
    module.exports = {
        data: () => ({
            greeting: 'Hello, World!'
        }),
        name: 'text-widget'
    }
</script>

<style scoped>
    .text {
        font-family: sans-serif;
    }
</style>
