<template>
  <el-card class="shadow">
    <template #header>
      <div class="f-between">
        <span class="text-sm">订单统计<!-- card title --></span>
        <div>
          <el-check-tag
            v-for="(item, index) in options"
            :key="index"
            :checked="current == item.value"
            class="mr-2"
            @click="handleChoose(item.value)"
          >
            {{ item.text }}
          </el-check-tag>
        </div>
      </div>
    </template>
    <!-- card body -->
    <div ref="chartRef" class="w-full h-60"></div>
  </el-card>
</template>

<script setup>
import * as echarts from 'echarts'

const current = ref('week')
const options = [
  {
    text: '近1个月',
    value: 'month'
  },
  {
    text: '近1周',
    value: 'week'
  },
  {
    text: '近24小时',
    value: 'hour'
  }
]

const handleChoose = (type) => {
  current.value = type
  getData()
}

let myChart = null

onMounted(() => {
  let chartRef = getCurrentInstance().ctx.$refs.chartRef
  myChart = echarts.init(chartRef)
  getData()
})

onBeforeUnmount(() => {
  if (myChart) {
    echarts.dispose(myChart)
  }
})

const getData = () => {
  let option
  option = {
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180,180,180,0.2)'
        }
      }
    ]
  }
  myChart.showLoading()
  getStatistics2(current.value)
    .then((res) => {
      option.xAxis.data = res.x
      option.series[0].data = res.y
      myChart.setOption(option)
    })
    .finally(() => {
      myChart.hideLoading()
    })
}
</script>
