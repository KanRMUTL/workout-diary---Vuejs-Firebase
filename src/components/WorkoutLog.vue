<template>
     <md-card v-if="getLog.length > 0" class="md-layout-item md-small-size-100">
          <md-card-header>
               <div class="md-title">
                    Workout Log 
                    &emsp;<md-icon class="fa fa-bars"></md-icon>
          </div>
          </md-card-header>
          <md-card-content>
          <md-list class="md-double-line" v-for="(log, key) in getLog" :key="key">
               <md-list-item>
                         <div class="md-list-item-text">
                         <span>{{ log.name }}</span>
                         <span>{{ `${log.minutes} min ${log.second} sec` }}</span>
                    </div>
               </md-list-item>
          </md-list>
          </md-card-content>
     </md-card>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
     name: 'WorkoutLog',
     computed: {
          ...mapGetters(['getLog'])
     },
}
</script>

<style>

</style>