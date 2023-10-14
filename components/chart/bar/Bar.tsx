"use client"
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    
    x: {
      grid: {
        display: false,
      }
    },
    y: {
      grid: {
        display: false,
      }
    }
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  borderRadius: 5,
  backgroundColor: '#F2EFFF',
  hoverBackgroundColor	: '#5A32EA',


};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    
  labels,
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    
    
   
  ],
};

const Comp = () => {
  return <Bar options={options} data={data} />;
  // return <></>
}

export default Comp;
