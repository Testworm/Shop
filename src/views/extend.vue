<template>
    <div class="extend">
      <select v-model="selected">
        <option>疯狂java</option>
        <option>疯狂HTML/CSS</option>
        <option>Spring 实战</option>
      </select>
      <p>你的选择是<span v-bind:style="pstyle">{{selected}}</span></p>

      <input type="checkbox" v-model="checked" value="css" id="css"/>
      <label>CSS</label>
      <input type="checkbox" v-model="checked" value="HTML" id="html"/>
      <label>HTML</label>
      <input type="checkbox" v-model="checked" value="javascript" id="javascript"/>
      <label>javascript</label>
      <p>你的选择是<span v-bind:style="pstyle">{{checked}}</span></p>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          selected: "Spring 实战",
          checked: ['css','javascript'],
          pstyle: {
            color: 'red',
            fontSize: 20+'px'
          }
        }
      },
      computed: {
        count() {
          return this.$store.state.count;
        }
      },
      methods: {

      },
        name: "extend"
    }
</script>

<style scoped>

</style>
