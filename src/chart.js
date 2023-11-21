import { Column } from '@antv/g2plot';

const data = [
    {
      type: '工程科',
      sales: 38,
    },
    {
      type: '生产一厂',
      sales: 52,
    },
    {
      type: '行政人力资源部',
      sales: 61,
    },
    {
      type: '营销科',
      sales: 145,
    },
  
  ];
  
  const columnPlot = new Column('chart', {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle', // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '隐患值',
      },
    },
  });
  
  columnPlot.render();
export default columnPlot;