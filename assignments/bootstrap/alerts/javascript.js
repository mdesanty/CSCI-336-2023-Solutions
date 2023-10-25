document.addEventListener('DOMContentLoaded', function() {
  const blueAlertButton = document.getElementById('blue-alert-btn');
  blueAlertButton.addEventListener('click', function(event) {
    addAlert({alertClass: 'alert-primary', message: 'Blue alert added!'});
  });

  const greenAlertButton = document.getElementById('green-alert-btn');
  greenAlertButton.addEventListener('click', function(event) {
    addAlert({alertClass: 'alert-success', message: 'Green alert added!', dismissible: true});
  });

  const yellowAlertButton = document.getElementById('yellow-alert-btn');
  yellowAlertButton.addEventListener('click', function(event) {
    addAlert({alertClass: 'alert-warning', message: 'Yellow alert added!'});
  });

  const purpleAlertButton = document.getElementById('purple-alert-btn');
  purpleAlertButton.addEventListener('click', function(event) {
    addAlert({alertClass: 'alert-purple', message: 'Purple alert added!', dismissible: true});
  });

  const clearBtn = document.getElementById('clear-alerts-btn');
  clearBtn.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();

    const alerts = document.getElementsByClassName('alert');
    Array.from(alerts).forEach((alert) => {
      bootstrap.Alert.getOrCreateInstance(alert).close();
    });
  });
});

const addAlert = (options) => {
  const alert = document.createElement('div');
  alert.classList.add('alert', options.alertClass);
  alert.setAttribute('role', 'alert');
  alert.innerHTML = options.message;

  if(options.dismissible) {
    alert.classList.add('fade', 'show', 'alert-dismissible');
    const dismissBtn = document.createElement('button');
    dismissBtn.setAttribute('type', 'button');
    dismissBtn.classList.add('btn-close');
    dismissBtn.setAttribute('data-bs-dismiss', 'alert');
    alert.appendChild(dismissBtn);
  }

  const alertsElement = document.getElementById('alerts');
  alertsElement.appendChild(alert);

  return alert;
}
