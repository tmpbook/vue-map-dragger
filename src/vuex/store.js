import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const SANTA_MONICA = {
  left: -116,
  top: -3013,
}

let coordinates;

try {
  const hashWithoutHash = window.location.hash.slice(1); // #foo => foo
  const coodString = window.decodeURIComponent(hashWithoutHash) // { "foo": "bar" }
  coordinates = JSON.parse(coodString)
} catch (error) {
  console.log("Error deserializing coordinates: " + error)
  coordinates = SANTA_MONICA
}

const state = {
  mapName: "Los Angeles",
  coordinates: coordinates,
  mapLoaded: false,
}

export default new Vuex.Store({
  actions,
  state,
  getters,
  mutations,
})
