$(document).ready(function(){
    const addButton = document.getElementById('addButton');
    const candidateList = document.getElementById('table-outreach');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const positionSelect = document.getElementById('position');
    const departmentSelect = document.getElementById('department');

    
    addButton.addEventListener('click', function() {
      const name = nameInput.value.trim();
      const phone = phoneInput.value.trim();
      const email = emailInput.value.trim();
      const position = positionSelect.value;
      const department = departmentSelect.value;
      formData = {}
      formData['name'] = name
      formData['phone'] = phone
      formData['email'] = email
      formData['department'] = department
      formData['position'] = position
document.getElementById('table-outreach').style.display = 'show'

      const listItem = document.createElement('li');

      
      ldata = `
       <table >
            <thead>
             <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Position</th>
                <th>Department</th>
      </tr>
  </thead ><tbody  >

  <tr>
        <td>${name}</td>
        <td>${phone}</td>
        <td>${email}</td>
        <td>${position}</td>
        <td>${department}</td>
      </tr>
      </tbody>
        </table>
        
      `;

      
      $(candidateList).html(ldata);

      // Clear input fields after adding
      nameInput.value = '';
      phoneInput.value = '';
      emailInput.value = '';
      
              $.ajax({
                    type: 'POST',
                    url: '/outreach/api/job/create/',
                    data: formData,
                    beforeSend: function(xhr, settings) {
                        xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
                    },
                    success: function(response){
                        console.log(response);
                        // Handle success response
                        fetchJobs()
                        $('#popupModal').show();
                
                // Clear form fields
                        $('input').val('');
                    },
                    error: function(xhr, textStatus, errorThrown){
                        console.error(xhr.responseText);
                        // Handle error response
                    }
                });
            });



      
    


})