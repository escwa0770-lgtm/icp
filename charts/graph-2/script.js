Highcharts.chart('chart-container', {
    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
    },
    title: {
        text: '2017',
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
            value: 17006, // World per capita GDP average
            label: {
                text: 'World per capita income = 17,006',
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
        max: 140,        // Ends at 110
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
                { x: 47849.57, y: 74.51, z: 71.83, name: 'Bahrain' },
                { x: 92838.54, y: 95.82, z: 252.95, name: 'Qatar' },
                { x: 47387.98, y: 94.12, z: 193.47, name: 'Kuwait' },
                { x: 48668.29, y: 67.96, z: 1587.21, name: 'Saudi Arabia' },
                { x: 66602.20, y: 93.88, z: 619.69, name: 'United Arab Emirates' },
                { x: 33453.09, y: 79.96, z: 152.54, name: 'Oman' }
            ]
        },
        {
            name: 'Upper middle income',
            color: '#FF6347', // Orange
            data: [
                { x: 12250.07, y: 50.93, z: 503.93, name: 'Algeria' },
                { x: 10111.31, y: 66.42, z: 375.53, name: 'Iraq' }
            ]
        },
        {
            name: 'Lower middle income',
            color: '#9467BD', // Purple
            data: [
                { x: 9432.55, y: 66.39, z: 94.83, name: 'Jordan' },
                { x: 21140.15, y: 61.95, z: 129.15, name: 'Lebanon' },
                { x: 5490.87, y: 89.43, z: 24.46, name: 'State of Palestine' },
                { x: 5418.16, y: 45.52, z: 22.54, name: 'Mauritania' },
                { x: 13339.10, y: 26.89, z: 1357.78, name: 'Egypt, Arab Rep.' },
                { x: 8372.91, y: 61.29, z: 291.81, name: 'Morocco' },
                { x: 11134.96, y: 48.37, z: 131.52, name: 'Tunisia' },
                { x: 3325.50, y: 64.18, z: 2.53, name: 'Comoros' },
                { x: 4742.39, y: 84.49, z: 4.93, name: 'Djibouti' }
            ]
        },
        {
            name: 'Low income',
            color: '#00607F', // Blue
            data: [

                { x: 1179.31, y: 48.28, z: 17.53, name: 'Somalia' },
                { x: 4201.91, y: 35.77, z: 170.93, name: 'Sudan' },
                { x: 3306.62, y: 39.35, z: 62.77, name: 'Syrian Arab Republic' }
            ]
        }
    ]
});