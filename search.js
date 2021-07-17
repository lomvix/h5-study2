        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
 
option = {
    backgroundColor: '#ffffff',
    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
                {value:235, name:''},
                {value:274, name:''},
                {value:310, name:''},
                {value:335, name:''},
                {value:400, name:''}
            ],
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(0, 0, 0, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(0, 0, 0, 0.3)'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(34,75,143,0.50)',
                }
            }
        }
    ]
};
        myChart.setOption(option);