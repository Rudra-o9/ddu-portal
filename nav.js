// =============================================
// nav.js - Shared Navigation for DDU Portal
// =============================================

const NAV_HTML = () => `
<header class="portal-header">
  <div class="header-left">
    <a href="dashboard.html" class="header-logo-wrap">
      <img src="images/ddu_logo.jpg" alt="DDU Logo" class="header-logo-img" />
      <div class="header-uni-name">
        <span>DHARMSINH</span>
        <span>DESAI</span>
        <span>UNIVERSITY</span>
      </div>
    </a>
  </div>
  <div class="header-right">
    <img src="images/student_photo.jpg" alt="Student" class="header-student-photo" />
    <span class="header-hi">Hi,</span>
    <span class="header-student-name">PATHAK RUDRA VISHALBHAI</span>
  </div>
</header>

<nav class="portal-nav">
  <ul class="nav-list">
    <li class="nav-item" id="navitem-internship">
      <a href="internship.html" class="nav-link" id="nav-internship">&#127891; Internship</a>
    </li>
    <li class="nav-item has-dropdown" id="navitem-minor">
      <a href="#" class="nav-link" id="nav-minor" onclick="toggleDrop(event,'drop-minor')">&#9645; Minor/Honours <span class="caret">&#9660;</span></a>
      <div class="nav-dropdown" id="drop-minor">
        <a href="minor-honours.html" class="nav-dd-item">Honours Registration</a>
        <a href="minor-honours.html" class="nav-dd-item">Minor Registration</a>
      </div>
    </li>
    <li class="nav-item has-dropdown" id="navitem-transport">
      <a href="#" class="nav-link" id="nav-transport" onclick="toggleDrop(event,'drop-transport')">&#128652; Transport <span class="caret">&#9660;</span></a>
      <div class="nav-dropdown" id="drop-transport">
        <a href="transport.html" class="nav-dd-item">Transport Details</a>
        <a href="transport.html" class="nav-dd-item">Bus Pass</a>
      </div>
    </li>
    <li class="nav-item" id="navitem-dashboard">
      <a href="dashboard.html" class="nav-link" id="nav-dashboard">&#128200; Dashboard</a>
    </li>
    <li class="nav-item has-dropdown" id="navitem-timetable">
      <a href="#" class="nav-link" id="nav-timetable" onclick="toggleDrop(event,'drop-timetable')">&#128197; Time table <span class="caret">&#9660;</span></a>
      <div class="nav-dropdown" id="drop-timetable">
        <a href="timetable.html" class="nav-dd-item">Student Attendance</a>
        <a href="timetable.html" class="nav-dd-item">Time Table View</a>
      </div>
    </li>
    <li class="nav-item has-dropdown" id="navitem-exam">
      <a href="#" class="nav-link" id="nav-exam" onclick="toggleDrop(event,'drop-exam')">&#128196; Exam <span class="caret">&#9660;</span></a>
      <div class="nav-dropdown" id="drop-exam">
        <a href="exam.html" class="nav-dd-item">Admit Card</a>
        <a href="exam.html" class="nav-dd-item">Exam Schedule</a>
        <a href="exam.html" class="nav-dd-item">Result</a>
      </div>
    </li>
    <li class="nav-item has-dropdown" id="navitem-academic">
      <a href="#" class="nav-link" id="nav-academic" onclick="toggleDrop(event,'drop-academic')">&#128218; Academic <span class="caret">&#9660;</span></a>
      <div class="nav-dropdown" id="drop-academic">
        <a href="academic.html" class="nav-dd-item">Academic Details</a>
        <a href="academic.html" class="nav-dd-item">Course Registration</a>
        <a href="academic.html" class="nav-dd-item">Grade Card</a>
      </div>
    </li>
    <li class="nav-item has-dropdown" id="navitem-hostel">
      <a href="#" class="nav-link" id="nav-hostel" onclick="toggleDrop(event,'drop-hostel')">&#127968; Hostel <span class="caret">&#9660;</span></a>
      <div class="nav-dropdown" id="drop-hostel">
        <a href="hostel.html" class="nav-dd-item">Hostel Details</a>
        <a href="hostel.html" class="nav-dd-item">Room Allotment</a>
      </div>
    </li>
    <li class="nav-item" id="navitem-mentoring">
      <a href="mentoring.html" class="nav-link" id="nav-mentoring">&#128202; Mentoring</a>
    </li>
  </ul>
</nav>

<nav class="portal-subnav">
  <ul class="nav-list">
    <li class="nav-item has-dropdown" id="navitem-fee">
      <a href="#" class="nav-link" id="nav-fee" onclick="toggleDrop(event,'drop-fee')">&#128178; Fee <span class="caret">&#9660;</span></a>
      <div class="nav-dropdown" id="drop-fee">
        <a href="fee.html" class="nav-dd-item">Fee Details</a>
        <a href="fee.html" class="nav-dd-item">Fee Receipt</a>
        <a href="fee.html" class="nav-dd-item">Pay Online</a>
      </div>
    </li>
    <li class="nav-item has-dropdown" id="navitem-ia">
      <a href="#" class="nav-link" id="nav-ia" onclick="toggleDrop(event,'drop-ia')">IA <span class="caret">&#9660;</span></a>
      <div class="nav-dropdown" id="drop-ia">
        <a href="ia-marks.html" class="nav-dd-item">Internal Assessment Marks</a>
        <a href="ia-marks.html" class="nav-dd-item">&#10003; Sessional Exam Schedule</a>
      </div>
    </li>
    <li class="nav-item" id="navitem-studymaterial">
      <a href="study-material.html" class="nav-link" id="nav-studymaterial">&#128196; Study Material</a>
    </li>
    <li class="nav-item has-dropdown" id="navitem-other">
      <a href="#" class="nav-link" id="nav-other" onclick="toggleDrop(event,'drop-other')">&#9881; Other <span class="caret">&#9660;</span></a>
      <div class="nav-dropdown" id="drop-other">
        <a href="other.html" class="nav-dd-item">Scholarship</a>
        <a href="other.html" class="nav-dd-item">Bonafide Certificate</a>
        <a href="other.html" class="nav-dd-item">Profile</a>
      </div>
    </li>
  </ul>
</nav>
`;

function initNav(activeNavId) {
  const container = document.getElementById('nav-container');
  if (container) {
    container.innerHTML = NAV_HTML();

    // Set active state
    if (activeNavId) {
      const el = document.getElementById('nav-' + activeNavId);
      if (el) {
        el.classList.add('nav-active-link');
        el.style.color = '#fff';
        el.style.background = '#555';
      }
    }
  }

  // Close all dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.has-dropdown')) {
      document.querySelectorAll('.nav-dropdown').forEach(d => d.style.display = 'none');
    }
  });
}

function toggleDrop(e, dropId) {
  e.preventDefault();
  e.stopPropagation();
  // Close all others first
  document.querySelectorAll('.nav-dropdown').forEach(d => {
    if (d.id !== dropId) d.style.display = 'none';
  });
  const drop = document.getElementById(dropId);
  if (drop) {
    drop.style.display = drop.style.display === 'block' ? 'none' : 'block';
  }
}
