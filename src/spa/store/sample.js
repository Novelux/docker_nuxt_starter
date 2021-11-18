export const state = () => ({});

const route_name = "study"; //TODO API Route

export const actions = {
  list({ commit }) {
    return new Promise((resolve, reject) => {
      commit("toggle_processing", true, { root: true });
      this.$axios
        .get(`/${route_name}`)
        .then((res) => {
          commit("toggle_processing", false, { root: true });
          resolve(res.data);
        })
        .catch((err) => {
          commit("toggle_processing", false, { root: true });
          var errObj = {};
          if (err.response) {
            errObj.msg = err.response.data.msg;
            errObj.code = err.response.status;
            commit("errorThrow", errObj, { root: true });
          } else {
            console.log(err);
            errObj.msg = "에러가 발생했습니다.";
            errObj.code = 0;
            commit("errorThrow", errObj, { root: true });
          }
          reject(errObj);
        });
    });
  },
  detail({ commit }, id) {
    return new Promise((resolve, reject) => {
      commit("toggle_processing", true, { root: true });
      this.$axios
        .get(`/${route_name}/` + id)
        .then((res) => {
          commit("toggle_processing", false, { root: true });
          resolve(res.data);
        })
        .catch((err) => {
          commit("toggle_processing", false, { root: true });
          var errObj = {};
          if (err.response) {
            errObj.msg = err.response.data.msg;
            errObj.code = err.response.status;
            commit("errorThrow", errObj, { root: true });
          } else {
            console.log(err);
            errObj.msg = "에러가 발생했습니다.";
            errObj.code = 0;
            commit("errorThrow", errObj, { root: true });
          }
          reject(errObj);
        });
    });
  },
  add({ commit }, params) {
    return new Promise((resolve, reject) => {
      commit("toggle_processing", true, { root: true });
      this.$axios
        .post(`/${route_name}`, params)
        .then(() => {
          commit("toggle_processing", false, { root: true });
          resolve();
        })
        .catch((err) => {
          commit("toggle_processing", false, { root: true });
          var errObj = {};
          if (err.response) {
            errObj.msg = err.response.data.msg;
            errObj.code = err.response.status;
            commit("errorThrow", errObj, { root: true });
          } else {
            console.log(err);
            errObj.msg = "에러가 발생했습니다.";
            errObj.code = 0;
            commit("errorThrow", errObj, { root: true });
          }
          reject(errObj);
        });
    });
  },
  update({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit("toggle_processing", true, { root: true });
      this.$axios
        .put(`/${route_name}/` + payload.id, payload.params)
        .then(() => {
          commit("toggle_processing", false, { root: true });
          resolve();
        })
        .catch((err) => {
          commit("toggle_processing", false, { root: true });
          var errObj = {};
          if (err.response) {
            errObj.msg = err.response.data.msg;
            errObj.code = err.response.status;
            commit("errorThrow", errObj, { root: true });
          } else {
            console.log(err);
            errObj.msg = "에러가 발생했습니다.";
            errObj.code = 0;
            commit("errorThrow", errObj, { root: true });
          }
          reject(errObj);
        });
    });
  },
  delete({ commit }, id) {
    return new Promise((resolve, reject) => {
      commit("toggle_processing", true, { root: true });
      this.$axios
        .delete(`/${route_name}/` + id)
        .then(() => {
          commit("toggle_processing", false, { root: true });
          resolve();
        })
        .catch((err) => {
          commit("toggle_processing", false, { root: true });
          var errObj = {};
          if (err.response) {
            errObj.msg = err.response.data.msg;
            errObj.code = err.response.status;
            commit("errorThrow", errObj, { root: true });
          } else {
            console.log(err);
            errObj.msg = "에러가 발생했습니다.";
            errObj.code = 0;
            commit("errorThrow", errObj, { root: true });
          }
          reject(errObj);
        });
    });
  },
};
