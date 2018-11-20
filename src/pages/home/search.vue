<template>
  <div class="search">
    <header class="header">
      <van-icon name="arrow-left" class="search__return" @click="routeTo"/>
      <van-search  class="search__input" v-model="value" placeholder="请输入搜索关键词" show-action @search="onSearch">
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </header>
    <jc-empty v-if="searchList.length === 0"></jc-empty>
  </div>
</template>

<script>
  import jcEmpty from 'components/jc-empty.vue'
  export default {
    name: 'search',
    components: {jcEmpty},
    data() {
      return {
        value:'',
        searchList:[]
      }
    },
    created() {
      
    },
    mounted() {
      
    },
    methods: {
      onSearch() {
        console.log(11)
      },
      routeTo() {
        this.$router.back()
      }
    }
//  activated() {
//    this.$refs.$scrolltop.forEach((item,index)=>{
//      item.$el.scrollTop = item.$el.dataset.top
//    })
//  }
  }
</script>

<style lang="scss" scoped>
  .search {
    .header{
      display:flex;
      align-items: center;
    }
    &__return {
      display:flex;
      align-items: center;
      height:44px;
      background:rgb(242, 242, 242);
      padding-left: 15px;
    }
    &__input {
      flex:1;
    }
  }
</style>