candidate = []

$(document).ready(function(){
$.ajax({
            url: '/candidate/get-candidates/',  
            type: 'GET',
            success: function(response) {
                candidate = response
                // Clear existing job list
                $('#jobs-list').empty();
                response
                populate_profile(response)
                // Append each job to the job list

            },
            error: function(xhr, textStatus, errorThrown){
                console.error(xhr.responseText);
                // Handle error response
            }
        });
})



function populate_profile(response){

response.forEach(candidate => {
                    const candidateProfile = document.createElement('div');
                    candidateProfile.classList.add('candidate-profile');

                    const profileImageDiv = document.createElement('div');
                    profileImageDiv.classList.add('profile-image');

                    const profileImage = document.createElement('img');
                    profileImage.src = candidate.profile_picture.replace("candidate_profile_pics", "static/images");
                    profileImage.alt = 'Candidate profile picture';

                    const profileImageText = document.createElement('p');
                    profileImageText.textContent = 'Image downloaded from google';

                    profileImageDiv.appendChild(profileImage);
                    profileImageDiv.appendChild(profileImageText);

                    const profileInfoDiv = document.createElement('div');
                    profileInfoDiv.classList.add('profile-info');

                    const nameHeader = document.createElement('h3');
                    nameHeader.textContent = candidate.name;

                    const jobType = document.createElement('p');
                    jobType.textContent = 'Job Type: ' + candidate.job_type;

                    const department = document.createElement('p');
                    department.textContent = 'Department: ' + candidate.department;

                    const status = document.createElement('p');
                    status.textContent = 'Status: ' + candidate.status;

                    const scoreButton = document.createElement('button');
                    scoreButton.textContent = 'Score: ' + candidate.score;

                    profileInfoDiv.appendChild(nameHeader);
                    profileInfoDiv.appendChild(jobType);
                    profileInfoDiv.appendChild(department);
                    profileInfoDiv.appendChild(status);
                    profileInfoDiv.appendChild(scoreButton);

                    candidateProfile.appendChild(profileImageDiv);
                    candidateProfile.appendChild(profileInfoDiv);

                    document.getElementById('student-append').appendChild(candidateProfile);
   
})

}