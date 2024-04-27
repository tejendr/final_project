    
  function get_name_by_id(id, data):
    for item in data:
        if item['id'] == id:
            return item['name']
    return None
  function validateAndRedirect() {
  // Replace this with your actual login validation logic
  // This example simulates successful validation
  if (document.getElementById("username").value === "tejendra" &&
      document.getElementById("password").value === "test") {
    window.location.href = "dashboard.html";  // Replace with your desired page URL
    return false;  // Prevent default form submission
  } else {
    alert("Invalid username or password!");  // You can customize the error message
    return true;  // Allow form submission if validation fails
  }
}

if(window.location.href.indexOf('outreach')>0){
    const addButton = document.getElementById('addButton');
    const candidateList = document.getElementById('table-outreach');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const positionSelect = document.getElementById('position');
    const departmentSelect = document.getElementById('department');

    // Add click event listener to the "Add" button
    addButton.addEventListener('click', function() {
      // Get the entered data
      document.getElementById('table-outreach').style.display = 'show'
      const name = nameInput.value.trim();
      const phone = phoneInput.value.trim();
      const email = emailInput.value.trim();
      const position = positionSelect.value;
      const department = get_name_by_id(departmentSelect.value,department);

      // Validate data (optional, add checks for empty fields or invalid formats)

      // Create a new list item element
      const listItem = document.createElement('li');

      // Create content for the list item (you can customize this)
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

      // Append the list item to the candidate list
      $(candidateList).html(ldata);

      // Clear input fields after adding
      nameInput.value = '';
      phoneInput.value = '';
      emailInput.value = '';
    });

}

if(window.location.href.indexOf('screening')>0){
          // DOM elements
const questionsTable = document.getElementById('questions-table');
const filterDepartment = document.getElementById('filter-department');
const filterJob = document.getElementById('filter-job');
const filterQuestion = document.getElementById('filter-question');
const filterLocation = document.getElementById('filter-location');
const filterBtn = document.getElementById('filter-btn');
const questionsContainer = document.getElementById('questions-container');

// Sample questions data (replace with your actual data source)
const questionsData = [
  { department: 'Engineering', job: 'Software Engineer', jobId: 'SE123', location: 'Seattle', question: 'Describe your experience with data structures and algorithms.' },
  { department: 'Engineering', job: 'Software Engineer', jobId: 'SE456', location: 'New York', question: 'Explain your approach to designing a scalable web application.' },
  { department: 'Engineering', job: 'Software Engineer', jobId: 'SE789', location: 'Chicago', question: 'How do you test and debug complex software code?' },
  // Add more questions for other positions here
];

// Function to populate the table with questions
function populateTable(data) {
  questionsTable.innerHTML = ''; // Clear existing rows
  let tableRowW  =''
  data.forEach(question => {
    const tableRow = `<tr>
      <td><span class="math-inline">`+get_name_by_id(question.department,department)+`</td\>
<td\></span>`+question.job+` (<span class="math-inline">`+question.jobId+`)</td\>
<td\></span>`+question.question+`</td>
      <td>`+question.location+`</td>
      <td><button>Delete</button></td>
    </tr>`;
    tableRowW  = tableRowW + tableRow 
    
  });
  $(questionsTable).html(tableRowW);
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




// const tabsfo = document.querySelectorAll('.tabs li');
// const tabContent = document.querySelectorAll('.tab-pane');
const jobsTable = document.getElementById('jobs-table');
const modifyFormContainer = document.getElementById('modify-form-container');

tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    const tabName = this.dataset.tab; // Get the tab name from data attribute
    
    tabs.forEach(t => t.classList.remove('active')); // Remove active class from all tabs
    tabContent.forEach(t => t.classList.remove('active')); // Hide all tab content
    
    this.classList.add('active'); // Add active class to clicked tab
    document.getElementById(tabName).classList.add('active'); // Show content for clicked tab
  });
});

jobsTable.addEventListener('click', function(event) {
  if (event.target.tagName === 'TD') { // Check if clicked element is a table cell (TD)
    var selectElement = document.getElementById("modify-department");
    department.forEach(function(dept) {
    // Create an <option> element
    var option = document.createElement("option");
    
    // Set the value and text of the <option> element
    option.value = dept.id;
    option.name = dept.name;
    option.text = dept.name;
    
    // Append the <option> element to the <select> element
    
    selectElement2.appendChild(option)
});
    const rowIndex = event.target.parentNode.rowIndex; // Get the row index of the clicked cell
    const position = jobsTable.rows[rowIndex].cells[0].textContent; // Get job title from first cell
    const depar = jobsTable.rows[rowIndex].cells[1].textContent; // Get company from second cell
    const location = jobsTable.rows[rowIndex].cells[2].textContent; // Get location from third cell
    const status = jobsTable.rows[rowIndex].cells[3].textContent;
    const id = jobsTable.rows[rowIndex].cells[4].getAttribute('data-id'); // Get status from fourth cell
    depar = get_name_by_id(depar,department)
    // Fill modification form fields with retrieved data
    document.getElementById('modify-Position').value = position;
    
    document.getElementById('modify-location').value = location;
    document.getElementById('modify-status').value = status;
    var selectElement = document.getElementById('modify-Department');
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