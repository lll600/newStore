<template>
  <el-container style="height:100%">
    <el-aside width="200px"><common-aside></common-aside></el-aside>
    <el-container>
      <el-header><common-header></common-header></el-header>
      <el-main>
        <common-tab></common-tab>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from '../components/CommonHeader'
import CommonAside from '../components/CommonAside'
import CommonTab from '../components/CommonTab'
export default {
  components: {
    CommonHeader,
    CommonAside,
    CommonTab
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  background: #545c64;
}
</style>
