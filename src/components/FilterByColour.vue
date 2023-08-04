<template>
    <div class="flex flex-col justify-center items-center">
      <input type="text" class="w-full m-auto outline-none mt-20 mx-8 border border-black" v-model="hairId">
      <button class="bg-green-400 w-48 mt-4 mx-20" @click="getHair(hairId)">Filter</button>
      {{ hairId }}
      {{ colour }}
    </div>
  </template>
  
  <script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'FilterByColour',
  data() {
    return {
      hairId: null
    };
  },
  methods: {
    ...mapActions({ getHair: 'getHairByColour' }) 
  },
  computed: {
    ...mapGetters({ colour: 'getHairByColour' }) 
  }
};
</script>
  