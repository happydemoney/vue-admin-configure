const getters = {
    sidebar: (state: { app: { sidebar: boolean } }) => state.app.sidebar,
    size: (state: { app: { size: string } }) => state.app.size,
    device: (state: { app: { device: string } }) => state.app.device
    // visitedViews: state => state.tagsView.visitedViews,
    // cachedViews: state => state.tagsView.cachedViews,
    // token: state => state.user.token,
    // avatar: state => state.user.avatar,
    // name: state => state.user.name,
    // introduction: state => state.user.introduction,
    // roles: state => state.user.roles,
    // permissionRoutes: state => state.permission.routes,
    // errorLogs: state => state.errorLog.logs
  }
  export default getters
  