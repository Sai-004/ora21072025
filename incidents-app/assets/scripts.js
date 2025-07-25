function setupIncidentForm() {
    $('#incidentForm').on('submit', function (e) {
      e.preventDefault();
      const data = {
        name: this.name.value,
        type: this.type.value,
        location: this.location.value,
        details: this.details.value
      };
      $.post({
        url: '/api/incidents',
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function () {
          $('#message').text('Incident submitted successfully!');
          $('#incidentForm')[0].reset();
        }
      });
    });
  }
  
  function loadCustomers() {
    $.get('/api/incidents', function (data) {
      const rows = data.map(item =>
        `<tr>
          <td class="p-2 border">${item[0]}</td>
          <td class="p-2 border">${item[1]}</td>
          <td class="p-2 border">${item[2]}</td>
          <td class="p-2 border">${item[3]}</td>
        </tr>`
      );
      $('#customerTable').html(rows.join(''));
    });
  }
  
  function loadDashboard() {
    window.onload = () => {
      $.get('/api/incident-counts', function (data) {
        const labels = data.map(row => row[0]);
        const counts = data.map(row => row[1]);
  
        new Chart(document.getElementById('incidentChart'), {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Incidents',
              data: counts,
              backgroundColor: '#925ee7'
            }]
          }
        });
      });
    };
  }
  