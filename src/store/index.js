import { createStore } from 'vuex'

export default createStore({

  state: {
    answers: {}
  },

  mutations: {

    addAnswer(state, payload) {
      state.answers[`q-${payload.questionId}`] = payload.answer;
    }

  },

})
