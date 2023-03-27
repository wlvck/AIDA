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
        <div class="grid__title">Кол-во участников</div>
        <div class="grid__content">2.059</div>
      </div>
      <div>
        <div class="grid__title">Дата создания</div>
        <div class="grid__content">12.06.2022</div>
      </div>
      <div>
        <div class="grid__title">Участников на учете</div>
        <div class="grid__content">1.400 – 68%</div>
      </div>
      <div>
        <div class="grid__title">Платформа</div>
        <div class="grid__content">Telegram</div>
      </div>
    </div>
    <div class="char__grid">
      <div>
        <PieChart :chartData="pieChartData" :options="pieChartOptions"/>
      </div>
      <div>
        <LineChart :options="lineChartOptions1" :chartData="lineChartData1"/>
      </div>
      <div>
        <LineChart :options="lineChartOptions2" :chartData="lineChartData2"/>
      </div>
      <div>
        <LineChart :options="lineChartOptions3" :chartData="lineChartData3"/>
      </div>
    </div>
    <h2 class="mt-16 h2 mb-10">Топ активных пользователей</h2>
    <v-table>
      <thead>
      <tr>
        <th class="text-left">
          <span class="pointer">ФИО</span>
        </th>
        <th class="text-left px-0">
          <span class="pointer">Логин</span>
        </th>
        <th class="text-center px-5">
          <span class="pointer">Последнее действие</span>
        </th>
        <th class="text-center">
          <span class="pointer">Категория</span>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Муратов Олжас</td>
        <td>@12345
        </td>
        <td class="text-center">01.01.2023</td>
        <td class="text-center">
          <v-btn elevation="0" class="status-btn green">Светский</v-btn>
        </td>
      </tr>
      <tr>
        <td>Муратов Олжас</td>
        <td>@12345
        </td>
        <td class="text-center">01.01.2023</td>
        <td class="text-center">
          <v-btn elevation="0" class="status-btn red">Аргессивный</v-btn>
        </td>
      </tr>
      <tr>
        <td>Муратов Олжас</td>
        <td>@12345
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
const lineChartOptions2 = {
  type: 'line',
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Отношение количества участников к подучетным '
    }
  }
}
const lineChartOptions3 = {
  type: 'line',
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: ' Количество действий в сообществе (публикации, сообщения)'
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

const lineChartData2 = {
  labels: ['', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'На учете',
      data: [500, 900, 850, 1500, 1050, 2100, 700, 2100],
      borderColor: 'rgba(204, 162, 0, 1)',
      tension: 0.1,
    },
    {
      label: 'Участники',
      data: [0, 800, 650, 1000, 850, 1700, 500, 1300],
      fill: false,
      borderColor: 'rgba(31, 120, 180, 1)',
      tension: 0
    },
  ]
};

const lineChartData3 = {
  labels: ['', '', '', '', '',],
  datasets: [
    {
      label: 'Аргессивный',
      data: [65, 59, 1, 81, 56],
      fill: false,
      borderColor: 'rgba(229, 0, 212, 1)',
      tension: 0.1,
      borderWidth: 3,
    },
  ]
};
</script>