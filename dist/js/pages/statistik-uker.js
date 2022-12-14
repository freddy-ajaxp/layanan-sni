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

var $sniLineChart2 = $('#ukerLineChart')
    // eslint-disable-next-line no-unused-vars
var sniLineChart2 = new Chart($sniLineChart2, {
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
var pieChartCanvas2 = $('#pieChart2').get(0).getContext('2d')
var pieData2 = {
    labels: [
        'D1',
        'D2',
        'D3',

    ],
    datasets: [{
        data: [70, 52, 69],
        backgroundColor: ['#f56954', '#00a65a', '#f39c12']
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
var pieChart2 = new Chart(pieChartCanvas2, {
    type: 'doughnut',
    data: pieData2,
    options: {
        plugins: {
            legend: {
                display: false,
            },
        }
    }
})


//ini untuk update data di line chart
$(".ukerRandChartBtn").click(function() {
    sniLineChart2.data.datasets.forEach(dataset => {
        dataset.data = Array.from({ length: 7 }, () => Math.floor(Math.random() * 200));
    });
    sniLineChart2.update();
    var $title = $(this).text();
    $('#ukerLineChartTitle').text($title)
});

//ini untuk hide/show data dengan klik list SNI di tabel
function toggleData2(button, category) {
    pieChart2.toggleDataVisibility(category);
    pieChart2.update();
    if (pieChart2.getDataVisibility(category)) {
        button.classList.remove('hidden');
    } else {
        button.classList.add('hidden');
    }
}

//reset tampilan pie chart jika user tidak ingin melihat semuanya grafik
$("#clearUkerChartSwitch").change(function() {
    if (this.checked) {
        pieChart2.data.datasets[0].data.forEach(function(ds, index) {
            pieChart2.toggleDataVisibility(index)
        });
    } else {
        pieChart2.data.datasets[0].data.forEach(function(ds, index) {
            pieChart2.toggleDataVisibility(index)
        });
    }
    pieChart2.update();

});

$("#update").click(function() {
    alert("Handler for .click() called.");
});