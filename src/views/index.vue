<script setup>
import CountTo from '@/layout/components/CountTo.vue'
import IndexChart from '@/layout/components/indexChart.vue'
import IndexTag from '@/layout/components/IndexTag.vue'
import IndexNav from '@/layout/components/IndexNav.vue'
import MyChart from '@/layout/components/MyChart.vue'

const panels = ref([])
setTimeout(() => {
  getStatistics1().then((res) => {
    panels.value = res
    console.log(panels.value)
  })
}, 2000)

const goods = ref([])
const orders = ref([])
getStatistics3().then((res) => {
  goods.value = res.goods
  orders.value = res.orders
})
</script>

<template>
  <div class="p-3">
    <el-row :gutter="20">
      <template v-if="panels.length == 0">
        <el-col :span="6" v-for="i in 4" :key="i">
          <el-skeleton style="width: 100%" animated loading>
            <template #template>
              <el-card class="shadow border-0">
                <template #head>
                  <div class="f-between">
                    <el-skeleton-item variant="text" class="w-[50%]"></el-skeleton-item>
                    <el-skeleton-item variant="text" class="w-[10%]"></el-skeleton-item>
                  </div>
                </template>
                <el-skeleton-item variant="h3" class="w-[80%]" />
                <el-divider></el-divider>
                <div class="f-between text-sm text-gray-500">
                  <el-skeleton-item variant="text" class="w-[50%]" />
                  <el-skeleton-item variant="text" class="w-[10%]" />
                </div>
              </el-card>
            </template>
          </el-skeleton>
        </el-col>
      </template>

      <el-col :span="6" v-for="(item, index) in panels" :key="index">
        <el-card class="shadow hover:(shadow-xl bg-sky-100 opacity-70) cursor-pointer">
          <template #header>
            <div class="f-between">
              <span class="text-sm">{{ item.title }}</span>
              <el-tag :type="item.unitColor" effect="plain">
                {{ item.unit }}
              </el-tag>
            </div>
          </template>
          <span class="text-3xl font-bold text-gray-500">
            <!-- {{ item.value }} -->
            <CountTo :value="item.value" />
          </span>
          <el-divider />
          <div class="flex justify-between text-sm text-gray-500">
            <span>{{ item.subTitle }}</span>
            <span>{{ item.subValue }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 快读导航组件 -->
    <IndexNav />

    <el-row :gutter="20" class="mt-5">
      <el-col :span="12">
        <IndexChart />
      </el-col>
      <el-col :span="12">
        <IndexTag title="店铺及商品提示" tip="店铺及商品提示" :btns="goods" class="mb-3" />
        <IndexTag title="交易提示" tip="需要立即处理的交易订单" :btns="orders" />
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <MyChart />
      </el-col>
    </el-row>
  </div>
</template>
