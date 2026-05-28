/* VBNS - Premium Core Application Logic */

// Centralized State Container
let State = {
  config: {
    schoolName: 'VBNS',
    address: '12 Education Lane, New Delhi – 110001',
    phone: '+91 11 2345 6789',
    prefix: 'SAC',
    currency: '₹',
    latefee: 2,
    receiptNote: 'Thank you for your payment. Fee once paid is non-refundable.',
    smsCredits: 850,
    teacherAccess: ['dashboard', 'directory', 'notice', 'attendance', 'timetable', 'exam', 'results', 'library', 'transport']
  },
  auth: {
    currentRole: null, // 'admin', 'teacher', 'student'
    currentUser: null,  // Student object or Staff object
  },
  students: [],
  ledger: [],
  feeLog: [],
  enquiries: [],
  smsLog: [],
  notices: [],
  attendance: {}, // { "Class X_2026-05-24": [ {id, name, status: 'Present'/'Absent'/'Leave'}, ... ] }
  
  // Operational Repositories
  staffAttendance: {}, // { "2026-05-24": [ {id, name, status: 'Present'/'Absent'/'Leave'}, ... ] }
  payrollConfig: {}, // { "TCH-001": { base: 40000, allowance: 3000, deductions: 0, status: 'Unpaid' } }
  staffPasswords: {}, // { "TCH-001": "teacher123", ... }
  
  // Static Academic Databases
  timetable: {
    'Class X-A': [
      { time: '08:30 AM - 09:15 AM', mon: { sub: 'Mathematics', t: 'Dr. Sharma' }, tue: { sub: 'Science', t: 'Mrs. Sen' }, wed: { sub: 'English', t: 'Mr. Paul' }, thu: { sub: 'Social Sci.', t: 'Miss Roy' }, fri: { sub: 'Mathematics', t: 'Dr. Sharma' }, sat: { sub: 'Science', t: 'Mrs. Sen' } },
      { time: '09:15 AM - 10:00 AM', mon: { sub: 'Science', t: 'Mrs. Sen' }, tue: { sub: 'English', t: 'Mr. Paul' }, wed: { sub: 'Mathematics', t: 'Dr. Sharma' }, thu: { sub: 'Hindi', t: 'Mr. Joshi' }, fri: { sub: 'Social Sci.', t: 'Miss Roy' }, sat: { sub: 'PT / Games', t: 'Mr. Negi' } },
      { time: '10:00 AM - 10:15 AM', mon: { sub: 'Recess', t: '-' }, tue: { sub: 'Recess', t: '-' }, wed: { sub: 'Recess', t: '-' }, thu: { sub: 'Recess', t: '-' }, fri: { sub: 'Recess', t: '-' }, sat: { sub: 'Recess', t: '-' } },
      { time: '10:15 AM - 11:00 AM', mon: { sub: 'Social Sci.', t: 'Miss Roy' }, tue: { sub: 'Mathematics', t: 'Dr. Sharma' }, wed: { sub: 'Science', t: 'Mrs. Sen' }, thu: { sub: 'English', t: 'Mr. Paul' }, fri: { sub: 'Hindi', t: 'Mr. Joshi' }, sat: { sub: 'Library', t: 'Mrs. Kaur' } },
      { time: '11:00 AM - 11:45 AM', mon: { sub: 'English', t: 'Mr. Paul' }, tue: { sub: 'Hindi', t: 'Mr. Joshi' }, wed: { sub: 'Social Sci.', t: 'Miss Roy' }, thu: { sub: 'Computer', t: 'Mrs. Dixit' }, fri: { sub: 'Computer', t: 'Mrs. Dixit' }, sat: { sub: 'Art & Craft', t: 'Miss Das' } },
    ]
  },
  exams: [
    { subject: 'Mathematics', date: '2026-06-15', slot: 'Morning', duration: '3 Hours', maxMarks: 100, hall: 'Examination Hall A' },
    { subject: 'Science', date: '2026-06-17', slot: 'Morning', duration: '3 Hours', maxMarks: 100, hall: 'Examination Hall A' },
    { subject: 'English', date: '2026-06-19', slot: 'Morning', duration: '3 Hours', maxMarks: 100, hall: 'Examination Hall B' },
    { subject: 'Social Studies', date: '2026-06-21', slot: 'Morning', duration: '3 Hours', maxMarks: 80, hall: 'Examination Hall B' },
    { subject: 'Hindi', date: '2026-06-23', slot: 'Morning', duration: '3 Hours', maxMarks: 80, hall: 'Examination Hall C' },
    { subject: 'Computer Science', date: '2026-06-25', slot: 'Afternoon', duration: '2 Hours', maxMarks: 50, hall: 'Computer Lab 1' },
  ],
  results: {
    'SAC-001': { examName: 'Midterm Board Evaluation 2026', subjects: [{ sub: 'Mathematics', marks: 92, max: 100 }, { sub: 'Science', marks: 88, max: 100 }, { sub: 'English', marks: 95, max: 100 }, { sub: 'Social Studies', marks: 74, max: 80 }, { sub: 'Hindi', marks: 72, max: 80 }, { sub: 'Computer Science', marks: 48, max: 50 }] },
    'SAC-002': { examName: 'Midterm Board Evaluation 2026', subjects: [{ sub: 'Mathematics', marks: 85, max: 100 }, { sub: 'Science', marks: 91, max: 100 }, { sub: 'English', marks: 87, max: 100 }, { sub: 'Social Studies', marks: 76, max: 80 }, { sub: 'Hindi', marks: 70, max: 80 }, { sub: 'Computer Science', marks: 45, max: 50 }] },
    'SAC-003': { examName: 'Midterm Board Evaluation 2026', subjects: [{ sub: 'Mathematics', marks: 56, max: 100 }, { sub: 'Science', marks: 62, max: 100 }, { sub: 'English', marks: 70, max: 100 }, { sub: 'Social Studies', marks: 52, max: 80 }, { sub: 'Hindi', marks: 48, max: 80 }, { sub: 'Computer Science', marks: 32, max: 50 }] },
    'SAC-004': { examName: 'Midterm Board Evaluation 2026', subjects: [{ sub: 'Mathematics', marks: 99, max: 100 }, { sub: 'Science', marks: 96, max: 100 }, { sub: 'English', marks: 91, max: 100 }, { sub: 'Social Studies', marks: 78, max: 80 }, { sub: 'Hindi', marks: 75, max: 80 }, { sub: 'Computer Science', marks: 49, max: 50 }] },
    'SAC-005': { examName: 'Midterm Board Evaluation 2026', subjects: [{ sub: 'Mathematics', marks: 71, max: 100 }, { sub: 'Science', marks: 68, max: 100 }, { sub: 'English', marks: 79, max: 100 }, { sub: 'Social Studies', marks: 61, max: 80 }, { sub: 'Hindi', marks: 65, max: 80 }, { sub: 'Computer Science', marks: 38, max: 50 }] },
    'SAC-006': { examName: 'Midterm Board Evaluation 2026', subjects: [{ sub: 'Mathematics', marks: 88, max: 100 }, { sub: 'Science', marks: 82, max: 100 }, { sub: 'English', marks: 85, max: 100 }, { sub: 'Social Studies', marks: 69, max: 80 }, { sub: 'Hindi', marks: 71, max: 80 }, { sub: 'Computer Science', marks: 42, max: 50 }] },
    'SAC-007': { examName: 'Midterm Board Evaluation 2026', subjects: [{ sub: 'Mathematics', marks: 42, max: 100 }, { sub: 'Science', marks: 50, max: 100 }, { sub: 'English', marks: 58, max: 100 }, { sub: 'Social Studies', marks: 35, max: 80 }, { sub: 'Hindi', marks: 40, max: 80 }, { sub: 'Computer Science', marks: 25, max: 50 }] },
  },
  library: [
    { id: 'LIB-302', title: 'Concepts of Physics (Vol 1)', author: 'Dr. H.C. Verma', cls: 'Class XI', issuedTo: 'Aarav Sharma (SAC-001)', due: '2026-06-05', status: 'Issued' },
    { id: 'LIB-451', title: 'A Brief History of Time', author: 'Stephen Hawking', cls: 'Class XII', issuedTo: 'Sneha Patel (SAC-004)', due: '2026-06-02', status: 'Issued' },
    { id: 'LIB-112', title: 'High School English Grammar', author: 'Wren & Martin', cls: 'Class X', issuedTo: 'Rohan Gupta (SAC-003)', due: '2026-05-20', status: 'Overdue' },
    { id: 'LIB-098', title: 'Introduction to Algorithms', author: 'Cormen, Leiserson', cls: 'Class XII', issuedTo: '-', due: '-', status: 'Available' },
    { id: 'LIB-224', title: 'Understanding Chemistry', author: 'Dr. C.N.R. Rao', cls: 'Class XI', issuedTo: '-', due: '-', status: 'Available' }
  ],
  transport: [
    { route: 'Route 1 - East Delhi', driver: 'Madan Lal', vehicle: 'DL-1PB-4521 (Bus)', stops: 'Preet Vihar, Laxmi Nagar, Anand Vihar', count: 42, status: 'Operational' },
    { route: 'Route 2 - South Delhi', driver: 'Jaswant Singh', vehicle: 'DL-1PC-7890 (Bus)', stops: 'Saket, GK-2, Vasant Kunj, Lajpat Nagar', count: 35, status: 'Operational' },
    { route: 'Route 3 - Noida Express', driver: 'Vijay Kumar', vehicle: 'UP-16T-1122 (Van)', stops: 'Sector 15, Sector 62, Indirapuram', count: 18, status: 'Maintenance' },
    { route: 'Route 4 - North Campus', driver: 'Satish Yadav', vehicle: 'DL-1PD-3456 (Bus)', stops: 'Model Town, GTB Nagar, Civil Lines', count: 28, status: 'Operational' }
  ],
  staff: [
    { id: 'TCH-001', name: 'Dr. Rajeev Sharma', role: 'Senior Faculty', sub: 'Mathematics, Statistics', contact: '+91 98110 22334', status: 'On Duty', assignedClass: 'Class X' },
    { id: 'TCH-002', name: 'Mrs. Ananya Sen', role: 'Faculty Specialist', sub: 'Physics, Chemistry', contact: '+91 98110 55667', status: 'On Duty', assignedClass: 'Class IX' },
    { id: 'TCH-003', name: 'Mr. Vivek Paul', role: 'Faculty Officer', sub: 'English Literature', contact: '+91 98110 88990', status: 'On Duty', assignedClass: 'Class VIII' },
    { id: 'TCH-004', name: 'Miss Priya Roy', role: 'Faculty Executive', sub: 'History, Civics', contact: '+91 98110 11223', status: 'On Duty', assignedClass: '' },
    { id: 'ADM-001', name: 'Mrs. Harpreet Kaur', role: 'Head Librarian', sub: 'Library Resource Director', contact: '+91 98110 44556', status: 'On Leave', assignedClass: '' },
    { id: 'ADM-002', name: 'Mr. Ramesh Negi', role: 'Physical Trainer', sub: 'Sports & Gymnasium Coordinator', contact: '+91 98110 77889', status: 'On Duty', assignedClass: '' }
  ]
};

let activeLoginRole = 'admin'; // Internal tracker for login tabs

// Seed High-Fidelity Data if LocalStorage is Empty (Self-Correcting Updates Included!)
function seedDatabase() {
  const localState = localStorage.getItem('apex_school_crm_state');
  if (localState) {
    try {
      const parsed = JSON.parse(localState);
      if (parsed.students && parsed.students.length > 0) {
        // Defensive property merge: Prevent old cached localStorage properties from overriding newer state definitions with undefined
        State.students = parsed.students || State.students;
        State.ledger = parsed.ledger || State.ledger;
        State.feeLog = parsed.feeLog || State.feeLog;
        State.enquiries = parsed.enquiries || State.enquiries;
        State.smsLog = parsed.smsLog || State.smsLog;
        State.notices = parsed.notices || State.notices;
        State.attendance = parsed.attendance || State.attendance;
        State.staffAttendance = parsed.staffAttendance || State.staffAttendance;
        State.payrollConfig = parsed.payrollConfig || State.payrollConfig;
        State.staffPasswords = parsed.staffPasswords || State.staffPasswords;
        State.homework = parsed.homework || State.homework;
        State.auditLog = parsed.auditLog || State.auditLog;
        
        if (parsed.staff && parsed.staff.length > 0) {
          State.staff = parsed.staff;
        }
        if (parsed.config) {
          State.config = { ...State.config, ...parsed.config };
        }
        
        // Force update school name if still the old default
        if (State.config.schoolName === 'Sunrise Academy') {
          State.config.schoolName = 'VBNS';
        }
        
        // SELF-CORRECTION: Populate operational blocks if missing on existing localStorage instances
        if (!State.staffPasswords || Object.keys(State.staffPasswords).length === 0) {
          State.staffPasswords = {};
          State.staff.forEach(st => {
            State.staffPasswords[st.id] = 'teacher123';
          });
        }
        if (!State.payrollConfig || Object.keys(State.payrollConfig).length === 0) {
          State.payrollConfig = {};
          State.staff.forEach(st => {
            State.payrollConfig[st.id] = { base: st.role.includes('Senior') ? 45000 : 35000, allowance: 3000, deductions: 0, status: 'Unpaid' };
          });
        }
        if (!State.config.teacherAccess) {
          State.config.teacherAccess = ['dashboard', 'directory', 'notice', 'attendance', 'timetable', 'exam', 'results', 'library', 'transport'];
        }
        State.staff.forEach(st => {
          if (!st.access) {
            st.access = ['directory', 'notice', 'attendance', 'timetable', 'exam', 'results', 'library', 'transport'];
          }
          if (st.assignedClass === undefined) {
            if (st.id === 'TCH-001') st.assignedClass = 'Class X';
            else if (st.id === 'TCH-002') st.assignedClass = 'Class IX';
            else if (st.id === 'TCH-003') st.assignedClass = 'Class VIII';
            else st.assignedClass = '';
          }
        });
        if (!State.staffAttendance) {
          State.staffAttendance = {};
        }
        if (!State.homework) {
          State.homework = [
            { id: 'HW-001', cls: 'Class X', subject: 'Mathematics', title: 'Quadratic Equations Practice', desc: 'Solve questions 1 to 15 from exercise 4.2 in the textbook. Show all workings clearly.', dueDate: '2026-05-28', createdDate: '2026-05-24', by: 'Dr. Rajeev Sharma' },
            { id: 'HW-002', cls: 'Class X', subject: 'Science', title: 'Chemical Reactions Report', desc: 'Write a 2-page report on redox reactions with real-life examples and chemical formulas.', dueDate: '2026-05-29', createdDate: '2026-05-24', by: 'Mrs. Ananya Sen' },
            { id: 'HW-003', cls: 'Class IX', subject: 'English', title: 'Grammar Exercises', desc: 'Complete active/passive voice worksheets distributed in class.', dueDate: '2026-05-27', createdDate: '2026-05-24', by: 'Mr. Vivek Paul' }
          ];
        }
        if (!State.auditLog) {
          State.auditLog = [
            { timestamp: new Date().toLocaleString('en-IN'), actor: 'System Initializer', action: 'System Seed', category: 'system', details: 'Initialized VBNS CRM system state registers' }
          ];
        }
        
        saveState();
        return;
      }
    } catch (e) {
      console.warn("Failed parsing state from localStorage, seeding fallback metrics.");
    }
  }

  // Initial Seed
  State.students = [
    { id: 'SAC-001', name: 'Aarav Sharma', cls: 'Class X', sec: 'A', parent: 'Ramesh Sharma', phone: '9812345001', dob: '2010-03-15', address: '14 MG Road, New Delhi', fee: 45000, balance: 0, status: 'Paid', enrolledDate: '2025-04-10' },
    { id: 'SAC-002', name: 'Priya Mehta', cls: 'Class X', sec: 'B', parent: 'Suresh Mehta', phone: '9812345002', dob: '2010-07-22', address: '8 Lajpat Nagar, Delhi', fee: 45000, balance: 15000, status: 'Partial', enrolledDate: '2025-04-12' },
    { id: 'SAC-003', name: 'Rohan Gupta', cls: 'Class IX', sec: 'A', parent: 'Vikram Gupta', phone: '9812345003', dob: '2011-01-10', address: '22 Karol Bagh, Delhi', fee: 40000, balance: 40000, status: 'Pending', enrolledDate: '2025-04-15' },
    { id: 'SAC-004', name: 'Sneha Patel', cls: 'Class XI', sec: 'A', parent: 'Anand Patel', phone: '9812345004', dob: '2009-05-30', address: '6 Dwarka Sector 5', fee: 50000, balance: 0, status: 'Paid', enrolledDate: '2025-04-18' },
    { id: 'SAC-005', name: 'Karan Singh', cls: 'Class XII', sec: 'B', parent: 'Harjinder Singh', phone: '9812345005', dob: '2008-09-18', address: '3 Punjabi Bagh', fee: 55000, balance: 25000, status: 'Partial', enrolledDate: '2025-04-20' },
    { id: 'SAC-006', name: 'Ananya Verma', cls: 'Class VIII', sec: 'C', parent: 'Deepak Verma', phone: '9812345006', dob: '2012-11-05', address: '19 Rohini Sector 3', fee: 35000, balance: 0, status: 'Paid', enrolledDate: '2025-04-22' },
    { id: 'SAC-007', name: 'Arjun Nair', cls: 'Class VII', sec: 'A', parent: 'Suresh Nair', phone: '9812345007', dob: '2013-04-14', address: '45 Vasant Kunj', fee: 35000, balance: 35000, status: 'Pending', enrolledDate: '2025-04-25' }
  ];

  State.feeLog = [
    { receipt: 'RCP-1040', studentId: 'SAC-001', name: 'Aarav Sharma', type: 'Tuition Fee', amount: 45000, mode: 'UPI / Netbanking', date: '2026-05-02', remarks: 'Full Annual tuition clearance' },
    { receipt: 'RCP-1041', studentId: 'SAC-002', name: 'Priya Mehta', type: 'Tuition Fee', amount: 30000, mode: 'Cash Receipt', date: '2026-05-10', remarks: 'First installment payment' },
    { receipt: 'RCP-1042', studentId: 'SAC-004', name: 'Sneha Patel', type: 'Tuition Fee', amount: 50000, mode: 'UPI / Netbanking', date: '2026-05-18', remarks: 'Full tuition complete' },
    { receipt: 'RCP-1043', studentId: 'SAC-005', name: 'Karan Singh', type: 'Tuition Fee', amount: 30000, mode: 'Credit / Debit Card', date: '2026-05-22', remarks: 'Term 1 partial collect' }
  ];

  State.ledger = [
    { voucher: 'VOU-1001', date: '2026-04-01', desc: 'Opening Financial Reserve Allocation', credit: 250000, debit: 0, balance: 250000 },
    { voucher: 'VOU-1002', date: '2026-05-02', desc: 'Tuition Collection — Aarav Sharma (SAC-001)', credit: 45000, debit: 0, balance: 295000 },
    { voucher: 'VOU-1003', date: '2026-05-05', desc: 'Purchase of Chemistry Lab Reagents & Flasks', credit: 0, debit: 4500, balance: 290500 },
    { voucher: 'VOU-1004', date: '2026-05-10', desc: 'Tuition Collection — Priya Mehta (SAC-002)', credit: 30000, debit: 0, balance: 320500 },
    { voucher: 'VOU-1005', date: '2026-05-15', desc: 'Official School Website Hosting Renewal', credit: 0, debit: 1800, balance: 318700 },
    { voucher: 'VOU-1006', date: '2026-05-18', desc: 'Tuition Collection — Sneha Patel (SAC-004)', credit: 50000, debit: 0, balance: 368700 },
    { voucher: 'VOU-1007', date: '2026-05-20', desc: 'Faculty Monthly Salaries (Mid-Term Clearing)', credit: 0, debit: 180000, balance: 188700 },
    { voucher: 'VOU-1008', date: '2026-05-22', desc: 'Tuition Collection — Karan Singh (SAC-005)', credit: 30000, debit: 0, balance: 218700 },
    { voucher: 'VOU-1009', date: '2026-05-23', desc: 'Electrical Maintenance — Library AC Unit Repair', credit: 0, debit: 5700, balance: 213000 }
  ];

  State.enquiries = [
    { name: 'Riya Joshi', cls: 'Class I', parent: 'Mohan Joshi', phone: '9911223344', source: 'Walk-In Office Visit', status: 'Interested' },
    { name: 'Dev Tiwari', cls: 'Class VI', parent: 'Rajesh Tiwari', phone: '9922334455', source: 'Digital Web Portal Form', status: 'Follow-Up' },
    { name: 'Sana Khan', cls: 'Class X', parent: 'Dr. Tariq Khan', phone: '9899887766', source: 'Direct Phone Callback', status: 'Closed' }
  ];

  State.smsLog = [
    { to: 'All Parents (247 Recipients)', msg: 'Dear Parent, this is to inform that the mid-term evaluations reports are now published in the central portal. — VBNS', date: '2026-05-15', time: '10:15 AM', credits: 247 },
    { to: 'Defaulters (Outstanding Balance)', msg: 'Dear Parent, a gentle reminder that your child\'s outstanding annual fee installment is overdue. Please ignore if paid. — VBNS', date: '2026-05-20', time: '11:45 AM', credits: 3 }
  ];

  State.notices = [
    { title: 'Annual Sports Day Board Assembly', body: 'The Annual Sports Meet is scheduled for 15th December 2026. Grade athletic selections begin Monday.', date: '2026-05-24', priority: 'Normal Broadcast', by: 'Sports Admin Board' },
    { title: 'Mandatory Parent-Teacher Meeting (PTM)', body: 'Critical academic discussion regarding final board test timetables for Classes VI-XII on 10th June 2026, 10:00 AM.', date: '2026-05-22', priority: 'Important Bulletin', by: 'Principal Office' },
    { title: 'Urgent: CBSE Registration Compliance', body: 'All Grade X and XII students must submit three verified photographs and duplicate board forms by 30th May without fail.', date: '2026-05-20', priority: 'Urgent Announcement', by: 'Academic Director' }
  ];

  // Initialize Default Staff Passwords and Salaries
  State.staff.forEach(st => {
    State.staffPasswords[st.id] = 'teacher123';
    State.payrollConfig[st.id] = { base: st.role.includes('Senior') ? 45000 : 35000, allowance: 3000, deductions: 0, status: 'Unpaid' };
    st.access = ['directory', 'notice', 'attendance', 'timetable', 'exam', 'results', 'library', 'transport'];
    if (st.id === 'TCH-001') st.assignedClass = 'Class X';
    else if (st.id === 'TCH-002') st.assignedClass = 'Class IX';
    else if (st.id === 'TCH-003') st.assignedClass = 'Class VIII';
    else st.assignedClass = '';
  });

  State.homework = [
    { id: 'HW-001', cls: 'Class X', subject: 'Mathematics', title: 'Quadratic Equations Practice', desc: 'Solve questions 1 to 15 from exercise 4.2 in the textbook. Show all workings clearly.', dueDate: '2026-05-28', createdDate: '2026-05-24', by: 'Dr. Rajeev Sharma' },
    { id: 'HW-002', cls: 'Class X', subject: 'Science', title: 'Chemical Reactions Report', desc: 'Write a 2-page report on redox reactions with real-life examples and chemical formulas.', dueDate: '2026-05-29', createdDate: '2026-05-24', by: 'Mrs. Ananya Sen' },
    { id: 'HW-003', cls: 'Class IX', subject: 'English', title: 'Grammar Exercises', desc: 'Complete active/passive voice worksheets distributed in class.', dueDate: '2026-05-27', createdDate: '2026-05-24', by: 'Mr. Vivek Paul' }
  ];

  State.auditLog = [
    { timestamp: new Date().toLocaleString('en-IN'), actor: 'System Initializer', action: 'System Seed', category: 'system', details: 'Initialized VBNS CRM system state registers' }
  ];

  saveState();
}

function saveState() {
  localStorage.setItem('apex_school_crm_state', JSON.stringify(State));
}

// Global Core App Initializer
window.addEventListener('DOMContentLoaded', () => {
  seedDatabase();
  
  // Apply Date and settings configuration
  renderDateDisplay();
  applySettingsConfig();
  
  // Set theme preference
  const savedTheme = localStorage.getItem('apex_theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }

  // Validate session logins
  validateSessionHandler();

  // Set initial active tab (fees for student, dashboard for others)
  const defaultTab = State.auth.currentRole === 'student' ? 'fees' : 'dashboard';
  nav(defaultTab);
  
  // Seed current date in attendance pickers
  const dt = document.getElementById('att-date');
  if (dt) dt.value = new Date().toISOString().split('T')[0];

  const sdt = document.getElementById('staff-att-date');
  if (sdt) sdt.value = new Date().toISOString().split('T')[0];

  // QoL improvements: Bind Enter key to executeLogin() in the login fields
  const loginUsernameInput = document.getElementById('login-username');
  const loginPasswordInput = document.getElementById('login-password');
  
  if (loginUsernameInput) {
    loginUsernameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeLogin();
      }
    });
  }
  if (loginPasswordInput) {
    loginPasswordInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeLogin();
      }
    });
  }
});

// Real-Time Date & Time Indicator
function renderDateDisplay() {
  const el = document.getElementById('topbar-date');
  if (!el) return;
  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  el.textContent = new Date().toLocaleDateString('en-IN', options);
}

// Sidebar Drawer Toggle for Mobile Viewports
function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  if (sb) sb.classList.toggle('open');
}

// Dark/Light Theme Switching
function toggleTheme() {
  const isLight = document.body.classList.toggle('light-theme');
  localStorage.setItem('apex_theme', isLight ? 'light' : 'dark');
  showToast('Theme Updated', `Switched to ${isLight ? 'Light Mode' : 'Dark Mode'}.`, 'ti-sun-moon');
}

// -------------------------------------------------------------
// SECURE MULTI-ROLE PORTALS AUTHENTICATION LOGIC (With Forgiving Login Matchers!)
// -------------------------------------------------------------
function setLoginRole(role) {
  activeLoginRole = role;
  
  // Style tab active triggers
  document.querySelectorAll('.login-role-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(`tab-btn-${role}`).classList.add('active');

  // Modify form inputs visibility based on role selection
  const userRow = document.getElementById('login-username-row');
  const passRow = document.getElementById('login-password-row');
  const dobRow = document.getElementById('login-dob-row');
  const userLbl = document.getElementById('login-username-lbl');

  document.getElementById('login-error').style.display = 'none';

  if (role === 'admin') {
    userRow.style.display = 'block';
    passRow.style.display = 'block';
    dobRow.style.display = 'none';
    userLbl.textContent = 'Admin Username';
    document.getElementById('login-username').placeholder = 'E.g., admin';
  } else if (role === 'teacher') {
    userRow.style.display = 'block';
    passRow.style.display = 'block';
    dobRow.style.display = 'none';
    userLbl.textContent = 'Faculty Officer ID';
    document.getElementById('login-username').placeholder = 'E.g., TCH-001';
  } else if (role === 'student') {
    userRow.style.display = 'block';
    passRow.style.display = 'block';
    dobRow.style.display = 'none';
    userLbl.textContent = 'Registered Student ID';
    document.getElementById('login-username').placeholder = 'E.g., SAC-001';
    document.getElementById('login-password').placeholder = 'E.g., Aarav2010-03-15';
  }
}

function executeLogin() {
  const errorEl = document.getElementById('login-error');
  const username = document.getElementById('login-username').value.trim();
  const passVal = document.getElementById('login-password').value;
  const dobVal = document.getElementById('login-dob').value;

  errorEl.style.display = 'none';

  if (!username) {
    errorEl.textContent = 'Please provide a valid entry name or ID.';
    errorEl.style.display = 'block';
    return;
  }

  let authenticatedUser = null;

  if (activeLoginRole === 'admin') {
    if (username.toLowerCase() === 'admin' && passVal.trim() === 'admin') {
      authenticatedUser = { name: 'CRM Super Admin', id: 'admin' };
    }
  } else if (activeLoginRole === 'teacher') {
    // Forgiving Faculty ID matching (case-insensitive) and password trimming
    const staffObj = State.staff.find(st => st.id.toUpperCase() === username.toUpperCase());
    const validPassword = State.staffPasswords[username.toUpperCase()];
    if (staffObj && validPassword && passVal.trim() === validPassword.trim()) {
      authenticatedUser = staffObj;
    }
  } else if (activeLoginRole === 'student') {
    // Forgiving Student login: ID = Student ID, Password = first name + DOB (e.g. Aarav2010-03-15)
    const stuObj = State.students.find(s => {
      if (s.id.toUpperCase() !== username.toUpperCase()) return false;
      const firstName = s.name.trim().split(' ')[0];
      const expectedPassword = `${firstName}${s.dob}`;
      return passVal.trim().toLowerCase() === expectedPassword.toLowerCase();
    });
    if (stuObj) {
      authenticatedUser = stuObj;
    }
  }

  if (authenticatedUser) {
    // Commit to session and state
    State.auth.currentRole = activeLoginRole;
    State.auth.currentUser = authenticatedUser;
    
    // Save to sessionStorage to maintain logins on refresh
    sessionStorage.setItem('apex_auth_role', activeLoginRole);
    sessionStorage.setItem('apex_auth_user', JSON.stringify(authenticatedUser));

    // Audit successful login
    logActivity(authenticatedUser.name, 'User Login', 'security', `Successfully authorized as ${activeLoginRole.toUpperCase()}`);

    applySessionAccessLayout();
    
    // Navigate to default tab based on role
    const defaultTab = activeLoginRole === 'student' ? 'fees' : 'dashboard';
    nav(defaultTab);
    
    // Clear login inputs
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
    document.getElementById('login-dob').value = '';

    showToast('Login Granted', `Welcome back, ${authenticatedUser.name}!`, 'ti-circle-key-filled');
  } else {
    // Helpful login failure clues
    let clue = 'Invalid credentials. Access denied.';
    if (activeLoginRole === 'student') {
      clue = 'Student ID/Name or Date-of-Birth does not match our records.';
    } else if (activeLoginRole === 'teacher') {
      clue = 'Faculty ID or Password does not match our records.';
    }
    errorEl.textContent = clue;
    errorEl.style.display = 'block';
  }
}

function executeLogout() {
  State.auth.currentRole = null;
  State.auth.currentUser = null;

  sessionStorage.removeItem('apex_auth_role');
  sessionStorage.removeItem('apex_auth_user');

  // Hide CRM and show public website
  const appContainer = document.getElementById('app');
  if (appContainer) {
    appContainer.style.display = 'none';
    appContainer.className = '';
  }
  
  const pubWeb = document.getElementById('public-website');
  if (pubWeb) pubWeb.style.display = 'block';

  // Make sure login overlay is hidden
  const screen = document.getElementById('login-screen');
  if (screen) screen.classList.add('hidden');

  document.body.classList.remove('crm-active');

  showToast('Logged Out', 'Successfully signed out of the central database.', 'ti-logout');
  
  // Reload notices in case they were updated
  renderPublicNotices();
}

function validateSessionHandler() {
  const sRole = sessionStorage.getItem('apex_auth_role');
  const sUser = sessionStorage.getItem('apex_auth_user');

  if (sRole && sUser) {
    try {
      State.auth.currentRole = sRole;
      State.auth.currentUser = JSON.parse(sUser);
      applySessionAccessLayout();
      return;
    } catch (e) {
      sessionStorage.clear();
    }
  }

  // If no session exists, show public landing page and hide CRM app and login overlay
  const appContainer = document.getElementById('app');
  if (appContainer) appContainer.style.display = 'none';
  
  const pubWeb = document.getElementById('public-website');
  if (pubWeb) pubWeb.style.display = 'block';

  const screen = document.getElementById('login-screen');
  if (screen) screen.classList.add('hidden');

  document.body.classList.remove('crm-active');

  // Load notices dynamically onto public landing page notice board
  renderPublicNotices();
}

function applySessionAccessLayout() {
  const screen = document.getElementById('login-screen');
  screen.classList.add('hidden');

  const role = State.auth.currentRole;
  const user = State.auth.currentUser;

  // Show CRM app container and hide public website
  const appContainer = document.getElementById('app');
  if (appContainer) {
    appContainer.style.display = 'flex';
    appContainer.className = `logged-in-${role}`;
  }
  
  const pubWeb = document.getElementById('public-website');
  if (pubWeb) pubWeb.style.display = 'none';

  document.body.classList.add('crm-active');

  // Update topbar badges
  const uBadge = document.getElementById('user-display-name');
  if (uBadge) {
    uBadge.textContent = `${user.name} (${role.toUpperCase()})`;
  }

  // DYNAMIC SIDEBAR VISIBILITY FILTERS (Locks specific items dynamically per user!)
  const studentClearance = ['fees', 'notice', 'attendance', 'results', 'exam', 'idcards', 'admit', 'homework'];
  
  let allowedTabs = [];
  if (role === 'admin') {
    allowedTabs = ['dashboard', 'admission', 'directory', 'idcards', 'admit', 'fees', 'ledger', 'report', 'payroll', 'sms', 'notice', 'enquiry', 'attendance', 'staffattendance', 'timetable', 'exam', 'results', 'homework', 'library', 'transport', 'staff', 'settings', 'audit'];
  } else if (role === 'student') {
    allowedTabs = studentClearance;
  } else if (role === 'teacher') {
    allowedTabs = ['dashboard', 'homework', ...(user.access || ['directory', 'notice', 'attendance', 'timetable', 'exam', 'results', 'library', 'transport'])];
  }

  // Update profile avatar visibility
  updateSidebarAvatar();

  // Filter all sidebar navigation items dynamically
  document.querySelectorAll('.sb-item').forEach(item => {
    const action = item.getAttribute('onclick');
    if (action) {
      const match = action.match(/nav\('([^']+)'/);
      if (match) {
        const tabId = match[1];
        if (allowedTabs.includes(tabId)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      }
    }
  });

  // Filter sidebar section headers dynamically
  document.querySelectorAll('.sb-section').forEach(section => {
    const secRoles = section.getAttribute('data-roles');
    if (secRoles && secRoles.includes(role)) {
      if (role === 'student') {
        if (secRoles === 'student') {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      } else {
        section.style.display = 'block';
      }
    } else {
      section.style.display = 'none';
    }
  });

  // Draw dashboard operational triggers
  renderQuickActionsPanel();
}

// -------------------------------------------------------------
// SPA View Routing & Dynamic Clearances (With Settings Controls Mapped!)
// -------------------------------------------------------------
function nav(tabId, sidebarElement) {
  const currentRole = State.auth.currentRole || 'student';
  
  // Student view limits: Students can access Fees, Notice Board, Student Attendance, Exam Results, Exam Schedule, ID Cards, Admit Cards, and Homework
  const studentClearance = ['fees', 'notice', 'attendance', 'results', 'exam', 'idcards', 'admit', 'homework'];
  
  // Dynamic Faculty view limits: Controlled dynamically per logged-in staff member!
  let teacherClearance = ['dashboard', 'homework'];
  if (currentRole === 'teacher') {
    const activeStaff = State.auth.currentUser;
    if (activeStaff && activeStaff.access) {
      teacherClearance = ['dashboard', 'homework', ...activeStaff.access];
    } else {
      teacherClearance = ['dashboard', 'homework', 'directory', 'notice', 'attendance', 'timetable', 'exam', 'results', 'library', 'transport'];
    }
  }

  const accessAllowances = {
    admin: ['dashboard', 'admission', 'directory', 'idcards', 'admit', 'fees', 'ledger', 'report', 'payroll', 'sms', 'notice', 'enquiry', 'attendance', 'staffattendance', 'timetable', 'exam', 'results', 'library', 'transport', 'staff', 'settings', 'homework', 'audit'],
    teacher: teacherClearance,
    student: studentClearance
  };

  const allowedTabs = accessAllowances[currentRole];
  if (!allowedTabs.includes(tabId)) {
    showToast('Access Blocked', 'This tab has been restricted for your role profile.', 'ti-shield-alert');
    return;
  }

  // Hide all sections
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  
  // Show target section
  const targetTab = document.getElementById('tab-' + tabId);
  if (targetTab) targetTab.classList.add('active');

  // Reset active classes on Sidebar items
  document.querySelectorAll('.sb-item').forEach(item => item.classList.remove('active'));
  
  // Set active class if element provided
  if (sidebarElement) {
    sidebarElement.classList.add('active');
  } else {
    document.querySelectorAll('.sb-item').forEach(item => {
      const action = item.getAttribute('onclick');
      if (action && action.includes(`'${tabId}'`)) {
        item.classList.add('active');
      }
    });
  }

  // Update header text title
  const titles = {
    dashboard: 'Dashboard Overview',
    admission: 'Student Registry Portal',
    directory: 'Master Student Directory',
    idcards: 'Credential ID Generator',
    admit: 'Board Admit Card Portal',
    fees: 'Fee Collection Portal',
    ledger: 'Accounting & Ledger System',
    report: 'Fee Audits & Analytics',
    payroll: 'Faculty Payroll sheet',
    sms: 'SMS Broadcasting Console',
    notice: 'Campus Bulletin Notice Board',
    enquiry: 'Prospect pipeline register',
    attendance: 'Daily Student Attendance',
    staffattendance: 'Daily Staff Attendance',
    timetable: 'Weekly Curriculum Mappings',
    exam: 'Examination Schedules',
    results: 'Master Student Gradebook',
    library: 'Circulation & Library Logs',
    transport: 'Transit & Bus Routes',
    staff: 'Academic & Admin Staff',
    settings: 'System configurations'
  };
  
  const titleEl = document.getElementById('topbar-title');
  if (titleEl) titleEl.textContent = titles[tabId] || 'VBNS';

  const sb = document.getElementById('sidebar');
  if (sb) sb.classList.remove('open');

  // Trigger Renderers based on routing pathways
  switch (tabId) {
    case 'dashboard':
      renderDashboard();
      break;
    case 'directory':
      renderDirectoryList();
      break;
    case 'idcards':
      lockStudentDropdownToRole('id-student-sel', 'id-student-sel-wrapper');
      renderIDCard();
      break;
    case 'admit':
      lockStudentDropdownToRole('admit-stu-sel', 'admit-stu-sel-wrapper');
      renderAdmitCard();
      break;
    case 'fees':
      populateStudentSelectors('fee-stu-sel');
      // Lock student fees collections forms to read-only receipts lists
      lockStudentFeesCollectTab();
      renderFeeCollectionModule();
      break;
    case 'ledger':
      renderLedgerSystem();
      break;
    case 'report':
      renderFeeReport();
      break;
    case 'payroll':
      populateStaffSelectors('payroll-staff-sel');
      loadStaffPayrollForm();
      renderStaffPayroll();
      break;
    case 'sms':
      updateSMSCreditsPreview();
      renderSMSLogList();
      break;
    case 'notice':
      renderNoticeList();
      break;
    case 'enquiry':
      renderEnquiryRegister();
      break;
    case 'attendance':
      loadAttendanceRegister();
      break;
    case 'staffattendance':
      loadStaffAttendanceRegister();
      break;
    case 'timetable':
      renderTimetableModule();
      break;
    case 'exam':
      renderExamCalendar();
      break;
    case 'results':
      lockStudentDropdownToRole('res-stu', 'results-stu-wrapper');
      loadStudentResults();
      break;
    case 'library':
      renderLibraryCirculation();
      break;
    case 'transport':
      renderTransportDatabase();
      break;
    case 'staff':
      renderStaffRegistry();
      break;
    case 'settings':
      renderSettingsValues();
      break;
    case 'homework':
      renderHomeworkBoard();
      break;
    case 'audit':
      renderAuditPanel();
      break;
  }
}

// Lock Dropdowns to Student ID when logged in as a Student
function lockStudentDropdownToRole(selectId, wrapperId) {
  const sel = document.getElementById(selectId);
  const wrap = document.getElementById(wrapperId);
  if (!sel || !wrap) return;

  populateStudentSelectors(selectId);

  if (State.auth.currentRole === 'student') {
    const student = State.auth.currentUser;
    sel.value = student.id;
    sel.disabled = true;
    
    let lockLabel = wrap.querySelector('.lock-label');
    if (!lockLabel) {
      lockLabel = document.createElement('small');
      lockLabel.className = 'lock-label';
      lockLabel.style.color = 'var(--accent)';
      lockLabel.style.fontWeight = '600';
      lockLabel.style.marginTop = '4px';
      lockLabel.style.display = 'block';
      lockLabel.innerHTML = '<i class="ti ti-lock"></i> Locked to your student profile credentials.';
      wrap.appendChild(lockLabel);
    }
  } else {
    sel.disabled = false;
    const lockLabel = wrap.querySelector('.lock-label');
    if (lockLabel) lockLabel.remove();
  }
}

// Lock Student Fees Tab to hide Collection forms
function lockStudentFeesCollectTab() {
  const collectCard = document.getElementById('fees-collect-card');
  const role = State.auth.currentRole;
  if (!collectCard) return;

  if (role === 'student') {
    collectCard.style.display = 'none';
  } else {
    collectCard.style.display = 'block';
  }
}

// -------------------------------------------------------------
// MODULE 1: DASHBOARD MODULE
// -------------------------------------------------------------
function renderDashboard() {
  const currentRole = State.auth.currentRole || 'student';

  // 1. Core KPIs
  const totalStudents = State.students.length;
  document.getElementById('stat-students').textContent = totalStudents;
  
  // Calculate revenue from collections logged in May 2026 (current active month)
  const currentMonthCollections = State.feeLog
    .filter(log => log.date.includes('2026-05'))
    .reduce((sum, log) => sum + log.amount, 0);
  
  if (currentRole === 'admin') {
    document.getElementById('stat-revenue').textContent = formatCurrency(currentMonthCollections);
    
    // Aggregate Pending Balances
    const totalPendingDues = State.students.reduce((sum, s) => sum + s.balance, 0);
    document.getElementById('stat-pending').textContent = formatCurrency(totalPendingDues);
    
    const pendingCount = State.students.filter(s => s.balance > 0).length;
    document.getElementById('stat-pending-sub').innerHTML = 
      `<i class="ti ti-users-group"></i> ${pendingCount} students pending`;
  }

  // SMS Statuses
  document.getElementById('stat-sms').textContent = State.config.smsCredits;
  document.getElementById('stat-sms-plan').textContent = "1000/mo";

  // 2. Recent Admissions Table
  const tbody = document.getElementById('recent-admissions');
  if (tbody) {
    const recents = [...State.students].reverse().slice(0, 4);
    tbody.innerHTML = recents.map(s => {
      const initials = s.name.split(' ').map(w => w[0]).join('').slice(0,2);
      return `
        <tr>
          <td><b>${s.id}</b></td>
          <td>
            <div style="display:flex; align-items:center; gap:10px">
              <div style="width:30px; height:30px; border-radius:50%; background:var(--accent-light); color:var(--accent); font-weight:700; font-size:11px; display:flex; align-items:center; justify-content:center">${initials}</div>
              <span>${s.name}</span>
            </div>
          </td>
          <td>${s.cls} — Sec ${s.sec}</td>
          <td>${s.parent}</td>
          <td>${s.enrolledDate}</td>
          <td>
            <span class="pill ${s.status === 'Paid' ? 'pill-green' : s.status === 'Pending' ? 'pill-red' : 'pill-amber'}">${s.status}</span>
          </td>
        </tr>
      `;
    }).join('');
  }

  // 3. Mini Bulletin Bulletin notice board
  const bulletNoticeBoard = document.getElementById('notice-board');
  if (bulletNoticeBoard) {
    bulletNoticeBoard.innerHTML = State.notices.slice(0, 3).map(nt => {
      const cls = nt.priority.includes('Urgent') ? 'priority-urgent' : nt.priority.includes('Important') ? 'priority-important' : '';
      return `
        <div class="notice-item ${cls}">
          <p>${nt.body}</p>
          <small>Posted: ${nt.date} · ${nt.by}</small>
        </div>
      `;
    }).join('');
  }

  // 4. Custom Collection Mini Bar Chart
  if (currentRole === 'admin') {
    renderDashboardBarChart();
  }
}

function renderDashboardBarChart() {
  const chartWrapper = document.getElementById('mini-chart');
  if (!chartWrapper) return;
  
  // Calculate collection data aggregated for last 6 months (Dec 25 - May 26)
  const monthlyLogs = {
    'Dec': 125000,
    'Jan': 142000,
    'Feb': 118000,
    'Mar': 165000,
    'Apr': 210000,
    'May': 0 // Populated from active State
  };

  // Sum active State's May collections
  monthlyLogs['May'] = State.feeLog
    .filter(log => log.date.includes('2026-05'))
    .reduce((sum, log) => sum + log.amount, 0);

  const values = Object.values(monthlyLogs);
  const keys = Object.keys(monthlyLogs);
  const maxVal = Math.max(...values, 1);

  chartWrapper.innerHTML = keys.map((month, idx) => {
    const val = values[idx];
    const pctHeight = (val / maxVal) * 100;
    return `
      <div class="mini-bar" style="height: ${pctHeight}%" data-m="${month}" title="${month}: ${formatCurrency(val)}"></div>
    `;
  }).join('');
}

function renderQuickActionsPanel() {
  const grid = document.getElementById('action-grid-wrapper');
  if (!grid) return;

  const currentRole = State.auth.currentRole || 'student';
  
  // Get active teacher access configurations dynamically per logged-in staff member!
  let teacherActions = ['homework', 'notice', 'attendance', 'timetable', 'exam', 'results', 'library', 'transport'];
  if (currentRole === 'teacher') {
    const activeStaff = State.auth.currentUser;
    if (activeStaff && activeStaff.access) {
      teacherActions = ['homework', ...activeStaff.access];
    }
  }

  const allActions = [
    { id: 'admission', icon: 'ti-user-plus', label: 'Admission', roles: ['admin'] },
    { id: 'idcards', icon: 'ti-id-badge', label: 'ID Cards', roles: ['admin'] },
    { id: 'admit', icon: 'ti-certificate', label: 'Admit Card', roles: ['admin'] },
    { id: 'fees', icon: 'ti-cash', label: 'Collect Fee', roles: ['admin'] },
    { id: 'fees', icon: 'ti-receipt', label: 'Receipts', roles: ['student'] }, // Student sees Receipts quick action
    { id: 'sms', icon: 'ti-messages', label: 'SMS Portal', roles: ['admin'] },
    { id: 'notice', icon: 'ti-bell-ringing', label: 'Notice Board', roles: ['admin', 'teacher', 'student'] },
    { id: 'report', icon: 'ti-chart-pie', label: 'Fee Reports', roles: ['admin'] },
    { id: 'payroll', icon: 'ti-wallet', label: 'Staff Payroll', roles: ['admin'] },
    { id: 'enquiry', icon: 'ti-address-book', label: 'Enquiry Log', roles: ['admin'] },
    { id: 'attendance', icon: 'ti-calendar-user', label: 'Student Att', roles: ['admin', 'teacher', 'student'] },
    { id: 'staffattendance', icon: 'ti-users-group', label: 'Staff Att', roles: ['admin'] },
    { id: 'timetable', icon: 'ti-calendar-time', label: 'Timetable', roles: ['admin', 'teacher'] },
    { id: 'exam', icon: 'ti-notebook', label: 'Exam Dates', roles: ['admin', 'teacher'] },
    { id: 'results', icon: 'ti-award', label: 'Results', roles: ['admin', 'teacher', 'student'] },
    { id: 'homework', icon: 'ti-pencil', label: 'Homework Board', roles: ['admin', 'teacher', 'student'] },
    { id: 'library', icon: 'ti-books', label: 'Library List', roles: ['admin', 'teacher'] },
    { id: 'transport', icon: 'ti-bus', label: 'Bus Routes', roles: ['admin', 'teacher'] },
    { id: 'staff', icon: 'ti-id', label: 'Staff registry', roles: ['admin'] },
    { id: 'settings', icon: 'ti-settings-automation', label: 'Settings', roles: ['admin'] }
  ];

  const filtered = allActions.filter(act => {
    if (act.roles.includes(currentRole)) {
      if (currentRole === 'teacher' && act.id !== 'dashboard') {
        return teacherActions.includes(act.id);
      }
      return true;
    }
    return false;
  });

  grid.innerHTML = filtered.map(act => `
    <div class="action-btn" onclick="nav('${act.id}')">
      <i class="ti ${act.icon}"></i>
      <span>${act.label}</span>
    </div>
  `).join('');
}

// -------------------------------------------------------------
// MODULE 2: NEW ENROLLMENT ADMISSION
// -------------------------------------------------------------
function admitStudent() {
  const nameEl = document.getElementById('adm-name');
  const classEl = document.getElementById('adm-class');
  const secEl = document.getElementById('adm-section');
  const dobEl = document.getElementById('adm-dob');
  const parentEl = document.getElementById('adm-parent');
  const phoneEl = document.getElementById('adm-phone');
  const addressEl = document.getElementById('adm-address');
  const feeEl = document.getElementById('adm-fee');

  const name = nameEl.value.trim();
  const cls = classEl.value;
  const sec = secEl.value;
  const dob = dobEl.value;
  const parent = parentEl.value.trim();
  const phone = phoneEl.value.trim();
  const address = addressEl.value.trim();
  const annualFee = parseFloat(feeEl.value);

  if (!name || !parent || !phone || isNaN(annualFee)) {
    showToast('Validation Error', 'Please satisfy all required fields highlighted with (*).', 'ti-alert-circle');
    return;
  }

  // Calculate clean Enrollment ID
  const nextIdNum = State.students.length + 1;
  const nextId = `${State.config.prefix}-${String(nextIdNum).padStart(3, '0')}`;
  const currentDateStr = new Date().toISOString().split('T')[0];

  // Append Student Object
  const newStudent = {
    id: nextId,
    name,
    cls,
    sec,
    parent,
    phone,
    dob: dob || currentDateStr,
    address: address || 'N/A',
    fee: annualFee,
    balance: annualFee, 
    status: 'Pending',
    enrolledDate: currentDateStr
  };

  State.students.push(newStudent);
  
  // Record Annual Fee Debited Transaction to Ledger
  const ledgerVou = `VOU-${State.ledger.length + 1002}`;
  State.ledger.push({
    voucher: ledgerVou,
    date: currentDateStr,
    desc: `Student Enrollment Annual Fee Debited: ${name} (${nextId})`,
    credit: 0,
    debit: 0,
    balance: calculateActiveCashBalance()
  });

  logActivity('Super Admin', 'Student Admission', 'enrollment', `Enrolled new student file for ${name} (${nextId})`);
  saveState();

  // Create Beautiful Profile Panel Output Preview
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  document.getElementById('adm-preview').innerHTML = `
    <div class="live-settings-card" style="margin: 0 auto; background-color: var(--bg-secondary);">
      <div style="display:flex; align-items:center; gap:16px; margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid var(--border-primary)">
        <div style="width:50px; height:50px; border-radius:50%; background:linear-gradient(135deg, var(--accent) 0%, #d946ef 100%); display:flex; align-items:center; justify-content:center; color:#fff; font-family:var(--font-display); font-weight:700; font-size:18px">${initials}</div>
        <div>
          <h4 style="font-family:var(--font-display); font-size:16px; font-weight:700">${name}</h4>
          <span style="font-size:11px; color:var(--text-secondary); font-weight:600">${nextId} (Section ${sec})</span>
        </div>
      </div>
      <div style="font-size:12px; line-height:2.0; display:flex; flex-direction:column; gap:4px">
        <div><span style="color:var(--text-secondary)">Assigned Grade:</span> <b>${cls}</b></div>
        <div><span style="color:var(--text-secondary)">Parent Contact:</span> <b>${parent}</b></div>
        <div><span style="color:var(--text-secondary)">Helpline Mobile:</span> <b>${phone}</b></div>
        <div><span style="color:var(--text-secondary)">Annual Obligation:</span> <b style="color:var(--accent)">${formatCurrency(annualFee)}</b></div>
        <div><span style="color:var(--text-secondary)">Admission Date:</span> <b>${currentDateStr}</b></div>
      </div>
      <div style="margin-top:16px; padding:10px; border-radius:var(--border-radius-sm); background-color:var(--color-success-bg); color:var(--color-success); font-size:11px; font-weight:600; display:flex; align-items:center; gap:8px">
        <i class="ti ti-circle-check"></i> Student registered successfully!
      </div>
    </div>
  `;

  showToast('Registration Complete', `${name} successfully registered. ID: ${nextId}`, 'ti-user-check');

  // Reset inputs
  nameEl.value = '';
  dobEl.value = '';
  parentEl.value = '';
  phoneEl.value = '';
  addressEl.value = '';
  feeEl.value = '';
}

// -------------------------------------------------------------
// MODULE 3: MASTER DIRECTORY MODULE 
// -------------------------------------------------------------
function renderDirectoryList() {
  const tbody = document.getElementById('dir-body');
  if (!tbody) return;

  const searchVal = document.getElementById('dir-search').value.toLowerCase();
  const classFilter = document.getElementById('dir-class-filter').value;
  const currentRole = State.auth.currentRole;

  let students = State.students;
  if (currentRole === 'teacher') {
    const activeTeacher = State.auth.currentUser;
    if (activeTeacher && activeTeacher.assignedClass) {
      students = State.students.filter(s => s.cls === activeTeacher.assignedClass);
      
      const dirFilter = document.getElementById('dir-class-filter');
      if (dirFilter) {
        dirFilter.value = activeTeacher.assignedClass;
        dirFilter.disabled = true;
      }
    }
  } else {
    const dirFilter = document.getElementById('dir-class-filter');
    if (dirFilter) dirFilter.disabled = false;
  }

  const filtered = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchVal) || s.id.toLowerCase().includes(searchVal) || s.phone.includes(searchVal);
    const matchesClass = !classFilter || s.cls === classFilter;
    return matchesSearch && matchesClass;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="center-col" style="color: var(--text-tertiary); padding: 32px 0;">
          <i class="ti ti-users" style="font-size: 32px; display: block; margin-bottom: 8px;"></i>
          No student files match current filters.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(s => {
    const deleteBtn = currentRole === 'admin' ? 
      `<button class="btn btn-sm btn-danger" onclick="removeStudent('${s.id}')" title="Delete Profile"><i class="ti ti-trash"></i> Delete</button>` : '';

    return `
      <tr>
        <td><b>${s.id}</b></td>
        <td>${s.name}</td>
        <td>${s.cls} — Sec ${s.sec}</td>
        <td>${s.parent}</td>
        <td>${s.phone}</td>
        <td>
          <span class="pill ${s.status === 'Paid' ? 'pill-green' : s.status === 'Pending' ? 'pill-red' : 'pill-amber'}">${s.status}</span>
        </td>
        <td style="display: flex; gap: 6px;">
          <button class="btn btn-sm" onclick="inspectStudentProfile('${s.id}')" title="Inspect Record">
            <i class="ti ti-external-link"></i> Inspect
          </button>
          ${deleteBtn}
        </td>
      </tr>
    `;
  }).join('');
}

function filterDirectory() {
  renderDirectoryList();
}

function inspectStudentProfile(studentId) {
  const s = State.students.find(x => x.id === studentId);
  if (!s) return;
  
  if (State.auth.currentRole === 'student') {
    nav('results');
  } else {
    const selector = document.getElementById('res-stu');
    if (selector) {
      populateStudentSelectors('res-stu');
      selector.value = studentId;
    }
    nav('results');
  }
  
  showToast('Profile Loaded', `Displaying academic grade reports for ${s.name}.`, 'ti-user-share');
}

function removeStudent(studentId) {
  if (!confirm(`Are you absolutely sure you want to permanently delete student file ${studentId}? This action removes their financial accounts and timetables.`)) {
    return;
  }

  const sIndex = State.students.findIndex(s => s.id === studentId);
  if (sIndex === -1) return;

  const name = State.students[sIndex].name;
  State.students.splice(sIndex, 1);

  // Remove corresponding results
  delete State.results[studentId];

  logActivity('Super Admin', 'Student Deletion', 'enrollment', `Permanently deleted student record: ${name} (${studentId})`);
  saveState();
  renderDirectoryList();
  
  showToast('Student Removed', `Student file for ${name} (${studentId}) deleted from directories.`, 'ti-trash');
}

// -------------------------------------------------------------
// MODULE 4: CREDENTIAL ID CARD GENERATOR
// -------------------------------------------------------------
function renderIDCard() {
  const selector = document.getElementById('id-student-sel');
  const previewDiv = document.getElementById('id-card-preview');
  if (!selector || !previewDiv) return;

  const student = State.students.find(s => s.id === selector.value) || State.students[0];
  if (!student) {
    previewDiv.innerHTML = `<div class="empty-preview"><p>Create a student file first.</p></div>`;
    return;
  }

  const sessionYear = document.getElementById('id-year').value || '2026-27';
  const initials = student.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  previewDiv.innerHTML = `
    <div class="id-card">
      <div class="school-name-banner">${State.config.schoolName}</div>
      <div class="id-avatar">${initials}</div>
      <div class="id-name">${student.name}</div>
      <div class="id-detail">Enrollment ID: <b>${student.id}</b></div>
      <div class="id-detail">Class: <b>${student.cls} — Section ${student.sec}</b></div>
      <div class="id-detail">Session: <b>${sessionYear}</b></div>
      <div class="id-detail">Parent Helpline: <b>+91 ${student.phone}</b></div>
      <div class="id-school">
        ${State.config.address}<br>
        Helpline Desk: ${State.config.phone}
      </div>
      <div class="barcode">||||| ${student.id} |||||</div>
    </div>
  `;
}

// -------------------------------------------------------------
// MODULE 5: BOARD ADMIT CARD PORTAL
// -------------------------------------------------------------
function renderAdmitCard() {
  const selector = document.getElementById('admit-stu-sel');
  const previewDiv = document.getElementById('admit-card-preview');
  if (!selector || !previewDiv) return;

  const student = State.students.find(s => s.id === selector.value) || State.students[0];
  if (!student) {
    previewDiv.innerHTML = `<div class="empty-preview"><p>Create a student file first.</p></div>`;
    return;
  }

  const examType = document.getElementById('admit-exam').value;
  const examCentre = document.getElementById('admit-centre').value || 'Main Hall, Block A';

  previewDiv.innerHTML = `
    <div class="admit-card">
      <div class="admit-header">
        <h3>${State.config.schoolName}</h3>
        <p>${State.config.address}</p>
        <span class="title-badge">${examType}</span>
      </div>
      
      <div class="admit-row"><span>Candidate Name</span><b>${student.name}</b></div>
      <div class="admit-row"><span>Enrollment ID / Roll No</span><b>${student.id}</b></div>
      <div class="admit-row"><span>Class &amp; Section</span><b>${student.cls} — ${student.sec}</b></div>
      <div class="admit-row"><span>Examination Centre</span><b>${examCentre}</b></div>
      
      <div class="admit-schedule-title">Examination Schedule Timings</div>
      <div class="admit-subject">
        ${State.exams.map(ex => `
          <div>
            <b>${ex.subject}</b>
            Date: ${ex.date}<br>
            Time: ${ex.slot}<br>
            Marks: ${ex.maxMarks} Weights
          </div>
        `).join('')}
      </div>
      
      <div class="admit-footer-note">
        Candidate must carry this printed verification pass. Smartwatches, cellphones, and custom computing notes are strictly barred inside the hall.
      </div>
    </div>
  `;
}

// Print Handler Hook
function printCard(printTargetId) {
  window.print();
  showToast('Printer Initialized', 'Document sent to the print spooler queue.', 'ti-printer');
}

// -------------------------------------------------------------
// MODULE 6: FEE COLLECTION PORTAL
// -------------------------------------------------------------
function renderFeeCollectionModule() {
  renderFeeCollectionLogsTable();
  if (State.auth.currentRole === 'student') {
    const student = State.auth.currentUser;
    const studentLogs = State.feeLog.filter(l => l.studentId === student.id);
    if (studentLogs.length > 0) {
      viewReceipt(studentLogs[studentLogs.length - 1].receipt);
    } else {
      renderStudentDuesCard(student);
    }
  }
}

function collectFee() {
  const studentSel = document.getElementById('fee-stu-sel');
  const feeType = document.getElementById('fee-type').value;
  const amtInput = document.getElementById('fee-amount');
  const feeMode = document.getElementById('fee-mode').value;
  const remarks = document.getElementById('fee-remarks').value.trim() || 'Installment Collection';

  const amount = parseFloat(amtInput.value);
  if (isNaN(amount) || amount <= 0) {
    showToast('Invalid Amount', 'Please provide a valid cash collection amount value.', 'ti-alert-circle');
    return;
  }

  const student = State.students.find(s => s.id === studentSel.value);
  if (!student) {
    showToast('Record Error', 'Select a valid student profile.', 'ti-alert-circle');
    return;
  }

  // Cap collection value to outstanding balance
  if (amount > student.balance) {
    showToast('Collection Excess', `Target outstanding balance is only ${formatCurrency(student.balance)}. Adjusted collection amount.`, 'ti-alert-triangle');
    amtInput.value = student.balance;
    return;
  }

  // Perform transaction adjustments
  student.balance -= amount;
  if (student.balance <= 0) {
    student.status = 'Paid';
  } else if (student.balance < student.fee) {
    student.status = 'Partial';
  } else {
    student.status = 'Pending';
  }

  const receiptNum = `RCP-${State.feeLog.length + 1041}`;
  const currentDateStr = new Date().toISOString().split('T')[0];

  const newLog = {
    receipt: receiptNum,
    studentId: student.id,
    name: student.name,
    type: feeType,
    amount: amount,
    mode: feeMode,
    date: currentDateStr,
    remarks: remarks
  };

  State.feeLog.push(newLog);

  // Appending General Ledger Cash Book Entry
  const ledgerVou = `VOU-${State.ledger.length + 1002}`;
  State.ledger.push({
    voucher: ledgerVou,
    date: currentDateStr,
    desc: `Tuition Installment Collected — ${student.name} (${student.id})`,
    credit: amount,
    debit: 0,
    balance: calculateActiveCashBalance() + amount
  });

  logActivity('Super Admin', 'Fee Collection', 'finance', `Collected fee ${receiptNum} of ${formatCurrency(amount)} from student ${student.id} (${student.name}) for ${feeType}`);
  saveState();

  // Draw Receipt Layout Card WYSIWYG
  document.getElementById('fee-receipt').innerHTML = `
    <div class="receipt">
      <div class="receipt-header">
        <div class="receipt-brand">
          <h3>${State.config.schoolName}</h3>
          <p>${State.config.address}</p>
          <p>Tel: ${State.config.phone}</p>
        </div>
        <div class="receipt-meta">
          <p>Receipt ID: <b>${receiptNum}</b></p>
          <p>Date: <b>${currentDateStr}</b></p>
          <p>Status: <b>PAID</b></p>
        </div>
      </div>
      
      <div class="receipt-bill-to">
        <p style="font-size:11px; color:var(--text-secondary); font-weight:600">PAID BY / CANDIDATE</p>
        <h4 style="margin-top:2px; font-family:var(--font-display); font-size:14px">${student.name} (${student.id})</h4>
        <p style="font-size:12px">Grade classroom: <b>${student.cls} — Section ${student.sec}</b></p>
        <p style="font-size:12px">Parent Contact Mobile: <b>+91 ${student.phone}</b></p>
      </div>
      
      <table class="receipt-table">
        <thead>
          <tr>
            <th>Billing Item Description</th>
            <th class="text-right">Amount Allocation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${feeType} - Term Installment (${remarks})</td>
            <td class="text-right">${formatCurrency(amount)}</td>
          </tr>
          <tr>
            <td style="color:var(--text-secondary)">Remaining Outstanding Ledger Balance:</td>
            <td class="text-right" style="color:var(--color-danger); font-weight:600">${formatCurrency(student.balance)}</td>
          </tr>
        </tbody>
      </table>
      
      <div class="receipt-total-row">
        <span>Aggregate Net Paid:</span>
        <span style="color:var(--accent)">${formatCurrency(amount)}</span>
      </div>
      
      <div class="receipt-footer">
        <p style="font-size:11px; margin-bottom:4px">Transaction Mode: <b>${feeMode}</b></p>
        <p style="font-style:italic">${State.config.receiptNote}</p>
        <button class="btn btn-sm" style="margin-top:12px" onclick="printCard('fee-receipt-box')">
          <i class="ti ti-printer"></i> Print Invoice Voucher
        </button>
      </div>
    </div>
  `;

  renderFeeCollectionLogsTable();
  showToast('Payment Completed', `${formatCurrency(amount)} logged for ${student.name}.`, 'ti-coin');

  amtInput.value = '';
  document.getElementById('fee-remarks').value = '';
}

function renderFeeCollectionLogsTable() {
  const tbody = document.getElementById('fee-log-body');
  if (!tbody) return;

  const currentRole = State.auth.currentRole;
  
  // Filter logs for logged-in students to ensure security
  let logs = State.feeLog;
  if (currentRole === 'student') {
    const student = State.auth.currentUser;
    logs = State.feeLog.filter(l => l.studentId === student.id);
  }

  logs = [...logs].reverse();

  if (logs.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="center-col" style="color:var(--text-tertiary)">No transactions reported.</td></tr>`;
    return;
  }

  tbody.innerHTML = logs.map(l => {
    // Delete action button only for Admin
    const deleteCell = currentRole === 'admin' ? 
      `<td><button class="btn btn-sm btn-danger" onclick="removeFeeLog('${l.receipt}'); event.stopPropagation();"><i class="ti ti-trash"></i> Delete</button></td>` : '';

    return `
      <tr onclick="viewReceipt('${l.receipt}')" style="cursor: pointer" title="Click to view receipt">
        <td><b>${l.receipt}</b></td>
        <td>${l.name} (${l.studentId})</td>
        <td>${l.type}</td>
        <td>${l.mode}</td>
        <td>${l.date}</td>
        <td><b>${formatCurrency(l.amount)}</b></td>
        ${deleteCell}
      </tr>
    `;
  }).join('');
}

function viewReceipt(receiptNum) {
  const log = State.feeLog.find(l => l.receipt === receiptNum);
  if (!log) return;
  const student = State.students.find(s => s.id === log.studentId);
  if (!student) return;

  document.getElementById('fee-receipt').innerHTML = `
    <div class="receipt">
      <div class="receipt-header">
        <div class="receipt-brand">
          <h3>${State.config.schoolName}</h3>
          <p>${State.config.address}</p>
          <p>Tel: ${State.config.phone}</p>
        </div>
        <div class="receipt-meta">
          <p>Receipt ID: <b>${log.receipt}</b></p>
          <p>Date: <b>${log.date}</b></p>
          <p>Status: <b>PAID</b></p>
        </div>
      </div>
      
      <div class="receipt-bill-to">
        <p style="font-size:11px; color:var(--text-secondary); font-weight:600">PAID BY / CANDIDATE</p>
        <h4 style="margin-top:2px; font-family:var(--font-display); font-size:14px">${student.name} (${student.id})</h4>
        <p style="font-size:12px">Grade classroom: <b>${student.cls} — Section ${student.sec}</b></p>
        <p style="font-size:12px">Parent Contact Mobile: <b>+91 ${student.phone}</b></p>
      </div>
      
      <table class="receipt-table">
        <thead>
          <tr>
            <th>Billing Item Description</th>
            <th class="text-right">Amount Allocation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${log.type} - Term Installment (${log.remarks})</td>
            <td class="text-right">${formatCurrency(log.amount)}</td>
          </tr>
          <tr>
            <td style="color:var(--text-secondary)">Remaining Outstanding Ledger Balance:</td>
            <td class="text-right" style="color:var(--color-danger); font-weight:600">${formatCurrency(student.balance)}</td>
          </tr>
        </tbody>
      </table>
      
      <div class="receipt-total-row">
        <span>Aggregate Net Paid:</span>
        <span style="color:var(--accent)">${formatCurrency(log.amount)}</span>
      </div>
      
      <div class="receipt-footer">
        <p style="font-size:11px; margin-bottom:4px">Transaction Mode: <b>${log.mode}</b></p>
        <p style="font-style:italic">${State.config.receiptNote}</p>
        <button class="btn btn-sm" style="margin-top:12px" onclick="printCard('fee-receipt-box')">
          <i class="ti ti-printer"></i> Print Invoice Voucher
        </button>
      </div>
    </div>
  `;
}

function renderStudentDuesCard(student) {
  document.getElementById('fee-receipt').innerHTML = `
    <div class="receipt">
      <div class="receipt-header">
        <div class="receipt-brand">
          <h3>${State.config.schoolName}</h3>
          <p>${State.config.address}</p>
          <p>Tel: ${State.config.phone}</p>
        </div>
        <div class="receipt-meta">
          <p>Reference: <b>FEE-${student.id}</b></p>
          <p>Status: <b style="color:${student.status === 'Paid' ? 'var(--color-success)' : 'var(--color-danger)'}">${student.status.toUpperCase()}</b></p>
        </div>
      </div>
      
      <div class="receipt-bill-to">
        <p style="font-size:11px; color:var(--text-secondary); font-weight:600">STUDENT DETAILS</p>
        <h4 style="margin-top:2px; font-family:var(--font-display); font-size:14px">${student.name} (${student.id})</h4>
        <p style="font-size:12px">Grade classroom: <b>${student.cls} — Section ${student.sec}</b></p>
        <p style="font-size:12px">Parent Contact Mobile: <b>+91 ${student.phone}</b></p>
      </div>
      
      <table class="receipt-table">
        <thead>
          <tr>
            <th>Fee Particulars</th>
            <th class="text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Annual Tuition Fee Particulars</td>
            <td class="text-right">${formatCurrency(student.fee)}</td>
          </tr>
          <tr>
            <td style="color:var(--text-secondary)">Total Paid To Date:</td>
            <td class="text-right" style="color:var(--color-success); font-weight:600">${formatCurrency(student.fee - student.balance)}</td>
          </tr>
          <tr style="border-top: 1px solid var(--border-secondary)">
            <td style="font-weight:600">Outstanding Dues Payable:</td>
            <td class="text-right" style="color:var(--color-danger); font-weight:700; font-size:15px">${formatCurrency(student.balance)}</td>
          </tr>
        </tbody>
      </table>
      
      <div class="receipt-footer" style="margin-top: 30px">
        <p style="font-style:italic">Please visit the school administration office or contact billing support to clear outstanding payments.</p>
        <button class="btn btn-sm" style="margin-top:12px" onclick="printCard('fee-receipt-box')">
          <i class="ti ti-printer"></i> Print Dues Statement
        </button>
      </div>
    </div>
  `;
}

function removeFeeLog(receiptNum) {
  if (!confirm(`Are you absolutely sure you want to delete transaction receipt ${receiptNum}? This reverses cash ledger values.`)) {
    return;
  }

  const logIndex = State.feeLog.findIndex(l => l.receipt === receiptNum);
  if (logIndex === -1) return;

  const log = State.feeLog[logIndex];
  
  // Revert student outstanding balance
  const student = State.students.find(s => s.id === log.studentId);
  if (student) {
    student.balance += log.amount;
    if (student.balance >= student.fee) {
      student.status = 'Pending';
    } else {
      student.status = 'Partial';
    }
  }

  // Remove corresponding ledger cash book row
  const ledgerIndex = State.ledger.findIndex(v => v.desc.includes(receiptNum) || (v.desc.includes(log.name) && v.credit === log.amount));
  if (ledgerIndex !== -1) {
    State.ledger.splice(ledgerIndex, 1);
  }

  State.feeLog.splice(logIndex, 1);
  logActivity('Super Admin', 'Fee Reversal', 'finance', `Cancelled fee receipt ${receiptNum} of ${formatCurrency(log.amount)} for student ${log.studentId} (${log.name})`);
  saveState();

  renderFeeCollectionLogsTable();
  showToast('Receipt Deleted', `Transaction voucher ${receiptNum} cancelled and reversed.`, 'ti-trash');
}

// -------------------------------------------------------------
// MODULE 7: ACCOUNTING LEDGER SYSTEM
// -------------------------------------------------------------
function renderLedgerSystem() {
  const balanceEl = document.getElementById('ledger-balance');
  const tbody = document.getElementById('ledger-body');
  if (!balanceEl || !tbody) return;

  let runningBal = 0;
  State.ledger.forEach((entry, idx) => {
    if (idx === 0) {
      runningBal = entry.credit - entry.debit;
    } else {
      runningBal = runningBal + entry.credit - entry.debit;
    }
    entry.balance = runningBal;
  });

  balanceEl.textContent = formatCurrency(runningBal);
  if (runningBal >= 0) {
    balanceEl.className = "balance-amt positive";
  } else {
    balanceEl.className = "balance-amt negative";
  }

  const list = [...State.ledger].reverse();
  tbody.innerHTML = list.map(item => `
    <tr>
      <td><b>${item.voucher}</b></td>
      <td>${item.date}</td>
      <td>${item.desc}</td>
      <td class="text-right text-success" style="color: var(--color-success)">${item.credit > 0 ? '+' + formatCurrency(item.credit) : '—'}</td>
      <td class="text-right text-danger" style="color: var(--color-danger)">${item.debit > 0 ? '-' + formatCurrency(item.debit) : '—'}</td>
      <td class="text-right"><b>${formatCurrency(item.balance)}</b></td>
      <td>
        <button class="btn btn-sm btn-danger" onclick="removeLedgerEntry('${item.voucher}')" title="Delete entry"><i class="ti ti-trash"></i> Delete</button>
      </td>
    </tr>
  `).join('');
}

function addLedgerEntry() {
  const descEl = document.getElementById('led-desc');
  const amtEl = document.getElementById('led-amount');
  const typeEl = document.getElementById('led-type');

  const desc = descEl.value.trim();
  const amount = parseFloat(amtEl.value);
  const type = typeEl.value;

  if (!desc || isNaN(amount) || amount <= 0) {
    showToast('Validation Error', 'Fill description and provide valid financial amount values.', 'ti-alert-circle');
    return;
  }

  const currentDateStr = new Date().toISOString().split('T')[0];
  const voucherNum = `VOU-${State.ledger.length + 1002}`;

  const isCredit = type === 'Credit';
  
  const newEntry = {
    voucher: voucherNum,
    date: currentDateStr,
    desc: desc,
    credit: isCredit ? amount : 0,
    debit: isCredit ? 0 : amount,
    balance: 0 
  };

  State.ledger.push(newEntry);
  logActivity('Super Admin', 'Ledger Row Appended', 'finance', `Voucher ${voucherNum}: ${desc} (+${newEntry.credit}/-${newEntry.debit})`);
  saveState();
  renderLedgerSystem();

  showToast('Entry Logged', `Ledger row ${voucherNum} appended successfully.`, 'ti-book');

  descEl.value = '';
  amtEl.value = '';
}

function removeLedgerEntry(voucherNum) {
  if (!confirm(`Are you absolutely sure you want to delete ledger transaction entry ${voucherNum}? Outstanding cash balances will adjust instantly.`)) {
    return;
  }

  const ledgerIndex = State.ledger.findIndex(v => v.voucher === voucherNum);
  if (ledgerIndex === -1) return;

  const entry = State.ledger[ledgerIndex];
  State.ledger.splice(ledgerIndex, 1);
  logActivity('Super Admin', 'Ledger Row Deleted', 'finance', `Deleted ledger entry voucher: ${voucherNum} (${entry.desc})`);
  saveState();
  renderLedgerSystem();

  showToast('Voucher Removed', `Ledger entry ${voucherNum} deleted from cash book records.`, 'ti-trash');
}

function calculateActiveCashBalance() {
  let running = 0;
  State.ledger.forEach(entry => {
    running = running + entry.credit - entry.debit;
  });
  return running;
}

// -------------------------------------------------------------
// MODULE 8: FEE AUDITS & REPORTS
// -------------------------------------------------------------
function renderFeeReport() {
  const totalStudents = State.students.length;
  const totalBilled = State.students.reduce((sum, s) => sum + s.fee, 0);
  const totalPending = State.students.reduce((sum, s) => sum + s.balance, 0);
  const totalCollected = totalBilled - totalPending;

  const collectionRatio = totalBilled > 0 ? Math.round((totalCollected / totalBilled) * 100) : 0;

  document.getElementById('rpt-collected').textContent = formatCurrency(totalCollected);
  document.getElementById('rpt-pending').textContent = formatCurrency(totalPending);
  document.getElementById('rpt-rate').textContent = `${collectionRatio}%`;
  document.getElementById('rpt-count').textContent = totalStudents;

  const tbody = document.getElementById('rpt-body');
  if (!tbody) return;

  // Group calculations by classroom grade
  const classesList = ['Class I', 'Class II', 'Class III', 'Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X', 'Class XI', 'Class XII'];
  const breakdown = classesList.map(grade => {
    const studentsInClass = State.students.filter(s => s.cls === grade);
    if (studentsInClass.length === 0) return null;

    const count = studentsInClass.length;
    const billed = studentsInClass.reduce((sum, s) => sum + s.fee, 0);
    const pending = studentsInClass.reduce((sum, s) => sum + s.balance, 0);
    const collected = billed - pending;
    const ratio = billed > 0 ? Math.round((collected / billed) * 100) : 0;

    return { grade, count, billed, collected, pending, ratio };
  }).filter(item => item !== null);

  if (breakdown.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="center-col" style="color:var(--text-tertiary)">No classroom files to compute.</td></tr>`;
    return;
  }

  tbody.innerHTML = breakdown.map(item => {
    let pillClass = 'pill-red';
    if (item.ratio >= 90) pillClass = 'pill-green';
    else if (item.ratio >= 50) pillClass = 'pill-amber';
    
    return `
      <tr>
        <td><b>${item.grade}</b></td>
        <td>${item.count} Accounts</td>
        <td class="text-right">${formatCurrency(item.billed)}</td>
        <td class="text-right" style="color: var(--color-success)">${formatCurrency(item.collected)}</td>
        <td class="text-right" style="color: var(--color-danger)">${formatCurrency(item.pending)}</td>
        <td>
          <span class="pill ${pillClass}">${item.ratio}% FULFILLED</span>
        </td>
      </tr>
    `;
  }).join('');
}

// -------------------------------------------------------------
// MODULE 9: STAFF PAYROLL SYSTEM (Double-Ledger Linked!)
// -------------------------------------------------------------
function populateStaffSelectors(selectId) {
  const sel = document.getElementById(selectId);
  if (!sel) return;

  const currentVal = sel.value;
  sel.innerHTML = State.staff.map(st => `
    <option value="${st.id}">${st.id} — ${st.name} (${st.role})</option>
  `).join('');

  if (currentVal && Array.from(sel.options).some(o => o.value === currentVal)) {
    sel.value = currentVal;
  }
}

function loadStaffPayrollForm() {
  const staffId = document.getElementById('payroll-staff-sel').value;
  if (!staffId) return;

  let config = State.payrollConfig[staffId];
  if (!config) {
    config = { base: 35000, allowance: 3000, deductions: 0, status: 'Unpaid' };
    State.payrollConfig[staffId] = config;
  }

  document.getElementById('payroll-base').value = config.base;
  document.getElementById('payroll-allowance').value = config.allowance;
  document.getElementById('payroll-deduction').value = config.deductions;
}

function saveStaffPayrollConfig() {
  const staffId = document.getElementById('payroll-staff-sel').value;
  const base = parseFloat(document.getElementById('payroll-base').value) || 0;
  const allowance = parseFloat(document.getElementById('payroll-allowance').value) || 0;
  const deductions = parseFloat(document.getElementById('payroll-deduction').value) || 0;

  if (!staffId) return;

  State.payrollConfig[staffId] = {
    base,
    allowance,
    deductions,
    status: State.payrollConfig[staffId]?.status || 'Unpaid'
  };

  saveState();
  renderStaffPayroll();
  showToast('Salary Configured', 'Staff payroll parameter configs updated successfully.', 'ti-wallet');
}

function renderStaffPayroll() {
  const tbody = document.getElementById('payroll-body');
  if (!tbody) return;

  if (State.staff.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" class="center-col" style="color:var(--text-tertiary)">Staff registry empty.</td></tr>`;
    return;
  }

  tbody.innerHTML = State.staff.map(st => {
    let conf = State.payrollConfig[st.id];
    if (!conf) {
      conf = { base: 35000, allowance: 3000, deductions: 0, status: 'Unpaid' };
      State.payrollConfig[st.id] = conf;
    }

    // Dynamic Attendance Deduction: 1 Day Absent = 1 Day Pay Cut (Base Salary / 30)
    let absencesCount = 0;
    const dailySalary = conf.base / 30;
    
    // Count absences across marked staff attendance registers
    Object.values(State.staffAttendance).forEach(dayList => {
      const rec = dayList.find(r => r.id === st.id);
      if (rec && rec.status === 'Absent') {
        absencesCount++;
      }
    });

    const stats = getStaffAttendanceStats(st.id);
    const attendanceDeduct = Math.round(absencesCount * dailySalary);
    const netPayout = Math.max(conf.base + conf.allowance - attendanceDeduct - conf.deductions, 0);

    const statusPill = conf.status === 'Paid' ? 
      `<span class="pill pill-green">Paid Payout</span>` : 
      `<span class="pill pill-amber">Unpaid</span>`;

    const actionBtn = conf.status === 'Unpaid' ? 
      `<button class="btn btn-sm btn-primary" onclick="processPayrollPayout('${st.id}', ${netPayout})"><i class="ti ti-cash"></i> Process Pay</button>` : 
      `<button class="btn btn-sm" disabled style="opacity: 0.6; cursor: not-allowed;"><i class="ti ti-check"></i> Disbursed</button>`;

    return `
      <tr>
        <td><b>${st.id}</b></td>
        <td>${st.name} (${st.role})</td>
        <td class="text-right">${formatCurrency(conf.base)}</td>
        <td class="text-right" style="color: var(--color-success)">+${formatCurrency(conf.allowance)}</td>
        <td class="text-right" style="color: var(--color-danger)">
          -${formatCurrency(attendanceDeduct)}
          <br>
          <small style="color: var(--text-tertiary); font-size: 10px;">
            (${stats.present}P / ${stats.absent}A / ${stats.leave}L)
          </small>
        </td>
        <td class="text-right" style="color: var(--color-danger)">-${formatCurrency(conf.deductions)}</td>
        <td class="text-right" style="font-weight: 700; color: var(--accent)">${formatCurrency(netPayout)}</td>
        <td>${statusPill}</td>
        <td>${actionBtn}</td>
      </tr>
    `;
  }).join('');
}

function processPayrollPayout(staffId, netAmount) {
  const staff = State.staff.find(st => st.id === staffId);
  const conf = State.payrollConfig[staffId];
  if (!staff || !conf) return;

  if (!confirm(`Confirm salary payout disbursement of ${formatCurrency(netAmount)} to ${staff.name}? This will debit the active ledger balance immediately.`)) {
    return;
  }

  // Deduct from Ledger general Cash Balance
  const voucherNum = `VOU-${State.ledger.length + 1002}`;
  const currentDateStr = new Date().toISOString().split('T')[0];

  State.ledger.push({
    voucher: voucherNum,
    date: currentDateStr,
    desc: `Debit Staff Salary Payout Disbursed — ${staff.name} (${staff.id})`,
    credit: 0,
    debit: netAmount,
    balance: calculateActiveCashBalance() - netAmount
  });

  // Mark status paid
  conf.status = 'Paid';
  saveState();

  renderStaffPayroll();
  showToast('Salary Disbursed', `Payment details generated. Voucher ID: ${voucherNum}.`, 'ti-cash-banknote');
}

// -------------------------------------------------------------
// MODULE 10: SMS PORTAL & CONSOLE
// -------------------------------------------------------------
function updateSMSCreditsPreview() {
  const recipientTarget = document.getElementById('sms-to').value;
  const countSpan = document.getElementById('sms-credits');
  if (!countSpan) return;

  countSpan.textContent = State.config.smsCredits;
  handleSMSCharsCount();
}

function handleSMSCharsCount() {
  const body = document.getElementById('sms-body').value;
  const countSpan = document.getElementById('sms-char');
  if (!countSpan) return;

  const chars = body.length;
  const smsUnits = chars === 0 ? 0 : Math.ceil(chars / 160);
  countSpan.textContent = `${chars} / 160 characters (${smsUnits} SMS Unit)`;
}

function sendSMSBroadcast() {
  const target = document.getElementById('sms-to').value;
  const msgInput = document.getElementById('sms-body');
  const message = msgInput.value.trim();

  if (!message) {
    showToast('Validation Error', 'Provide SMS message content copy.', 'ti-alert-circle');
    return;
  }

  // Calculate targets sizes
  let recipientCount = 0;
  if (target.includes('All Parents')) {
    recipientCount = 247;
  } else if (target.includes('Defaulters')) {
    recipientCount = State.students.filter(s => s.balance > 0).length;
  } else if (target.includes('Class X')) {
    recipientCount = State.students.filter(s => s.cls === 'Class X').length;
  } else if (target.includes('Class XII')) {
    recipientCount = State.students.filter(s => s.cls === 'Class XII').length;
  } else {
    recipientCount = State.staff.length; 
  }

  if (State.config.smsCredits < recipientCount) {
    showToast('Limit Exceeded', `Insufficent SMS balance. Required: ${recipientCount} credits.`, 'ti-alert-octagon');
    return;
  }

  State.config.smsCredits -= recipientCount;
  
  const currentDateStr = new Date().toISOString().split('T')[0];
  const timeStr = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

  State.smsLog.push({
    to: `${target} (${recipientCount} Recipient${recipientCount !== 1 ? 's' : ''})`,
    msg: message,
    date: currentDateStr,
    time: timeStr,
    credits: recipientCount
  });

  saveState();
  renderSMSLogList();
  updateSMSCreditsPreview();

  showToast('Dispatched', `Cellular broadcast sent to ${recipientCount} lines.`, 'ti-message-share');
  msgInput.value = '';
  handleSMSCharsCount();
}

function renderSMSLogList() {
  const wrapper = document.getElementById('sms-log');
  if (!wrapper) return;

  const logs = [...State.smsLog].reverse();
  if (logs.length === 0) {
    wrapper.innerHTML = `<div class="empty-preview"><p>No outbound SMS log files recorded.</p></div>`;
    return;
  }

  wrapper.innerHTML = logs.map(l => `
    <div class="sms-log-card">
      <div class="to"><i class="ti ti-users-group"></i> Dispatched to: ${l.to}</div>
      <div class="msg">"${l.msg}"</div>
      <div class="footer">
        <span>Cost: <b>${l.credits} Credits</b></span>
        <span>${l.date} @ ${l.time}</span>
      </div>
    </div>
  `).join('');
}

// -------------------------------------------------------------
// MODULE 11: NOTICE BOARD BOARD Announcements
// -------------------------------------------------------------
function renderNoticeList() {
  const container = document.getElementById('notice-list');
  if (!container) return;

  const currentRole = State.auth.currentRole;
  const list = [...State.notices].reverse();
  if (list.length === 0) {
    container.innerHTML = `<div class="empty-preview"><p>No notice board postings generated.</p></div>`;
    return;
  }

  container.innerHTML = list.map((item, index) => {
    let pClass = 'normal';
    if (item.priority.includes('Urgent')) pClass = 'urgent';
    else if (item.priority.includes('Important')) pClass = 'important';

    const deleteBtn = (currentRole === 'admin' || currentRole === 'teacher') ? 
      `<button class="btn btn-sm btn-danger" style="position: absolute; right: 16px; bottom: 12px; font-size:10px; padding:3px 8px" onclick="removeNotice(${State.notices.length - 1 - index})"><i class="ti ti-trash"></i> Delete</button>` : '';

    return `
      <div class="notice-card" style="padding-bottom: 40px;">
        <div class="notice-title-row">
          <h4>${item.title}</h4>
          <span class="badge-priority ${pClass}">${item.priority.split(' ')[0]}</span>
        </div>
        <p>${item.body}</p>
        <div class="meta">
          <span>Author: <b>${item.by}</b></span>
          <span>Date: ${item.date}</span>
        </div>
        ${deleteBtn}
      </div>
    `;
  }).join('');
}

function postNoticeBoardBulletin() {
  const titleEl = document.getElementById('nt-title');
  const bodyEl = document.getElementById('nt-body');
  const priorityEl = document.getElementById('nt-priority');

  const title = titleEl.value.trim();
  const body = bodyEl.value.trim();
  const priority = priorityEl.value;

  if (!title || !body) {
    showToast('Validation Error', 'Fill notice board header title and body copy.', 'ti-alert-circle');
    return;
  }

  const currentDateStr = new Date().toISOString().split('T')[0];
  const user = State.auth.currentUser;

  State.notices.push({
    title,
    body,
    priority,
    date: currentDateStr,
    by: user.name || 'System Admin'
  });

  logActivity(user.name || 'System Admin', 'Notice Published', 'system', `Published campus bulletin announcement: ${title}`);
  saveState();
  renderNoticeList();

  showToast('Notice Published', 'Bulletin posted on the notice board.', 'ti-speakerphone');

  titleEl.value = '';
  bodyEl.value = '';
}

function removeNotice(realIndex) {
  const nt = State.notices[realIndex];
  if (!nt) return;
  
  if (!confirm('Are you absolutely sure you want to delete this bulletin notice?')) return;

  const actor = State.auth.currentUser ? State.auth.currentUser.name : 'System Admin';
  logActivity(actor, 'Notice Removed', 'system', `Removed campus bulletin notice: ${nt.title}`);
  State.notices.splice(realIndex, 1);
  saveState();
  renderNoticeList();
  showToast('Notice Deleted', 'Announcement bulletin removed.', 'ti-trash');
}

// -------------------------------------------------------------
// MODULE 12: PROSPECT ENQUIRY MODULE 
// -------------------------------------------------------------
function renderEnquiryRegister() {
  const tbody = document.getElementById('enq-body');
  if (!tbody) return;

  const enquiries = [...State.enquiries].reverse();
  if (enquiries.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="center-col" style="color:var(--text-tertiary)">Pipeline empty.</td></tr>`;
    return;
  }

  tbody.innerHTML = enquiries.map((eq, index) => {
    let statusClass = 'pill-amber';
    if (eq.status === 'Interested') statusClass = 'pill-blue';
    else if (eq.status === 'Closed') statusClass = 'pill-green';

    return `
      <tr>
        <td><b>${eq.name}</b></td>
        <td>${eq.cls}</td>
        <td>${eq.parent} (Ph: ${eq.phone})</td>
        <td>${eq.source}</td>
        <td>
          <span class="pill ${statusClass}">${eq.status}</span>
        </td>
        <td style="display: flex; gap: 6px;">
          <button class="btn btn-sm" onclick="advanceEnquiryStatus(${State.enquiries.length - 1 - index})" title="Update status">
            <i class="ti ti-arrows-right-left"></i> Progress
          </button>
          <button class="btn btn-sm btn-danger" onclick="removeEnquiry(${State.enquiries.length - 1 - index})" title="Delete lead"><i class="ti ti-trash"></i> Delete</button>
        </td>
      </tr>
    `;
  }).join('');
}

function addNewEnquiryRecord() {
  const nameEl = document.getElementById('enq-name');
  const classEl = document.getElementById('enq-class');
  const parentEl = document.getElementById('enq-parent');
  const phoneEl = document.getElementById('enq-phone');
  const sourceEl = document.getElementById('enq-source');

  const name = nameEl.value.trim();
  const cls = classEl.value;
  const parent = parentEl.value.trim();
  const phone = phoneEl.value.trim();
  const source = sourceEl.value;

  if (!name || !parent || !phone) {
    showToast('Validation Error', 'Satisfy all mandatory enquiry fields.', 'ti-alert-circle');
    return;
  }

  State.enquiries.push({
    name,
    cls,
    parent,
    phone,
    source,
    status: 'Interested'
  });

  saveState();
  renderEnquiryRegister();

  showToast('Enquiry Appended', `Logged prospect lead pipeline record for ${name}.`, 'ti-address-book');

  nameEl.value = '';
  parentEl.value = '';
  phoneEl.value = '';
}

function advanceEnquiryStatus(realIndex) {
  const lead = State.enquiries[realIndex];
  if (!lead) return;

  const currentStatus = lead.status;
  if (currentStatus === 'Interested') {
    lead.status = 'Follow-Up';
  } else if (currentStatus === 'Follow-Up') {
    lead.status = 'Closed';
  } else {
    lead.status = 'Interested';
  }

  saveState();
  renderEnquiryRegister();
  showToast('Pipeline Advanced', `Status of ${lead.name} modified to ${lead.status}.`, 'ti-arrows-double-swallow-right');
}

function removeEnquiry(realIndex) {
  if (!confirm('Are you sure you want to delete this lead enquiry?')) return;

  State.enquiries.splice(realIndex, 1);
  saveState();
  renderEnquiryRegister();
  showToast('Enquiry Deleted', 'Lead prospect removed from CRM pipelines.', 'ti-trash');
}
// -------------------------------------------------------------
// ATTENDANCE STATS CALCULATION UTILITIES
// -------------------------------------------------------------
function getStudentAttendanceStats(studentId) {
  let present = 0;
  let absent = 0;
  let leave = 0;

  Object.keys(State.attendance).forEach(key => {
    const records = State.attendance[key];
    if (Array.isArray(records)) {
      const rec = records.find(r => r.id === studentId);
      if (rec) {
        if (rec.status === 'Present') present++;
        else if (rec.status === 'Absent') absent++;
        else if (rec.status === 'Leave') leave++;
      }
    }
  });

  return {
    present,
    absent,
    leave,
    total: present + absent + leave
  };
}

function getStaffAttendanceStats(staffId) {
  let present = 0;
  let absent = 0;
  let leave = 0;

  Object.keys(State.staffAttendance).forEach(dateStr => {
    const records = State.staffAttendance[dateStr];
    if (Array.isArray(records)) {
      const rec = records.find(r => r.id === staffId);
      if (rec) {
        if (rec.status === 'Present') present++;
        else if (rec.status === 'Absent') absent++;
        else if (rec.status === 'Leave') leave++;
      }
    }
  });

  return {
    present,
    absent,
    leave,
    total: present + absent + leave
  };
}

// -------------------------------------------------------------
// MODULE 13: DAILY STUDENT ATTENDANCE REGISTER (Locked to Student ID for Student logins!)
// -------------------------------------------------------------
function loadAttendanceRegister() {
  const gradeSelect = document.getElementById('att-class');
  const dateInput = document.getElementById('att-date');
  const tbody = document.getElementById('att-body');
  const subtitleEl = document.getElementById('att-subtitle');
  if (!tbody || !gradeSelect || !dateInput) return;

  const currentRole = State.auth.currentRole;

  // CUSTOMIZE ATTENDANCE VIEW FOR LOGGED-IN STUDENTS (Locked, Private personal audits logs!)
  if (currentRole === 'student') {
    const student = State.auth.currentUser;
    
    // Hide controls and update headers
    document.getElementById('student-att-controls-wrapper').style.display = 'none';
    subtitleEl.innerHTML = `<i class="ti ti-id"></i> Private Attendance Logs for <b>${student.name} (${student.id})</b>`;

    // Render Stats Summary Cards
    const stats = getStudentAttendanceStats(student.id);
    const statsContainer = document.getElementById('student-att-stats-summary');
    if (statsContainer) {
      statsContainer.style.display = 'grid';
      statsContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(180px, 1fr))';
      statsContainer.style.gap = '16px';
      statsContainer.style.padding = '0 0 16px';
      statsContainer.innerHTML = `
        <div class="stat-card" style="padding: 14px 16px; background: rgba(99, 102, 241, 0.04); border: 1px solid rgba(99, 102, 241, 0.12); border-radius: var(--border-radius-md);">
          <div style="font-size: 10px; font-weight:600; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.5px;">Working Days</div>
          <div style="font-size: 22px; font-weight: 700; color: var(--accent); margin-top: 4px;">${stats.total} <span style="font-size: 11px; font-weight:500;">Days</span></div>
        </div>
        <div class="stat-card" style="padding: 14px 16px; background: rgba(16, 185, 129, 0.04); border: 1px solid rgba(16, 185, 129, 0.12); border-radius: var(--border-radius-md);">
          <div style="font-size: 10px; font-weight:600; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.5px;">Days Attended</div>
          <div style="font-size: 22px; font-weight: 700; color: var(--color-success); margin-top: 4px;">${stats.present} <span style="font-size: 11px; font-weight:500; color:var(--text-secondary);">(${stats.total > 0 ? Math.round(stats.present / stats.total * 100) : 0}%)</span></div>
        </div>
        <div class="stat-card" style="padding: 14px 16px; background: rgba(245, 158, 11, 0.04); border: 1px solid rgba(245, 158, 11, 0.12); border-radius: var(--border-radius-md);">
          <div style="font-size: 10px; font-weight:600; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.5px;">Leaves / Holidays</div>
          <div style="font-size: 22px; font-weight: 700; color: var(--color-warning); margin-top: 4px;">${stats.leave} <span style="font-size: 11px; font-weight:500;">Days</span></div>
        </div>
        <div class="stat-card" style="padding: 14px 16px; background: rgba(239, 68, 68, 0.04); border: 1px solid rgba(239, 68, 68, 0.12); border-radius: var(--border-radius-md);">
          <div style="font-size: 10px; font-weight:600; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.5px;">Days Absent</div>
          <div style="font-size: 22px; font-weight: 700; color: var(--color-danger); margin-top: 4px;">${stats.absent} <span style="font-size: 11px; font-weight:500;">Days</span></div>
        </div>
      `;
    }

    // Rewrite table headers
    const headerRow = document.getElementById('student-att-table-header');
    headerRow.innerHTML = `
      <th>Academic Date</th>
      <th>Class Grade Room</th>
      <th class="center-col">Present Status</th>
    `;

    // Find and compile all dates where student attendance was logged
    let studentAttLogs = [];
    Object.keys(State.attendance).forEach(key => {
      // Key format: "Class X_2026-05-24"
      const [clsName, loggedDate] = key.split('_');
      const dayList = State.attendance[key];
      const rec = dayList.find(r => r.id === student.id);
      if (rec) {
        studentAttLogs.push({ date: loggedDate, cls: clsName, status: rec.status });
      }
    });

    // Sort logs reverse chronologically
    studentAttLogs.reverse();

    if (studentAttLogs.length === 0) {
      tbody.innerHTML = `<tr><td colspan="3" class="center-col" style="color:var(--text-tertiary)">No attendance logs recorded for your profile yet.</td></tr>`;
      return;
    }

    tbody.innerHTML = studentAttLogs.map(log => {
      let statPill = 'pill-green';
      if (log.status === 'Absent') statPill = 'pill-red';
      else if (log.status === 'Leave') statPill = 'pill-amber';

      return `
        <tr>
          <td><b>${log.date}</b></td>
          <td>${log.cls}</td>
          <td class="center-col">
            <span class="pill ${statPill}">${log.status}</span>
          </td>
        </tr>
      `;
    }).join('');
    return;
  }

  // Restore defaults for Admin / Teachers
  document.getElementById('student-att-controls-wrapper').style.display = 'flex';
  subtitleEl.textContent = "Select academic parameters to mark classroom attendances";
  document.getElementById('student-att-table-header').innerHTML = `
    <th>Roll ID</th>
    <th>Student Name</th>
    <th class="center-col">Present</th>
    <th class="center-col">Absent</th>
    <th class="center-col">On Approved Leave</th>
  `;

  if (currentRole === 'teacher') {
    const activeTeacher = State.auth.currentUser;
    if (activeTeacher && activeTeacher.assignedClass) {
      let exists = Array.from(gradeSelect.options).some(opt => opt.value === activeTeacher.assignedClass);
      if (!exists) {
        const opt = document.createElement('option');
        opt.value = activeTeacher.assignedClass;
        opt.textContent = activeTeacher.assignedClass;
        gradeSelect.appendChild(opt);
      }
      gradeSelect.value = activeTeacher.assignedClass;
      gradeSelect.disabled = true;
    }
  } else {
    gradeSelect.disabled = false;
  }

  const grade = gradeSelect.value;
  const dateStr = dateInput.value;
  const listKey = `${grade}_${dateStr}`;
  let records = State.attendance[listKey];

  const statsContainer = document.getElementById('student-att-stats-summary');
  const studentsInClass = State.students.filter(s => s.cls === grade);
  if (studentsInClass.length === 0) {
    if (statsContainer) statsContainer.style.display = 'none';
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="center-col" style="color:var(--text-tertiary); padding: 32px 0;">
          No students registered in ${grade}.
        </td>
      </tr>
    `;
    return;
  }

  if (!records) {
    records = studentsInClass.map(s => ({
      id: s.id,
      name: s.name,
      status: 'Present'
    }));
    State.attendance[listKey] = records;
  }

  // Render Daily Class Stats Summary Cards
  if (statsContainer) {
    const totalStudents = records.length;
    const presentCount = records.filter(r => r.status === 'Present').length;
    const absentCount = records.filter(r => r.status === 'Absent').length;
    const leaveCount = records.filter(r => r.status === 'Leave').length;

    statsContainer.style.display = 'grid';
    statsContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(180px, 1fr))';
    statsContainer.style.gap = '16px';
    statsContainer.style.padding = '0 0 16px';
    statsContainer.innerHTML = `
      <div class="stat-card" style="padding: 14px 16px; background: rgba(99, 102, 241, 0.04); border: 1px solid rgba(99, 102, 241, 0.12); border-radius: var(--border-radius-md);">
        <div style="font-size: 10px; font-weight:600; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.5px;">Students in Roster</div>
        <div style="font-size: 22px; font-weight: 700; color: var(--accent); margin-top: 4px;">${totalStudents} <span style="font-size: 11px; font-weight:500;">Students</span></div>
      </div>
      <div class="stat-card" style="padding: 14px 16px; background: rgba(16, 185, 129, 0.04); border: 1px solid rgba(16, 185, 129, 0.12); border-radius: var(--border-radius-md);">
        <div style="font-size: 10px; font-weight:600; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.5px;">Present Today</div>
        <div style="font-size: 22px; font-weight: 700; color: var(--color-success); margin-top: 4px;">${presentCount} <span style="font-size: 11px; font-weight:500; color:var(--text-secondary);">(${totalStudents > 0 ? Math.round(presentCount / totalStudents * 100) : 0}%)</span></div>
      </div>
      <div class="stat-card" style="padding: 14px 16px; background: rgba(245, 158, 11, 0.04); border: 1px solid rgba(245, 158, 11, 0.12); border-radius: var(--border-radius-md);">
        <div style="font-size: 10px; font-weight:600; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.5px;">Approved Leaves</div>
        <div style="font-size: 22px; font-weight: 700; color: var(--color-warning); margin-top: 4px;">${leaveCount} <span style="font-size: 11px; font-weight:500;">Students</span></div>
      </div>
      <div class="stat-card" style="padding: 14px 16px; background: rgba(239, 68, 68, 0.04); border: 1px solid rgba(239, 68, 68, 0.12); border-radius: var(--border-radius-md);">
        <div style="font-size: 10px; font-weight:600; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.5px;">Absent Today</div>
        <div style="font-size: 22px; font-weight: 700; color: var(--color-danger); margin-top: 4px;">${absentCount} <span style="font-size: 11px; font-weight:500;">Students</span></div>
      </div>
    `;
  }

  tbody.innerHTML = records.map((rec, index) => {
    const stats = getStudentAttendanceStats(rec.id);
    return `
      <tr>
        <td><b>${rec.id}</b></td>
        <td>
          <b>${rec.name}</b>
          <small style="color:var(--text-secondary); display:block; margin-top:2px;">
            Cumulative: <span style="color:var(--color-success)">${stats.present} Present</span> | 
            <span style="color:var(--color-danger)">${stats.absent} Absent</span> | 
            <span style="color:var(--color-warning)">${stats.leave} Leave</span> (Total: ${stats.total} days)
          </small>
        </td>
        <td class="center-col">
          <input type="radio" name="att_${rec.id}" value="Present" ${rec.status === 'Present' ? 'checked' : ''} onchange="updateAttendanceRecord('${listKey}', ${index}, 'Present')" style="width:16px; height:16px; cursor:pointer;" />
        </td>
        <td class="center-col">
          <input type="radio" name="att_${rec.id}" value="Absent" ${rec.status === 'Absent' ? 'checked' : ''} onchange="updateAttendanceRecord('${listKey}', ${index}, 'Absent')" style="width:16px; height:16px; cursor:pointer;" />
        </td>
        <td class="center-col">
          <input type="radio" name="att_${rec.id}" value="Leave" ${rec.status === 'Leave' ? 'checked' : ''} onchange="updateAttendanceRecord('${listKey}', ${index}, 'Leave')" style="width:16px; height:16px; cursor:pointer;" />
        </td>
      </tr>
    `;
  }).join('');
}

function updateAttendanceRecord(listKey, studentIndex, newStatus) {
  const records = State.attendance[listKey];
  if (records && records[studentIndex]) {
    records[studentIndex].status = newStatus;
    
    // Dynamic stats card updates
    const statsContainer = document.getElementById('student-att-stats-summary');
    if (statsContainer && statsContainer.style.display !== 'none') {
      const totalStudents = records.length;
      const presentCount = records.filter(r => r.status === 'Present').length;
      const absentCount = records.filter(r => r.status === 'Absent').length;
      const leaveCount = records.filter(r => r.status === 'Leave').length;

      statsContainer.innerHTML = `
        <div class="stat-card" style="padding: 14px 16px; background: rgba(99, 102, 241, 0.04); border: 1px solid rgba(99, 102, 241, 0.12); border-radius: var(--border-radius-md);">
          <div style="font-size: 10px; font-weight:600; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.5px;">Students in Roster</div>
          <div style="font-size: 22px; font-weight: 700; color: var(--accent); margin-top: 4px;">${totalStudents} <span style="font-size: 11px; font-weight:500;">Students</span></div>
        </div>
        <div class="stat-card" style="padding: 14px 16px; background: rgba(16, 185, 129, 0.04); border: 1px solid rgba(16, 185, 129, 0.12); border-radius: var(--border-radius-md);">
          <div style="font-size: 10px; font-weight:600; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.5px;">Present Today</div>
          <div style="font-size: 22px; font-weight: 700; color: var(--color-success); margin-top: 4px;">${presentCount} <span style="font-size: 11px; font-weight:500; color:var(--text-secondary);">(${totalStudents > 0 ? Math.round(presentCount / totalStudents * 100) : 0}%)</span></div>
        </div>
        <div class="stat-card" style="padding: 14px 16px; background: rgba(245, 158, 11, 0.04); border: 1px solid rgba(245, 158, 11, 0.12); border-radius: var(--border-radius-md);">
          <div style="font-size: 10px; font-weight:600; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.5px;">Approved Leaves</div>
          <div style="font-size: 22px; font-weight: 700; color: var(--color-warning); margin-top: 4px;">${leaveCount} <span style="font-size: 11px; font-weight:500;">Students</span></div>
        </div>
        <div class="stat-card" style="padding: 14px 16px; background: rgba(239, 68, 68, 0.04); border: 1px solid rgba(239, 68, 68, 0.12); border-radius: var(--border-radius-md);">
          <div style="font-size: 10px; font-weight:600; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.5px;">Absent Today</div>
          <div style="font-size: 22px; font-weight: 700; color: var(--color-danger); margin-top: 4px;">${absentCount} <span style="font-size: 11px; font-weight:500;">Students</span></div>
        </div>
      `;
    }
  }
}

function saveAttendanceRegister() {
  saveState();

  const actor = State.auth.currentUser ? State.auth.currentUser.name : 'System Admin';
  const gradeSelect = document.getElementById('att-class');
  const dateInput = document.getElementById('att-date');
  const grade = gradeSelect ? gradeSelect.value : 'Class X';
  const dateStr = dateInput ? dateInput.value : '';

  logActivity(actor, 'Attendance Submitted', 'academic', `Committed student attendance register for ${grade} on date ${dateStr}`);

  showToast('Attendance Saved', 'Daily classroom attendance register saved.', 'ti-circle-check-filled');
}

// -------------------------------------------------------------
// MODULE 14: DAILY STAFF FACULTY ATTENDANCE
// -------------------------------------------------------------
function loadStaffAttendanceRegister() {
  const dateStr = document.getElementById('staff-att-date').value;
  const tbody = document.getElementById('staff-att-body');
  if (!tbody || !dateStr) return;

  let records = State.staffAttendance[dateStr];

  if (State.staff.length === 0) {
    const statsContainer = document.getElementById('staff-att-stats-summary');
    if (statsContainer) statsContainer.style.display = 'none';
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="center-col" style="color:var(--text-tertiary); padding: 32px 0;">
          Staff registry database is currently empty.
        </td>
      </tr>
    `;
    return;
  }

  if (!records) {
    records = State.staff.map(st => ({
      id: st.id,
      name: st.name,
      role: st.role,
      status: 'Present'
    }));
    State.staffAttendance[dateStr] = records;
  }

  // Render Daily Staff Stats Summary Cards
  const statsContainer = document.getElementById('staff-att-stats-summary');
  if (statsContainer) {
    const totalStaff = records.length;
    const presentCount = records.filter(r => r.status === 'Present').length;
    const absentCount = records.filter(r => r.status === 'Absent').length;
    const leaveCount = records.filter(r => r.status === 'Leave').length;

    statsContainer.style.display = 'grid';
    statsContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(180px, 1fr))';
    statsContainer.style.gap = '16px';
    statsContainer.style.padding = '0 0 16px';
    statsContainer.innerHTML = `
      <div class="stat-card" style="padding: 14px 16px; background: rgba(99, 102, 241, 0.04); border: 1px solid rgba(99, 102, 241, 0.12); border-radius: var(--border-radius-md);">
        <div style="font-size: 10px; font-weight:600; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.5px;">Total Employees</div>
        <div style="font-size: 22px; font-weight: 700; color: var(--accent); margin-top: 4px;">${totalStaff} <span style="font-size: 11px; font-weight:500;">Staff</span></div>
      </div>
      <div class="stat-card" style="padding: 14px 16px; background: rgba(16, 185, 129, 0.04); border: 1px solid rgba(16, 185, 129, 0.12); border-radius: var(--border-radius-md);">
        <div style="font-size: 10px; font-weight:600; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.5px;">Present Today</div>
        <div style="font-size: 22px; font-weight: 700; color: var(--color-success); margin-top: 4px;">${presentCount} <span style="font-size: 11px; font-weight:500; color:var(--text-secondary);">(${totalStaff > 0 ? Math.round(presentCount / totalStaff * 100) : 0}%)</span></div>
      </div>
      <div class="stat-card" style="padding: 14px 16px; background: rgba(245, 158, 11, 0.04); border: 1px solid rgba(245, 158, 11, 0.12); border-radius: var(--border-radius-md);">
        <div style="font-size: 10px; font-weight:600; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.5px;">On Approved Leave</div>
        <div style="font-size: 22px; font-weight: 700; color: var(--color-warning); margin-top: 4px;">${leaveCount} <span style="font-size: 11px; font-weight:500;">Staff</span></div>
      </div>
      <div class="stat-card" style="padding: 14px 16px; background: rgba(239, 68, 68, 0.04); border: 1px solid rgba(239, 68, 68, 0.12); border-radius: var(--border-radius-md);">
        <div style="font-size: 10px; font-weight:600; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.5px;">Absent / Off-duty</div>
        <div style="font-size: 22px; font-weight: 700; color: var(--color-danger); margin-top: 4px;">${absentCount} <span style="font-size: 11px; font-weight:500;">Staff</span></div>
      </div>
    `;
  }

  tbody.innerHTML = records.map((rec, index) => {
    const stats = getStaffAttendanceStats(rec.id);
    return `
      <tr>
        <td><b>${rec.id}</b></td>
        <td>
          <b>${rec.name}</b>
          <small style="color:var(--text-secondary); display:block; margin-top:2px;">
            Cumulative: <span style="color:var(--color-success)">${stats.present} Present</span> | 
            <span style="color:var(--color-danger)">${stats.absent} Absent</span> | 
            <span style="color:var(--color-warning)">${stats.leave} Leave</span> (Total: ${stats.total} days)
          </small>
        </td>
        <td><span class="pill pill-blue">${rec.role}</span></td>
        <td class="center-col">
          <input type="radio" name="staff_att_${rec.id}" value="Present" ${rec.status === 'Present' ? 'checked' : ''} onchange="updateStaffAttendanceRecord('${dateStr}', ${index}, 'Present')" style="width:16px; height:16px; cursor:pointer;" />
        </td>
        <td class="center-col">
          <input type="radio" name="staff_att_${rec.id}" value="Absent" ${rec.status === 'Absent' ? 'checked' : ''} onchange="updateStaffAttendanceRecord('${dateStr}', ${index}, 'Absent')" style="width:16px; height:16px; cursor:pointer;" />
        </td>
        <td class="center-col">
          <input type="radio" name="staff_att_${rec.id}" value="Leave" ${rec.status === 'Leave' ? 'checked' : ''} onchange="updateStaffAttendanceRecord('${dateStr}', ${index}, 'Leave')" style="width:16px; height:16px; cursor:pointer;" />
        </td>
      </tr>
    `;
  }).join('');
}

function updateStaffAttendanceRecord(dateStr, staffIndex, newStatus) {
  const records = State.staffAttendance[dateStr];
  if (records && records[staffIndex]) {
    records[staffIndex].status = newStatus;
    
    // Dynamic stats card updates
    const statsContainer = document.getElementById('staff-att-stats-summary');
    if (statsContainer && statsContainer.style.display !== 'none') {
      const totalStaff = records.length;
      const presentCount = records.filter(r => r.status === 'Present').length;
      const absentCount = records.filter(r => r.status === 'Absent').length;
      const leaveCount = records.filter(r => r.status === 'Leave').length;

      statsContainer.innerHTML = `
        <div class="stat-card" style="padding: 14px 16px; background: rgba(99, 102, 241, 0.04); border: 1px solid rgba(99, 102, 241, 0.12); border-radius: var(--border-radius-md);">
          <div style="font-size: 10px; font-weight:600; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.5px;">Total Employees</div>
          <div style="font-size: 22px; font-weight: 700; color: var(--accent); margin-top: 4px;">${totalStaff} <span style="font-size: 11px; font-weight:500;">Staff</span></div>
        </div>
        <div class="stat-card" style="padding: 14px 16px; background: rgba(16, 185, 129, 0.04); border: 1px solid rgba(16, 185, 129, 0.12); border-radius: var(--border-radius-md);">
          <div style="font-size: 10px; font-weight:600; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.5px;">Present Today</div>
          <div style="font-size: 22px; font-weight: 700; color: var(--color-success); margin-top: 4px;">${presentCount} <span style="font-size: 11px; font-weight:500; color:var(--text-secondary);">(${totalStaff > 0 ? Math.round(presentCount / totalStaff * 100) : 0}%)</span></div>
        </div>
        <div class="stat-card" style="padding: 14px 16px; background: rgba(245, 158, 11, 0.04); border: 1px solid rgba(245, 158, 11, 0.12); border-radius: var(--border-radius-md);">
          <div style="font-size: 10px; font-weight:600; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.5px;">On Approved Leave</div>
          <div style="font-size: 22px; font-weight: 700; color: var(--color-warning); margin-top: 4px;">${leaveCount} <span style="font-size: 11px; font-weight:500;">Staff</span></div>
        </div>
        <div class="stat-card" style="padding: 14px 16px; background: rgba(239, 68, 68, 0.04); border: 1px solid rgba(239, 68, 68, 0.12); border-radius: var(--border-radius-md);">
          <div style="font-size: 10px; font-weight:600; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.5px;">Absent / Off-duty</div>
          <div style="font-size: 22px; font-weight: 700; color: var(--color-danger); margin-top: 4px;">${absentCount} <span style="font-size: 11px; font-weight:500;">Staff</span></div>
        </div>
      `;
    }
  }
}

function saveStaffAttendanceRegister() {
  saveState();

  const actor = State.auth.currentUser ? State.auth.currentUser.name : 'System Admin';
  const dateInput = document.getElementById('staff-att-date');
  const dateStr = dateInput ? dateInput.value : '';

  logActivity(actor, 'Staff Attendance Saved', 'security', `Committed employee attendance register for date ${dateStr}`);

  showToast('Attendance Marked', 'Staff faculty attendance registers committed to system database.', 'ti-checkbox');
  
  if (document.getElementById('tab-payroll').classList.contains('active')) {
    renderStaffPayroll();
  }
}

// -------------------------------------------------------------
// MODULE 15: WEEKLY CURRICULUM TIMETABLE
// -------------------------------------------------------------
function renderTimetableModule() {
  const tbody = document.getElementById('tt-body');
  if (!tbody) return;

  const list = State.timetable['Class X-A'];
  tbody.innerHTML = list.map(item => `
    <tr>
      <td><b>${item.time}</b></td>
      <td>
        ${item.mon.sub !== 'Recess' ? `<b>${item.mon.sub}</b><span>${item.mon.t}</span>` : `<i style="color:var(--text-tertiary)">Recess Interval</i>`}
      </td>
      <td>
        ${item.tue.sub !== 'Recess' ? `<b>${item.tue.sub}</b><span>${item.tue.t}</span>` : `<i style="color:var(--text-tertiary)">Recess Interval</i>`}
      </td>
      <td>
        ${item.wed.sub !== 'Recess' ? `<b>${item.wed.sub}</b><span>${item.wed.t}</span>` : `<i style="color:var(--text-tertiary)">Recess Interval</i>`}
      </td>
      <td>
        ${item.thu.sub !== 'Recess' ? `<b>${item.thu.sub}</b><span>${item.thu.t}</span>` : `<i style="color:var(--text-tertiary)">Recess Interval</i>`}
      </td>
      <td>
        ${item.fri.sub !== 'Recess' ? `<b>${item.fri.sub}</b><span>${item.fri.t}</span>` : `<i style="color:var(--text-tertiary)">Recess Interval</i>`}
      </td>
      <td>
        ${item.sat.sub !== 'Recess' ? `<b>${item.sat.sub}</b><span>${item.sat.t}</span>` : `<i style="color:var(--text-tertiary)">Recess Interval</i>`}
      </td>
    </tr>
  `).join('');
}

// -------------------------------------------------------------
// MODULE 16: EXAMINATIONS SCHEDULE CALENDAR
// -------------------------------------------------------------
function renderExamCalendar() {
  const tbody = document.getElementById('exam-body');
  if (!tbody) return;

  tbody.innerHTML = State.exams.map(ex => `
    <tr>
      <td><b>${ex.subject}</b></td>
      <td>${ex.date}</td>
      <td>
        <span class="pill ${ex.slot === 'Morning' ? 'pill-blue' : 'pill-amber'}">${ex.slot} Session</span>
      </td>
      <td>${ex.duration}</td>
      <td><b>${ex.maxMarks} Marks</b></td>
      <td>${ex.hall}</td>
    </tr>
  `).join('');
}

// -------------------------------------------------------------
// MODULE 17: MASTER STUDENT GRADEBOOK RESULTS
// -------------------------------------------------------------
function loadStudentResults() {
  const studentSel = document.getElementById('res-stu');
  const container = document.getElementById('results-table');
  if (!studentSel || !container) return;

  const student = State.students.find(s => s.id === studentSel.value);
  if (!student) {
    container.innerHTML = `<div class="empty-preview"><p>Create a student file first.</p></div>`;
    return;
  }

  const results = State.results[student.id];
  if (!results) {
    container.innerHTML = `
      <div class="empty-preview">
        <div class="empty-preview-content">
          <i class="ti ti-award"></i>
          <p>No graded evaluation credentials registered for <b>${student.name} (${student.id})</b> yet.</p>
        </div>
      </div>
    `;
    return;
  }

  let totalScore = 0;
  let totalMax = 0;
  
  results.subjects.forEach(s => {
    totalScore += s.marks;
    totalMax += s.max;
  });

  const percentage = Math.round((totalScore / totalMax) * 100);
  const cgpa = (percentage / 9.5).toFixed(1);
  const status = percentage >= 40 ? 'Passed' : 'Failed';

  container.innerHTML = `
    <div class="gradebook-header">
      <div class="gradebook-profile">
        <h3>${results.examName}</h3>
        <p>Candidate Profile: <b>${student.name} (${student.id})</b> — Class ${student.cls}</p>
      </div>
      <div class="gradebook-summary">
        <div class="summary-score">${percentage}<span>%</span></div>
        <div class="summary-lbl">Aggregate Score</div>
      </div>
    </div>
    
    <div class="gradebook-badge-container">
      <div class="g-badge">
        <span class="val">${totalScore} / ${totalMax}</span>
        <span class="lbl">Weighted Mark Weights</span>
      </div>
      <div class="g-badge">
        <span class="val">${cgpa}</span>
        <span class="lbl">Simulated CGPA Scale</span>
      </div>
      <div class="g-badge">
        <span class="val ${status === 'Passed' ? 'passed' : 'failed'}" style="color:${status === 'Passed' ? 'var(--color-success)' : 'var(--color-danger)'}">${status.toUpperCase()}</span>
        <span class="lbl">Academic Clearance Status</span>
      </div>
    </div>
    
    <div class="table-wrap">
      <table class="premium-table text-left">
        <thead>
          <tr>
            <th>Course Subject</th>
            <th>Maximum Marks</th>
            <th>Scored Marks</th>
            <th>Grade Performance Point</th>
          </tr>
        </thead>
        <tbody>
          ${results.subjects.map(s => {
            const coursePct = (s.marks / s.max) * 100;
            let performancePoint = 'A+';
            if (coursePct < 40) performancePoint = 'F (Fail)';
            else if (coursePct < 55) performancePoint = 'C';
            else if (coursePct < 70) performancePoint = 'B';
            else if (coursePct < 85) performancePoint = 'A';
            
            return `
              <tr>
                <td><b>${s.sub}</b></td>
                <td>${s.max} Weights</td>
                <td style="font-weight:700">${s.marks}</td>
                <td>
                  <span class="pill ${coursePct >= 40 ? 'pill-green' : 'pill-red'}">${performancePoint}</span>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
    
    <div style="display:flex; justify-content:flex-end; margin-top:20px">
      <button class="btn" onclick="printCard('results-table')">
        <i class="ti ti-printer"></i> Print Gradebook Report
      </button>
    </div>
  `;
}

// -------------------------------------------------------------
// MODULE 18: CIRCULATION & LIBRARY LOGS 
// -------------------------------------------------------------
function renderLibraryCirculation() {
  const tbody = document.getElementById('lib-body');
  if (!tbody) return;

  const currentRole = State.auth.currentRole;

  let circulationLogs = State.library;
  if (currentRole === 'student') {
    const student = State.auth.currentUser;
    circulationLogs = State.library.filter(lib => lib.issuedTo.includes(student.id));
  }

  if (circulationLogs.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="center-col" style="color:var(--text-tertiary)">No library logs issued.</td></tr>`;
    return;
  }

  tbody.innerHTML = circulationLogs.map(lib => {
    let statPill = 'pill-green';
    if (lib.status === 'Issued') statPill = 'pill-blue';
    else if (lib.status === 'Overdue') statPill = 'pill-red';

    const actionCell = (currentRole === 'admin' || currentRole === 'teacher') ? 
      `<td><button class="btn btn-sm btn-danger" onclick="removeLibraryBookLog('${lib.id}')"><i class="ti ti-trash"></i> Check-in</button></td>` : '';

    return `
      <tr>
        <td><b>${lib.id}</b></td>
        <td>${lib.title} <small style="color: var(--text-secondary)">by ${lib.author}</small></td>
        <td>${lib.issuedTo}</td>
        <td>${lib.due}</td>
        <td>
          <span class="pill ${statPill}">${lib.status}</span>
        </td>
        ${actionCell}
      </tr>
    `;
  }).join('');
}

function addLibraryBookLog() {
  const idEl = document.getElementById('lib-book-id');
  const titleEl = document.getElementById('lib-book-title');
  const authorEl = document.getElementById('lib-book-author');
  const classEl = document.getElementById('lib-book-class');
  const patronEl = document.getElementById('lib-book-patron');
  const dueEl = document.getElementById('lib-book-due');

  const id = idEl.value.trim().toUpperCase();
  const title = titleEl.value.trim();
  const author = authorEl.value.trim();
  const cls = classEl.value;
  const patron = patronEl.value.trim();
  const due = dueEl.value;

  if (!id || !title || !author || !patron || !due) {
    showToast('Validation Error', 'Fill all required book credentials form fields.', 'ti-alert-circle');
    return;
  }

  State.library.push({
    id,
    title,
    author,
    cls,
    issuedTo: patron,
    due,
    status: 'Issued'
  });

  saveState();
  renderLibraryCirculation();
  showToast('Book Logged', `Lended book catalog item ${title} to ${patron}.`, 'ti-books');

  idEl.value = '';
  titleEl.value = '';
  authorEl.value = '';
  patronEl.value = '';
  dueEl.value = '';
}

function removeLibraryBookLog(bookId) {
  const index = State.library.findIndex(lib => lib.id === bookId);
  if (index === -1) return;

  const item = State.library[index];
  if (!confirm(`Mark book checkout ${item.title} (${bookId}) returned/checked-in?`)) {
    return;
  }

  State.library.splice(index, 1);
  saveState();
  renderLibraryCirculation();
  showToast('Checked-in', `Book catalog item ${bookId} marked returned.`, 'ti-checkbox');
}

// -------------------------------------------------------------
// MODULE 19: TRANSIT & BUS ROUTES 
// -------------------------------------------------------------
function renderTransportDatabase() {
  const tbody = document.getElementById('trans-body');
  if (!tbody) return;

  const currentRole = State.auth.currentRole;

  tbody.innerHTML = State.transport.map(tr => {
    let statPill = 'pill-green';
    if (tr.status === 'Maintenance') statPill = 'pill-red';

    const actionCell = (currentRole === 'admin' || currentRole === 'teacher') ? 
      `<td><button class="btn btn-sm btn-danger" onclick="removeTransportRoute('${tr.route}')"><i class="ti ti-trash"></i> Delete</button></td>` : '';

    return `
      <tr>
        <td><b>${tr.route}</b></td>
        <td>${tr.driver}</td>
        <td>${tr.vehicle}</td>
        <td style="max-width:200px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${tr.stops}">${tr.stops}</td>
        <td>
          <span class="pill ${statPill}">${tr.status}</span>
        </td>
        ${actionCell}
      </tr>
    `;
  }).join('');
}

function addTransportRoute() {
  const nameEl = document.getElementById('trans-route-name');
  const driverEl = document.getElementById('trans-driver');
  const vehicleEl = document.getElementById('trans-vehicle');
  const stopsEl = document.getElementById('trans-stops');

  const route = nameEl.value.trim();
  const driver = driverEl.value.trim();
  const vehicle = vehicleEl.value.trim();
  const stops = stopsEl.value.trim();

  if (!route || !driver || !vehicle || !stops) {
    showToast('Validation Error', 'Fill all required transport parameters.', 'ti-alert-circle');
    return;
  }

  State.transport.push({
    route,
    driver,
    vehicle,
    stops,
    count: 0,
    status: 'Operational'
  });

  saveState();
  renderTransportDatabase();
  showToast('Route Appended', `Transit route ${route} registered.`, 'ti-bus');

  nameEl.value = '';
  driverEl.value = '';
  vehicleEl.value = '';
  stopsEl.value = '';
}

function removeTransportRoute(routeName) {
  const index = State.transport.findIndex(tr => tr.route === routeName);
  if (index === -1) return;

  if (!confirm(`Are you absolutely sure you want to delete transport route: ${routeName}?`)) {
    return;
  }

  State.transport.splice(index, 1);
  saveState();
  renderTransportDatabase();
  showToast('Route Deleted', `Transport route ${routeName} removed.`, 'ti-trash');
}

// -------------------------------------------------------------
// MODULE 20: STAFF FACULTY REGISTRY 
// -------------------------------------------------------------
function renderStaffRegistry() {
  const tbody = document.getElementById('staff-body');
  if (!tbody) return;

  tbody.innerHTML = State.staff.map(st => {
    const pw = State.staffPasswords[st.id] || 'teacher123';
    const accessStr = st.access ? st.access.join(', ') : 'Default Academic';
    const assignedClassStr = st.assignedClass ? `<span class="pill pill-green" style="font-size: 10px; padding: 2px 6px;">${st.assignedClass}</span>` : `<span class="pill pill-amber" style="font-size: 10px; padding: 2px 6px;">None</span>`;
    return `
      <tr>
        <td><b>${st.id}</b></td>
        <td>
          <div style="font-weight:600; color:var(--text-primary); display:flex; align-items:center; gap:8px">${st.name} ${assignedClassStr}</div>
          <small style="color:var(--text-tertiary); font-size:10px; display:block; max-width:200px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${accessStr}">${accessStr}</small>
        </td>
        <td><span class="pill pill-blue">${st.role}</span></td>
        <td>
          <input type="text" value="${pw}" style="width:110px; padding:4px 8px; font-size:11px" onchange="updateStaffPassword('${st.id}', this.value)" />
        </td>
        <td>${st.contact}</td>
        <td>
          <div style="display:flex; gap:6px">
            <button class="btn btn-sm" style="background-color: var(--accent-light); color: var(--accent);" onclick="editStaffRecord('${st.id}')" title="Edit permissions"><i class="ti ti-edit"></i> Edit</button>
            <button class="btn btn-sm btn-danger" onclick="removeStaffRecord('${st.id}')" title="Delete employee"><i class="ti ti-trash"></i> Delete</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

let editingStaffId = null;

function editStaffRecord(staffId) {
  const st = State.staff.find(x => x.id === staffId);
  if (!st) return;

  editingStaffId = staffId;
  
  // Set form header
  document.getElementById('staff-form-header').innerHTML = `<i class="ti ti-edit"></i> Edit Staff: ${st.name} (${st.id})`;
  
  // Fill inputs
  document.getElementById('staff-name').value = st.name;
  document.getElementById('staff-role').value = st.role;
  document.getElementById('staff-sub').value = st.sub;
  document.getElementById('staff-phone').value = st.contact;
  document.getElementById('staff-password').value = State.staffPasswords[st.id] || 'teacher123';
  document.getElementById('staff-assigned-class').value = st.assignedClass || '';
  
  const payroll = State.payrollConfig[st.id] || { base: 40000 };
  document.getElementById('staff-base-salary').value = payroll.base;

  // Set checkboxes
  const permsList = ['admission', 'directory', 'idcards', 'admit', 'fees', 'ledger', 'report', 'payroll', 'sms', 'notice', 'enquiry', 'attendance', 'staffattendance', 'timetable', 'exam', 'results', 'library', 'transport', 'staff', 'settings'];
  const access = st.access || ['directory', 'notice', 'attendance', 'timetable', 'exam', 'results', 'library', 'transport'];
  
  permsList.forEach(perm => {
    const box = document.getElementById(`staff-perm-${perm}`);
    if (box) {
      box.checked = access.includes(perm);
    }
  });

  // Change register button text
  const btn = document.getElementById('staff-submit-btn');
  btn.innerHTML = `<i class="ti ti-device-floppy"></i> Save Staff Changes`;
  
  // Scroll to form or show toast
  showToast('Edit Mode Enabled', `Loaded details for ${st.name}.`, 'ti-edit');
}

function addStaffRecord() {
  const nameEl = document.getElementById('staff-name');
  const roleEl = document.getElementById('staff-role');
  const subEl = document.getElementById('staff-sub');
  const phoneEl = document.getElementById('staff-phone');
  const pwEl = document.getElementById('staff-password');
  const salEl = document.getElementById('staff-base-salary');
  const classEl = document.getElementById('staff-assigned-class');

  const name = nameEl.value.trim();
  const role = roleEl.value.trim();
  const sub = subEl.value.trim() || 'N/A';
  const contact = phoneEl.value.trim();
  const password = pwEl.value.trim();
  const baseSalary = parseFloat(salEl.value) || 30000;
  const assignedClass = classEl.value;

  if (!name || !role || !contact || !password) {
    showToast('Validation Error', 'Fill name, role, contact, and password fields.', 'ti-alert-circle');
    return;
  }

  const permsList = ['admission', 'directory', 'idcards', 'admit', 'fees', 'ledger', 'report', 'payroll', 'sms', 'notice', 'enquiry', 'attendance', 'staffattendance', 'timetable', 'exam', 'results', 'library', 'transport', 'staff', 'settings'];
  const access = [];
  permsList.forEach(perm => {
    const box = document.getElementById(`staff-perm-${perm}`);
    if (box && box.checked) {
      access.push(perm);
    }
  });

  if (editingStaffId) {
    // Edit existing staff member
    const st = State.staff.find(x => x.id === editingStaffId);
    if (st) {
      st.name = name;
      st.role = role;
      st.sub = sub;
      st.contact = contact;
      st.access = access;
      st.assignedClass = assignedClass;
      
      State.staffPasswords[editingStaffId] = password;
      if (State.payrollConfig[editingStaffId]) {
        State.payrollConfig[editingStaffId].base = baseSalary;
      }
      
      logActivity('Super Admin', 'Staff Profile Update', 'security', `Modified details and permissions for faculty member ${editingStaffId} (${name})`);
      showToast('Staff Updated', `Changes committed for ${st.name}.`, 'ti-circle-check');
      
      // Reset form edit mode
      editingStaffId = null;
      document.getElementById('staff-form-header').innerHTML = `<i class="ti ti-briefcase"></i> Add Staff Officer`;
      document.getElementById('staff-submit-btn').innerHTML = `<i class="ti ti-circle-plus"></i> Register Faculty Record`;
    }
  } else {
    // Create new staff member
    const staffPrefix = 'TCH-';
    const nextNum = State.staff.length + 1;
    const staffId = `${staffPrefix}${String(nextNum).padStart(3, '0')}`;

    const newStaff = {
      id: staffId,
      name,
      role,
      sub,
      contact,
      status: 'On Duty',
      access: access,
      assignedClass: assignedClass
    };

    State.staff.push(newStaff);
    State.staffPasswords[staffId] = password;
    State.payrollConfig[staffId] = {
      base: baseSalary,
      allowance: 3000,
      deductions: 0,
      status: 'Unpaid'
    };

    logActivity('Super Admin', 'Staff Registered', 'security', `Created new faculty registry for ${name} (${staffId})`);
    showToast('Staff Registered', `Faculty profile for ${name} created. ID: ${staffId}`, 'ti-briefcase');
  }

  saveState();
  renderStaffRegistry();

  // Reset inputs
  nameEl.value = '';
  roleEl.value = '';
  subEl.value = '';
  phoneEl.value = '';
  pwEl.value = 'teacher123';
  salEl.value = '40000';
  classEl.value = 'Class X';
  
  // Clear checkboxes
  permsList.forEach(perm => {
    const box = document.getElementById(`staff-perm-${perm}`);
    if (box) {
      const defaultChecked = ['directory', 'notice', 'attendance', 'timetable', 'exam', 'results', 'library', 'transport'].includes(perm);
      box.checked = defaultChecked;
    }
  });
}

function removeStaffRecord(staffId) {
  const index = State.staff.findIndex(st => st.id === staffId);
  if (index === -1) return;

  const st = State.staff[index];
  if (!confirm(`Are you absolutely sure you want to delete staff member: ${st.name} (${staffId})? This deletes their payroll parameters.`)) {
    return;
  }

  State.staff.splice(index, 1);
  delete State.staffPasswords[staffId];
  delete State.payrollConfig[staffId];

  logActivity('Super Admin', 'Staff Member Removed', 'security', `Removed staff member ${st.name} (${staffId})`);
  saveState();
  renderStaffRegistry();
  showToast('Staff Deleted', `Faculty profile for ${st.name} removed.`, 'ti-trash');
}

function updateStaffPassword(staffId, newPassword) {
  if (!newPassword.trim()) {
    showToast('Empty Password', 'Password cannot be blank.', 'ti-alert-octagon');
    renderStaffRegistry();
    return;
  }
  State.staffPasswords[staffId] = newPassword.trim();
  logActivity('Super Admin', 'Staff Password Updated', 'security', `Updated credentials for staff member ${staffId}`);
  saveState();
  showToast('Password Updated', `Access credentials for ${staffId} updated successfully.`, 'ti-circle-key-filled');
}

// -------------------------------------------------------------
// MODULE 21: SYSTEM CORE CONFIGURATION & SETTINGS
// -------------------------------------------------------------
function renderSettingsValues() {
  document.getElementById('set-name').value = State.config.schoolName;
  document.getElementById('set-address').value = State.config.address;
  document.getElementById('set-phone').value = State.config.phone;
  document.getElementById('set-prefix').value = State.config.prefix;
  document.getElementById('set-currency').value = State.config.currency;
  document.getElementById('set-latefee').value = State.config.latefee;
  document.getElementById('set-receipt-note').value = State.config.receiptNote;
  
  applySettingsConfig();

  // Populate dynamic Faculty access checkboxes inside settings
  const permsList = ['directory', 'notice', 'attendance', 'timetable', 'exam', 'results', 'library', 'transport'];
  permsList.forEach(perm => {
    const box = document.getElementById(`perm-${perm}`);
    if (box) {
      box.checked = State.config.teacherAccess.includes(perm);
    }
  });
}

function applySettingsConfig() {
  const nameInput = document.getElementById('set-name');
  if (nameInput) {
    State.config.schoolName = nameInput.value.trim() || 'VBNS';
    State.config.address = document.getElementById('set-address').value.trim() || 'Address';
    State.config.phone = document.getElementById('set-phone').value.trim() || 'Phone';
    State.config.prefix = document.getElementById('set-prefix').value.trim() || 'SAC';
    State.config.currency = document.getElementById('set-currency').value;
    State.config.latefee = parseFloat(document.getElementById('set-latefee').value) || 0;
    State.config.receiptNote = document.getElementById('set-receipt-note').value.trim() || '';
  }

  const sbSchoolName = document.getElementById('sb-school-name');
  if (sbSchoolName) sbSchoolName.textContent = State.config.schoolName;
  
  const sbSchoolId = document.getElementById('sb-school-id-disp');
  if (sbSchoolId) sbSchoolId.textContent = `ID: ${State.config.prefix}-2024`;

  const currBadge = document.getElementById('curr-badge');
  if (currBadge) currBadge.textContent = `${State.config.currency} currency`;

  document.querySelectorAll('.curr-sym').forEach(el => {
    el.textContent = State.config.currency;
  });

  const prevName = document.getElementById('prev-name');
  if (prevName) {
    prevName.textContent = State.config.schoolName;
    document.getElementById('prev-address').textContent = State.config.address;
    document.getElementById('prev-phone').textContent = `Tel: ${State.config.phone}`;
    document.getElementById('prev-next-id').textContent = `${State.config.prefix}-${String(State.students.length + 1).padStart(3, '0')}`;
    document.getElementById('prev-curr').textContent = State.config.currency;
    document.getElementById('prev-latefee').textContent = `${State.config.latefee}%`;
    document.getElementById('prev-receipt-note').textContent = State.config.receiptNote;
  }
}

function saveSettingsConfig() {
  applySettingsConfig();
  logActivity('Super Admin', 'System Settings Saved', 'system', 'Modified global school organizational variables and currency options');
  saveState();
  showToast('Settings Configured', 'Global attributes committed to the active database.', 'ti-settings-filled');
}

// Dynamic Faculty access settings configurator save logic
function saveFacultyPermissions() {
  const permsList = ['directory', 'notice', 'attendance', 'timetable', 'exam', 'results', 'library', 'transport'];
  const teacherAccess = [];
  
  permsList.forEach(perm => {
    const box = document.getElementById(`perm-${perm}`);
    if (box && box.checked) {
      teacherAccess.push(perm);
    }
  });

  State.config.teacherAccess = teacherAccess;
  logActivity('Super Admin', 'Faculty Sidebar Permissions Saved', 'security', `Updated master dashboard clearance filters to: [${teacherAccess.join(', ')}]`);
  saveState();
  
  showToast('Access Permissions Saved', 'Faculty dashboard tab locks updated instantly.', 'ti-shield-lock');
  
  // Re-render sidebar/actions if logged-in role is affected
  if (State.auth.currentRole === 'teacher') {
    applySessionAccessLayout();
  }
}

// -------------------------------------------------------------
// CORE FINANCIAL CALCULATOR HELPERS
// -------------------------------------------------------------
function formatCurrency(amount) {
  const symbol = State.config.currency || '₹';
  return `${symbol}${amount.toLocaleString('en-IN')}`;
}

/* -------------------------------------------------------------
   VBNS educational CRM - NEW UPGRADES MODULES IMPLEMENTATIONS
   ------------------------------------------------------------- */

// Student profile picture uploader display updater
function updateSidebarAvatar() {
  const role = State.auth.currentRole;
  const user = State.auth.currentUser;
  const logo = document.getElementById('sb-brand-logo');
  const avatarWrap = document.getElementById('sb-student-avatar-wrapper');
  const avatarImg = document.getElementById('sb-student-avatar-img');

  if (!logo || !avatarWrap) return;

  if (role === 'student' && user) {
    logo.style.display = 'none';
    avatarWrap.style.display = 'block';

    const sRecord = State.students.find(s => s.id === user.id);
    if (sRecord && sRecord.avatar) {
      avatarImg.src = sRecord.avatar;
    } else {
      const initials = user.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
      avatarImg.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="%236366f1"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-family="sans-serif" font-weight="bold" font-size="14">${initials}</text></svg>`;
    }
  } else {
    logo.style.display = 'flex';
    avatarWrap.style.display = 'none';
  }
}

function triggerAvatarUpload() {
  if (State.auth.currentRole !== 'student') return;
  const fileInput = document.getElementById('student-avatar-file-input');
  if (fileInput) fileInput.click();
}

function uploadStudentAvatar(event) {
  const file = event.target.files[0];
  if (!file) return;

  if (file.size > 1024 * 1024) {
    showToast('File Too Large', 'Please select an image smaller than 1MB.', 'ti-alert-octagon');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const base64 = e.target.result;
    const student = State.auth.currentUser;
    
    const sRecord = State.students.find(s => s.id === student.id);
    if (sRecord) {
      sRecord.avatar = base64;
      student.avatar = base64;
      
      sessionStorage.setItem('apex_auth_user', JSON.stringify(student));
      
      saveState();
      updateSidebarAvatar();
      logActivity(student.name, 'Profile Picture', 'academic', `Updated profile picture avatar for student ${student.id}`);
      showToast('Profile Updated', 'Your profile picture has been successfully uploaded.', 'ti-camera');
    }
  };
  reader.readAsDataURL(file);
}

// Lock Dropdowns and apply Faculty Roster Isolation
function populateStudentSelectors(selectId) {
  const sel = document.getElementById(selectId);
  if (!sel) return;

  const currentRole = State.auth.currentRole;
  let students = State.students;

  if (currentRole === 'teacher') {
    const activeTeacher = State.auth.currentUser;
    if (activeTeacher && activeTeacher.assignedClass) {
      students = State.students.filter(s => s.cls === activeTeacher.assignedClass);
    }
  }

  const currentVal = sel.value;
  sel.innerHTML = students.map(s => `
    <option value="${s.id}">${s.id} — ${s.name} (${s.cls})</option>
  `).join('');

  if (currentVal && Array.from(sel.options).some(o => o.value === currentVal)) {
    sel.value = currentVal;
  }
}

// -------------------------------------------------------------
// DYNAMIC HOMEWORK BOARD MODULE
// -------------------------------------------------------------
function postHomeworkAssignment() {
  const classEl = document.getElementById('hw-class');
  const subjectEl = document.getElementById('hw-subject');
  const titleEl = document.getElementById('hw-title');
  const dueEl = document.getElementById('hw-due');
  const descEl = document.getElementById('hw-desc');

  const cls = classEl.value;
  const subject = subjectEl.value.trim();
  const title = titleEl.value.trim();
  const due = dueEl.value;
  const desc = descEl.value.trim();

  if (!subject || !title || !due || !desc) {
    showToast('Validation Error', 'Please satisfy all required fields.', 'ti-alert-circle');
    return;
  }

  const hwId = `HW-${String(State.homework.length + 1).padStart(3, '0')}`;
  const createdDate = new Date().toISOString().split('T')[0];
  const actor = State.auth.currentUser ? State.auth.currentUser.name : 'System Admin';

  const newHw = {
    id: hwId,
    cls,
    subject,
    title,
    dueDate: due,
    desc,
    createdDate,
    by: actor
  };

  State.homework.push(newHw);
  saveState();
  
  logActivity(actor, 'Homework Posted', 'academic', `Posted homework ${hwId} for ${cls} (${subject}: ${title})`);
  showToast('Homework Posted', `Homework assignment ${hwId} successfully published.`, 'ti-notebook');

  subjectEl.value = '';
  titleEl.value = '';
  dueEl.value = '';
  descEl.value = '';

  renderHomeworkBoard();
}

function renderHomeworkBoard() {
  const container = document.getElementById('homework-list');
  if (!container) return;

  const currentRole = State.auth.currentRole;
  const currentUser = State.auth.currentUser;

  let list = State.homework || [];

  if (currentRole === 'student') {
    list = list.filter(hw => hw.cls === currentUser.cls);
    
    const subtitle = document.getElementById('homework-list-subtitle');
    if (subtitle) {
      subtitle.innerHTML = `<i class="ti ti-id"></i> Private Homework Board for <b>${currentUser.name} (${currentUser.cls})</b>`;
    }
  } else {
    const subtitle = document.getElementById('homework-list-subtitle');
    if (subtitle) {
      subtitle.textContent = "Active classroom tasks and exercises";
    }
  }

  const sortedList = [...list].reverse();

  if (sortedList.length === 0) {
    container.innerHTML = `
      <div class="empty-preview" style="padding: 32px 0;">
        <i class="ti ti-notebook-off" style="font-size: 32px; display: block; margin-bottom: 8px; color: var(--text-tertiary);"></i>
        <p>No active homework assignments recorded.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = sortedList.map(hw => {
    const deleteBtn = (currentRole === 'admin' || currentRole === 'teacher') ?
      `<button class="btn btn-sm btn-danger" style="padding: 2px 6px; font-size:10px;" onclick="removeHomeworkAssignment('${hw.id}')"><i class="ti ti-trash"></i> Delete</button>` : '';

    return `
      <div class="homework-card">
        <div class="hw-meta-row">
          <span>${hw.subject} — ${hw.cls}</span>
          <span>Posted: ${hw.createdDate}</span>
        </div>
        <div class="hw-title">${hw.title}</div>
        <div class="hw-desc">${hw.desc}</div>
        <div class="hw-footer-row">
          <span class="hw-pill-due"><i class="ti ti-calendar-event"></i> Due: ${hw.dueDate}</span>
          <div style="display:flex; align-items:center; gap:8px">
            <small style="color:var(--text-tertiary); font-size:11px">By ${hw.by}</small>
            ${deleteBtn}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function removeHomeworkAssignment(hwId) {
  if (!confirm(`Are you absolutely sure you want to delete homework assignment ${hwId}?`)) return;

  const index = State.homework.findIndex(hw => hw.id === hwId);
  if (index === -1) return;

  const hw = State.homework[index];
  const actor = State.auth.currentUser ? State.auth.currentUser.name : 'System Admin';

  State.homework.splice(index, 1);
  saveState();

  logActivity(actor, 'Homework Deleted', 'academic', `Deleted homework assignment ${hwId} for ${hw.cls}`);
  showToast('Homework Deleted', `Assignment ${hwId} removed.`, 'ti-trash');

  renderHomeworkBoard();
  
  if (document.getElementById('tab-audit').classList.contains('active')) {
    renderAuditPanel();
  }
}

// -------------------------------------------------------------
// CHRONOLOGICAL AUDIT LOGGER ENGINE
// -------------------------------------------------------------
function logActivity(actor, action, category, details) {
  if (!State.auditLog) State.auditLog = [];
  
  const entry = {
    timestamp: new Date().toLocaleString('en-IN'),
    actor,
    action,
    category, 
    details
  };

  State.auditLog.unshift(entry);

  if (State.auditLog.length > 100) {
    State.auditLog.pop();
  }

  saveState();
}

// -------------------------------------------------------------
// ADMIN SECURITY & AUDIT PORTAL RENDERER
// -------------------------------------------------------------
function renderAuditPanel() {
  const logBody = document.getElementById('audit-log-body');
  const credentialsBody = document.getElementById('audit-credentials-body');
  const homeworkBody = document.getElementById('audit-homework-body');

  if (!logBody || !credentialsBody || !homeworkBody) return;

  // 1. Render System activity logs
  const logs = State.auditLog || [];
  if (logs.length === 0) {
    logBody.innerHTML = `<tr><td colspan="4" class="center-col" style="color:var(--text-tertiary)">No activities logged yet.</td></tr>`;
  } else {
    logBody.innerHTML = logs.map(l => {
      let badgeClass = 'system';
      if (l.category === 'enrollment') badgeClass = 'enrollment';
      else if (l.category === 'finance') badgeClass = 'finance';
      else if (l.category === 'security') badgeClass = 'security';
      else if (l.category === 'academic') badgeClass = 'academic';

      return `
        <tr>
          <td><small style="color:var(--text-tertiary)">${l.timestamp}</small></td>
          <td><b>${l.actor}</b></td>
          <td><span class="audit-badge ${badgeClass}">${l.action}</span></td>
          <td>${l.details}</td>
        </tr>
      `;
    }).join('');
  }

  // 2. Render Credentials List
  let credentialRows = [];
  
  // Faculty credentials
  State.staff.forEach(st => {
    const pw = State.staffPasswords[st.id] || 'teacher123';
    credentialRows.push({
      id: st.id,
      name: st.name,
      role: st.role,
      password: pw
    });
  });

  // Student credentials
  State.students.forEach(s => {
    const firstName = s.name.trim().split(' ')[0];
    const expectedPassword = `${firstName}${s.dob}`;
    credentialRows.push({
      id: s.id,
      name: s.name,
      role: 'Student / Parent',
      password: expectedPassword
    });
  });

  credentialsBody.innerHTML = credentialRows.map(row => `
    <tr>
      <td><b>${row.id}</b></td>
      <td>${row.name}</td>
      <td><span class="pill ${row.role.includes('Student') ? 'pill-green' : 'pill-blue'}">${row.role}</span></td>
      <td><span class="password-text-toggle">${row.password}</span></td>
    </tr>
  `).join('');

  // 3. Render Homework history
  const homeworks = State.homework || [];
  if (homeworks.length === 0) {
    homeworkBody.innerHTML = `<tr><td colspan="6" class="center-col" style="color:var(--text-tertiary)">No homework records.</td></tr>`;
  } else {
    homeworkBody.innerHTML = homeworks.map(hw => `
      <tr>
        <td><b>${hw.id}</b></td>
        <td>${hw.cls}</td>
        <td>${hw.subject}</td>
        <td>${hw.by}</td>
        <td><span style="color:var(--color-danger); font-weight:600">${hw.dueDate}</span></td>
        <td>
          <button class="btn btn-sm btn-danger" onclick="removeHomeworkAssignment('${hw.id}')"><i class="ti ti-trash"></i> Delete</button>
        </td>
      </tr>
    `).join('');
  }
}

// Emergency Reset Utility: Clears corrupted local caches and restores full VBNS database state
function resetDatabaseToDefault(event) {
  if (event) event.preventDefault();
  if (!confirm("Are you sure you want to restore the VBNS database to system defaults? This will erase all local modifications, log out the current session, and reset all students, staff, and payroll settings to high-fidelity factory configurations.")) {
    return;
  }
  localStorage.removeItem('apex_school_crm_state');
  sessionStorage.clear();
  window.location.reload();
}

// =============================================================
// INTEGRATION & PUBLIC WEBSITE FUNCTIONALITY (NEW)
// =============================================================

// Open the login screen overlay
function openLoginOverlay() {
  const screen = document.getElementById('login-screen');
  if (screen) {
    screen.classList.remove('hidden');
    // Set role to default 'admin'
    setLoginRole('admin');
  }
}

// Close the login screen overlay
function closeLoginOverlay() {
  const screen = document.getElementById('login-screen');
  if (screen) {
    screen.classList.add('hidden');
  }
}

// Submit the public Admission Enquiry Form
function submitPublicEnquiry(event) {
  event.preventDefault();
  
  const nameEl = document.getElementById('pub-enq-child');
  const parentEl = document.getElementById('pub-enq-parent');
  const classEl = document.getElementById('pub-enq-class');
  const phoneEl = document.getElementById('pub-enq-phone');
  const addressEl = document.getElementById('pub-enq-address');

  if (!nameEl || !parentEl || !classEl || !phoneEl) return;

  const name = nameEl.value.trim();
  const parent = parentEl.value.trim();
  const cls = classEl.value;
  const phone = phoneEl.value.trim();
  const address = addressEl ? addressEl.value.trim() : '';

  if (!name || !parent || !phone) {
    showToast('Validation Error', 'Please satisfy all mandatory enquiry fields.', 'ti-alert-circle');
    return;
  }

  // Push record into enquiries database
  State.enquiries.push({
    name: name,
    cls: cls,
    parent: parent,
    phone: phone,
    source: 'Digital Web Portal Form',
    status: 'Interested'
  });

  // Log in CRM activity history
  logActivity('Public Website Visitor', 'Online Enquiry Logged', 'system', `Submitted admission enquiry form for candidate child: ${name}`);

  // Save new database state
  saveState();

  // Reset form inputs
  nameEl.value = '';
  parentEl.value = '';
  phoneEl.value = '';
  if (addressEl) addressEl.value = '';

  // Show a gorgeous custom success message
  showToast('Enquiry Submitted', `Thank you! Our admission team will contact you shortly regarding ${name}'s admission.`, 'ti-circle-check-filled');
}

// Render active notice board bulletins onto the public landing page noticed board
function renderPublicNotices() {
  const container = document.getElementById('public-notices-feed');
  if (!container) return;

  // Retrieve active announcements from state registers (get latest 3)
  const list = [...State.notices].reverse().slice(0, 3);
  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-preview" style="background: none; border: none; box-shadow: none; padding: 40px 0;">
        <i class="ti ti-speakerphone" style="font-size: 32px; color: var(--text-tertiary);"></i>
        <p style="margin-top: 8px; font-size: 13px; color: var(--text-secondary);">No active school notices found today.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(item => {
    let pClass = 'normal';
    if (item.priority.includes('Urgent')) pClass = 'urgent';
    else if (item.priority.includes('Important')) pClass = 'important';

    return `
      <div class="notice-item public-feed-card priority-${pClass}" style="margin-bottom: 12px; padding: 14px 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <h4 style="font-size: 13.5px; font-weight: 600; color: var(--text-primary); margin: 0;">${item.title}</h4>
          <span class="badge" style="font-size: 9px; padding: 2px 6px; border-radius: 4px; border: 1px solid var(--border-secondary); background: var(--bg-tertiary); color: var(--text-primary);">${item.priority.split(' ')[0]}</span>
        </div>
        <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin: 6px 0;">${item.body}</p>
        <div style="display: flex; justify-content: space-between; font-size: 10px; color: var(--text-tertiary); margin-top: 8px;">
          <span>By: <b>${item.by}</b></span>
          <span>Date: ${item.date}</span>
        </div>
      </div>
    `;
  }).join('');
}

// Navigation scroll logic for public headers
function navigatePublic(sectionId, event) {
  if (event) event.preventDefault();

  // Highlight active link
  document.querySelectorAll('.public-nav .nav-link').forEach(link => {
    link.classList.remove('active');
  });

  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  } else {
    const activeLink = document.querySelector(`.public-nav a[href="#${sectionId}"]`);
    if (activeLink) activeLink.classList.add('active');
  }

  // Close public mobile menu if open
  const navLinks = document.querySelector('.public-nav .nav-links');
  if (navLinks) navLinks.classList.remove('mobile-open');

  scrollToSection(sectionId);
}

// Scroll viewport smoothly to section coordinate
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    const navHeight = 75;
    const topOffset = el.offsetTop - navHeight;
    window.scrollTo({
      top: topOffset,
      behavior: 'smooth'
    });
  }
}

// Toggle public mobile layout links drawer
function togglePublicMobileMenu() {
  const navLinks = document.querySelector('.public-nav .nav-links');
  if (navLinks) {
    navLinks.classList.toggle('mobile-open');
  }
}
