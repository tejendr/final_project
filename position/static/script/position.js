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
var jobs = []
            function fetchJobs() {
                $.ajax({
                    url: '/positions/api/job/fetch/',  // URL of your fetch jobs endpoint
                    type: 'GET',
                    success: function(response) {
                        // Clear existing job list
                        $('#jobs-list').empty();
                        jobs = response
                        // Append each job to the job list
                        $.each(response, function(index, job) {
                            var jobItem = '  <tr ><td>'+job.position+'</td><td>'+job.department+'</td><td id='+index+'>'+job.address+'</td><td data-id="'+index+'">'+job.status+'</td>'
                            $('#jobs-table-body').append(jobItem);
                        });
                    },
                    error: function(xhr, textStatus, errorThrown){
                        console.error(xhr.responseText);
                        // Handle error response
                    }
                });
            }
            fetchJobs()
            
            // Call fetchJobs function when the page loads
            // fetchJobs();

            
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
                formData['department'] = $('#department').val()
                formData['status'] = $('#status').val()

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
                    },
                    error: function(xhr, textStatus, errorThrown){
                        console.error(xhr.responseText);
                        // Handle error response
                    }
                });
            });
            

        $('#modify-job-form').submit(function(e){
                e.preventDefault();
                var formData = $(this).serialize();
                        var jobId = $(this).find('input[id="modify-id"]').val();
                var url = '/positions/api/job/update/' + jobId + '/';

                

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
                    },
                    error: function(xhr, textStatus, errorThrown){
                        console.error(xhr.responseText);
                        // Handle error response
                    }
                });
            });
       });