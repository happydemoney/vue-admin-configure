import iTable from "./table";
import iChart from "./chart";

interface ComponentsMap {
  [props: string]: any;
}

const components: ComponentsMap = {
  iTable,
  iChart
};

// alias set
const iComponents = {
  ...components
};

const install = function(Vue: any) {
  // if (install.installed) return

  Object.keys(iComponents).forEach(key => {
    Vue.component(key, iComponents[key]);
  });
};

const API = {
  version: process.env.VERSION,
  install,
  ...components
};

export default API;
