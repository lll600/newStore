<template>
  <div>
    <el-tag size="small" :key="tag.home" v-for="tag in tags" :closable="tag.name !== 'home'" :disable-transitions="false" @close="handleClose(tag)">
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      tags: state => state.tab.tagList
    })
  },
  data() {
    return {
      dynamicTags: ['标签一', '标签二', '标签三']
    }
  },
  methods: {
    ...mapMutations({
      close: 'closeTag'
    }),
    handleClose(tag) {
      this.close(tag)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-tag {
  margin: 10px;
}
</style>
