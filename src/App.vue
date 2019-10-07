<template>
  <div id="app" class="page-container">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="showMenu = !showMenu">
          <md-icon class="fa fa-bars"></md-icon>
        </md-button>
        <span class="md-title">Workout Diary</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="showMenu">
        <md-toolbar class="md-transparent" md-elevation="0">Menu</md-toolbar>
          
        <md-list>
          <md-list-item to="/create" @click="showMenu = !showMenu">
            <md-icon class="fa fa-plus-square"></md-icon>
            <span class="md-list-item-text">Create</span>
          </md-list-item>
          <md-list-item to="/diaries" @click="showMenu = !showMenu">
            <md-icon class="fa fa-history"></md-icon>
            <span class="md-list-item-text">History</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

       <md-app-content>
          <router-view></router-view>
        </md-app-content>

    </md-app>   
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      showMenu: false
    }
  },
  mounted () {
    this.$store.dispatch('callDiary');
  },
}
</script>
