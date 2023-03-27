<template>
  <div class="page">
    <div class="d-flex align-center justify-space-between">
      <h4 class="page-header">Статистика</h4>
      <div class="d-flex">
        <v-btn class="primary-btn mr-4" elevation="0">
          <icon icon-name="export-pdf-icon"/>
          Экспорт PDF
        </v-btn>
        <v-btn class="transparent-btn" elevation="0">
          <icon icon-name="export-icon"/>
          Экспорт Excel
        </v-btn>
      </div>
    </div>
    <div class="mt-5 mb-16 d-flex align-center">
      <div class="date__picker mr-13">
        <div class="picker__label">Дата начала</div>
        <div class="date__block">
          <span>{{ startDate }}</span>
          <date-picker
              v-model="sDate"
              locale="ru"
              :flow="flow"
              model-type="dd.MM.yyyy"
          >
            <template #trigger>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6 1.33333C6.36819 1.33333 6.66667 1.63181 6.66667 2V2.66667H9.33333V2C9.33333 1.63181 9.63181 1.33333 10 1.33333C10.3682 1.33333 10.6667 1.63181 10.6667 2V2.66667H12.6667C13.403 2.66667 14 3.26362 14 4V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V4C2 3.26362 2.59695 2.66667 3.33333 2.66667H5.33333V2C5.33333 1.63181 5.63181 1.33333 6 1.33333ZM5.33333 4H3.33333V6H12.6667V4H10.6667V4.66667C10.6667 5.03486 10.3682 5.33333 10 5.33333C9.63181 5.33333 9.33333 5.03486 9.33333 4.66667V4H6.66667V4.66667C6.66667 5.03486 6.36819 5.33333 6 5.33333C5.63181 5.33333 5.33333 5.03486 5.33333 4.66667V4ZM12.6667 7.33333H3.33333V12.6667H12.6667V7.33333Z"
                    fill="#4685D7"/>
              </svg>
            </template>
          </date-picker>
        </div>
      </div>
      <div class="date__picker">
        <div class="picker__label">Дата окончания</div>
        <div class="date__block">
          <span>{{ endDate }}</span>
          <date-picker
              v-model="eDate"
              locale="ru"
              :flow="flow"
              model-type="dd.MM.yyyy"
          >
            <template #trigger>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6 1.33333C6.36819 1.33333 6.66667 1.63181 6.66667 2V2.66667H9.33333V2C9.33333 1.63181 9.63181 1.33333 10 1.33333C10.3682 1.33333 10.6667 1.63181 10.6667 2V2.66667H12.6667C13.403 2.66667 14 3.26362 14 4V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V4C2 3.26362 2.59695 2.66667 3.33333 2.66667H5.33333V2C5.33333 1.63181 5.63181 1.33333 6 1.33333ZM5.33333 4H3.33333V6H12.6667V4H10.6667V4.66667C10.6667 5.03486 10.3682 5.33333 10 5.33333C9.63181 5.33333 9.33333 5.03486 9.33333 4.66667V4H6.66667V4.66667C6.66667 5.03486 6.36819 5.33333 6 5.33333C5.63181 5.33333 5.33333 5.03486 5.33333 4.66667V4ZM12.6667 7.33333H3.33333V12.6667H12.6667V7.33333Z"
                    fill="#4685D7"/>
              </svg>
            </template>
          </date-picker>
        </div>
      </div>
    </div>
    <div class="grid__block">
      <div>
        <LineChart :options="lineChartOptions2" :chartData="lineChartData2"/>
      </div>
      <div>
        <div>
          <h4 class="text-center top__header">Топ активных сообществ</h4>
          <div class="top__grid">
            <div class="top__title">Название сообщества</div>
            <div class="top__title">Категория сообщества</div>
            <div class="top__content">Sunna Portal</div>
            <div class="top__content">
              <v-btn class="status-btn red" elevation="0">Аргессивный</v-btn>
            </div>
            <div class="top__content">ABCDE</div>
            <div class="top__content">
              <v-btn class="status-btn green" elevation="0">Светский</v-btn>
            </div>
            <div class="top__content">Мадхалиты</div>
            <div class="top__content">
              <v-btn class="status-btn yellow" elevation="0">Традиционный</v-btn>
            </div>
          </div>
        </div>
        <PieChart :chartData="pieChartData" :options="pieChartOptions"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {PieChart, LineChart} from 'vue-chart-3';
import {Chart, registerables} from "chart.js";

Chart.register(...registerables);
import Icon from "@/components/icon.vue";
import {computed, ref} from "vue";

const pieChartData = {
  labels: ['– Светский', '– Агрессивный', '– Традиционный'],
  datasets: [
    {
      data: [60, 23, 7],
      backgroundColor: ['#00AB00', '#FF3000', '#FFB800'],
    },
  ],
};
const pieChartOptions = {
  responsive: true,
  showLine: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Отношение типов действий'
    }
  }
}
const lineChartOptions2 = {
  type: 'line',
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Корреляция агрессивных действий'
    }
  }
}
const lineChartData2 = {
  labels: ['', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'Агрессивные действия',
      data: [500, 900, 850, 1500, 1050, 2100, 700, 2100],
      borderColor: 'rgba(204, 162, 0, 1)',
      tension: 0.1,
    },
    {
      label: 'Общее количество действий',
      data: [0, 800, 650, 1000, 850, 1700, 500, 1300],
      fill: false,
      borderColor: 'rgba(31, 120, 180, 1)',
      tension: 0
    },
  ]
};
const sDate = ref()
const eDate = ref()
const flow = ['calendar']
const startDate = computed(() => {
  return sDate.value || 'ДД.ММ.ГГГГ'
})
const endDate = computed(() => {
  return eDate.value || 'ДД.ММ.ГГГГ'
})
</script>