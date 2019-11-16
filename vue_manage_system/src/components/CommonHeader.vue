<template>
  <header>
    <div class="l-header">
      <span class="el-icon-menu menu-style"></span>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: current.path }" v-if="current">{{ current.label }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-header">
      <el-dropdown trigger="click" szie="mini">
        <span class="el-dropdown-link"> <img :src="userImg" alt="" class="user-img" /> </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      current: state => state.tab.currentMenu
    })
  },
  data() {
    return {
      userImg: require('../assets/image/user.png')
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  .l-header {
    display: flex;
    justify-content: flex-start;
    .menu-style {
      margin-right: 20px;
    }
  }
  .r-header {
    .user-img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>
<style lang="scss">
.el-breadcrumb__item {
  &:last-child {
    .el-breadcrumb__inner {
      color: #fff;
      &:hover {
        color: #fff;
      }
    }
  }
}
.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link {
  color: #f4f4f4;
  font-weight: 400;
}
</style>
