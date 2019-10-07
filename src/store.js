import Vue from 'vue'
import vuex from 'vuex'
import { db, database } from '@/main'
Vue.use(vuex)

export default new vuex.Store({
     state: {
          diaries: null,
          form: {
               date: '',
               log: []
          }
     },

     getters: {
          getDiaries: state => state.diaries,
          getForm: state => state.form,
          getLog: state =>  state.form.log 
     },

     mutations: {
          callDiary: (state) => {
               let diaries = []

               database.collection('diary').onSnapshot(snapshot => {
                    diaries = []
                    snapshot.forEach(diary => {
                         diaries.push({
                              id: diary.id,
                              date: diary.data().date,
                              log: diary.data().log
                         })
                    })
                    state.diaries = diaries
               })

               
          },
          addDiary: (state, payload) => {
               db.ref('diary').push(payload)
               
               database.collection('diary').add(payload )
                       .then(res => console.log(res))
                       .catch(err => console.log(err))
          },
          setLog: (state, payload) => state.form.log.push(payload),
          addForm: (state, payload)  => state.form.date = payload
     },

     actions: {
          callDiary: ({commit}) => commit('callDiary'),
          addDiary: ({commit}, payload) => commit('addDiary', payload),
          setLog: ({commit}, payload) => commit('setLog', payload),
          addForm: ({commit}, payload) => commit('addForm', payload)
     }
})