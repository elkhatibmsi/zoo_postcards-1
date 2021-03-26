<template>
  <PostCardForm />
  <PostCard msg="This is where our postcard will live"/>
</template>

<script>
import PostCard from './components/PostCard.vue'
import PostCardForm from './components/PostCardForm.vue'

export default {
  name: 'App',
  components: {
    PostCardForm,
    PostCard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
