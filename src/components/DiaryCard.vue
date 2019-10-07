<template>
<div>
     <md-card v-for="(diary, key) in getDiaries" :key="key">
          <md-card-header>
               <div class="md-title">{{ diary.date }}</div>
          </md-card-header>
          <md-card-content>
               <md-list>
                    <md-list-item v-for="(log, key) in diary.log" :key="`log${key}`" to="#" exact>
                         {{ log.name }}
                         <code> {{ `${log.minutes} min : ${log.second} : sec` }}  </code>
                    </md-list-item>
               </md-list>
          </md-card-content>
     </md-card>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
     name: 'DiaryCard',
     computed: {
          ...mapGetters(['getDiaries'])
     },
}
</script>

<style>
.md-card {
     margin: 2%;
}
</style>