export default {
  methods: {
    processValue(value: any) {
      if (typeof value === "function") {
        return value();
      }
      return value;
    }
  }
};
