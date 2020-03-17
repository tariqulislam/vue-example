<template>
  <div class="hello">
     <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      message: 'hello!'
    }
  },
  created () {
    this.message = 'bye!'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello span {
   color: blue
}
</style>
