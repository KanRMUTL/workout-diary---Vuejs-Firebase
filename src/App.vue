<template>
  <div>
    <DiaryForm />
    <DiaryCard/>
  </div>
</template>

<script>
import DiaryCard from './components/DiaryCard'
import DiaryForm from './components/DiaryForm'

export default {
  name: 'app',
  components: {
    DiaryCard,
    DiaryForm
  },
  mounted () {
    this.$store.dispatch('callDiary');
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
