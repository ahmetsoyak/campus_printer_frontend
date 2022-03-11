export default {
  namespaced: true,
  state: {
    alerts: []
  },
  getters: {
    alerts: (state) => state.alerts
  },
  mutations: {
    ADD_ALERTS_SUCCESS(state, alert) {
      const alerts = state.alerts;
      alerts.push(alert);
      state.alert = alerts;
    },

    REMOVE_ALERT_SUCCESS(state, alertID) {
      state.alerts = state.alerts.filter((alert) => alert.id !== alertID);
    },

    REMOVE_ALERTS_SUCCESS(state) {
      state.alerts = [];
    }
  },
  actions: {
    async addAlert({ commit }, { type, message }) {
      const alert = {
        id: Math.random().toString(16).slice(2),
        type,
        message
      };
      return commit('ADD_ALERTS_SUCCESS', alert);
    },

    async removeAlert({ commit }, alertID) {
      return commit('REMOVE_ALERT_SUCCESS', alertID);
    },

    async removeAlerts({ commit }) {
      return commit('REMOVE_ALERTS_SUCCESS');
    }
  }
};
