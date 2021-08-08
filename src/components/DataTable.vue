<template>
  <div>
    <h3>{{ key }}</h3>
    <p>{{ note }}</p>
    <el-table :data="fieldes" stripe style="width: 100%">
      <el-table-column prop="name" label="字段名" width="180">
      </el-table-column>
      <el-table-column prop="detail" label="注释" width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    props: ['key','note', 'fields']
};
</script>
