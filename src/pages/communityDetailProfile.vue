<template>
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