export const state = () => ({
  processing: false,
  processing_msg: "잠시만 기다려주세요...",
  alert: false,
  alert_msg: "",
  error: false,
  error_msg: "",
  error_code: null,
  lastPath: "/home",
  windowSize: {
    width: 0,
    height: 0,
  },
  isMobile: false,
  isWebView: false,
  scrollY: 0,
});

export const getters = {
  processing: (state) => state.processing,
  alert: (state) => state.alert,
  alert_msg: (state) => state.alert_msg,
  error: (state) => state.error,
  error_msg: (state) => state.error_msg,
  error_code: (state) => state.error_code,
  lastPath: (state) => state.lastPath,
};

export const mutations = {
  setScroll(state, payload) {
    state.scrollY = payload;
  },
  toggle_processing(state, payload) {
    state.processing = payload;
  },
  processingMsg(state, msg) {
    if (msg == "default") {
      state.processing_msg = "잠시만 기다려주세요...";
    } else {
      state.processing_msg = msg;
    }
  },
  alertThrow(state, msg) {
    state.alert_msg = msg;
    state.alert = true;
  },
  errorThrow(state, error) {
    state.error_msg = error.msg;
    if (error.code == 404) {
      state.error_msg = "요청 api주소를 찾을 수 없습니다.";
    }
    if (error.code == 500) {
      state.error_msg = "서버쪽 에러가 발생햇습니다";
    }
    state.error_code = error.code;
    state.error = true;
  },
  alertClear(state) {
    state.alert_msg = "";
    state.alert = false;
  },
  errorClear(state) {
    state.error_msg = "";
    state.error_code = null;
    state.error = false;
  },
  setPath(state, path) {
    state.lastPath = path;
  },
  onResize(state, data) {
    state.windowSize.width = data.width;
    state.windowSize.height = data.height;

    // 320px — 480px: Mobile devices
    // 481px — 768px: iPads, Tablets
    // 769px — 1024px: Small screens, laptops
    // 1025px — 1200px: Desktops, large screens
    // 1201px and more —  Extra large screens, TV

    if (data.width < 600) {
      state.isMobile = true;
    } else {
      state.isMobile = false;
    }
  },
  toggle_webview(state, payload) {
    state.isWebView = payload;
  },
};
