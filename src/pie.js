import { Pie } from "@antv/g2plot";

const data = [
  { type: "一般隐患A", value: 27 },
  { type: "重大隐患A", value: 25 },
  { type: "重大隐患B", value: 18 },
  { type: "一般隐患B", value: 15 },
  { type: "一般隐患C", value: 10 },
  { type: "其他", value: 5 },
];

const piePlot = new Pie("pie", {
  data,
  angleField: "value",
  colorField: "type", // 部分图表使用 seriesField
  color: ["#344c5d", "#d24c35", "#d4b720", "#7fa490", "#97c9ba", "#6ba4b4"],
  radius: 0.8,
  label: {
    type: "outer",
    content: "{name} {percentage}",
    style: {
      fill: "#fff",
      fontSize: 12,
      textAlign: "center",
    },
  },
  legend: {
    style: {
      fill: "#fff",
      fontSize: 18,
      textAlign: "center",
    },
  },
  interactions: [{ type: "pie-legend-active" }, { type: "element-active" }],
});

piePlot.render();
export default piePlot;