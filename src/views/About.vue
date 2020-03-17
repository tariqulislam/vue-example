<!-- About.vue -->
<template>
   <div>
    <h1>About</h1>
    <button v-on:click="goToHomePage()">Go To Home Page</button>
   </div>
</template>
<script>
export default {
    name: 'About',
    created() {
        console.log('created')
        this.$once('hook:mounted', () => {
            console.log('vue instace is mounted')
        })
    },
    methods: {
        goToHomePage: function () {
            this.$router.replace('/')
        }
    }
}
</script>