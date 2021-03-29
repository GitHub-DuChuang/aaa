<template>
  <div class="table-container">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="genter" label="性别">
       <template #default="scope">
              {{ xingbie(scope.row.genter) }}
       </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination layout="prev, pager, next" :total="20" @current-change="pageChange"> </el-pagination>
    </div>
  </div>
</template>

<script>
import List from './List'
export default {
  data () {
    return {
      tableData: List[1]
    }
  },
  methods: {
    pageChange (page) {
      this.tableData = List[page]
    },

    xingbie (genter) {
      const xing = {
        0: '男',
        1: '女'
      }
      return xing[genter]
    }
  }

}
</script>

<style lang="less" scoped>
 .page{
   margin-top: 20px;
 }
</style>
