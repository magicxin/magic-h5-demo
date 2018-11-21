<template>
  <div class="empty">
    <span class="text">{{text}}</span>
  </div>
</template>

<script>
  export default {
    name:'empty',
    data() {
      return {
        
      }
    },
    props: {
      text: {
        type: String,
        default:'在这个星球找不到'
      }
    },
    methods: {
      
    }
  }
</script>

<style scoped lang="scss">
.empty {
  position: relative;
  height: 230px;
  background: url('~@/../static/img/empty.png') no-repeat center 100px;
  background-size: 226px;
  .text {
    position: absolute;
    top:100%;
    left:50%;
    transform: translate(-50%,50%);
  }
}
</style>