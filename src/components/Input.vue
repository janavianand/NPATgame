<template>
    <div class="input">
        <label for = "name">Name : </label>
        <input id = "name" v-model = "name"/>
        <br>
        <label for="place">Place : </label>
        <input id="place" v-model="place"/>
        <br>
        <label for="animal">Animal : </label>
        <input id="animal" v-model="animal"/>
        <br>
        <label for="thing">Thing : </label>
        <input id="thing" v-model="thing"/>
    </div>
</template>

<script>
export default {
    name: 'Input',
    props:{
      name:String
    }
};
</script>

<style>
input {
  height:50px;
  width:250px;
  border: solid;
  margin:10px;
}
</style>
