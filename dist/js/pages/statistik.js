/* global Chart:false */


'use strict'
//-------------
// - LINE CHART SNI -
//-------------
var ticksStyle = {
    fontColor: '#495057',
    fontStyle: 'bold'
}

var mode = 'index'
var intersect = true

var $sniLineChart = $('#sniLineChart')
    // eslint-disable-next-line no-unused-vars
var sniLineChart = new Chart($sniLineChart, {
    data: {
        labels: ['January', 'February', 'March', 'May', 'June', 'July', 'August'],
        datasets: [{
                label: "Akses",
                type: 'line',
                lineTension: 0,
                data: [100, 120, 170, 167, 180, 177, 160],
                backgroundColor: 'transparent',
                borderColor: '#007bff',
                pointBorderColor: '#007bff',
                pointBackgroundColor: '#007bff',
                fill: false
                    // pointHoverBackgroundColor: '#007bff',
                    // pointHoverBorderColor    : '#007bff'
            },
            {
                label: "Unduh",
                type: 'line',
                lineTension: 0,
                data: [1, 2, 3, 4, 5, 6, 7],
                backgroundColor: 'transparent',
                borderColor: 'red',
                pointBorderColor: 'red',
                pointBackgroundColor: 'red',
                fill: false
                    // pointHoverBackgroundColor: '#007bff',
                    // pointHoverBorderColor    : '#007bff'
            }
        ]
    },
    options: {
        maintainAspectRatio: false,

        tooltips: {
            mode: mode,
            intersect: intersect
        },
        hover: {
            mode: mode,
            intersect: intersect
        },
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                // display: false,
                gridLines: {
                    display: true,
                    lineWidth: '4px',
                    color: 'rgba(0, 0, 0, .2)',
                    zeroLineColor: 'transparent'
                },
                ticks: $.extend({
                    beginAtZero: true,
                    suggestedMax: 200
                }, ticksStyle)
            }],
            xAxes: [{
                display: true,
                gridLines: {
                    display: false
                },
                ticks: ticksStyle
            }]
        }
    }
})

//-------------
// - PIE CHART SNI -
//-------------


// Get context with jQuery - using jQuery's .get() method.
var pieChartCanvas = $('#pieChart').get(0).getContext('2d')

var pieData = {
    labels: [
        'SNI ISO/IEC 27001:2013',
        'SNI 8527-2018',
        'SNI 8544-6-2018 ISO-IEC 27034-6-2016',
        'SNI ISO IEC 19896-1-2018 (2021)',
        'SNI ISO IEC 20085-2-2020 (2021)',
        'SNI ISO IEC 27004-2016 (Ditetapkan oleh BSN tahun 2019)',
        'SNI ISO IEC 27007-2017',
        'SNI ISO IEC 27017-2015 (2021)_EN'
    ],
    datasets: [{
        data: [700, 500, 400, 600, 300, 100, 150, 350],
        backgroundColor: ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#00a65a', '#f39c12']
    }]
}

var pieOptions = {
        legend: {
            display: false,
        },
        tooltips: {
            enabled: false
        }
    }
    // Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    // eslint-disable-next-line no-unused-vars
var pieChart = new Chart(pieChartCanvas, {
    type: 'doughnut',
    data: pieData,
    options: {
        plugins: {
            legend: {
                display: false,
            },
        }
    }
})


//ini untuk update data di line chart
$(".sniRandChartBtn").click(function() {
    sniLineChart.data.datasets.forEach(dataset => {
        dataset.data = Array.from({ length: 7 }, () => Math.floor(Math.random() * 200));
    });
    sniLineChart.update();
    var $title = $(this).text();
    $('#sniLineChartTitle').text($title)
});

//ini untuk hide/show data dengan klik list SNI di tabel
function toggleData(button, category) {
    pieChart.toggleDataVisibility(category);
    pieChart.update();
    if (pieChart.getDataVisibility(category)) {
        button.classList.remove('hidden');
    } else {
        button.classList.add('hidden');
    }
}

//reset tampilan pie chart jika user tidak ingin melihat semuanya grafik
$("#clearChartSwitch").change(function() {
    if (this.checked) {
        console.log(pieChart.data.datasets[0].data);
        pieChart.data.datasets[0].data.forEach(function(ds, index) {
            pieChart.toggleDataVisibility(index)
        });
    } else {
        pieChart.data.datasets[0].data.forEach(function(ds, index) {
            pieChart.toggleDataVisibility(index)
        });
    }
    pieChart.update();

});

$("#update").click(function() {
    alert("Handler for .click() called.");
});