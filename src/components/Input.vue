<template>
    <div class="input">
        <form>
            <label for="name">Name : </label>
            <input id="name" v-model="name" @input="nameChange" />
            <br />
            <label for="place">Place : </label>
            <input id="place" v-model="place" @input="placeChange" />
            <br />
            <label for="animal">Animal : </label>
            <input id="animal" v-model="animal" @input="animalChange" />
            <br />
            <label for="thing">Thing : </label>
            <input id="thing" v-model="thing" @input="thingChange" />
        </form>
    </div>
</template>

<script>
export default {
    name: 'Input',
    methods: {
        nameChange: function(event) {
            this.$store.commit('changeName', event.target.value);
        },
        placeChange: function(event) {
            this.$store.commit('changePlace', event.target.value);
        },
        animalChange: function(event) {
            this.$store.commit('changeAnimal', event.target.value);
        },
        thingChange: function(event) {
            this.$store.commit('changeThing', event.target.value);
        }
    }
};
</script>

<style>
input {
    height: 50px;
    width: 250px;
    border: solid;
    margin: 10px;
}
</style>
