<template>
  <div>
    <div class="d-flex align-start justify-space-between mt-9">
      <h2 class="h2">Основная информация</h2>
      <div>
        <v-btn elevation="0" class="status-btn green"> Светский</v-btn>
        <p class="mt-3 updated__time">Обновлено: 24.03.2023</p>
      </div>
    </div>
    <div class="grid__block mb-16 grid__block__5">
      <div>
        <div class="grid__title">ПОЛ</div>
        <div class="grid__content">Мужской</div>
      </div>
      <div>
        <div class="grid__title">Дата рождения</div>
        <div class="grid__content">12.06.1997 – 26 лет</div>
      </div>
      <div>
        <div class="grid__title">Последний комментарий</div>
        <div class="grid__content">УДР Алмалы – Иванов Иван:
          По результам последней беседы и  предлагаю снять с учета</div>
      </div>
      <div>
        <div class="grid__title">ГОРОД</div>
        <div class="grid__content">Алматы</div>
      </div>
    </div>
    <div class="char__grid">
      <div>
        <PieChart :chartData="pieChartData" :options="pieChartOptions"/>
      </div>
      <div>
        <LineChart :options="lineChartOptions1" :chartData="lineChartData1"/>
      </div>
    </div>
    <h2 class="mt-16 h2 mb-10">Топ активных пользователей</h2>
    <v-table>
      <thead>
      <tr>
        <th class="text-left">
          <span class="pointer">Название сообщества</span>
        </th>
        <th class="text-left px-0">
          <span class="pointer">Платформа</span>
        </th>
        <th class="text-center px-5">
          <span class="pointer">Последнее действие</span>
        </th>
        <th class="text-center">
          <span class="pointer">Категория сообщества</span>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>SunnaPortal.com</td>
        <td>Telegram
        </td>
        <td class="text-center">01.01.2023</td>
        <td class="text-center">
          <v-btn elevation="0" class="status-btn green">Светский</v-btn>
        </td>
      </tr>
      <tr>
        <td>SunnaPortal.com</td>
        <td>Telegram
        </td>
        <td class="text-center">01.01.2023</td>
        <td class="text-center">
          <v-btn elevation="0" class="status-btn red">Аргессивный</v-btn>
        </td>
      </tr>
      <tr>
        <td>SunnaPortal.com</td>
        <td>Telegram
        </td>
        <td class="text-center">01.01.2023</td>
        <td class="text-center">
          <v-btn elevation="0" class="status-btn yellow">Традиционный</v-btn>
        </td>
      </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup>
import {PieChart, LineChart} from 'vue-chart-3';
import {Chart, registerables} from "chart.js";

Chart.register(...registerables);
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
      text: 'В реальном времени'
    }
  }
}
const lineChartOptions1 = {
  type: 'line',
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'С 10.03.2023 – По 24.03.2023'
    }
  }
}

const lineChartData1 = {
  labels: ['', '', '', '', '',],
  datasets: [
    {
      label: 'Аргессивный',
      data: [65, 59, 1, 81, 56],
      fill: false,
      borderColor: 'rgba(255, 48, 0, 1)',
      tension: 0.1,
      borderWidth: 3,
    },
    {
      label: 'Традиционный',
      data: [25, 15, 20, 38, 10],
      fill: false,
      borderColor: 'rgba(255, 184, 0, 1)',
      tension: 0
    },
    {
      label: 'Светский',
      data: [0, 15, 60, 50, 60],
      fill: false,
      borderColor: 'rgba(0, 171, 0, 1)',
      tension: 0.1
    }
  ]
};

</script>