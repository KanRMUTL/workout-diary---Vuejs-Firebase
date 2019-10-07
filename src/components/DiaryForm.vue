<template>
  <div class="md-layout">
    <md-card class="md-layout-item md-small-size-100">
          <md-card-header>
               <div class="md-title">Add Activity</div>
          </md-card-header>
          <md-card-content>
               <div class="layout-gutter md-layout">

                    <div class="md-layout-item ">
                         <md-field>
                              <label for="new-diary">new workout</label>
                              <md-input name="new-diary" v-model="date"/>
                         </md-field>
                         Log
                         <md-field>
                              <label for="log-name">Workout name</label>
                              <md-input name="log-name" v-model="log.name"/>
                         </md-field>

                         <li><span>{{ log.minutes }}</span>Minutes</li>
                         <li><span>{{ log.second }}</span>Second</li>

                         <md-button class="md-raised md-primary" @click="stopWatch" v-if="!watching">
                              <md-icon class="fa fa-play"></md-icon>
                         </md-button>
                         <md-button class="md-raised md-accent" @click="watching = !watching" v-if="watching">
                              <md-icon class="fa fa-stop"></md-icon>
                         </md-button>
                         <br>
                         <md-button class="md-raised" @click="submitLog">Add New Log</md-button>
                         <md-button class="md-raised md-primary" @click="submitForm">Save Diary</md-button>
                    </div>
               </div>
          </md-card-content>
    </md-card>

     <WorkoutLog/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import WorkoutLog from './WorkoutLog'

export default {
     name: 'DiaryForm',
     components: {
          WorkoutLog
     },
     data() {
          return {
               date: '',
               watching: false,
               log: {
                    name: '',
                    minutes: 0,
                    second: 0
               }               
          }
     },
     methods: {
          ...mapActions(['setLog', 'addForm','addDiary']),
          stopWatch(){
               this.watching = true;
               var watch = setInterval(() => {
                    this.log.second++
                    if(this.log.second == 60){
                         this.log.minutes++
                         this.log.second = 0
                    }
                    if(this.watching == false){
                         this.clearLog()
                         clearInterval(watch)
                    }
               }, 1000)
          },
          submitLog() {
               this.watching = false
               this.setLog(this.log)
               this.clearLog()
          },
          submitForm () {
               this.watching = false
               this.addForm(this.date)
               this.addDiary(this.getForm)
               this.date = '',
               this.clearLog()
          },
          clearLog(){
               this.log = {
                    name: '',
                    minutes: 0,
                    second: 0
               }
          }
     },

     computed: {
          ...mapGetters(['getLog', 'getForm'])
     },
};
</script>

<style scoped>
.md-card-content {
    line-height: 50px;
}
li {
  display: inline-block;
  font-size: 1.5em;
  list-style-type: none;
  padding: 1em;
  text-transform: uppercase;
}

li span {
   text-align: center;
  display: block;
  font-size: 4.5rem;
}

</style>