const EventBus = {
  timer: null,
  on(event, callback) {
    document.addEventListener(event, (e) => {
      if(EventBus.timer!=null) {
        window.clearTimeout(EventBus.timer)
      }
      EventBus.timer = window.setTimeout(()=>{
        callback(e.detail)  
      });
    });
  },
  dispatch(event, data) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  off(event, callback) {
    document.removeEventListener(event, callback);
  },
};

export default EventBus;