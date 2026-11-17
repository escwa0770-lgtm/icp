Highcharts.chart('chart-container-2', {
    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
    },
    title: {
        text: '2021',
        align: 'center',
        style: {
            color: '#0073e6', // Blue color for the year
            fontSize: '18px',
            fontWeight: 'bold'
        }
    },
    subtitle: {
        text: 'Source: ESCWA calculations based on official national data and World Bank global linking',
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
            value: 20271, // World per capita GDP average
            label: {
                text: 'World per capita income = 20,271',
                align: 'left', // Adjusted to align with the red line
                rotation: 0,  // Horizontal alignment
                x: 5,         // Moves label to the right of the line
                y: 350,        // Adds vertical spacing below the red line
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
            text: 'GDP Price Level Index   (World = 100)',
            style: {
                color: '#000',
            }
        },
        min: 0,          // Starts from 0
        max: 140,        // Ends at 140
        plotLines: [{
            color: 'red',
            dashStyle: 'solid',
            width: 2,
            value: 100, // World PLI average
            label: {
                text: 'World PLI = 100',
                align: 'right',
                x: -100,
                y: 15,
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
            maxSize: 50,
            fillOpacity: 1 // Makes the bubble colors fully opaque
        },
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                style: {
                    color: '#000',
                    textOutline: 'none'
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
                { x: 52886.74, y: 78.28, z: 79.56, name: 'Bahrain' },
                { x: 50979.58, y: 106.29, z: 221.05, name: 'Kuwait' },
                { x: 106491.20, y: 97.05, z: 292.66, name: 'Qatar' },
                { x: 50329.80, y: 80.68, z: 1716.79, name: 'Saudi Arabia' },
                { x: 68912.55, y: 101.94, z: 645.38, name: 'United Arab Emirates' },
                { x: 38871.04, y: 79.30, z: 175.98, name: 'Oman' }
            ]
        },
        {
            name: 'Upper middle income',
            color: '#FF6347', // Orange
            data: [
                { x: 12893.20, y: 45.48, z: 569.60, name: 'Algeria' },
                { x: 12420.71, y: 59.73, z: 507.95, name: 'Iraq' }
            ]
        },
        {
            name: 'Lower middle income',
            color: '#9467BD', // Purple
            data: [
                { x: 9059.48, y: 72.40, z: 99.03, name: 'Jordan' },
                { x: 5336.10, y: 102.87, z: 27.89, name: 'State of Palestine' },
                { x: 5988.21, y: 52.88, z: 27.64, name: 'Mauritania' },
                { x: 17158.39, y: 39.04, z: 1874.76, name: 'Egypt' },
                { x: 8895.39, y: 69.57, z: 323.02, name: 'Morocco' },
                { x: 12159.05, y: 49.75, z: 149.11, name: 'Tunisia' },
                { x: 8403.61, y: 58.00, z: 47.00, name: 'Lebanon' },
                { x: 3548.82, y: 72.94, z: 2.92, name: 'Comoros' },
                { x: 6107.22, y: 80.45, z: 6.75, name: 'Djibouti' }
            ]
        },
        {
            name: 'Low income',
            color: '#00607F', // Blue
            data: [

                { x: 1133.51, y: 62.49, z: 19.34, name: 'Somalia' },
                { x: 4778.73, y: 36.63, z: 218.18, name: 'Sudan' },
                { x: 2309.91, y: 30.74, z: 62.15, name: 'Syrian Arab Republic' }
            ]
        }
    ]
});
