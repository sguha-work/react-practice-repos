const EventBus = {
    on(event, callback) {
      document.addEventListener(event, (e) => callback(e.detail));
    },
    dispatch(event, data) {
      document.dispatchEvent(new CustomEvent(event, { detail: data }));
    },
    off(event, callback) {
      document.removeEventListener(event, callback);
    },
  };
  
  export default EventBus;