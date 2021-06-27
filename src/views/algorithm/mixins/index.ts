export default {
  data() {
    return {
      sortSpeed: 500
    };
  },
  methods: {
    deepCopy(value: object) {
      return JSON.parse(JSON.stringify(value));
    },
    setChartData(data: number[]) {
      const color = [
        "#2291e3",
        "#759aa0",
        "#e69d87",
        "#8dc1a9",
        "#ea7e53",
        "#eedd78",
        "#73a373",
        "#73b9bc",
        "#7289ab",
        "#91ca8c",
        "#f49f42"
      ];
      return data.map((item: number, index: number) => {
        return { value: item, itemStyle: { color: color[index] } };
      });
    },
    setChartOptions(data: any[]) {
      return {
        xAxis: {
          type: "category",
          data: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data,
            type: "bar"
          }
        ]
      };
    }
  }
};
