import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name: [],
        place: [],
        animal: [],
        thing: []
    },
    mutations: {
        changeName(state, name) {
            state.name.push(name);
        },
        changePlace(state, place) {
            state.place.push(place);
        },
        changeAnimal(state, animal) {
            state.animal.push(animal);
        },
        changeThing(state, thing) {
            state.thing.push(thing);
        }
    },
    actions: {}
});
