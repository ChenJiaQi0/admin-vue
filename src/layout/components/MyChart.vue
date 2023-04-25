<template>
  <v-chart class="chart" :option="option" />
</template>

<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide } from 'vue'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent])

provide(THEME_KEY, 'white')

const option = ref({
  title: {
    text: '数据统计',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['支付订单', '订单量', '销售额', '新增用户量']
  },
  series: [
    {
      name: '数据统计',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 499, name: '支付订单' },
        { value: 567, name: '订单量' },
        { value: 365, name: '销售额' },
        { value: 78, name: '新增用户量' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(255, 255, 255, 0.2)'
        }
      }
    }
  ]
})
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
