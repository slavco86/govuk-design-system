<template>
    <div>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'Layout',
        props: {
            msg: String
        }
    }
</script>