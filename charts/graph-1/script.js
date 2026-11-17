Highcharts.chart('graph-1', {
    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
    },
    title: {
        text: '  ',
        style: {
            color: '#000',
        }
    },
    subtitle: {
        text: 'Source: ESCWA calculations based on official national data and ESCWA estimations',
        style: {
            color: '#000',
        }
    },
    xAxis: {
        gridLineWidth: 1,
        title: {
            text: 'Per Capita GDP (PPP-based) (in USD)',
            style: {
                color: '#000',
            }
        },
        plotLines: [{
            color: 'red',
            dashStyle: 'solid',
            width: 2,
            value: 27532, // Arab region per capita income
            label: {
                text: 'Arab region per capita income = $27,532',
                align: 'right',
                rotation: 0, // Ensures the label remains horizontal
                x: 260, // Adjust this value to move it further right
                style: {
                    color: 'red',
                    fontWeight: 'bold'
                }
            },
            zIndex: 3
        }]
    },

    yAxis: {
        startOnTick: false,
        endOnTick: false,
        title: {
            text: 'GDP Price level index (US = 100)',
            style: {
                color: '#000',
            }
        },
        plotLines: [{
            color: 'red',
            dashStyle: 'solid',
            width: 2,
            value: 51, // Arab region PLI
            label: {
                text: 'Arab region PLI = 51',
                align: 'left',
                x: 500, // Adjust this value to move it further right
                style: {
                    color: 'red',
                    fontWeight: 'bold'
                }
            },
            zIndex: 3
        }]
    },
    tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: `
            <tr><th>Country:</th><td>{point.name}</td></tr>
            <tr><th>Real GDP (billion USD):</th><td>{point.z}</td></tr>
            <tr><th>PLI:</th><td>{point.y}</td></tr>
            <tr><th>Per Capita GDP (USD):</th><td>{point.x}</td></tr>`,
        footerFormat: '</table>',
        followPointer: true
    },
    plotOptions: {
        bubble: {
            minSize: 10,
            maxSize: 40
        },
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                style: {
                    color: '#000',
                    textOutline: 'none'
                }
            },
            showInLegend: true,
            events: {
                legendItemClick: function () {
                    return true; // Enable toggling series visibility
                }
            }
        }
    },
    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        symbolWidth: 10,
        itemStyle: {
            color: '#000'
        }
    },
    series: [
        {
            name: 'High income',
            color: '#1FA087', // Green
            data: [
                { x: 46717.39, y: 61.17, z: 69.40, name: 'Bahrain' },
                { x: 38362.33, y: 61.74, z: 178.16, name: 'Oman' },
                { x: 53050.87, y: 82.87, z: 228.65, name: 'Kuwait' },
                { x: 106393.20, y: 76.27, z: 289.00, name: 'Qatar' },
                { x: 43570.10, y: 66.32, z: 1609.78, name: 'Saudi Arabia' },
                { x: 72881.60, y: 80.23, z: 693.60, name: 'United Arab Emirates' }
            ]
        },
        {
            name: 'Upper middle income',
            color: '#FF6347', // Orange
            data: [
                { x: 14363.28, y: 47.84, z: 653.59, name: 'Iraq' }
            ]
        },
        {
            name: 'Lower middle income',
            color: '#9467BD', // Purple
            data: [
                { x: 8310.88, y: 56.58, z: 94.22, name: 'Jordan' },
                { x: 7364.74, y: 66.17, z: 38.04, name: 'State of Palestine' },
                { x: 5066.40, y: 44.64, z: 24.63, name: 'Mauritania' },
                { x: 16063.00, y: 21.03, z: 1810.57, name: 'Egypt' },
                { x: 6835.05, y: 53.92, z: 258.63, name: 'Morocco' },
                { x: 3694.61, y: 53.32, z: 19.78, name: 'Lebanon' },
                { x: 10104.03, y: 38.67, z: 125.88, name: 'Tunisia' }
            ]
        },
        {
            name: 'Low income',
            color: '#00607F', // Blue
            data: [
                { x: 6603.83, y: 31.17, z: 317.70, name: 'Sudan' },
                { x: 1131.71, y: 15.57, z: 26.29, name: 'Syrian Arab Republic' }
            ]
        }
    ]
});