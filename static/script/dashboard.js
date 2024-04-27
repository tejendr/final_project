document.addEventListener("DOMContentLoaded", function() {
  // Get the filter select elements
  const titleFilter = document.querySelector('select[name="vacancy-filter-1"]');
  const locationFilter = document.querySelector('select[name="vacancy-filter-3"]');
  
  // Get the data list element
  const dataList = document.querySelector('.data-list.vacancies');
  
  // Function to filter vacancies
  function filterVacancies() {
    const titleValue = titleFilter.value.toLowerCase();
    const locationValue = locationFilter.value.toLowerCase();
    
    // Loop through each data item
    const dataItems = dataList.querySelectorAll('.data-item');
    dataItems.forEach(function(item) {
      const title = item.querySelector('label').textContent.toLowerCase();
      const location = item.querySelector('p').textContent.toLowerCase();
      
      // Check if the title and location match the selected filters
      const titleMatch = title.includes(titleValue) || titleValue === '';
      const locationMatch = location.includes(locationValue) || locationValue === '';
      
      // Show or hide the item based on the filter matches
      if (titleMatch &&  locationMatch) {
        item.classList.add('hidden');
        item.classList.remove('data-item');
     
      } else {
          
         item.classList.remove('hidden');
        item.classList.add('data-item');

        
        
        
      }
    });
  }
  
  // Event listener for filter changes
  titleFilter.addEventListener('change', filterVacancies);
  locationFilter.addEventListener('change', filterVacancies);
  
});


document.addEventListener("DOMContentLoaded", function() {
  // Get the filter select elements
  const titleFilter = document.querySelector('select[name="candidate-filter-1"]');
  const locationFilter = document.querySelector('select[name="candidate-filter-3"]');
  
  // Get the data list element
  const dataList = document.querySelector('.data-list.candidate');
  
  // Function to filter vacancies
  function filterVacancies() {
    const titleValue = titleFilter.value.toLowerCase();
    const locationValue = locationFilter.value.toLowerCase();
    
    // Loop through each data item
    const dataItems = dataList.querySelectorAll('.data-item');
    dataItems.forEach(function(item) {
      const title = item.querySelector('label').textContent.toLowerCase();
      const location = item.querySelector('p').textContent.toLowerCase();
      
      // Check if the title and location match the selected filters
      const titleMatch = title.includes(titleValue) || titleValue === '';
      const locationMatch = location.includes(locationValue) || locationValue === '';
      
      // Show or hide the item based on the filter matches
      if (titleMatch &&  locationMatch) {
       item.classList.add('hidden');
        item.classList.remove('data-item');
      } else {
        item.classList.remove('hidden');
        item.classList.add('data-item');
         
        

        
        
        
      }
    });
  }
  
  // Event listener for filter changes
  titleFilter.addEventListener('change', filterVacancies);
  locationFilter.addEventListener('change', filterVacancies);
  
});

