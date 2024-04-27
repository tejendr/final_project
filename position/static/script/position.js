var jobs = []
var department = []

$(document).ready(function(){
            // Function to fetch jobs via AJAX
    function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}  




function fetchJobs() {
    $.ajax({
    url: '/positions/fetch_departments/',
    type: 'GET',
    success: function(response) {
        console.log(response);
        var selectElement = document.getElementById("department-id");
        
        
        department = response

        department.forEach(function(dept) {
        // Create an <option> element
        var option = document.createElement("option");
        
        // Set the value and text of the <option> element
        option.value = dept.id;
        option.name = dept.name;
        option.text = dept.name;
        
        // Append the <option> element to the <select> element
        selectElement.appendChild(option);
        });
                
                
            },
            error: function(xhr, status, error) {
                // Handle error response
                console.error(xhr.responseText);
            }
        });


        $.ajax({
            url: '/positions/api/job/fetch/',  
            type: 'GET',
            success: function(response) {
                // Clear existing job list
                $('#jobs-list').empty();
                jobs = response
                // Append each job to the job list
                update_jobs()
            },
            error: function(xhr, textStatus, errorThrown){
                console.error(xhr.responseText);
                // Handle error response
            }
        });
    }
    fetchJobs()
    
    function update_jobs(){
        $.each(jobs, function(index, job) {
            var jobItem = '  <tr ><td>'+job.position+'</td><td id='+job.department+'>'+job.department_name+'</td><td id='+index+'>'+job.address+'</td><td data-id="'+index+'">'+job.status+'</td>'
            $('#jobs-table-body').append(jobItem);
        });

    }
         
            
            $('#job-search-form').submit(function(e){
                formData = {}
                e.preventDefault();
                $('.form-group').each(function(){
                    var input = $(this).find('input, textarea');
                    var name = input.attr('name');
                    var id = input.attr('id');
                    var value = input.val();
                    formData[name] = value ;
                });
                
                formData['job_type'] = $('#job-type').val()
                formData['department'] = $('#department-id').val()
                formData['status'] = $('#status').val()
                formData['location'] = $('#address').val()
                formData['position'] = $('#position').val()


                console.log(formData);
                var url = ''
                $.ajax({
                    type: 'POST',
                    url: '/positions/api/job/create/',
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
            
        $('#modify-job-form').submit(function(e){
                e.preventDefault();
                let formData = {}
                let jobId = jobId_selected
                let url = '/positions/api/job/update/' + jobId + '/';

                formData['department']=$("#modify-department").val()
                formData['position']=$("#modify-Position").val()
                formData['location']=$("#modify-location").val()
                formData['status']=$("#modify-status").val()

                $.ajax({
                    type: 'PUT',
                    url: url,
                    data: formData,
                        headers: {
                            "X-CSRFToken": getCookie('csrftoken')
    },

                    success: function(response){
                        console.log(response);
                        // Handle success response
                        jobs = response
                        update_jobs()
                    },
                    error: function(xhr, textStatus, errorThrown){
                        console.error(xhr.responseText);
                        // Handle error response
                    }
                });
            });
       });