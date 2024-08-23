document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    // Implement login logic here
    window.location.href = "index.html";
});

document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    // Implement registration logic here
    window.location.href = "index.html";
});

function markAttendance() {

    alert("Attendance Marked");
}

function sendLeaveRequest() {
    alert("Leave Request Sent");
}

function viewAttendance() {
    alert("Attendance Records Displayed");
}

function updateProfilePic() {
    const fileInput = document.getElementById("profilePicUpload");
    if (fileInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("profileImage").src = e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function viewAllRecords() {
    alert("All Records Displayed");
}

function generateReport() {
    alert("Report Generated");
}

function manageGrades() {
    alert("Grades Managed");
}

function manageLeaveRequests() {
    alert("Attendance Records Displayed");
}
function go(){
    window.location.href = "index.html";
}