<template>
  <TodoList />
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
#app {
  padding: 2em;
  font-weight: normal;

}
</style>
