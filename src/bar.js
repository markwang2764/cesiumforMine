import { Bar } from '@antv/g2plot';

const data = [
  { action: '工程科', pv: 0 },
  { action: '总经理室', pv: 0.5 },
  { action: '行政人力资源', pv: 1 },
  { action: '营销科', pv: 1.5 },
  { action: '生产异常', pv: 2 },
];

const barPlot = new Bar('bar', {
  data,
  xField: 'pv',
  yField: 'action',
  conversionTag: {},
});

barPlot.render();
export default barPlot;