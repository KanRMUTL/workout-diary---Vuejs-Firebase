<template>
  <div>
    <md-card>
          <md-card-header>
               <div class="md-title">Add Activity</div>
          </md-card-header>
          <md-card-content>
               <div class="layout-gutter md-layout">

                    <div class="md-layout-item md-size-50 md-small-size-100">
                         <md-field>
                              <label for="new-diary">new workout</label>
                              <md-input name="new-diary" v-model="date"/>
                         </md-field>
                         Log
                         <md-field>
                              <label for="log-name">New log</label>
                              <md-input name="log-name" v-model="log.name"/>
                         </md-field>
                         <md-field>
                              <label for="log-minutes">Minutes</label>
                              <md-input name="log-minutes" v-model="log.minutes"/>
                         </md-field>
                         <md-field>
                              <label for="log-second">Seconds</label>
                              <md-input name="log-second" v-model="log.second"/>
                         </md-field>
                         <md-button class="md-primary" @click="submitLog">Add New Log</md-button>
                         <md-button class="md-primary" @click="submitForm">Add New Diary</md-button>
                    </div>
               </div>
          </md-card-content>
    </md-card>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
     name: 'DiaryForm',
     data() {
          return {
               date: '',
               log: {
                    name: '',
                    minutes: '',
                    second: ''
               }
          }
     },

     methods: {
          ...mapActions(['setLog', 'addForm','addDiary']),
          submitLog() {
               this.setLog(this.log)
               this.clearLog()
          },
          submitForm () {
               this.addForm(this.date)
               this.addDiary(this.getForm)
               this.date = '',
               this.clearLog()
          },
          clearLog(){
               this.log = {
                    name: '',
                    minutes: '',
                    second: ''
               }
          }
     },

     computed: {
          ...mapGetters(['getLog', 'getForm'])
     },
};
</script>

<style>
</style>