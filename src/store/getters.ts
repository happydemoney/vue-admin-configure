const getters = {
  sidebar: (state: any) => state.app.sidebar,
  size: (state: any) => state.app.size,
  device: (state: any) => state.app.device,
  visitedViews: (state: any) => state.tagsView.visitedViews,
  cachedViews: (state: any) => state.tagsView.cachedViews
};
export default getters;
