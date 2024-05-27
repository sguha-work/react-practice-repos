const EventBusService = {
    timer: {},
    on(event, callback) {
      document.addEventListener(event, (e) => {
        if(EventBusService.timer[event]) {
          window.clearTimeout(EventBusService.timer[event])
        }
        EventBusService.timer[event] = window.setTimeout(()=>{
          callback(e.detail)  
        },10);
      });
    },
    dispatch(event, data) {
      document.dispatchEvent(new CustomEvent(event, { detail: data }));
    },
    off(event, callback) {
      document.removeEventListener(event, callback);
    },
  };
  
  export default EventBusService;