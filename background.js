chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create("breakReminder", { periodInMinutes: 60 });
  });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "breakReminder") {
        console.log("here")
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icons/128.png',
        title: 'Time for a break!',
        message: 'Take a short break and stretch.',
        
      },(notificationId) => {
        if (chrome.runtime.lastError) {
          console.error("Notification error:", chrome.runtime.lastError);
        } else {
          console.log("Notification created with ID:", notificationId);
         
        }
    });
    
    }
  });



