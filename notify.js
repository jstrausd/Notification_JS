function sendPushNotification(message, body) {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
    else if (Notification.permission === "granted") {
      var notification = new Notification(message, {
        body: body
      });
    }
    else if (Notification.permission !== "denied") {
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          var notification = new Notification(message, {
            body: body
          });
        }
      });
    }
  }

  function log(message){
      console.log(message);
  }