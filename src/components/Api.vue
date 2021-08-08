<template>
  <div>
    <br />
    <el-collapse v-model="activeNames">
      <el-collapse-item title="URL" name="1">
        <el-alert
          :title="data.url"
          :closable="false"
          type="success"
          effect="dark"
        >
        </el-alert>
      </el-collapse-item>
      <el-collapse-item title="请求方法" name="1">
        <el-alert
          :title="data.method"
          :closable="false"
          type="warning"
          effect="dark"
        >
        </el-alert>
      </el-collapse-item>
      <el-collapse-item v-if="data.urlObj" title="API参数" name="2">
        <el-table :data="data.urlObj.list" style="width: 100%">
          <el-table-column
            v-for="(item, index) in data.urlObj.keys"
            :prop="item.key"
            :label="item.label"
            width="180"
            :key="index"
          />
        </el-table>
        <div v-if="data.urlObj.dataType" v-highlight>
          <pre>
            <code class="javascript">{{JSON.stringify(data.urlObj.dataType, null, 4)}}</code></pre>
        </div>
      </el-collapse-item>
      <el-collapse-item v-if="data.req" title="请求头" name="2">
        <el-table :data="data.req.list" style="width: 100%">
          <el-table-column
            v-for="(item, index) in data.req.keys"
            :prop="item.key"
            :label="item.label"
            width="180"
            :key="index"
          />
        </el-table>
        <div v-if="data.req.dataType" v-highlight>
          <pre>
            <code class="javascript">{{JSON.stringify(data.req.dataType, null, 4)}}</code></pre>
        </div>
      </el-collapse-item>
      <el-collapse-item v-if="data.params" title="查询字符串" name="3">
        <el-table :data="data.params.list" style="width: 100%">
          <el-table-column
            v-for="(item, index) in data.params.keys"
            :prop="item.key"
            :label="item.label"
            width="180"
            :key="index"
          />
        </el-table>
        <div v-if="data.params.dataType" v-highlight>
          <pre>
            <code class="javascript">{{JSON.stringify(data.params.dataType, null, 4)}}</code></pre>
        </div>
      </el-collapse-item>
      <el-collapse-item v-if="data.form" title="提交数据" name="3">
        <el-table v-if="data.form.list" :data="data.form.list" style="width: 100%">
          <el-table-column
            v-for="(item, index) in data.form.keys"
            :prop="item.key"
            :label="item.label"
            width="180"
            :key="index"
          />
        </el-table>
        <div v-if="data.form.dataType" v-highlight>
          <pre>
            <code class="javascript">{{JSON.stringify(data.form.dataType, null, 4)}}</code></pre>
        </div>
      </el-collapse-item>
      <el-collapse-item v-if="data.res" title="响应体" name="4">
        <el-table v-if="data.res.list" :data="data.res.list" style="width: 100%">
          <el-table-column
            v-for="(item, index) in data.res.keys"
            :prop="item.key"
            :label="item.label"
            width="180"
            :key="index"
          />
        </el-table>
        <div v-if="data.res.dataType" v-highlight>
          <pre>
            <code class="javascript">{{JSON.stringify(data.res.dataType, null, 4)}}</code></pre>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      activeNames: ["1", "2", "3", "4", "5", "6"],
    };
  },
};
</script>

<style>
</style>