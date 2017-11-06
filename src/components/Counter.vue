<template>
  <div class="couter">
    <button type="button" name="button" @click='add'>+</button>
    <button type="button" name="button" @click="reduce">-</button>
    {{num}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 0,

    }
  },
  methods:{
    add(){
      this.num++;
    },
    reduce(){
      this.num--;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
