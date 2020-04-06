import Cookies from "js-cookie";
import { Commit } from "vuex/types";

const state = {
  sidebar: {
    opened: Cookies.get("sidebarStatus")
      ? !!Number(Cookies.get("sidebarStatus"))
      : true,
    withoutAnimation: false
  },
  device: "desktop",
  size: Cookies.get("size") || "medium"
};

const mutations = {
  TOGGLE_SIDEBAR: (state: {
    sidebar: { opened: boolean; withoutAnimation: boolean };
  }) => {
    state.sidebar.opened = !state.sidebar.opened;
    state.sidebar.withoutAnimation = false;
    if (state.sidebar.opened) {
      Cookies.set("sidebarStatus", "1");
    } else {
      Cookies.set("sidebarStatus", "0");
    }
  },
  CLOSE_SIDEBAR: (
    state: { sidebar: { opened: boolean; withoutAnimation: boolean } },
    withoutAnimation: boolean
  ) => {
    Cookies.set("sidebarStatus", "0");
    state.sidebar.opened = false;
    state.sidebar.withoutAnimation = withoutAnimation;
  },
  TOGGLE_DEVICE: (state: { device: string }, device: string) => {
    state.device = device;
  },
  SET_SIZE: (state: { size: string }, size: string) => {
    state.size = size;
    Cookies.set("size", size);
  }
};

const actions = {
  toggleSideBar({ commit }: { commit: Commit }) {
    commit("TOGGLE_SIDEBAR");
  },
  closeSideBar(
    { commit }: { commit: Commit },
    { withoutAnimation }: { withoutAnimation: string }
  ) {
    commit("CLOSE_SIDEBAR", withoutAnimation);
  },
  toggleDevice({ commit }: { commit: Commit }, device: string) {
    commit("TOGGLE_DEVICE", device);
  },
  setSize({ commit }: { commit: Commit }, size: string) {
    commit("SET_SIZE", size);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
