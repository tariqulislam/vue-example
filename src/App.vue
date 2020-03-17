<template>
  <div id="app">
    <Header></Header>
    <PostList @value-is-update="updateValue" />
    <div>This is Up value {{upVal}}</div>
    <router-view></router-view>
  </div>
</template>

<script>
import PostList from './components/PostList.vue' 
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    PostList,
    Header
  },
  methods: {
     updateValue: function () {
            return this.upVal++;
        }
  },
  data: function () {
    return {
      upVal: 0,
      listOfPosts: [
        
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
     
      ]
    }
  }
}
</script>
<style></style>
