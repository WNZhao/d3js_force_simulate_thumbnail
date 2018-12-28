<template>
  <div id="graph">
  </div>
</template>
<script>
import * as d3 from 'd3'
// 默认数据
const defaultDatas = {
  nodes: [
    {
      id: '001',
      label: '节点一'
    },
    {
      id: '002',
      label: '节点二'
    },
    {
      id: '003',
      label: '节点三'
    },
    {
      id: '004',
      label: '节点四'
    },
    {
      id: '005',
      label: '节点五'
    },
    {
      id: '006',
      label: '节点六'
    },
    {
      id: '007',
      label: '节点七'
    },
    {
      id: '008',
      label: '节点八'
    },
    {
      id: '009',
      label: '节点九'
    },
    {
      id: '010',
      label: '节点十'
    }
  ],
  edges: [
    {
      source: '001',
      target: '002'
    },
    {
      source: '001',
      target: '003'
    },
    {
      source: '001',
      target: '004'
    },
    {
      source: '001',
      target: '005'
    },
    {
      source: '001',
      target: '006'
    },
    {
      source: '001',
      target: '007'
    },
    {
      source: '001',
      target: '008'
    },
    {
      source: '001',
      target: '009'
    },
    {
      source: '001',
      target: '010'
    }
  ]
}
export default {
  data() {
    return {
        defaultDatas
    }
  },
  methods: {
    initGraph(){
        
    }
  },
  mounted() {
      console.log(d3)
  }
}
</script>
<style>
</style>
