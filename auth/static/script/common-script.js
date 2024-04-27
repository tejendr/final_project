jobId_selected = ''
function get_name_by_id(id, data) {
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        if (item.id === id) {
            return item.name;
        }
    }
    return null;
}
    





if(window.location.href.indexOf('positions')>-1){
      const tabs = document.querySelectorAll('.tabs li');
const tabContent = document.querySelectorAll('.tab-pane');
// 
tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    const tabName = this.dataset.tab; // Get the tab name from data attribute
    
    tabs.forEach(t => t.classList.remove('active')); // Remove active class from all tabs
    tabContent.forEach(t => t.classList.remove('active')); // Hide all tab content
    
    this.classList.add('active'); // Add active class to clicked tab
    document.getElementById(tabName).classList.add('active'); // Show content for clicked tab
  });
});

function resetmodify()
{
  $('#jobs-list').empty();
    $.each(jobs, function(index, job) {
                            var jobItem = '  <tr ><td>'+job.position+'</td><td id='+job.department+'>'+job.department_name+'</td><td id='+index+'>'+job.address+'</td><td data-id="'+index+'">'+job.status+'</td>'
                            $('#jobs-table-body').append(jobItem);
                        });

    $('#modify-form-container').hide()
    $('#jobs-table-body').show()
    $('#jobs-table').show()


}

// const tabsfo = document.querySelectorAll('.tabs li');
// const tabContent = document.querySelectorAll('.tab-pane');
const jobsTable = document.getElementById('jobs-table');
const modifyFormContainer = document.getElementById('modify-form-container');

tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    const tabName = this.dataset.tab; // Get the tab name from data attribute
     
                      resetmodify();  
                        // Append each job to the job list
                      
    tabs.forEach(t => t.classList.remove('active')); // Remove active class from all tabs
    tabContent.forEach(t => t.classList.remove('active')); // Hide all tab content
    
    this.classList.add('active'); // Add active class to clicked tab
    document.getElementById(tabName).classList.add('active'); // Show content for clicked tab
  });
});

jobsTable.addEventListener('click', function(event) {
  if (event.target.tagName === 'TD') { // Check if clicked element is a table cell (TD)

    const rowIndex = event.target.parentNode.rowIndex; // Get the row index of the clicked cell
    const position = jobsTable.rows[rowIndex].cells[0].textContent; // Get job title from first cell
    let department_sel = jobsTable.rows[rowIndex].cells[1].textContent; // Get company from second cell
    const location = jobsTable.rows[rowIndex].cells[2].textContent; // Get location from third cell
    const status = jobsTable.rows[rowIndex].cells[3].textContent;
    
    
    // Fill modification form fields with retrieved data
    document.getElementById('modify-Position').value = position;
    
    document.getElementById('modify-location').value = location;
    document.getElementById('modify-status').value = status;
    var selectElement = document.getElementById('modify-Department');
 
    var selectElement = document.getElementById("modify-department");
    department.forEach(function(dept) {
    // Create an <option> element
    var option = document.createElement("option");
    
    // Set the value and text of the <option> element
    option.value = dept.id;
    option.name = dept.name;
    option.text = dept.name;
    if (dept.name === department_sel) {
        option.selected = true; // Select this option
        jobId_selected = dept.id
    }
    // Append the <option> element to the <select> element
    
    selectElement.appendChild(option)
});
       for (var i = 0; i < selectElement.options.length; i++) {
    // Check if the option's value matches the department value
    if (selectElement.options[i].value === department) {
        // Set the option as selected
        selectElement.selectedIndex = i;

        // Exit the loop since we found the matching option
        break;
    }
  }
    jobsTable.style.display = 'none'; // Hide the table
    modifyFormContainer.style.display = 'block'; // Show the modification form

  }


});
}

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
