const getters = {
    sidebar: (state: { app: { sidebar: boolean } }) => state.app.sidebar,
    size: (state: { app: { size: string } }) => state.app.size,
    device: (state: { app: { device: string } }) => state.app.device,
    visitedViews: (state: { tagsView: { visitedViews: object[] } }) => state.tagsView.visitedViews,
    cachedViews: (state: { tagsView: { cachedViews: object[] } }) => state.tagsView.cachedViews
  }
  export default getters
  