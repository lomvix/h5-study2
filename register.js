
var myChart = echarts.init(document.getElementById('main'));

option = {
    xAxis: {
        type: 'category',
		axisTick: {show: false}
    },
    yAxis: {
        type: 'value',
		axisTick: {show: false},
		axisLabel: {show: false}
    },
    series: [{
        data: [120, {
            value: 200,
            itemStyle: {
                color: 'rgba(34,75,143,0.90)'
            }
        }, 150, 80, 70, 110, 130],
		color: 'rgba(34,75,143,0.50)',
        type: 'bar'
    }]
};
myChart.setOption(option);