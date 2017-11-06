<template>
  <div class="goodlist">
    goodlist
      <router-link to='/goods/title'>标题</router-link>
      <router-link to='/goods/image'>图片</router-link>
      <!-- <router-link to='/cart'>购物车</router-link> -->
      <button type="button" name="button" @click='jump'>购物车</button>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted(){
  },
  methods:{
    jump(){
      //this.$router.push('/cart')
      this.$router.push({path:'/cart?goodId=123'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
