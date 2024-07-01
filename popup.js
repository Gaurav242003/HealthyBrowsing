document.addEventListener('DOMContentLoaded', () => {
    const blueLightFilterCheckbox = document.getElementById('blue-light-filter');
    const breakReminderCheckbox = document.getElementById('break-reminder');
    const showTipsButton = document.getElementById('show-tips');
    const tipsDiv = document.getElementById('tips');
  
    // Apply blue light filter
    blueLightFilterCheckbox.addEventListener('change', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'blueLightFilterCheckbox' });
      });
    });
  
   // Load the current state of the break reminder
  chrome.storage.sync.get(['breakReminderEnabled'], (result) => {
    breakReminderCheckbox.checked = result.breakReminderEnabled !== false;
  });

  // Handle break reminders
  breakReminderCheckbox.addEventListener('change', () => {
    if (breakReminderCheckbox.checked) {
      chrome.alarms.create('breakReminder', { periodInMinutes: 60 }); // Set to 1 minute for testing
      chrome.storage.sync.set({ breakReminderEnabled: true });
    } else {
      chrome.alarms.clear('breakReminder');
      chrome.storage.sync.set({ breakReminderEnabled: false });
    }
  });
  
    // Show health tips
    showTipsButton.addEventListener('click', () => {
      const tips = [
        "Sit up straight to avoid back pain.",
        "Use a standing desk if possible.",
        "Take a 5-minute walk every hour.",
        "Blink frequently to keep your eyes moist.",
        "Adjust your screen brightness to reduce eye strain."
      ];
      tipsDiv.innerHTML = tips.map(tip => `<p>${tip}</p>`).join('');
      tipsDiv.classList.toggle('hidden');
    });
  });
  