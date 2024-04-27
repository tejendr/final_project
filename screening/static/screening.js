job_data = []

function fetchDataForDropDown() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: '/positions/api/job/fetch/',
            type: 'GET',
            success: function(response) {
                console.log(response);
                job_data = response
                var uniqueDepartments = extractUniqueValues(job_data, "department_name");

                var uniqueJoblocation = extractUniqueValues(job_data, "location");
                var uniquePosition = extractUniqueValues(job_data, "position");
                update_el(uniquePosition,'position')
                update_el(uniqueJoblocation,'location')
                update_el(uniqueDepartments,'department')

                resolve(response); // Resolve the promise with the response data

            },
            error: function(xhr, status, error) {
                reject(error); // Reject the promise with the error message
            }
        });
    });
}
fetchDataForDropDown();

function fetchQuestion(){
return new Promise(function(resolve, reject) {
        $.ajax({
            url: '/screening/api/fetch/',
            type: 'GET',
            success: function(response) {
             populateTable(response)
  const deleteButtons = document.querySelectorAll('.delete-button');

    // Loop through each delete button and bind click event
    deleteButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Get the ID of the candidate to be deleted from the button's data-id attribute
        const candidateId = button.getAttribute('data-id');

        // Call a function to delete the candidate
       

    
    fetch(`/screening/api/delete_question/${candidateId}/`, {
        method: 'DELETE',

        headers: {
            'Content-Type': 'application/json',
            "X-CSRFToken": getCookie('csrftoken')
        },
    })
    .then(response => {
        if (response.ok) {
            fetchQuestion()
            console.log('Question deleted successfully');
            
        } else {
            console.error('Failed to delete question');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
      });
  })
            },
            error: function(xhr, status, error) {
                reject(error); // Reject the promise with the error message
            }
        });
    });

}
function extractUniqueValues(data, key) {
    const uniqueValues = new Set();
    data.forEach(entry => {
        uniqueValues.add(entry[key]);
    });
    return Array.from(uniqueValues);
}

$(document).ready(function(){





    $('#add-question-form').submit(function(e){
                formData = {}
                e.preventDefault();
                formData = {}
                formData['position'] = $("#position").val()
                formData['location'] = $("#location").val()
                formData['department'] = $("#department").val()
                formData['question'] = $("#question").val()
                var url = ''
                $.ajax({
                    type: 'POST',
                    url: '/screening/api/create/',
                    data: formData,
                    beforeSend: function(xhr, settings) {
                        xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
                    },
                    success: function(response){                // Clear form fields
                        $('input').val('');
                        populateTable(response) 
                    },
                    error: function(xhr, textStatus, errorThrown){
                        console.error(xhr.responseText);
                        // Handle error response
                    }
                });
            });
})
fetchQuestion()
function update_el(data,el_name){


   var selectElement = document.getElementById(el_name);
        data.forEach(function(el_l) {
            // Create an <option> element
            var option = document.createElement("option");
            
            // Set the value and text of the <option> element
            option.value = el_l;
            option.name = el_l;
            option.text = el_l;
           
            
            // Append the <option> element to the <select> element
            selectElement.appendChild(option);
        });

}



const questionsTable = document.getElementById('questions-table');
const filterDepartment = document.getElementById('filter-department');
const filterJob = document.getElementById('filter-job');
const filterQuestion = document.getElementById('filter-question');
const filterLocation = document.getElementById('filter-location');
const filterBtn = document.getElementById('filter-btn');
const questionsContainer = document.getElementById('questions-container');


// Function to populate the table with questions
function populateTable(data) {
  questionsTable.innerHTML = ''; // Clear existing rows
  let tableRowW  =''
  data.forEach(question => {
    const tableRow = `<tr>
      <td><span class="math-inline">`+question.department+`</td\>
<td\></span>`+question.position+` (<span class="math-inline">`+question.id+`)</td\>
<td\></span>`+question.question_text+`</td>
      <td>`+question.location+`</td>
      <td><button class='delete-button' data-id='`+question.id+`'>Delete</button></td>
    </tr>`;
    tableRowW  = tableRowW + tableRow 
    
  });
  $(questionsTable).html(tableRowW);
}




