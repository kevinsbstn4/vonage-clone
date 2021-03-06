export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
const mutations = {
  LOADING: (state) => {
    state.loading = true;
  },
  CUSTOMER: (state, payload) => {
    state.customer = payload;
  },
};
const getters = {
  isAuthenticated: (state) => (state.customer.token ? true : false),
  customer: (state) => state.customer,
  customers: (state) => state.customers,
  paginate: (state) => state.paginate,
  isLoading: (state) => state.loading,
  user_session: (state) => state.user_session,
  resp: (state) => state.resp,
  columns: (state) => state.columns,
};
window.axios.defaults.headers.post["Content-Type"] = "application/json";
if (LoginUser.getters["customer/customer"].token) {
  window.axios.defaults.headers.common["Authorization"] =
    LoginUser.getters["customer/customer"].token;
} else {
  ``;
  window.axios.defaults.headers.common["Authorization"] = "";
}
