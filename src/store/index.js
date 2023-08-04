import axios from 'axios'
import { createStore } from 'vuex'
export default createStore({
  state: {
    user:[],
    character: {},
    colour:[],
    gender:[]
  },
  mutations: {
    setUser(state, payload) {
      state.user=payload;
    },
    SET_CHARACTER(state, payload) {
      state.character = payload;
    },
    setColour(state,payload){
      state.colour=payload;
    },
    setGender(state, payload){
        state.gender=payload;
    }
  },
  actions: {
   async registerUser({ commit }) {
      const response = await axios.get("https://bobsburgers-api.herokuapp.com/v2/characters")
      commit('setUser',response.data)
    },
    async getCharacterById({ commit }, id) {
      console.log('please enter the id ', id);
      const response = await axios.get(`https://bobsburgers-api.herokuapp.com/v2/characters/${id}`)
      commit('SET_CHARACTER', response.data)
    },
    async getHairByColour({ commit }, hair) {
        console.log('please enter the colour ', hair);
        try {
          const response = await axios.get("https://bobsburgers-api.herokuapp.com/v2/characters");
          const allCharacters = response.data;
          const charactersWithHairColor = allCharacters.filter(character => character.hair === hair);
          commit('setColour', charactersWithHairColor);
        } catch (error) {
          console.error("failed to search by colour");
        }
      },
      async getCharacterByGender({ commit }, gender) {
        console.log('please enter gender ', gender);
        try {
          const response = await axios.get(`https://bobsburgers-api.herokuapp.com/v2/characters?gender=${gender}`);
          commit('setGender', response.data);
        } catch (error) {
          console.error("failed to search by gender");
        }
      }
  },
  
  getters: {
    getUser(state) {
      return state.user;
    },
    getCharacter(state) {
      return state.character;
    },
    getHairByColour(state) {
        return state.colour;
      },
    getGender(state){
        return state.gender;
    }
  }
})