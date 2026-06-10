/* VBNS - Premium Core Application Logic */

// ============================================================
// BILINGUAL SYSTEM - Hindi / English
// ============================================================
let currentLang = localStorage.getItem('vbns_lang') || 'en';

const translations = {
  en: {
    'Login Portal': 'Login Portal', 'Access Portal': 'Access Portal',
    'Admin': 'Admin', 'Faculty': 'Faculty', 'Student': 'Student',
    'Admin Username': 'Admin Username', 'Password': 'Password',
    'Dashboard': 'Dashboard', 'New Admission': 'New Admission',
    'Student Directory': 'Student Directory', 'ID Cards': 'ID Cards',
    'Admit Cards': 'Admit Cards', 'Fee Collection': 'Fee Collection',
    'Ledger System': 'Ledger System', 'Fee Report': 'Fee Report',
    'Staff Payroll': 'Staff Payroll', 'Send SMS': 'Send SMS',
    'Notice Board': 'Notice Board', 'Homework Board': 'Homework Board',
    'Enquiries': 'Enquiries', 'Student Attendance': 'Student Attendance',
    'Staff Attendance': 'Staff Attendance', 'Timetable': 'Timetable',
    'Exam & Results': 'Exam & Results', 'Library Logs': 'Library Logs',
    'Transport Routes': 'Transport Routes', 'Staff Registry': 'Staff Registry',
    'Settings': 'Settings', 'Monthly Revenue': 'Monthly Revenue',
    'Pending Dues': 'Pending Dues', 'SMS Balance': 'SMS Balance',
    'Total Students': 'Total Students', 'Command Operations': 'Command Operations',
    'Home': 'Home', 'About': 'About', 'Academics': 'Academics',
    'Admissions': 'Admissions', 'Gallery': 'Gallery', 'Contact': 'Contact',
    'Safe Campus': 'Safe Campus', 'Experienced Teachers': 'Experienced Teachers',
    'Smart Learning': 'Smart Learning', 'Enroll Your Child Today': 'Enroll Your Child Today',
    'Visit Our Campus': 'Visit Our Campus', 'Collect Fee': 'Collect Fee',
  },
  hi: {
    'Login Portal': '\u0932\u0949\u0917\u0907\u0928 \u092a\u094b\u0930\u094d\u091f\u0932',
    'Access Portal': '\u092a\u094b\u0930\u094d\u091f\u0932 \u062a\u094d\u0935\u0930\u093f\u0924',
    'Admin': '\u092a\u094d\u0930\u0936\u093e\u0938\u0915',
    'Faculty': '\u0936\u093f\u0915\u094d\u0937\u0915',
    'Student': '\u091b\u093e\u0924\u094d\u0930',
    'Admin Username': '\u092a\u094d\u0930\u0936\u093e\u0938\u0915 \u0928\u093e\u092e',
    'Password': '\u092a\u093e\u0938\u0935\u0930\u094d\u0921',
    'Dashboard': '\u0921\u0948\u0936\u092c\u094b\u0930\u094d\u0921',
    'New Admission': '\u0928\u092f\u093e \u092a\u094d\u0930\u0935\u0947\u0936',
    'Student Directory': '\u091b\u093e\u0924\u094d\u0930 \u0928\u093f\u0930\u094d\u0926\u0947\u0936\u093f\u0915\u093e',
    'ID Cards': '\u092a\u0939\u091a\u093e\u0928 \u092a\u0924\u094d\u0930',
    'Admit Cards': '\u092a\u094d\u0930\u0935\u0947\u0936 \u092a\u0924\u094d\u0930',
    'Fee Collection': '\u0936\u0941\u0932\u094d\u0915 \u0938\u0902\u0917\u094d\u0930\u0939',
    'Ledger System': '\u0916\u093e\u0924\u093e \u092c\u0939\u0940',
    'Fee Report': '\u0936\u0941\u0932\u094d\u0915 \u0930\u093f\u092a\u094b\u0930\u094d\u091f',
    'Staff Payroll': '\u0935\u0947\u0924\u0928 \u092a\u094d\u0930\u0628\u0902\u0927\u0928',
    'Send SMS': 'SMS \u092d\u0947\u091c\u0947\u0902',
    'Notice Board': '\u0938\u0942\u091a\u0928\u093e \u092a\u091f\u0932',
    'Homework Board': '\u0917\u0943\u0939\u0915\u093e\u0930\u094d\u092f \u092a\u091f\u0932',
    'Enquiries': '\u092a\u0942\u091b\u0924\u093e\u091b',
    'Student Attendance': '\u091b\u093e\u0924\u094d\u0930 \u0909\u092a\u0938\u094d\u0925\u093f\u0924\u093f',
    'Staff Attendance': '\u0915\u0930\u094d\u092e\u091a\u093e\u0930\u0940 \u0909\u092a\u0938\u094d\u0925\u093f\u0924\u093f',
    'Timetable': '\u0938\u092e\u092f \u0938\u093e\u0930\u0923\u0940',
    'Exam & Results': '\u092a\u0930\u0940\u0915\u094d\u0937\u093e \u0914\u0930 \u092a\u0930\u093f\u0923\u093e\u092e',
    'Library Logs': '\u092a\u0941\u0938\u094d\u0924\u0915\u093e\u0932\u092f',
    'Transport Routes': '\u092a\u0930\u093f\u0935\u0939\u0928 \u092e\u093e\u0930\u094d\u0917',
    'Staff Registry': '\u0915\u0930\u094d\u092e\u091a\u093e\u0930\u0940 \u0930\u091c\u093f\u0938\u094d\u091f\u0930',
    'Settings': '\u0938\u0947\u091f\u093f\u0902\u0917\u094d\u0938',
    'Monthly Revenue': '\u092e\u093e\u0938\u093f\u0915 \u0906\u092f',
    'Pending Dues': '\u092c\u0915\u093e\u092f\u093e \u0930\u093e\u0936\u093f',
    'SMS Balance': 'SMS \u092c\u0948\u0932\u0947\u0902\u0938',
    'Total Students': '\u0915\u0941\u0932 \u091b\u093e\u0924\u094d\u0930',
    'Command Operations': '\u0924\u094d\u0935\u0930\u093f\u0924 \u0915\u093e\u0930\u094d\u092f',
    'Home': '\u0939\u094b\u092e',
    'About': '\u0939\u092e\u093e\u0930\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902',
    'Academics': '\u0936\u093f\u0915\u094d\u0937\u093e',
    'Admissions': '\u092a\u094d\u0930\u0935\u0947\u0936',
    'Gallery': '\u0917\u0948\u0932\u0930\u0940',
    'Contact': '\u0938\u0902\u092a\u0930\u094d\u0915',
    'Safe Campus': '\u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u092a\u0930\u093f\u0938\u0930',
    'Experienced Teachers': '\u0905\u0928\u0941\u092d\u0935\u0940 \u0936\u093f\u0915\u094d\u0937\u0915',
    'Smart Learning': '\u0938\u094d\u092e\u093e\u0930\u094d\u091f \u0936\u093f\u0915\u094d\u0937\u093e',
    'Enroll Your Child Today': '\u0906\u091c \u0939\u0940 \u092a\u094d\u0930\u0935\u0947\u0936 \u0932\u0947\u0902',
    'Visit Our Campus': '\u092a\u0930\u093f\u0938\u0930 \u0926\u0947\u0916\u0947\u0902',
    'Collect Fee': '\u0936\u0941\u0932\u094d\u0915 \u0932\u0947\u0902',
  }
};

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || key;
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'hi' : 'en';
  localStorage.setItem('vbns_lang', currentLang);
  applyLanguage();
}

function applyLanguage() {
  const isHindi = currentLang === 'hi';
  // Update lang toggle buttons
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) langBtn.innerHTML = isHindi ? '&#127468;&#127463; English' : '&#127470;&#127475; &#2361;&#2367;&#2306;&#2342;&#2368;';
  const sbLang = document.getElementById('sb-lang-label');
  if (sbLang) sbLang.textContent = isHindi ? 'Switch to English' : 'Switch to \u0939\u093f\u0902\u0926\u0940';
  // Translate sidebar items
  document.querySelectorAll('.sb-item').forEach(el => {
    const lastNode = Array.from(el.childNodes).find(n => n.nodeType === 3 && n.textContent.trim());
    if (lastNode) {
      const key = lastNode.textContent.trim();
      if (translations.en[key] || translations.hi[key]) {
        lastNode.textContent = t(key);
      }
    }
  });
  // Translate nav links on public site
  document.querySelectorAll('.nav-link').forEach(el => {
    const key = el.textContent.trim();
    if (translations.en[key]) el.textContent = t(key);
  });
  // Translate feature badges
  document.querySelectorAll('.feature-badge span, .hero-feature span').forEach(el => {
    const key = el.textContent.trim();
    if (translations.en[key]) el.textContent = t(key);
  });
}
// ============================================================



// Centralized State Container
let State = {
  config: {
    schoolName: 'VBNIC',
    address: 'Shyamdeurwa, Maharajganj – 273301',
    phone: '+91 91201 93467',
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
    ],
    'Class IX-A': [
      { time: '08:30 AM - 09:15 AM', mon: { sub: 'Science', t: 'Mrs. Sen' }, tue: { sub: 'English', t: 'Mr. Paul' }, wed: { sub: 'Mathematics', t: 'Dr. Sharma' }, thu: { sub: 'Hindi', t: 'Mr. Joshi' }, fri: { sub: 'Social Sci.', t: 'Miss Roy' }, sat: { sub: 'PT / Games', t: 'Mr. Negi' } },
      { time: '09:15 AM - 10:00 AM', mon: { sub: 'Mathematics', t: 'Dr. Sharma' }, tue: { sub: 'Science', t: 'Mrs. Sen' }, wed: { sub: 'English', t: 'Mr. Paul' }, thu: { sub: 'Social Sci.', t: 'Miss Roy' }, fri: { sub: 'Mathematics', t: 'Dr. Sharma' }, sat: { sub: 'Science', t: 'Mrs. Sen' } },
      { time: '10:00 AM - 10:15 AM', mon: { sub: 'Recess', t: '-' }, tue: { sub: 'Recess', t: '-' }, wed: { sub: 'Recess', t: '-' }, thu: { sub: 'Recess', t: '-' }, fri: { sub: 'Recess', t: '-' }, sat: { sub: 'Recess', t: '-' } },
      { time: '10:15 AM - 11:00 AM', mon: { sub: 'English', t: 'Mr. Paul' }, tue: { sub: 'Hindi', t: 'Mr. Joshi' }, wed: { sub: 'Social Sci.', t: 'Miss Roy' }, thu: { sub: 'Computer', t: 'Mrs. Dixit' }, fri: { sub: 'Computer', t: 'Mrs. Dixit' }, sat: { sub: 'Art & Craft', t: 'Miss Das' } },
      { time: '11:00 AM - 11:45 AM', mon: { sub: 'Social Sci.', t: 'Miss Roy' }, tue: { sub: 'Mathematics', t: 'Dr. Sharma' }, wed: { sub: 'Science', t: 'Mrs. Sen' }, thu: { sub: 'English', t: 'Mr. Paul' }, fri: { sub: 'Hindi', t: 'Mr. Joshi' }, sat: { sub: 'Library', t: 'Mrs. Kaur' } }
    ],
    'Class VIII-A': [
      { time: '08:30 AM - 09:15 AM', mon: { sub: 'English', t: 'Mr. Paul' }, tue: { sub: 'Mathematics', t: 'Dr. Sharma' }, wed: { sub: 'Social Sci.', t: 'Miss Roy' }, thu: { sub: 'Computer', t: 'Mrs. Dixit' }, fri: { sub: 'Science', t: 'Mrs. Sen' }, sat: { sub: 'Art & Craft', t: 'Miss Das' } },
      { time: '09:15 AM - 10:00 AM', mon: { sub: 'Social Sci.', t: 'Miss Roy' }, tue: { sub: 'Hindi', t: 'Mr. Joshi' }, wed: { sub: 'English', t: 'Mr. Paul' }, thu: { sub: 'Science', t: 'Mrs. Sen' }, fri: { sub: 'Mathematics', t: 'Dr. Sharma' }, sat: { sub: 'PT / Games', t: 'Mr. Negi' } },
      { time: '10:00 AM - 10:15 AM', mon: { sub: 'Recess', t: '-' }, tue: { sub: 'Recess', t: '-' }, wed: { sub: 'Recess', t: '-' }, thu: { sub: 'Recess', t: '-' }, fri: { sub: 'Recess', t: '-' }, sat: { sub: 'Recess', t: '-' } },
      { time: '10:15 AM - 11:00 AM', mon: { sub: 'Mathematics', t: 'Dr. Sharma' }, tue: { sub: 'Science', t: 'Mrs. Sen' }, wed: { sub: 'Computer', t: 'Mrs. Dixit' }, thu: { sub: 'English', t: 'Mr. Paul' }, fri: { sub: 'Hindi', t: 'Mr. Joshi' }, sat: { sub: 'Library', t: 'Mrs. Kaur' } },
      { time: '11:00 AM - 11:45 AM', mon: { sub: 'Science', t: 'Mrs. Sen' }, tue: { sub: 'English', t: 'Mr. Paul' }, wed: { sub: 'Mathematics', t: 'Dr. Sharma' }, thu: { sub: 'Social Sci.', t: 'Miss Roy' }, fri: { sub: 'PT / Games', t: 'Mr. Negi' }, sat: { sub: 'Hindi', t: 'Mr. Joshi' } }
    ],
    'Class VII-A': [
      { time: '08:30 AM - 09:15 AM', mon: { sub: 'Mathematics', t: 'Dr. Sharma' }, tue: { sub: 'Science', t: 'Mrs. Sen' }, wed: { sub: 'English', t: 'Mr. Paul' }, thu: { sub: 'Social Sci.', t: 'Miss Roy' }, fri: { sub: 'Mathematics', t: 'Dr. Sharma' }, sat: { sub: 'Science', t: 'Mrs. Sen' } },
      { time: '09:15 AM - 10:00 AM', mon: { sub: 'Science', t: 'Mrs. Sen' }, tue: { sub: 'English', t: 'Mr. Paul' }, wed: { sub: 'Mathematics', t: 'Dr. Sharma' }, thu: { sub: 'Hindi', t: 'Mr. Joshi' }, fri: { sub: 'Social Sci.', t: 'Miss Roy' }, sat: { sub: 'PT / Games', t: 'Mr. Negi' } },
      { time: '10:00 AM - 10:15 AM', mon: { sub: 'Recess', t: '-' }, tue: { sub: 'Recess', t: '-' }, wed: { sub: 'Recess', t: '-' }, thu: { sub: 'Recess', t: '-' }, fri: { sub: 'Recess', t: '-' }, sat: { sub: 'Recess', t: '-' } },
      { time: '10:15 AM - 11:00 AM', mon: { sub: 'Social Sci.', t: 'Miss Roy' }, tue: { sub: 'Mathematics', t: 'Dr. Sharma' }, wed: { sub: 'Science', t: 'Mrs. Sen' }, thu: { sub: 'English', t: 'Mr. Paul' }, fri: { sub: 'Hindi', t: 'Mr. Joshi' }, sat: { sub: 'Library', t: 'Mrs. Kaur' } },
      { time: '11:00 AM - 11:45 AM', mon: { sub: 'English', t: 'Mr. Paul' }, tue: { sub: 'Hindi', t: 'Mr. Joshi' }, wed: { sub: 'Social Sci.', t: 'Miss Roy' }, thu: { sub: 'Computer', t: 'Mrs. Dixit' }, fri: { sub: 'Computer', t: 'Mrs. Dixit' }, sat: { sub: 'Art & Craft', t: 'Miss Das' } }
    ],
    'Class VI-A': [
      { time: '08:30 AM - 09:15 AM', mon: { sub: 'Science', t: 'Mrs. Sen' }, tue: { sub: 'English', t: 'Mr. Paul' }, wed: { sub: 'Mathematics', t: 'Dr. Sharma' }, thu: { sub: 'Hindi', t: 'Mr. Joshi' }, fri: { sub: 'Social Sci.', t: 'Miss Roy' }, sat: { sub: 'PT / Games', t: 'Mr. Negi' } },
      { time: '09:15 AM - 10:00 AM', mon: { sub: 'Mathematics', t: 'Dr. Sharma' }, tue: { sub: 'Science', t: 'Mrs. Sen' }, wed: { sub: 'English', t: 'Mr. Paul' }, thu: { sub: 'Social Sci.', t: 'Miss Roy' }, fri: { sub: 'Mathematics', t: 'Dr. Sharma' }, sat: { sub: 'Science', t: 'Mrs. Sen' } },
      { time: '10:00 AM - 10:15 AM', mon: { sub: 'Recess', t: '-' }, tue: { sub: 'Recess', t: '-' }, wed: { sub: 'Recess', t: '-' }, thu: { sub: 'Recess', t: '-' }, fri: { sub: 'Recess', t: '-' }, sat: { sub: 'Recess', t: '-' } },
      { time: '10:15 AM - 11:00 AM', mon: { sub: 'English', t: 'Mr. Paul' }, tue: { sub: 'Hindi', t: 'Mr. Joshi' }, wed: { sub: 'Social Sci.', t: 'Miss Roy' }, thu: { sub: 'Computer', t: 'Mrs. Dixit' }, fri: { sub: 'Computer', t: 'Mrs. Dixit' }, sat: { sub: 'Art & Craft', t: 'Miss Das' } },
      { time: '11:00 AM - 11:45 AM', mon: { sub: 'Social Sci.', t: 'Miss Roy' }, tue: { sub: 'Mathematics', t: 'Dr. Sharma' }, wed: { sub: 'Science', t: 'Mrs. Sen' }, thu: { sub: 'English', t: 'Mr. Paul' }, fri: { sub: 'Hindi', t: 'Mr. Joshi' }, sat: { sub: 'Library', t: 'Mrs. Kaur' } }
    ],
    'Class V-A': [
      { time: '08:30 AM - 09:15 AM', mon: { sub: 'English', t: 'Mr. Paul' }, tue: { sub: 'Mathematics', t: 'Dr. Sharma' }, wed: { sub: 'Social Sci.', t: 'Miss Roy' }, thu: { sub: 'Computer', t: 'Mrs. Dixit' }, fri: { sub: 'Science', t: 'Mrs. Sen' }, sat: { sub: 'Art & Craft', t: 'Miss Das' } },
      { time: '09:15 AM - 10:00 AM', mon: { sub: 'Social Sci.', t: 'Miss Roy' }, tue: { sub: 'Hindi', t: 'Mr. Joshi' }, wed: { sub: 'English', t: 'Mr. Paul' }, thu: { sub: 'Science', t: 'Mrs. Sen' }, fri: { sub: 'Mathematics', t: 'Dr. Sharma' }, sat: { sub: 'PT / Games', t: 'Mr. Negi' } },
      { time: '10:00 AM - 10:15 AM', mon: { sub: 'Recess', t: '-' }, tue: { sub: 'Recess', t: '-' }, wed: { sub: 'Recess', t: '-' }, thu: { sub: 'Recess', t: '-' }, fri: { sub: 'Recess', t: '-' }, sat: { sub: 'Recess', t: '-' } },
      { time: '10:15 AM - 11:00 AM', mon: { sub: 'Mathematics', t: 'Dr. Sharma' }, tue: { sub: 'Science', t: 'Mrs. Sen' }, wed: { sub: 'Computer', t: 'Mrs. Dixit' }, thu: { sub: 'English', t: 'Mr. Paul' }, fri: { sub: 'Hindi', t: 'Mr. Joshi' }, sat: { sub: 'Library', t: 'Mrs. Kaur' } },
      { time: '11:00 AM - 11:45 AM', mon: { sub: 'Science', t: 'Mrs. Sen' }, tue: { sub: 'English', t: 'Mr. Paul' }, wed: { sub: 'Mathematics', t: 'Dr. Sharma' }, thu: { sub: 'Social Sci.', t: 'Miss Roy' }, fri: { sub: 'PT / Games', t: 'Mr. Negi' }, sat: { sub: 'Hindi', t: 'Mr. Joshi' } }
    ],
    'Class IV-A': [
      { time: '08:30 AM - 09:15 AM', mon: { sub: 'Mathematics', t: 'Dr. Sharma' }, tue: { sub: 'Science', t: 'Mrs. Sen' }, wed: { sub: 'English', t: 'Mr. Paul' }, thu: { sub: 'Social Sci.', t: 'Miss Roy' }, fri: { sub: 'Mathematics', t: 'Dr. Sharma' }, sat: { sub: 'Science', t: 'Mrs. Sen' } },
      { time: '09:15 AM - 10:00 AM', mon: { sub: 'Science', t: 'Mrs. Sen' }, tue: { sub: 'English', t: 'Mr. Paul' }, wed: { sub: 'Mathematics', t: 'Dr. Sharma' }, thu: { sub: 'Hindi', t: 'Mr. Joshi' }, fri: { sub: 'Social Sci.', t: 'Miss Roy' }, sat: { sub: 'PT / Games', t: 'Mr. Negi' } },
      { time: '10:00 AM - 10:15 AM', mon: { sub: 'Recess', t: '-' }, tue: { sub: 'Recess', t: '-' }, wed: { sub: 'Recess', t: '-' }, thu: { sub: 'Recess', t: '-' }, fri: { sub: 'Recess', t: '-' }, sat: { sub: 'Recess', t: '-' } },
      { time: '10:15 AM - 11:00 AM', mon: { sub: 'Social Sci.', t: 'Miss Roy' }, tue: { sub: 'Mathematics', t: 'Dr. Sharma' }, wed: { sub: 'Science', t: 'Mrs. Sen' }, thu: { sub: 'English', t: 'Mr. Paul' }, fri: { sub: 'Hindi', t: 'Mr. Joshi' }, sat: { sub: 'Library', t: 'Mrs. Kaur' } },
      { time: '11:00 AM - 11:45 AM', mon: { sub: 'English', t: 'Mr. Paul' }, tue: { sub: 'Hindi', t: 'Mr. Joshi' }, wed: { sub: 'Social Sci.', t: 'Miss Roy' }, thu: { sub: 'Computer', t: 'Mrs. Dixit' }, fri: { sub: 'Computer', t: 'Mrs. Dixit' }, sat: { sub: 'Art & Craft', t: 'Miss Das' } }
    ],
    'Class III-A': [
      { time: '08:30 AM - 09:15 AM', mon: { sub: 'Science', t: 'Mrs. Sen' }, tue: { sub: 'English', t: 'Mr. Paul' }, wed: { sub: 'Mathematics', t: 'Dr. Sharma' }, thu: { sub: 'Hindi', t: 'Mr. Joshi' }, fri: { sub: 'Social Sci.', t: 'Miss Roy' }, sat: { sub: 'PT / Games', t: 'Mr. Negi' } },
      { time: '09:15 AM - 10:00 AM', mon: { sub: 'Mathematics', t: 'Dr. Sharma' }, tue: { sub: 'Science', t: 'Mrs. Sen' }, wed: { sub: 'English', t: 'Mr. Paul' }, thu: { sub: 'Social Sci.', t: 'Miss Roy' }, fri: { sub: 'Mathematics', t: 'Dr. Sharma' }, sat: { sub: 'Science', t: 'Mrs. Sen' } },
      { time: '10:00 AM - 10:15 AM', mon: { sub: 'Recess', t: '-' }, tue: { sub: 'Recess', t: '-' }, wed: { sub: 'Recess', t: '-' }, thu: { sub: 'Recess', t: '-' }, fri: { sub: 'Recess', t: '-' }, sat: { sub: 'Recess', t: '-' } },
      { time: '10:15 AM - 11:00 AM', mon: { sub: 'English', t: 'Mr. Paul' }, tue: { sub: 'Hindi', t: 'Mr. Joshi' }, wed: { sub: 'Social Sci.', t: 'Miss Roy' }, thu: { sub: 'Computer', t: 'Mrs. Dixit' }, fri: { sub: 'Computer', t: 'Mrs. Dixit' }, sat: { sub: 'Art & Craft', t: 'Miss Das' } },
      { time: '11:00 AM - 11:45 AM', mon: { sub: 'Social Sci.', t: 'Miss Roy' }, tue: { sub: 'Mathematics', t: 'Dr. Sharma' }, wed: { sub: 'Science', t: 'Mrs. Sen' }, thu: { sub: 'English', t: 'Mr. Paul' }, fri: { sub: 'Hindi', t: 'Mr. Joshi' }, sat: { sub: 'Library', t: 'Mrs. Kaur' } }
    ],
    'Class II-A': [
      { time: '08:30 AM - 09:15 AM', mon: { sub: 'English', t: 'Mr. Paul' }, tue: { sub: 'Mathematics', t: 'Dr. Sharma' }, wed: { sub: 'Social Sci.', t: 'Miss Roy' }, thu: { sub: 'Computer', t: 'Mrs. Dixit' }, fri: { sub: 'Science', t: 'Mrs. Sen' }, sat: { sub: 'Art & Craft', t: 'Miss Das' } },
      { time: '09:15 AM - 10:00 AM', mon: { sub: 'Social Sci.', t: 'Miss Roy' }, tue: { sub: 'Hindi', t: 'Mr. Joshi' }, wed: { sub: 'English', t: 'Mr. Paul' }, thu: { sub: 'Science', t: 'Mrs. Sen' }, fri: { sub: 'Mathematics', t: 'Dr. Sharma' }, sat: { sub: 'PT / Games', t: 'Mr. Negi' } },
      { time: '10:00 AM - 10:15 AM', mon: { sub: 'Recess', t: '-' }, tue: { sub: 'Recess', t: '-' }, wed: { sub: 'Recess', t: '-' }, thu: { sub: 'Recess', t: '-' }, fri: { sub: 'Recess', t: '-' }, sat: { sub: 'Recess', t: '-' } },
      { time: '10:15 AM - 11:00 AM', mon: { sub: 'Mathematics', t: 'Dr. Sharma' }, tue: { sub: 'Science', t: 'Mrs. Sen' }, wed: { sub: 'Computer', t: 'Mrs. Dixit' }, thu: { sub: 'English', t: 'Mr. Paul' }, fri: { sub: 'Hindi', t: 'Mr. Joshi' }, sat: { sub: 'Library', t: 'Mrs. Kaur' } },
      { time: '11:00 AM - 11:45 AM', mon: { sub: 'Science', t: 'Mrs. Sen' }, tue: { sub: 'English', t: 'Mr. Paul' }, wed: { sub: 'Mathematics', t: 'Dr. Sharma' }, thu: { sub: 'Social Sci.', t: 'Miss Roy' }, fri: { sub: 'PT / Games', t: 'Mr. Negi' }, sat: { sub: 'Hindi', t: 'Mr. Joshi' } }
    ],
    'Class I-A': [
      { time: '08:30 AM - 09:15 AM', mon: { sub: 'Mathematics', t: 'Dr. Sharma' }, tue: { sub: 'Science', t: 'Mrs. Sen' }, wed: { sub: 'English', t: 'Mr. Paul' }, thu: { sub: 'Social Sci.', t: 'Miss Roy' }, fri: { sub: 'Mathematics', t: 'Dr. Sharma' }, sat: { sub: 'Science', t: 'Mrs. Sen' } },
      { time: '09:15 AM - 10:00 AM', mon: { sub: 'Science', t: 'Mrs. Sen' }, tue: { sub: 'English', t: 'Mr. Paul' }, wed: { sub: 'Mathematics', t: 'Dr. Sharma' }, thu: { sub: 'Hindi', t: 'Mr. Joshi' }, fri: { sub: 'Social Sci.', t: 'Miss Roy' }, sat: { sub: 'PT / Games', t: 'Mr. Negi' } },
      { time: '10:00 AM - 10:15 AM', mon: { sub: 'Recess', t: '-' }, tue: { sub: 'Recess', t: '-' }, wed: { sub: 'Recess', t: '-' }, thu: { sub: 'Recess', t: '-' }, fri: { sub: 'Recess', t: '-' }, sat: { sub: 'Recess', t: '-' } },
      { time: '10:15 AM - 11:00 AM', mon: { sub: 'Social Sci.', t: 'Miss Roy' }, tue: { sub: 'Mathematics', t: 'Dr. Sharma' }, wed: { sub: 'Science', t: 'Mrs. Sen' }, thu: { sub: 'English', t: 'Mr. Paul' }, fri: { sub: 'Hindi', t: 'Mr. Joshi' }, sat: { sub: 'Library', t: 'Mrs. Kaur' } },
      { time: '11:00 AM - 11:45 AM', mon: { sub: 'English', t: 'Mr. Paul' }, tue: { sub: 'Hindi', t: 'Mr. Joshi' }, wed: { sub: 'Social Sci.', t: 'Miss Roy' }, thu: { sub: 'Computer', t: 'Mrs. Dixit' }, fri: { sub: 'Computer', t: 'Mrs. Dixit' }, sat: { sub: 'Art & Craft', t: 'Miss Das' } }
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
  results: {},   // Empty — add real results via ERP
  library: [],   // Empty — add real books via Library module
  transport: [], // Empty — add real routes via Transport module
  staff: [],
  homework: [],
  auditLog: []
};

let activeLoginRole = 'admin'; // Internal tracker for login tabs

// Global Dynamic Toast Notification System
function showToast(title, message, icon = 'ti-info-circle') {
  const wrapper = document.getElementById('toast-wrapper');
  if (!wrapper) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let iconColor = 'var(--accent)';
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('error') || lowerTitle.includes('failed')) {
    iconColor = '#dc3545';
  } else if (lowerTitle.includes('success') || lowerTitle.includes('complete') || lowerTitle.includes('submitted')) {
    iconColor = '#28a745';
  }

  toast.innerHTML = `
    <div class="toast-icon" style="color: ${iconColor};"><i class="ti ${icon}"></i></div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
    <div class="toast-progress"></div>
  `;

  wrapper.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  const progress = toast.querySelector('.toast-progress');
  if (progress) {
    progress.style.transition = 'width 4s linear';
    setTimeout(() => {
      progress.style.width = '0%';
    }, 50);
  }

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4000);
}

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
        State.timetable = parsed.timetable || State.timetable;
        State.homework = parsed.homework || State.homework;
        State.auditLog = parsed.auditLog || State.auditLog;
        
        if (parsed.staff && parsed.staff.length > 0) {
          State.staff = parsed.staff;
        }
        if (parsed.config) {
          State.config = { ...State.config, ...parsed.config };
        }
        
        // Force update school name if still the old default
        if (State.config.schoolName === 'Sunrise Academy' || State.config.schoolName === 'VBNIC') {
          State.config.schoolName = 'VBNIC';
        }
        
        // SELF-CORRECTION: Populate operational blocks if missing on existing localStorage instances
        if (!State.staffPasswords || Object.keys(State.staffPasswords).length === 0) {
          State.staffPasswords = {};
          State.staff.forEach(st => {
            // Password set by admin only - no auto-generation
          });
        }
        if (!State.payrollConfig || Object.keys(State.payrollConfig).length === 0) {
          State.payrollConfig = {};
          State.staff.forEach(st => {
            State.payrollConfig[st.id] = { base: st.role.includes('Senior') ? 45000 : 35000, allowance: 3000, deductions: 0, status: 'Unpaid' };
          });
        }
        if (!State.config.teacherAccess) {
          State.config.teacherAccess = ['dashboard', 'directory', 'fees', 'notice', 'attendance', 'timetable', 'exam', 'results', 'library', 'transport'];
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
          State.homework = [];
        }
        if (!State.auditLog) {
          State.auditLog = [
            { timestamp: new Date().toLocaleString('en-IN'), actor: 'System Initializer', action: 'System Seed', category: 'system', details: 'Initialized VBNS CRM system state registers' }
          ];
        }
        
        migrateOldClassNames();
        saveState();
        return;
      }
    } catch (e) {
      console.warn("Failed parsing state from localStorage, seeding fallback metrics.");
    }
  }

  // Initial Seed - Empty (add real students via New Admission)
  State.students = [];

  State.feeLog = [];

  State.ledger = [];

  State.enquiries = [];

  State.smsLog = [];

  State.notices = [];

  // Initialize Default Staff Passwords and Salaries
  State.staff.forEach(st => {
    // Password set by admin only - no auto-generation
    State.payrollConfig[st.id] = { base: st.role.includes('Senior') ? 45000 : 35000, allowance: 3000, deductions: 0, status: 'Unpaid' };
    st.access = ['directory', 'notice', 'attendance', 'timetable', 'exam', 'results', 'library', 'transport'];
    if (st.id === 'TCH-001') st.assignedClass = 'Class X';
    else if (st.id === 'TCH-002') st.assignedClass = 'Class IX';
    else if (st.id === 'TCH-003') st.assignedClass = 'Class VIII';
    else st.assignedClass = '';
  });

  State.homework = [];

  State.auditLog = [
    { timestamp: new Date().toLocaleString('en-IN'), actor: 'System Initializer', action: 'System Seed', category: 'system', details: 'Initialized VBNS CRM system state registers' }
  ];

  saveState();
}

async function hashPassword(password, salt) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + salt);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Debounce timer — prevents 37x redundant Firestore writes per user action
let _saveDebounceTimer = null;

function saveState() {
  // Always write to localStorage immediately (fast, free, no limit concerns)
  localStorage.setItem('apex_school_crm_state', JSON.stringify(State));

  // Debounce the Firestore sync: wait 800ms after last saveState() call
  // This collapses bursts of rapid changes (e.g. bulk attendance) into one write
  clearTimeout(_saveDebounceTimer);
  _saveDebounceTimer = setTimeout(() => _syncToFirestore(), 800);
}

function _syncToFirestore() {
  if (!window.db || !window.fsLib) return;
  try {
    const { doc, setDoc } = window.fsLib;
    const db = window.db;

    // Students: each stored as own document (already correct — scalable)
    (State.students || []).forEach(student => {
      setDoc(doc(db, 'students', student.id), student)
        .catch(e => console.warn('Student save failed:', student.id, e));
    });

    // FIX: Split the old monolithic "meta" document into separate Firestore collections
    // This avoids the 1MB Firestore document size limit as the school grows

    setDoc(doc(db, 'schoolMeta', 'config'), {
      config: State.config || {},
      staff: State.staff || [],
      staffPasswords: State.staffPasswords || {},
      payrollConfig: State.payrollConfig || {},
      updatedAt: new Date().toISOString()
    }).catch(e => console.warn('Config save failed:', e));

    setDoc(doc(db, 'schoolMeta', 'finance'), {
      ledger: State.ledger || [],
      feeLog: State.feeLog || [],
      enquiries: State.enquiries || [],
      smsLog: State.smsLog || [],
      updatedAt: new Date().toISOString()
    }).catch(e => console.warn('Finance save failed:', e));

    setDoc(doc(db, 'schoolMeta', 'academic'), {
      notices: State.notices || [],
      homework: State.homework || [],
      attendance: State.attendance || {},
      staffAttendance: State.staffAttendance || {},
      auditLog: (State.auditLog || []).slice(0, 100), // cap at 100 entries
      updatedAt: new Date().toISOString()
    }).catch(e => console.warn('Academic save failed:', e));

  } catch(e) {
    console.warn('Firestore sync error:', e);
  }
}


// One-time migration: fix old Roman numeral class names to new format
function migrateOldClassNames() {
  const classMap = {
    'Class X': 'Class 10', 'Class IX': 'Class 9', 'Class VIII': 'Class 8',
    'Class VII': 'Class 7', 'Class VI': 'Class 6', 'Class V': 'Class 5',
    'Class IV': 'Class 4', 'Class III': 'Class 3', 'Class II': 'Class 2',
    'Class I': 'Class 1',
    'Class X-A': 'Class 10-A', 'Class IX-A': 'Class 9-A', 'Class VIII-A': 'Class 8-A',
    'Class VII-A': 'Class 7-A', 'Class VI-A': 'Class 6-A', 'Class V-A': 'Class 5-A',
    'Class IV-A': 'Class 4-A', 'Class III-A': 'Class 3-A', 'Class II-A': 'Class 2-A',
    'Class I-A': 'Class 1-A'
  };
  let changed = false;

  // Fix students
  State.students.forEach(s => {
    if (classMap[s.cls]) { s.cls = classMap[s.cls]; changed = true; }
    if (classMap[s.sec]) { s.sec = classMap[s.sec]; changed = true; }
  });

  // Fix staff assigned class
  State.staff.forEach(st => {
    if (classMap[st.assignedClass]) { st.assignedClass = classMap[st.assignedClass]; changed = true; }
  });

  // Fix attendance keys
  const oldKeys = Object.keys(State.attendance);
  oldKeys.forEach(key => {
    let newKey = key;
    Object.keys(classMap).forEach(old => {
      if (newKey.startsWith(old + '_')) {
        newKey = classMap[old] + '_' + newKey.split('_')[1];
      }
    });
    if (newKey !== key) {
      State.attendance[newKey] = State.attendance[key];
      delete State.attendance[key];
      changed = true;
    }
  });

  if (changed) {
    saveState();
    console.log('✅ Class names migrated to new format');
  }
}

// Global Core App Initializer
window.addEventListener('DOMContentLoaded', async () => {
  // Initialize Firebase and load data from Firestore
  try {
    const { initializeApp, getApps } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
    const { getFirestore, doc, setDoc, getDoc, getDocs, collection } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
    const { getAuth } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js');
    const firebaseConfig = {
      apiKey: "AIzaSyAO8dHzpF-mWhr6sY0LSOxdPs5RQEj9gKU",
      authDomain: "vbns-school.firebaseapp.com",
      projectId: "vbns-school",
      storageBucket: "vbns-school.firebasestorage.app",
      messagingSenderId: "690235835836",
      appId: "1:690235835836:web:3a562a5801051b190297b9"
    };
    window.app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
    window.db = getFirestore(window.app);
    window.firebaseAuth = getAuth(window.app);
    // FIX: expose Firestore helpers so saveState() can write to Firebase
    window.fsLib = { doc, setDoc, getDoc, getDocs, collection };
    console.log('✅ Firebase connected and fsLib registered!');
    // Load state from Firestore
    try {
      // Load each student from their own document
      const studentSnaps = await getDocs(collection(window.db, 'students'));
      if (!studentSnaps.empty) {
        State.students = [];
        studentSnaps.forEach(d => State.students.push(d.data()));
      }

      // Load split meta collections (new structure)
      const [configSnap, financeSnap, academicSnap] = await Promise.all([
        getDoc(doc(window.db, 'schoolMeta', 'config')),
        getDoc(doc(window.db, 'schoolMeta', 'finance')),
        getDoc(doc(window.db, 'schoolMeta', 'academic'))
      ]);

      if (configSnap.exists()) {
        const d = configSnap.data();
        if (d.config) State.config = { ...State.config, ...d.config };
        if (d.staff && d.staff.length > 0) State.staff = d.staff;
        if (d.staffPasswords) State.staffPasswords = d.staffPasswords;
        if (d.payrollConfig) State.payrollConfig = d.payrollConfig;
      }
      if (financeSnap.exists()) {
        const d = financeSnap.data();
        State.ledger = d.ledger || State.ledger;
        State.feeLog = d.feeLog || State.feeLog;
        State.enquiries = d.enquiries || State.enquiries;
        State.smsLog = d.smsLog || State.smsLog;
      }

      // Load enquiries from dedicated collection (public submissions go here)
      try {
        const enqSnaps = await getDocs(collection(window.db, 'enquiries'));
        if (!enqSnaps.empty) {
          const firestoreEnqs = [];
          enqSnaps.forEach(d => firestoreEnqs.push(d.data()));
          // Merge with existing enquiries, avoid duplicates by timestamp
          const existingTimestamps = new Set(State.enquiries.map(e => e.timestamp).filter(Boolean));
          firestoreEnqs.forEach(enq => {
            if (!existingTimestamps.has(enq.timestamp)) {
              State.enquiries.push(enq);
            }
          });
        }
      } catch(e) {
        console.warn('Enquiries collection load failed:', e);
      }
      if (academicSnap.exists()) {
        const d = academicSnap.data();
        State.notices = d.notices || State.notices;
        State.homework = d.homework || State.homework;
        State.attendance = d.attendance || State.attendance;
        State.staffAttendance = d.staffAttendance || State.staffAttendance;
        State.auditLog = d.auditLog || State.auditLog;
      }

      // Fallback: try old "schoolData/meta" document if new collections are empty
      // (handles migration from old data structure on first run)
      if (!configSnap.exists() && !financeSnap.exists() && !academicSnap.exists()) {
        const oldMetaSnap = await getDoc(doc(window.db, 'schoolData', 'meta'));
        if (oldMetaSnap.exists()) {
          const data = oldMetaSnap.data();
          State.ledger = data.ledger || State.ledger;
          State.feeLog = data.feeLog || State.feeLog;
          State.enquiries = data.enquiries || State.enquiries;
          State.notices = data.notices || State.notices;
          State.smsLog = data.smsLog || State.smsLog;
          State.attendance = data.attendance || State.attendance;
          State.staffAttendance = data.staffAttendance || State.staffAttendance;
          State.payrollConfig = data.payrollConfig || State.payrollConfig;
          State.staffPasswords = data.staffPasswords || State.staffPasswords;
          State.homework = data.homework || State.homework;
          State.auditLog = data.auditLog || State.auditLog;
          if (data.staff && data.staff.length > 0) State.staff = data.staff;
          if (data.config) State.config = { ...State.config, ...data.config };
          console.log('⚠️ Loaded from old meta structure — will migrate on next save.');
        }
      }

      const hasData = !studentSnaps.empty || configSnap.exists() || financeSnap.exists() || academicSnap.exists();
      if (!hasData) {
        console.log('No Firestore data found — seeding and pushing to Firebase...');
        seedDatabase();
      } else {
        console.log('✅ Data loaded from Firestore!');
      migrateOldClassNames();
        renderDashboard();
      }
    } catch(e) {
      console.warn('Firestore load failed, using localStorage:', e);
      seedDatabase();
    }
  } catch(e) {
    console.warn('Firebase init failed, using localStorage:', e);
    seedDatabase();
  }
  
  // Apply Date and settings configuration
  renderDateDisplay();
  applySettingsConfig();
  applyLanguage();
  // Render teacher attendance panel if teacher role
  if (State.auth.currentRole === 'teacher') {
    setTimeout(() => renderTeacherAttendanceStatus(), 500);
  }
  
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

  dobRow.style.display = 'none'; // Always hide DOB row now that students use passwords

  if (role === 'admin') {
    userRow.style.display = 'block';
    passRow.style.display = 'block';
    userLbl.textContent = 'Admin Username';
    document.getElementById('login-username').placeholder = 'E.g., admin';
  } else if (role === 'teacher') {
    userRow.style.display = 'block';
    passRow.style.display = 'block'; // Password required — set by admin
    userLbl.textContent = 'Staff Portal Username';
    document.getElementById('login-username').placeholder = 'Enter your portal username';
  } else if (role === 'student') {
    userRow.style.display = 'block';
    passRow.style.display = 'block';
    userLbl.textContent = 'Registered Student ID';
    document.getElementById('login-username').placeholder = 'E.g., SAC-001';
    document.getElementById('login-password').placeholder = '••••••••';
  }
}

async function executeLogin() {
  const errorEl = document.getElementById('login-error');
  const username = document.getElementById('login-username').value.trim();
  const passVal = document.getElementById('login-password').value;

  errorEl.style.display = 'none';

  if (!username) {
    errorEl.textContent = 'Please provide a valid entry name or ID.';
    errorEl.style.display = 'block';
    return;
  }

  try {
    // Salt is 'admin' for admin, or uppercase username/ID for others
    // Only use Firebase Auth for admin, use local auth for student/teacher
    if (activeLoginRole !== 'admin') {
      // Local authentication for student and teacher
      const key = username.toUpperCase();
      let authenticatedUser = null;
      if (activeLoginRole === 'teacher') {
        // Match by staff ID or username
        const staffMember = State.staff.find(st =>
          (st.username && st.username === username.toLowerCase()) ||
          st.id.toUpperCase() === username.toUpperCase()
        );
        if (staffMember) {
          // Check password from BOTH sources - staffPasswords dict takes priority
          const storedPass = State.staffPasswords[staffMember.id] || staffMember.password || '';
          if (passVal.trim() === storedPass) authenticatedUser = staffMember;
          else showToast('Wrong Password', 'Incorrect password. Contact admin.', 'ti-lock');
        } else {
          showToast('Not Found', 'Staff ID not found. Contact admin.', 'ti-user-off');
        }
      } else if (activeLoginRole === 'student') {
        // Match by auto-generated ID: first3LettersOfName + vbns + enrollmentNumber
        const studentMember = State.students.find(s => {
          const namePart = s.name.replace(/\s+/g, '').substring(0, 3).toLowerCase();
          const idNum = s.id.replace(/[^0-9]/g, '').padStart(3, '0');
          const generatedId = namePart + 'vbns' + idNum;
          return generatedId === username.toLowerCase();
        });
        if (studentMember) {
          // Password: first3LettersOfName + DOB in ddmmyyyy
          const namePart = studentMember.name.replace(/\s+/g, '').substring(0, 3).toLowerCase();
          const dob = studentMember.dob || '';
          const dobParts = dob.split('-'); // yyyy-mm-dd
          const dobFormatted = dobParts.length === 3 ? dobParts[2] + dobParts[1] + dobParts[0] : '';
          const generatedPass = namePart + dobFormatted;
          const storedPass = studentMember.password && studentMember.password !== 'student123' ? studentMember.password : generatedPass;
          if (passVal.trim() === storedPass) authenticatedUser = studentMember;
        }
      }
      if (authenticatedUser) {
        // If staff member is marked as accountant, override role
        const effectiveRole = (activeLoginRole === 'teacher' && authenticatedUser.isAccountant) ? 'accountant' : activeLoginRole;
        State.auth.currentRole = effectiveRole;
        State.auth.currentUser = authenticatedUser;
        sessionStorage.setItem('apex_auth_role', effectiveRole);
        sessionStorage.setItem('apex_auth_user', JSON.stringify(authenticatedUser));
        logActivity(authenticatedUser.name, 'User Login', 'security', `Successfully authorized as ${effectiveRole.toUpperCase()}`);
        applySessionAccessLayout();
        const defaultTab = effectiveRole === 'student' ? 'fees' : effectiveRole === 'accountant' ? 'report' : 'dashboard';
        nav(defaultTab);
        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';
        showToast('Login Granted', `Welcome back, ${authenticatedUser.name}!`, 'ti-circle-key-filled');
      } else {
        errorEl.textContent = 'Incorrect ID or password. Please try again.';
        errorEl.style.display = 'block';
      }
      return;
    }

    const salt = activeLoginRole === 'admin' ? 'admin' : username.toUpperCase();
    const passwordHash = passVal;

    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAO8dHzpF-mWhr6sY0LSOxdPs5RQEj9gKU', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: username, password: passVal.trim(), returnSecureToken: true })
    });

    const data = await response.json();
    if (response.ok && data.idToken) {
      const authenticatedUser = { name: username, email: username, role: activeLoginRole, uid: data.localId };
      
      State.auth.currentRole = activeLoginRole;
      State.auth.currentUser = authenticatedUser;
      
      sessionStorage.setItem('apex_auth_role', activeLoginRole);
      sessionStorage.setItem('apex_auth_user', JSON.stringify(authenticatedUser));

      logActivity(authenticatedUser.name, 'User Login', 'security', `Successfully authorized as ${activeLoginRole.toUpperCase()}`);

      applySessionAccessLayout();
      
      const defaultTab = activeLoginRole === 'student' ? 'fees' : 'dashboard';
      nav(defaultTab);
      
      document.getElementById('login-username').value = '';
      document.getElementById('login-password').value = '';
      showToast('Login Granted', `Welcome back, ${authenticatedUser.name}!`, 'ti-circle-key-filled');
    } else {
      errorEl.textContent = data.message || 'Incorrect login details.';
      errorEl.style.display = 'block';
    }
  } catch (err) {
    console.warn("Backend unreachable, using local authentication fallback...", err);
    
    // Client-side authentication fallback (used on GitHub Pages / when server is offline)
    let authenticatedUser = null;
    let localRole = activeLoginRole;
    const key = username.toUpperCase();

    if (localRole === 'admin') {
      if (username.toLowerCase() === 'admin' && passVal.trim() === 'Raghu123!') {
        authenticatedUser = { name: "CRM Super Admin", id: "admin" };
      }
    } else if (localRole === 'teacher') {
      // Match by staff ID or username
      const staffMember = State.staff.find(st =>
        (st.username && st.username === username.toLowerCase()) ||
        st.id.toUpperCase() === username.toUpperCase()
      );
      if (staffMember) {
        // Check both sources - staffPasswords takes priority
        const storedPass = State.staffPasswords[staffMember.id] || staffMember.password || '';
        if (passVal.trim() === storedPass) authenticatedUser = staffMember;
      }
    } else if (localRole === 'student') {
      const studentMember = State.students.find(s => {
        const namePart = s.name.replace(/\s+/g, '').substring(0, 3).toLowerCase();
        const idNum = s.id.replace(/[^0-9]/g, '').padStart(3, '0');
        const generatedId = namePart + 'vbns' + idNum;
        return generatedId === username.toLowerCase();
      });
      if (studentMember) {
        const namePart = studentMember.name.replace(/\s+/g, '').substring(0, 3).toLowerCase();
        const dob = studentMember.dob || '';
        const dobParts = dob.split('-');
        const dobFormatted = dobParts.length === 3 ? dobParts[2] + dobParts[1] + dobParts[0] : '';
        const generatedPass = namePart + dobFormatted;
        const storedPass = studentMember.password && studentMember.password !== 'student123' ? studentMember.password : generatedPass;
        if (passVal.trim() === storedPass) {
          authenticatedUser = studentMember;
        }
      }
    }

    if (authenticatedUser) {
      const effectiveRole2 = (localRole === 'teacher' && authenticatedUser.isAccountant) ? 'accountant' : localRole;
      State.auth.currentRole = effectiveRole2;
      State.auth.currentUser = authenticatedUser;
      
      sessionStorage.setItem('apex_auth_role', effectiveRole2);
      sessionStorage.setItem('apex_auth_user', JSON.stringify(authenticatedUser));

      logActivity(authenticatedUser.name, 'User Login', 'security', `Successfully authorized as ${effectiveRole2.toUpperCase()}`);

      applySessionAccessLayout();
      
      const defaultTab = effectiveRole2 === 'student' ? 'fees' : effectiveRole2 === 'accountant' ? 'report' : 'dashboard';
      nav(defaultTab);
      
      document.getElementById('login-username').value = '';
      document.getElementById('login-password').value = '';
      showToast('Login Granted', `Welcome back, ${authenticatedUser.name}!`, 'ti-circle-key-filled');
    } else {
      errorEl.textContent = 'Incorrect ID or password. Please try again.';
      errorEl.style.display = 'block';
    }
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

  document.documentElement.classList.remove('crm-active');
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

  document.documentElement.classList.remove('crm-active');
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

  document.documentElement.classList.add('crm-active');
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

  // Show/hide role-based content panels
  document.querySelectorAll('[data-roles]').forEach(el => {
    const roles = el.getAttribute('data-roles').split(' ');
    if (roles.includes(role)) {
      el.style.display = '';
    } else {
      el.style.display = 'none';
    }
  });

  // Render teacher attendance panel
  if (role === 'teacher') {
    setTimeout(() => renderTeacherAttendanceStatus(), 300);
  }
}

// -------------------------------------------------------------
// SPA View Routing & Dynamic Clearances (With Settings Controls Mapped!)
// -------------------------------------------------------------
function nav(tabId, sidebarElement) {
  const currentRole = State.auth.currentRole || 'student';
  
  // Student view limits
  const studentClearance = ['fees', 'notice', 'attendance', 'results', 'exam', 'idcards', 'admit', 'homework'];
  
  // Accountant view: fees, ledger, reports, notices, SMS
  const accountantClearance = ['dashboard', 'admission', 'fees', 'ledger', 'report', 'notice', 'sms', 'enquiry'];

  // Dynamic Faculty view limits
  let teacherClearance = ['dashboard', 'homework'];
  if (currentRole === 'teacher') {
    const activeStaff = State.auth.currentUser;
    if (activeStaff && activeStaff.access) {
      teacherClearance = ['dashboard', 'homework', ...activeStaff.access];
    } else {
      teacherClearance = ['dashboard', 'homework', 'directory', 'fees', 'notice', 'attendance', 'timetable', 'exam', 'results', 'library', 'transport'];
    }
  }

  const accessAllowances = {
    admin: ['dashboard', 'admission', 'directory', 'idcards', 'admit', 'fees', 'ledger', 'report', 'payroll', 'sms', 'notice', 'enquiry', 'attendance', 'staffattendance', 'timetable', 'exam', 'results', 'library', 'transport', 'staff', 'settings', 'homework', 'audit'],
    teacher: teacherClearance,
    accountant: accountantClearance,
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
  if (titleEl) titleEl.textContent = titles[tabId] || 'VBNIC';

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
      openStaffAttendanceWithGeoCheck();
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
      populateGradeStudentDropdown();
      initGradeSubjectRows();
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

  // 5. Student Quick-Jump Overview Panel
  if (currentRole === 'student') {
    renderStudentOverview();
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
async function admitStudent() {
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
    enrolledDate: currentDateStr,
    password: (name.replace(/\s+/g, '').substring(0, 3).toLowerCase()) + (dob ? dob.split('-').reverse().join('') : '')
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
  
  // Student password stored in Firestore via saveState() below

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
        <i class="ti ti-circle-check"></i> Student registered! Login ID: ${nextId} | Password: ${name.replace(/\s+/g, '').substring(0,3).toLowerCase() + (dob ? dob.split('-').reverse().join('') : 'setDOB')}
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
        <td colspan="8" class="center-col" style="color: var(--text-tertiary); padding: 32px 0;">
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

    // Fee calculations
    const annualFee = s.fee || 0;
    const balance = s.balance || 0;
    const paid = annualFee - balance;

    // Attendance calculation
    const att = State.attendance || {};
    let present = 0, total = 0;
    Object.values(att).forEach(dayRecord => {
      if (dayRecord[s.id] !== undefined) {
        total++;
        if (dayRecord[s.id] === 'P') present++;
      }
    });
    const attPct = total > 0 ? Math.round((present / total) * 100) : null;
    const attDisplay = total > 0 ? `${attPct}% (${present}/${total})` : '—';
    const attColor = attPct === null ? 'var(--text-secondary)' : attPct >= 75 ? 'var(--color-success,#38a169)' : 'var(--color-danger,#e53e3e)';

    // Marks from results
    const results = State.results && State.results[s.id];
    let marksDisplay = '—';
    if (results) {
      const allMarks = Object.values(results).flatMap(exam => Object.values(exam));
      if (allMarks.length > 0) {
        const avg = Math.round(allMarks.reduce((a, b) => a + b, 0) / allMarks.length);
        marksDisplay = avg + '%';
      }
    }

    // DOB formatting
    const dobStr = s.dob ? new Date(s.dob).toLocaleDateString('en-IN', {day:'2-digit', month:'short', year:'numeric'}) : '—';

    return `
      <tr>
        <td><b>${s.id}</b></td>
        <td><b>${s.name}</b></td>
        <td>${s.cls} — Sec ${s.sec}</td>
        <td><span style="font-size:12px">${s.parent}<br><small style="color:var(--text-secondary)">${s.phone}</small></span></td>
        <td style="font-weight:600">${formatCurrency(annualFee)}</td>
        <td style="color:var(--color-success,#38a169); font-weight:600">${formatCurrency(paid)}</td>
        <td style="color:${balance > 0 ? 'var(--color-danger,#e53e3e)' : 'var(--color-success,#38a169)'}; font-weight:600">${formatCurrency(balance)}</td>
        <td><span class="pill ${s.status === 'Paid' ? 'pill-green' : s.status === 'Pending' ? 'pill-red' : 'pill-amber'}">${s.status}</span></td>
        <td style="color:${attColor}; font-weight:600; font-size:12px">${attDisplay}</td>
        <td style="font-weight:600">${marksDisplay}</td>
        <td style="font-size:12px">${dobStr}</td>
        <td style="display:flex; gap:4px; flex-wrap:wrap;">
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

function filterFeeLog() {
  const search = (document.getElementById('fee-log-search')?.value || '').toLowerCase();
  const cls = document.getElementById('fee-log-class')?.value || '';
  renderFeeCollectionLogsTable(search, cls);
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
  const role = State.auth.currentRole;

  if (role === 'teacher') {
    // Teacher sees only their class fee summary
    const teacher = State.auth.currentUser;
    const assignedClass = teacher?.assignedClass || '';
    const classStudents = State.students.filter(s => s.cls === assignedClass);

    const totalFee = classStudents.reduce((sum, s) => sum + (s.fee || 0), 0);
    const totalPaid = classStudents.reduce((sum, s) => sum + ((s.fee || 0) - (s.balance || 0)), 0);
    const totalDue = classStudents.reduce((sum, s) => sum + (s.balance || 0), 0);
    const paidCount = classStudents.filter(s => s.status === 'Paid').length;
    const pendingCount = classStudents.filter(s => s.status === 'Pending').length;
    const partialCount = classStudents.filter(s => s.status === 'Partial').length;

    const collectCard = document.getElementById('fees-collect-card');
    if (collectCard) collectCard.style.display = 'none';

    const receiptBox = document.getElementById('fee-receipt-box');
    if (receiptBox) {
      receiptBox.innerHTML = `
        <div class="card-header">
          <h2 class="section-title"><i class="ti ti-report-money"></i> ${assignedClass} — Fee Summary</h2>
          <span class="card-subtitle">Fee status of your assigned class students</span>
        </div>
        <div style="padding:16px; display:grid; grid-template-columns:repeat(auto-fit,minmax(140px,1fr)); gap:12px;">
          <div style="background:var(--bg-secondary); border-radius:10px; padding:14px; text-align:center;">
            <div style="font-size:11px; color:var(--text-secondary); font-weight:600; text-transform:uppercase;">Total Students</div>
            <div style="font-size:24px; font-weight:700; color:var(--text-primary); margin-top:4px;">${classStudents.length}</div>
          </div>
          <div style="background:var(--bg-secondary); border-radius:10px; padding:14px; text-align:center;">
            <div style="font-size:11px; color:var(--text-secondary); font-weight:600; text-transform:uppercase;">Total Annual Fee</div>
            <div style="font-size:20px; font-weight:700; color:var(--text-primary); margin-top:4px;">${formatCurrency(totalFee)}</div>
          </div>
          <div style="background:rgba(56,161,105,0.1); border-radius:10px; padding:14px; text-align:center;">
            <div style="font-size:11px; color:var(--text-secondary); font-weight:600; text-transform:uppercase;">Amount Collected</div>
            <div style="font-size:20px; font-weight:700; color:var(--color-success,#38a169); margin-top:4px;">${formatCurrency(totalPaid)}</div>
          </div>
          <div style="background:rgba(229,62,62,0.1); border-radius:10px; padding:14px; text-align:center;">
            <div style="font-size:11px; color:var(--text-secondary); font-weight:600; text-transform:uppercase;">Outstanding Due</div>
            <div style="font-size:20px; font-weight:700; color:var(--color-danger,#e53e3e); margin-top:4px;">${formatCurrency(totalDue)}</div>
          </div>
          <div style="background:rgba(56,161,105,0.1); border-radius:10px; padding:14px; text-align:center;">
            <div style="font-size:11px; color:var(--text-secondary); font-weight:600; text-transform:uppercase; margin-bottom:4px;">Fully Paid</div>
            <div style="font-size:22px; font-weight:700; color:var(--color-success,#38a169);">${paidCount}</div>
          </div>
          <div style="background:rgba(245,158,11,0.1); border-radius:10px; padding:14px; text-align:center;">
            <div style="font-size:11px; color:var(--text-secondary); font-weight:600; text-transform:uppercase; margin-bottom:4px;">Partial</div>
            <div style="font-size:22px; font-weight:700; color:var(--color-warning,#d97706);">${partialCount}</div>
          </div>
          <div style="background:rgba(229,62,62,0.1); border-radius:10px; padding:14px; text-align:center;">
            <div style="font-size:11px; color:var(--text-secondary); font-weight:600; text-transform:uppercase; margin-bottom:4px;">Pending</div>
            <div style="font-size:22px; font-weight:700; color:var(--color-danger,#e53e3e);">${pendingCount}</div>
          </div>
        </div>
        <div style="padding:0 16px 16px;">
          <table class="premium-table text-left" style="width:100%">
            <thead><tr><th>ID</th><th>Student</th><th>Annual Fee</th><th>Paid</th><th>Due</th><th>Status</th></tr></thead>
            <tbody>
              ${classStudents.map(s => {
                const paid = (s.fee || 0) - (s.balance || 0);
                const dueColor = s.balance > 0 ? 'var(--color-danger,#e53e3e)' : 'var(--color-success,#38a169)';
                const pillClass = s.status === 'Paid' ? 'pill-green' : s.status === 'Pending' ? 'pill-red' : 'pill-amber';
                return '<tr>' +
                  '<td><b>' + s.id + '</b></td>' +
                  '<td>' + s.name + '</td>' +
                  '<td>' + formatCurrency(s.fee || 0) + '</td>' +
                  '<td style="color:var(--color-success,#38a169);font-weight:600">' + formatCurrency(paid) + '</td>' +
                  '<td style="color:' + dueColor + ';font-weight:600">' + formatCurrency(s.balance || 0) + '</td>' +
                  '<td><span class="pill ' + pillClass + '">' + s.status + '</span></td>' +
                  '</tr>';
              }).join('')}
            </tbody>
          </table>
        </div>
      `;
    }
    renderFeeCollectionLogsTable();
    return;
  }

  renderFeeCollectionLogsTable();
  if (role === 'student') {
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

function renderFeeCollectionLogsTable(searchFilter, classFilter) {
  const tbody = document.getElementById('fee-log-body');
  if (!tbody) return;

  const currentRole = State.auth.currentRole;
  const search = (searchFilter || document.getElementById('fee-log-search')?.value || '').toLowerCase();
  const cls = classFilter || document.getElementById('fee-log-class')?.value || '';

  // Filter logs for logged-in students to ensure security
  let logs = State.feeLog;
  if (currentRole === 'student') {
    const student = State.auth.currentUser;
    logs = State.feeLog.filter(l => l.studentId === student.id);
  }

  // Apply search and class filters
  if (search) {
    logs = logs.filter(l => l.name.toLowerCase().includes(search) || l.studentId.toLowerCase().includes(search));
  }
  if (cls) {
    logs = logs.filter(l => {
      const stu = State.students.find(s => s.id === l.studentId);
      return stu && stu.cls === cls;
    });
  }

  logs = [...logs].reverse();

  if (logs.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="center-col" style="color:var(--text-tertiary)">No transactions found.</td></tr>`;
    return;
  }

  tbody.innerHTML = logs.map(l => {
    const stu = State.students.find(s => s.id === l.studentId);
    const stuClass = stu ? stu.cls : '—';
    const deleteCell = (currentRole === 'admin' || currentRole === 'accountant') ? 
      `<td><button class="btn btn-sm btn-danger" onclick="removeFeeLog('${l.receipt}'); event.stopPropagation();"><i class="ti ti-trash"></i> Delete</button></td>` : '';

    return `
      <tr onclick="viewReceipt('${l.receipt}')" style="cursor: pointer" title="Click to view receipt">
        <td><b>${l.receipt}</b></td>
        <td>${l.name} (${l.studentId})</td>
        <td style="font-size:12px">${stuClass}</td>
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

  const classesList = ['Playway','L.KG.','U.KG.','Class 1','Class 2','Class 3','Class 4','Class 5','Class 6','Class 7','Class 8','Class 9','Class 10'];
  const breakdown = classesList.map(grade => {
    const studentsInClass = State.students.filter(s => s.cls === grade);
    if (studentsInClass.length === 0) return null;
    const count = studentsInClass.length;
    const billed = studentsInClass.reduce((sum, s) => sum + s.fee, 0);
    const pending = studentsInClass.reduce((sum, s) => sum + s.balance, 0);
    const collected = billed - pending;
    const ratio = billed > 0 ? Math.round((collected / billed) * 100) : 0;
    // List defaulters (students with balance > 0)
    const defaulters = studentsInClass.filter(s => s.balance > 0).map(s => `${s.name} (${formatCurrency(s.balance)} due)`).join(', ');
    return { grade, count, billed, collected, pending, ratio, defaulters };
  }).filter(item => item !== null);

  // Class-wise summary panel — shown to admin and accountant
  const role = State.auth.currentRole;
  const summaryPanel = document.getElementById('rpt-classwise-panel');
  if (summaryPanel && (role === 'admin' || role === 'accountant')) {
    if (breakdown.length === 0) {
      summaryPanel.innerHTML = `<p style="color:var(--text-tertiary); padding:12px;">No student data yet.</p>`;
    } else {
      summaryPanel.innerHTML = breakdown.map(item => `
        <div style="border:1px solid var(--border-primary); border-radius:var(--border-radius-md); padding:14px; background:var(--bg-secondary); margin-bottom:10px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <b style="font-size:14px;">${item.grade}</b>
            <span class="pill ${item.ratio >= 90 ? 'pill-green' : item.ratio >= 50 ? 'pill-amber' : 'pill-red'}">${item.ratio}% Collected</span>
          </div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px; font-size:12px; margin-bottom:6px;">
            <div><span style="color:var(--text-secondary)">Students</span><br><b>${item.count}</b></div>
            <div><span style="color:var(--color-success)">Paid</span><br><b>${formatCurrency(item.collected)}</b></div>
            <div><span style="color:var(--color-danger)">Due</span><br><b>${formatCurrency(item.pending)}</b></div>
          </div>
          ${item.defaulters ? `<div style="font-size:11px; color:var(--color-danger); margin-top:4px;"><b>Defaulters:</b> ${item.defaulters}</div>` : `<div style="font-size:11px; color:var(--color-success);">✅ All fees cleared</div>`}
        </div>
      `).join('');
    }
  }

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
        <td class="text-right" style="color:var(--color-success)">${formatCurrency(item.collected)}</td>
        <td class="text-right" style="color:var(--color-danger)">${formatCurrency(item.pending)}</td>
        <td><span class="pill ${pillClass}">${item.ratio}% FULFILLED</span></td>
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

    // Dynamic Attendance Deduction
    let absencesCount = 0;
    let lateCount = 0;
    const dailySalary = conf.base / 26; // 26 working days
    const halfDaySalary = dailySalary / 2;

    // Count absences and late arrivals
    Object.values(State.staffAttendance).forEach(dayList => {
      const rec = dayList.find(r => r.id === st.id);
      if (rec) {
        if (rec.status === 'Absent') absencesCount++;
        if (rec.status === 'Late' || rec.lateDeduction) lateCount++;
      }
    });

    const stats = getStaffAttendanceStats(st.id);
    const absenceDeduct = Math.round(absencesCount * dailySalary);
    const lateDeduct = Math.round(lateCount * halfDaySalary); // Half day for late
    const attendanceDeduct = absenceDeduct + lateDeduct;
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
            ${stats.present}P / ${stats.absent}A / ${lateCount}Late / ${stats.leave}L
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
  const canEdit = currentRole === 'admin' || currentRole === 'teacher';
  const list = [...State.notices].reverse();

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-preview" style="padding: 32px; text-align:center;">
        <i class="ti ti-bell-off" style="font-size:36px; color:var(--text-tertiary); display:block; margin-bottom:10px;"></i>
        <p style="color:var(--text-tertiary)">No notices published yet. Use the form above to post the first announcement.</p>
      </div>`;
    return;
  }

  const countBadge = `<div style="padding: 8px 16px 4px; font-size:11px; color:var(--text-tertiary); font-weight:600; text-transform:uppercase; letter-spacing:0.5px;">
    ${list.length} Notice${list.length > 1 ? 's' : ''} Published
  </div>`;

  const cards = list.map((item, index) => {
    const realIndex = State.notices.length - 1 - index;
    let pClass = 'normal';
    if (item.priority.includes('Urgent')) pClass = 'urgent';
    else if (item.priority.includes('Important')) pClass = 'important';

    const editedTag = item.editedAt ? `<span style="font-size:10px; color:var(--text-tertiary); margin-left:6px;">(edited ${item.editedAt})</span>` : '';

    const actionBtns = canEdit ? `
      <div style="position:absolute; right:12px; bottom:10px; display:flex; gap:6px;">
        <button class="btn btn-sm" style="font-size:10px; padding:3px 8px; background:var(--accent-light); color:var(--accent);" onclick="editNotice(${realIndex})">
          <i class="ti ti-pencil"></i> Edit
        </button>
        <button class="btn btn-sm btn-danger" style="font-size:10px; padding:3px 8px" onclick="removeNotice(${realIndex})">
          <i class="ti ti-trash"></i> Delete
        </button>
      </div>` : '';

    return `
      <div class="notice-card" style="padding-bottom: 44px; position:relative;">
        <div class="notice-title-row">
          <h4>${item.title}${editedTag}</h4>
          <span class="badge-priority ${pClass}">${item.priority.split(' ')[0]}</span>
        </div>
        <p>${item.body}</p>
        <div class="meta">
          <span>Author: <b>${item.by}</b></span>
          <span>Date: ${item.date}</span>
        </div>
        ${actionBtns}
      </div>
    `;
  }).join('');

  container.innerHTML = countBadge + cards;
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
  renderPublicNotices();

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
// NOTICE EDIT FUNCTIONS
// -------------------------------------------------------------
let _editingNoticeIndex = null;

function editNotice(realIndex) {
  const nt = State.notices[realIndex];
  if (!nt) return;
  _editingNoticeIndex = realIndex;

  const titleEl = document.getElementById('nt-title');
  const bodyEl = document.getElementById('nt-body');
  const priorityEl = document.getElementById('nt-priority');
  const submitBtn = document.getElementById('nt-submit-btn');

  if (titleEl) titleEl.value = nt.title;
  if (bodyEl) bodyEl.value = nt.body;
  if (priorityEl) priorityEl.value = nt.priority;
  if (submitBtn) {
    submitBtn.innerHTML = '<i class="ti ti-device-floppy"></i> Save Changes';
    submitBtn.onclick = saveNoticeEdit;
    submitBtn.style.background = 'var(--color-warning)';
  }

  const formCard = document.querySelector('#tab-notice .card');
  if (formCard) formCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  showToast('Edit Mode', `Editing: "${nt.title}"`, 'ti-pencil');
}

function saveNoticeEdit() {
  if (_editingNoticeIndex === null) return;

  const titleEl = document.getElementById('nt-title');
  const bodyEl = document.getElementById('nt-body');
  const priorityEl = document.getElementById('nt-priority');

  const title = titleEl.value.trim();
  const body = bodyEl.value.trim();
  const priority = priorityEl.value;

  if (!title || !body) {
    showToast('Validation Error', 'Fill notice title and body content.', 'ti-alert-circle');
    return;
  }

  State.notices[_editingNoticeIndex].title = title;
  State.notices[_editingNoticeIndex].body = body;
  State.notices[_editingNoticeIndex].priority = priority;
  State.notices[_editingNoticeIndex].editedAt = new Date().toISOString().split('T')[0];

  const actor = State.auth.currentUser ? State.auth.currentUser.name : 'System Admin';
  logActivity(actor, 'Notice Edited', 'system', `Updated notice: ${title}`);
  saveState();
  renderNoticeList();
  renderPublicNotices();

  // Reset form back to post mode
  titleEl.value = '';
  bodyEl.value = '';
  _editingNoticeIndex = null;

  const submitBtn = document.getElementById('nt-submit-btn');
  if (submitBtn) {
    submitBtn.innerHTML = '<i class="ti ti-speakerphone"></i> Publish Announcement';
    submitBtn.onclick = postNoticeBoardBulletin;
    submitBtn.style.background = '';
  }

  showToast('Notice Updated', 'Bulletin notice updated successfully.', 'ti-circle-check');
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
  subtitleEl.textContent = "Select class and date to mark or view attendance";
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
  const statsContainer = document.getElementById('student-att-stats-summary');
  const studentsInClass = State.students.filter(s => s.cls === grade);

  // If no date selected, show cumulative summary for all students in class
  if (!dateStr) {
    if (statsContainer) statsContainer.style.display = 'none';
    if (studentsInClass.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" class="center-col" style="color:var(--text-tertiary); padding:32px 0;">No students in ${grade}. Add students via New Admission first.</td></tr>`;
      return;
    }
    document.getElementById('student-att-table-header').innerHTML = `
      <th>Roll ID</th><th>Student Name</th>
      <th class="center-col">Total Days</th>
      <th class="center-col">Present</th>
      <th class="center-col">Absent</th>
    `;
    tbody.innerHTML = studentsInClass.map(s => {
      const st = getStudentAttendanceStats(s.id);
      const pct = st.total > 0 ? Math.round(st.present / st.total * 100) : 0;
      const color = pct >= 75 ? 'var(--color-success,#38a169)' : pct > 0 ? 'var(--color-warning,#d97706)' : 'var(--text-secondary)';
      return `<tr>
        <td><b>${s.id}</b></td>
        <td><b>${s.name}</b></td>
        <td class="center-col">${st.total}</td>
        <td class="center-col" style="color:var(--color-success,#38a169); font-weight:600">${st.present} <small>(${pct}%)</small></td>
        <td class="center-col" style="color:var(--color-danger,#e53e3e); font-weight:600">${st.absent}</td>
      </tr>`;
    }).join('');
    return;
  }

  const listKey = `${grade}_${dateStr}`;
  let records = State.attendance[listKey];

  if (studentsInClass.length === 0) {
    if (statsContainer) statsContainer.style.display = 'none';
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="center-col" style="color:var(--text-tertiary); padding: 32px 0;">
          No students registered in ${grade}. Add students via New Admission first.
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
// ---------------------------------------------------------------
// GEOLOCATION GATE FOR STAFF ATTENDANCE
// School: Vandey Bharti National Intermediate College, Mahamda, Partawal, Maharajganj – 273303
// Coordinates: 27.3423° N, 83.4971° E  |  Radius: 40 metres (strict school-compound boundary)
// ---------------------------------------------------------------
const SCHOOL_GEO = {
  lat: 26.943528,      // Vandey Bharti National Intermediate College, Shyamdeurwa
  lng: 83.549833,
  radiusMeters: 40,    // 40 meter radius
  lateAfter: '08:35',  // After this time = Late
  absentAfter: '14:00' // After 2 PM = auto Absent
};

function getDistanceMeters(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(Δφ/2)**2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function showStaffAttGeoLocked(message, icon = 'ti-map-pin-off') {
  const tbody = document.getElementById('staff-att-body');
  const statsContainer = document.getElementById('staff-att-stats-summary');
  if (statsContainer) statsContainer.style.display = 'none';
  if (tbody) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="padding: 48px 24px; text-align: center;">
          <div style="display:flex; flex-direction:column; align-items:center; gap:14px;">
            <div style="width:64px; height:64px; border-radius:50%; background:rgba(239,68,68,0.1); display:flex; align-items:center; justify-content:center;">
              <i class="ti ${icon}" style="font-size:28px; color:var(--color-danger);"></i>
            </div>
            <div style="font-size:16px; font-weight:700; color:var(--text-primary);">Access Restricted</div>
            <div style="font-size:13px; color:var(--text-secondary); max-width:380px; line-height:1.6;">${message}</div>
          </div>
        </td>
      </tr>
    `;
  }
}

async function openStaffAttendanceWithGeoCheck() {
  const tbody = document.getElementById('staff-att-body');
  const statsContainer = document.getElementById('staff-att-stats-summary');
  if (statsContainer) statsContainer.style.display = 'none';
  if (tbody) tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:40px;"><i class="ti ti-map-pin" style="font-size:28px; display:block; margin-bottom:8px; color:var(--accent);"></i><span style="color:var(--text-secondary); font-size:13px;">Verifying school location…</span></td></tr>`;

  if (!navigator.geolocation) {
    showStaffAttGeoLocked('Your device does not support GPS / Geolocation. Staff attendance can only be marked from within the school compound.', 'ti-location-off');
    return;
  }

  // Admin can mark attendance from anywhere
  if (State.auth.currentRole === 'admin') {
    loadStaffAttendanceRegister();
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const dist = getDistanceMeters(pos.coords.latitude, pos.coords.longitude, SCHOOL_GEO.lat, SCHOOL_GEO.lng);
      if (dist <= SCHOOL_GEO.radiusMeters) {
        loadStaffAttendanceRegister();
      } else {
        showStaffAttGeoLocked(`You are currently <b>${Math.round(dist)} metres</b> away from Vandey Bharti National Intermediate College, Shyamdeurwa.<br><br>Staff attendance can only be marked when you are physically inside the school compound (<b>${SCHOOL_GEO.radiusMeters}m radius</b>).`, 'ti-map-pin-off');
      }
    },
    (err) => {
      showStaffAttGeoLocked('Location permission was denied. Please allow location access in your browser to mark staff attendance. This ensures attendance is recorded only from within school premises.', 'ti-location-off');
    },
    { timeout: 8000, maximumAge: 60000, enableHighAccuracy: true }
  );
}

function loadStaffAttendanceRegister() {
  const dateInput = document.getElementById('staff-att-date');
  const today = new Date().toISOString().split('T')[0];
  if (dateInput && !dateInput.value) dateInput.value = today;
  const dateStr = dateInput ? dateInput.value : today;
  const tbody = document.getElementById('staff-att-body');
  if (!tbody || !dateStr) return;

  // Same-day rule: if the selected date is before today and no records exist, auto-mark all Absent
  let records = State.staffAttendance[dateStr];
  const isPastDay = dateStr < today;

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
    // Auto-mark as Absent if it's a past day with no records
    const defaultStatus = isPastDay ? 'Absent' : 'Present';
    records = State.staff.map(st => ({
      id: st.id,
      name: st.name,
      role: st.role,
      status: defaultStatus
    }));
    State.staffAttendance[dateStr] = records;
    if (isPastDay) {
      saveState();
      showToast('Auto-Marked Absent', `No attendance was submitted for ${dateStr}. All staff marked Absent.`, 'ti-alert-circle');
    }
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
  const dateInput = document.getElementById('staff-att-date');
  const today = new Date().toISOString().split('T')[0];
  const dateStr = dateInput ? dateInput.value : today;

  // Auto-mark any unsubmitted staff as Absent before saving
  const records = State.staffAttendance[dateStr];
  if (records) {
    let autoAbsent = 0;
    records.forEach(rec => {
      if (!rec.status) {
        rec.status = 'Absent';
        autoAbsent++;
      }
    });
    if (autoAbsent > 0) {
      showToast('Auto-Absent Applied', `${autoAbsent} unmarked staff member(s) were automatically marked Absent.`, 'ti-alert-triangle');
    }
  }

  saveState();

  const actor = State.auth.currentUser ? State.auth.currentUser.name : 'System Admin';
  logActivity(actor, 'Staff Attendance Saved', 'security', `Committed employee attendance register for date ${dateStr}`);

  showToast('Attendance Committed', `Staff attendance for ${dateStr} saved. Any unmarked staff auto-marked Absent.`, 'ti-checkbox');
  loadStaffAttendanceRegister();
  
  if (document.getElementById('tab-payroll') && document.getElementById('tab-payroll').classList.contains('active')) {
    renderStaffPayroll();
  }
}

// -------------------------------------------------------------
// STUDENT QUICK-JUMP OVERVIEW
// -------------------------------------------------------------
function renderStudentOverview() {
  const container = document.getElementById('student-overview-section');
  if (!container) return;

  const student = State.auth.currentUser;
  if (!student) return;

  // Make section visible
  container.style.display = 'block';

  const s = State.students.find(x => x.id === student.id) || student;

  // Fee status
  const feeColor = s.status === 'Paid' ? '#10b981' : s.status === 'Partial' ? '#f59e0b' : '#ef4444';
  const feeIcon = s.status === 'Paid' ? 'ti-circle-check' : s.status === 'Partial' ? 'ti-alert-circle' : 'ti-circle-x';

  // Attendance stats
  const today = new Date().toISOString().split('T')[0];
  let attPresent = 0, attTotal = 0;
  Object.values(State.attendance || {}).forEach(dayList => {
    const myRecord = dayList.find(r => r.id === s.id);
    if (myRecord) { attTotal++; if (myRecord.status === 'Present') attPresent++; }
  });
  const attPct = attTotal > 0 ? Math.round(attPresent / attTotal * 100) : 100;
  const attColor = attPct >= 75 ? '#10b981' : attPct >= 60 ? '#f59e0b' : '#ef4444';

  // Homework count
  const myHomework = (State.homework || []).filter(hw => hw.cls === s.cls);

  // Results
  const myResults = (State.results || {})[s.id];
  const resultSummary = myResults ? `${myResults.subjects.length} subjects graded` : 'Not published yet';

  container.innerHTML = `
    <div style="margin-bottom: 20px;">
      <h3 style="font-family:var(--font-display); font-size:16px; font-weight:700; color:var(--text-primary); margin:0 0 4px 0;"><i class="ti ti-layout-grid" style="color:var(--accent);"></i> My Quick Overview</h3>
      <p style="font-size:12px; color:var(--text-tertiary); margin:0;">Jump directly to any section of your portal</p>
    </div>
    <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap:14px;">

      <!-- Fee Status -->
      <div onclick="nav('fees')" style="cursor:pointer; border-radius:var(--border-radius-md); padding:16px; background:rgba(${s.status === 'Paid' ? '16,185,129' : s.status === 'Partial' ? '245,158,11' : '239,68,68'},0.06); border:1.5px solid rgba(${s.status === 'Paid' ? '16,185,129' : s.status === 'Partial' ? '245,158,11' : '239,68,68'},0.2); transition:transform 0.15s; hover:transform:scale(1.02);" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='none'">
        <i class="ti ${feeIcon}" style="font-size:22px; color:${feeColor}; display:block; margin-bottom:8px;"></i>
        <div style="font-size:11px; font-weight:600; color:var(--text-tertiary); text-transform:uppercase; letter-spacing:0.5px;">Fee Status</div>
        <div style="font-size:14px; font-weight:700; color:${feeColor}; margin-top:3px;">${s.status}</div>
        <div style="font-size:10px; color:var(--text-tertiary); margin-top:2px;">Balance: ₹${(s.balance || 0).toLocaleString()}</div>
      </div>

      <!-- Attendance -->
      <div onclick="nav('attendance')" style="cursor:pointer; border-radius:var(--border-radius-md); padding:16px; background:rgba(99,102,241,0.05); border:1.5px solid rgba(99,102,241,0.15); transition:transform 0.15s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='none'">
        <i class="ti ti-calendar-user" style="font-size:22px; color:${attColor}; display:block; margin-bottom:8px;"></i>
        <div style="font-size:11px; font-weight:600; color:var(--text-tertiary); text-transform:uppercase; letter-spacing:0.5px;">Attendance</div>
        <div style="font-size:14px; font-weight:700; color:${attColor}; margin-top:3px;">${attPct}%</div>
        <div style="font-size:10px; color:var(--text-tertiary); margin-top:2px;">${attPresent} / ${attTotal} days</div>
      </div>

      <!-- Timetable -->
      <div onclick="nav('timetable')" style="cursor:pointer; border-radius:var(--border-radius-md); padding:16px; background:rgba(168,85,247,0.05); border:1.5px solid rgba(168,85,247,0.15); transition:transform 0.15s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='none'">
        <i class="ti ti-calendar-time" style="font-size:22px; color:#a855f7; display:block; margin-bottom:8px;"></i>
        <div style="font-size:11px; font-weight:600; color:var(--text-tertiary); text-transform:uppercase; letter-spacing:0.5px;">My Timetable</div>
        <div style="font-size:14px; font-weight:700; color:#a855f7; margin-top:3px;">${s.cls}</div>
        <div style="font-size:10px; color:var(--text-tertiary); margin-top:2px;">Section ${s.sec}</div>
      </div>

      <!-- Exam Results -->
      <div onclick="nav('results')" style="cursor:pointer; border-radius:var(--border-radius-md); padding:16px; background:rgba(245,158,11,0.05); border:1.5px solid rgba(245,158,11,0.15); transition:transform 0.15s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='none'">
        <i class="ti ti-award" style="font-size:22px; color:#f59e0b; display:block; margin-bottom:8px;"></i>
        <div style="font-size:11px; font-weight:600; color:var(--text-tertiary); text-transform:uppercase; letter-spacing:0.5px;">Exam Results</div>
        <div style="font-size:14px; font-weight:700; color:#f59e0b; margin-top:3px;">${myResults ? 'Available' : 'Pending'}</div>
        <div style="font-size:10px; color:var(--text-tertiary); margin-top:2px;">${resultSummary}</div>
      </div>

      <!-- Homework -->
      <div onclick="nav('homework')" style="cursor:pointer; border-radius:var(--border-radius-md); padding:16px; background:rgba(6,182,212,0.05); border:1.5px solid rgba(6,182,212,0.15); transition:transform 0.15s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='none'">
        <i class="ti ti-pencil" style="font-size:22px; color:#06b6d4; display:block; margin-bottom:8px;"></i>
        <div style="font-size:11px; font-weight:600; color:var(--text-tertiary); text-transform:uppercase; letter-spacing:0.5px;">Homework</div>
        <div style="font-size:14px; font-weight:700; color:#06b6d4; margin-top:3px;">${myHomework.length} Tasks</div>
        <div style="font-size:10px; color:var(--text-tertiary); margin-top:2px;">Active assignments</div>
      </div>

      <!-- Library -->
      <div onclick="nav('library')" style="cursor:pointer; border-radius:var(--border-radius-md); padding:16px; background:rgba(16,185,129,0.05); border:1.5px solid rgba(16,185,129,0.15); transition:transform 0.15s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='none'">
        <i class="ti ti-books" style="font-size:22px; color:#10b981; display:block; margin-bottom:8px;"></i>
        <div style="font-size:11px; font-weight:600; color:var(--text-tertiary); text-transform:uppercase; letter-spacing:0.5px;">Library</div>
        <div style="font-size:14px; font-weight:700; color:#10b981; margin-top:3px;">Books</div>
        <div style="font-size:10px; color:var(--text-tertiary); margin-top:2px;">Issue &amp; return</div>
      </div>

      <!-- Bus Routes -->
      <div onclick="nav('transport')" style="cursor:pointer; border-radius:var(--border-radius-md); padding:16px; background:rgba(239,68,68,0.05); border:1.5px solid rgba(239,68,68,0.15); transition:transform 0.15s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='none'">
        <i class="ti ti-bus" style="font-size:22px; color:#ef4444; display:block; margin-bottom:8px;"></i>
        <div style="font-size:11px; font-weight:600; color:var(--text-tertiary); text-transform:uppercase; letter-spacing:0.5px;">Transport</div>
        <div style="font-size:14px; font-weight:700; color:#ef4444; margin-top:3px;">Routes</div>
        <div style="font-size:10px; color:var(--text-tertiary); margin-top:2px;">Bus schedule</div>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// MODULE 15: WEEKLY CURRICULUM TIMETABLE
// -------------------------------------------------------------
function renderTimetableModule() {
  const tbody = document.getElementById('tt-body');
  if (!tbody) return;

  const selectEl = document.getElementById('tt-class-sel');
  let classKey = selectEl ? selectEl.value : 'Class X-A';

  // If page loaded first time, set selector to teacher's class if applicable
  const currentRole = State.auth.currentRole;
  if (currentRole === 'teacher' && !selectEl) {
    const activeTeacher = State.auth.currentUser;
    if (activeTeacher && activeTeacher.assignedClass) {
      classKey = activeTeacher.assignedClass + '-A';
    }
  }

  // Ensure selector value is correct
  if (selectEl && selectEl.value !== classKey) {
    selectEl.value = classKey;
  }

  const list = State.timetable[classKey];
  if (!list || !Array.isArray(list) || list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="center-col" style="color: var(--text-tertiary); padding: 32px 0;">
          <i class="ti ti-calendar-off" style="font-size: 32px; display: block; margin-bottom: 8px;"></i>
          No timetable schedules mapped for ${classKey} yet.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = list.map(item => `
    <tr>
      <td><b>${item.time}</b></td>
      <td>
        ${item.mon && item.mon.sub && item.mon.sub !== 'Recess' ? `<b>${item.mon.sub}</b><span>${item.mon.t || ''}</span>` : `<i style="color:var(--text-tertiary)">Recess Interval</i>`}
      </td>
      <td>
        ${item.tue && item.tue.sub && item.tue.sub !== 'Recess' ? `<b>${item.tue.sub}</b><span>${item.tue.t || ''}</span>` : `<i style="color:var(--text-tertiary)">Recess Interval</i>`}
      </td>
      <td>
        ${item.wed && item.wed.sub && item.wed.sub !== 'Recess' ? `<b>${item.wed.sub}</b><span>${item.wed.t || ''}</span>` : `<i style="color:var(--text-tertiary)">Recess Interval</i>`}
      </td>
      <td>
        ${item.thu && item.thu.sub && item.thu.sub !== 'Recess' ? `<b>${item.thu.sub}</b><span>${item.thu.t || ''}</span>` : `<i style="color:var(--text-tertiary)">Recess Interval</i>`}
      </td>
      <td>
        ${item.fri && item.fri.sub && item.fri.sub !== 'Recess' ? `<b>${item.fri.sub}</b><span>${item.fri.t || ''}</span>` : `<i style="color:var(--text-tertiary)">Recess Interval</i>`}
      </td>
      <td>
        ${item.sat && item.sat.sub && item.sat.sub !== 'Recess' ? `<b>${item.sat.sub}</b><span>${item.sat.t || ''}</span>` : `<i style="color:var(--text-tertiary)">Recess Interval</i>`}
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
    
    <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:20px">
      ${(State.auth.currentRole === 'admin' || State.auth.currentRole === 'teacher') ? `
      <button class="btn btn-primary" onclick="prefillGradebookEditor('${student.id}')">
        <i class="ti ti-pencil"></i> Edit Marks
      </button>` : ''}
      <button class="btn" onclick="printCard('results-table')">
        <i class="ti ti-printer"></i> Print Gradebook Report
      </button>
    </div>
  `;
}

// -------------------------------------------------------------
// GRADEBOOK ENTRY — Admin & Teacher can enter/edit marks
// -------------------------------------------------------------
function prefillGradebookEditor(studentId) {
  const results = (State.results || {})[studentId];
  if (!results) return;

  // Set student in entry dropdown
  const stuSel = document.getElementById('grade-stu');
  if (stuSel) stuSel.value = studentId;

  // Set exam name
  const examEl = document.getElementById('grade-exam-name');
  if (examEl) examEl.value = results.examName || '';

  // Clear and refill subject rows
  const list = document.getElementById('grade-subjects-list');
  if (list) {
    list.innerHTML = '';
    results.subjects.forEach(s => {
      addGradeSubjectRow();
      const row = list.lastElementChild;
      const inputs = row.querySelectorAll('input');
      inputs[0].value = s.sub;
      inputs[1].value = s.max;
      inputs[2].value = s.marks;
    });
  }

  // Scroll to entry form
  const entryCard = document.querySelector('#tab-results .two-col > .card:last-child');
  if (entryCard) entryCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  showToast('Edit Mode', `Loaded marks for editing — click Save when done.`, 'ti-pencil');
}

function populateGradeStudentDropdown() {
  const sel = document.getElementById('grade-stu');
  if (!sel) return;
  sel.innerHTML = State.students.map(s =>
    `<option value="${s.id}">${s.name} (${s.id}) — ${s.cls}</option>`
  ).join('');
}

function initGradeSubjectRows() {
  const list = document.getElementById('grade-subjects-list');
  if (!list || list.children.length > 0) return;
  // Start with 5 blank subject rows
  for (let i = 0; i < 5; i++) addGradeSubjectRow();
}

function addGradeSubjectRow() {
  const list = document.getElementById('grade-subjects-list');
  if (!list) return;
  const idx = list.children.length + 1;
  const row = document.createElement('div');
  row.style.cssText = 'display:grid; grid-template-columns:2fr 1fr 1fr auto; gap:8px; margin-bottom:8px; align-items:center;';
  row.innerHTML = `
    <input type="text" placeholder="Subject name (e.g. Mathematics)" style="padding:8px; border:1px solid var(--border-primary); border-radius:var(--border-radius-sm); background:var(--bg-secondary); color:var(--text-primary); font-size:13px;" />
    <input type="number" placeholder="Max" min="1" value="100" style="padding:8px; border:1px solid var(--border-primary); border-radius:var(--border-radius-sm); background:var(--bg-secondary); color:var(--text-primary); font-size:13px;" />
    <input type="number" placeholder="Scored" min="0" value="" style="padding:8px; border:1px solid var(--border-primary); border-radius:var(--border-radius-sm); background:var(--bg-secondary); color:var(--text-primary); font-size:13px;" />
    <button onclick="this.parentElement.remove()" style="background:rgba(239,68,68,0.1); border:none; color:var(--color-danger); border-radius:var(--border-radius-sm); padding:8px; cursor:pointer; font-size:14px;">✕</button>
  `;
  list.appendChild(row);
}

function saveGradebook() {
  const role = State.auth.currentRole;
  if (role === 'student') {
    showToast('Access Denied', 'Only admin or staff can enter marks.', 'ti-lock');
    return;
  }

  const stuSel = document.getElementById('grade-stu');
  const examName = document.getElementById('grade-exam-name').value.trim();
  const list = document.getElementById('grade-subjects-list');

  if (!stuSel || !examName) {
    showToast('Validation Error', 'Select a student and enter the exam name.', 'ti-alert-circle');
    return;
  }

  const studentId = stuSel.value;
  const subjects = [];

  Array.from(list.children).forEach(row => {
    const inputs = row.querySelectorAll('input');
    const sub = inputs[0].value.trim();
    const max = parseInt(inputs[1].value) || 100;
    const marks = parseInt(inputs[2].value);
    if (sub && !isNaN(marks)) {
      subjects.push({ sub, max, marks });
    }
  });

  if (subjects.length === 0) {
    showToast('Validation Error', 'Add at least one subject with marks.', 'ti-alert-circle');
    return;
  }

  if (!State.results) State.results = {};
  State.results[studentId] = { examName, subjects };

  logActivity(State.auth.currentUser?.name || role, 'Gradebook Updated', 'academic',
    `Marks entered for student ${studentId} — Exam: ${examName}`);
  saveState();

  // Refresh the view dropdown and reload
  const viewSel = document.getElementById('res-stu');
  if (viewSel) { viewSel.value = studentId; loadStudentResults(); }

  showToast('Marks Saved', `Gradebook updated for ${stuSel.options[stuSel.selectedIndex].text}`, 'ti-circle-check');
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
    const accessStr = st.access ? st.access.join(', ') : 'Default Academic';
    const assignedClassStr = st.assignedClass ? `<span class="pill pill-green" style="font-size: 10px; padding: 2px 6px;">${st.assignedClass}</span>` : `<span class="pill pill-amber" style="font-size: 10px; padding: 2px 6px;">None</span>`;
    const stNamePart = (st.name || '').replace(/\s+/g, '').substring(0, 3).toLowerCase();
    const pwd = State.staffPasswords[st.id] || st.password || 'Not set - contact admin';
    return `
      <tr>
        <td><b>${st.id}</b></td>
        <td>
          <div style="font-weight:600; color:var(--text-primary); display:flex; align-items:center; gap:8px">${st.name} ${assignedClassStr}</div>
          <small style="color:var(--text-tertiary); font-size:10px; display:block; max-width:200px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${accessStr}">${accessStr}</small>
        </td>
        <td><span class="pill ${st.isAccountant ? 'pill-amber' : 'pill-blue'}">${st.isAccountant ? '💼 ACCOUNTANT' : st.role}</span></td>
        <td>${st.contact}</td>
        <td><code style="background:rgba(99,102,241,0.06); color:var(--accent); padding:2px 6px; border-radius:4px; font-size:11.5px; font-family:monospace; font-weight:600;">${st.username || st.id} / ${pwd}</code></td>
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
  document.getElementById('staff-password').value = ''; // Leave blank when editing to keep existing
  document.getElementById('staff-password').placeholder = 'Leave blank to keep existing';
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
  
  showToast('Edit Mode Enabled', `Loaded details for ${st.name}.`, 'ti-edit');
}

async function addStaffRecord() {
  const nameEl = document.getElementById('staff-name');
  const roleEl = document.getElementById('staff-role');
  const subEl = document.getElementById('staff-sub');
  const phoneEl = document.getElementById('staff-phone');
  const pwEl = document.getElementById('staff-password');
  const unEl = document.getElementById('staff-username'); // NEW: username field
  const salEl = document.getElementById('staff-base-salary');
  const classEl = document.getElementById('staff-assigned-class');

  const name = nameEl.value.trim();
  const role = roleEl.value.trim();
  const sub = subEl.value.trim() || 'N/A';
  const contact = phoneEl.value.trim();
  const password = pwEl.value.trim();
  const username = unEl ? unEl.value.trim() : '';
  const isAccountant = document.getElementById('staff-is-accountant')?.checked || false;
  const baseSalary = parseFloat(salEl.value) || 30000;
  const assignedClass = classEl.value;

  if (!name || !role || !contact || (!editingStaffId && (!password || !username))) {
    showToast('Validation Error', 'Fill name, role, contact, username and password fields.', 'ti-alert-circle');
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

  let staffId = editingStaffId;

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
      if (username) st.username = username.toLowerCase();
      st.isAccountant = isAccountant;
      if (password) {
        st.password = password;
        State.staffPasswords[editingStaffId] = password; // Keep in sync
      }
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
    staffId = `${staffPrefix}${String(nextNum).padStart(3, '0')}`;

    const newStaff = {
      id: staffId,
      name,
      role,
      sub,
      contact,
      status: 'On Duty',
      access: access,
      assignedClass: assignedClass,
      username: username.toLowerCase(),
      password: password,
      isAccountant: isAccountant
    };

    State.staff.push(newStaff);
    State.payrollConfig[staffId] = {
      base: baseSalary,
      allowance: 3000,
      deductions: 0,
      status: 'Unpaid'
    };

    // Save password to BOTH places to keep in sync
    newStaff.password = password;
    State.staffPasswords[staffId] = password;

    logActivity('Super Admin', 'Staff Registered', 'security', `Created new faculty registry for ${name} (${staffId}) with custom credentials`);
    showToast('Staff Registered', `Faculty profile for ${name} created. ID: ${staffId}`, 'ti-briefcase');
  }

  saveState();
  renderStaffRegistry();

  // Reset inputs
  nameEl.value = '';
  roleEl.value = '';
  subEl.value = '';
  phoneEl.value = '';
  if (unEl) unEl.value = '';
  pwEl.value = '';
  pwEl.placeholder = '';
  const accBox = document.getElementById('staff-is-accountant');
  if (accBox) accBox.checked = false;
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

async function removeStaffRecord(staffId) {
  const index = State.staff.findIndex(st => st.id === staffId);
  if (index === -1) return;

  const st = State.staff[index];
  if (!confirm(`Are you absolutely sure you want to delete staff member: ${st.name} (${staffId})? This deletes their payroll parameters.`)) {
    return;
  }

  State.staff.splice(index, 1);
  delete State.payrollConfig[staffId];

  // Credentials removed via saveState() below

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
  // Save to BOTH staffPasswords AND staff object to keep in sync
  State.staffPasswords[staffId] = newPassword.trim();
  const staffMember = State.staff.find(st => st.id === staffId);
  if (staffMember) staffMember.password = newPassword.trim();
  logActivity('Super Admin', 'Staff Password Updated', 'security', `Updated credentials for staff member ${staffId}`);
  saveState();
  showToast('Password Updated', `Access credentials for ${staffId} updated successfully.`, 'ti-circle-key-filled');
}


// -------------------------------------------------------------
// TEACHER SELF-MARKING GEO-ATTENDANCE SYSTEM
// -------------------------------------------------------------

function openTeacherSelfAttendance() {
  // Only teachers can use this
  if (State.auth.currentRole !== 'teacher') return;
  const teacher = State.auth.currentUser;
  const today = new Date().toISOString().split('T')[0];
  const now = new Date();
  const timeStr = now.toTimeString().substring(0, 5); // HH:MM

  // Check if after 2PM - too late to mark
  if (timeStr >= SCHOOL_GEO.absentAfter) {
    showToast('Too Late', 'Attendance cannot be marked after 2:00 PM. You have been marked Absent.', 'ti-clock-off');
    autoMarkTeacherAbsent(teacher, today);
    return;
  }

  // Check if already marked today
  const records = State.staffAttendance[today] || [];
  const existing = records.find(r => r.id === teacher.id);
  if (existing && (existing.status === 'Present' || existing.status === 'Late')) {
    showToast('Already Marked', `Your attendance is already marked as ${existing.status} for today at ${existing.markedAt || ''}.`, 'ti-circle-check');
    renderTeacherAttendanceStatus();
    return;
  }

  // Show geo-checking UI
  const panel = document.getElementById('teacher-self-att-panel');
  if (panel) {
    panel.innerHTML = `
      <div style="text-align:center; padding:32px;">
        <i class="ti ti-map-pin" style="font-size:36px; color:var(--accent); display:block; margin-bottom:12px;"></i>
        <div style="font-weight:600; margin-bottom:6px;">Verifying your location...</div>
        <div style="font-size:13px; color:var(--text-secondary);">Please allow location access when prompted.</div>
      </div>`;
  }

  if (!navigator.geolocation) {
    showToast('GPS Unavailable', 'Your device does not support location services.', 'ti-location-off');
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const dist = getDistanceMeters(pos.coords.latitude, pos.coords.longitude, SCHOOL_GEO.lat, SCHOOL_GEO.lng);
      if (dist > SCHOOL_GEO.radiusMeters) {
        if (panel) panel.innerHTML = `
          <div style="text-align:center; padding:32px; background:rgba(239,68,68,0.04); border-radius:12px; border:1px solid rgba(239,68,68,0.15);">
            <i class="ti ti-map-pin-off" style="font-size:36px; color:var(--color-danger); display:block; margin-bottom:12px;"></i>
            <div style="font-weight:700; color:var(--color-danger); margin-bottom:8px;">Outside School Zone</div>
            <div style="font-size:13px; color:var(--text-secondary);">You are <b>${Math.round(dist)} metres</b> away from school.<br>Attendance can only be marked within <b>${SCHOOL_GEO.radiusMeters}m</b> of school premises.</div>
          </div>`;
        showToast('Location Error', `You are ${Math.round(dist)}m from school. Must be within ${SCHOOL_GEO.radiusMeters}m.`, 'ti-map-pin-off');
        return;
      }

      // Within range - determine status
      const isLate = timeStr > SCHOOL_GEO.lateAfter;
      const status = isLate ? 'Late' : 'Present';
      confirmTeacherAttendance(teacher, today, timeStr, status, dist);
    },
    (err) => {
      if (panel) panel.innerHTML = `
        <div style="text-align:center; padding:24px; background:rgba(239,68,68,0.04); border-radius:12px;">
          <i class="ti ti-location-off" style="font-size:32px; color:var(--color-danger); display:block; margin-bottom:8px;"></i>
          <div style="font-weight:600; color:var(--color-danger);">Location Access Denied</div>
          <div style="font-size:13px; color:var(--text-secondary); margin-top:6px;">Please allow location access in your browser settings and try again.</div>
        </div>`;
      showToast('Location Denied', 'Please allow location access to mark attendance.', 'ti-location-off');
    },
    { timeout: 10000, maximumAge: 0, enableHighAccuracy: true }
  );
}

function confirmTeacherAttendance(teacher, today, timeStr, status, dist) {
  const panel = document.getElementById('teacher-self-att-panel');
  const isLate = status === 'Late';
  const color = isLate ? 'var(--color-warning)' : 'var(--color-success)';
  const icon = isLate ? 'ti-clock-exclamation' : 'ti-circle-check';
  const msg = isLate
    ? `You are arriving <b>late</b> (after ${SCHOOL_GEO.lateAfter}). This will result in a <b>half-day salary deduction</b>.`
    : `You are arriving <b>on time</b>. Your full salary will be credited.`;

  if (panel) panel.innerHTML = `
    <div style="text-align:center; padding:24px; background:rgba(16,185,129,0.04); border-radius:12px; border:1px solid rgba(16,185,129,0.15);">
      <i class="ti ${icon}" style="font-size:36px; color:${color}; display:block; margin-bottom:12px;"></i>
      <div style="font-size:18px; font-weight:700; color:${color}; margin-bottom:8px;">${status}</div>
      <div style="font-size:13px; color:var(--text-secondary); margin-bottom:4px;">Time: <b>${timeStr}</b> &nbsp;|&nbsp; Distance from school: <b>${Math.round(dist)}m</b></div>
      <div style="font-size:12px; color:var(--text-secondary); margin-bottom:16px;">${msg}</div>
      <button class="btn btn-primary" onclick="submitTeacherAttendance('${teacher.id}', '${today}', '${timeStr}', '${status}')" style="width:100%; max-width:260px;">
        <i class="ti ti-check"></i> Confirm & Submit Attendance
      </button>
    </div>`;
}

function submitTeacherAttendance(teacherId, today, timeStr, status) {
  if (!State.staffAttendance[today]) State.staffAttendance[today] = [];
  const records = State.staffAttendance[today];
  const existingIdx = records.findIndex(r => r.id === teacherId);
  const teacher = State.staff.find(st => st.id === teacherId) || State.auth.currentUser;

  const record = {
    id: teacherId,
    name: teacher ? teacher.name : teacherId,
    role: teacher ? teacher.role : 'Teacher',
    status: status,
    markedAt: timeStr,
    markedBy: 'self',
    lateDeduction: status === 'Late'
  };

  if (existingIdx >= 0) {
    records[existingIdx] = record;
  } else {
    records.push(record);
  }

  saveState();
  logActivity(teacher ? teacher.name : teacherId, 'Self-Marked Attendance', 'security', `Marked ${status} at ${timeStr} via geo-verification`);

  const panel = document.getElementById('teacher-self-att-panel');
  if (panel) panel.innerHTML = `
    <div style="text-align:center; padding:24px; background:rgba(16,185,129,0.06); border-radius:12px; border:1px solid rgba(16,185,129,0.2);">
      <i class="ti ti-circle-check" style="font-size:40px; color:var(--color-success); display:block; margin-bottom:12px;"></i>
      <div style="font-size:18px; font-weight:700; color:var(--color-success); margin-bottom:6px;">Attendance Submitted!</div>
      <div style="font-size:13px; color:var(--text-secondary);">Status: <b>${status}</b> &nbsp;|&nbsp; Time: <b>${timeStr}</b></div>
      ${status === 'Late' ? '<div style="font-size:12px; color:var(--color-warning); margin-top:8px;">⚠️ Half-day deduction will be applied in payroll.</div>' : ''}
    </div>`;

  showToast('Attendance Submitted', `Your attendance has been marked as ${status} for today.`, 'ti-circle-check');
}

function autoMarkTeacherAbsent(teacher, today) {
  if (!State.staffAttendance[today]) State.staffAttendance[today] = [];
  const records = State.staffAttendance[today];
  const existingIdx = records.findIndex(r => r.id === teacher.id);
  if (existingIdx < 0) {
    records.push({
      id: teacher.id,
      name: teacher.name,
      role: teacher.role || 'Teacher',
      status: 'Absent',
      markedAt: 'Auto',
      markedBy: 'system'
    });
    saveState();
  }
}

function renderTeacherAttendanceStatus() {
  const panel = document.getElementById('teacher-self-att-panel');
  if (!panel) return;
  const teacher = State.auth.currentUser;
  if (!teacher) return;
  const today = new Date().toISOString().split('T')[0];
  const records = State.staffAttendance[today] || [];
  const rec = records.find(r => r.id === teacher.id);

  const now = new Date();
  const timeStr = now.toTimeString().substring(0, 5);
  const tooLate = timeStr >= SCHOOL_GEO.absentAfter;

  // Only hide button if teacher self-marked (not admin-marked)
  if (rec && rec.markedBy === 'self') {
    const color = rec.status === 'Present' ? 'var(--color-success)' : rec.status === 'Late' ? 'var(--color-warning)' : 'var(--color-danger)';
    panel.innerHTML = `
      <div style="text-align:center; padding:20px; background:rgba(16,185,129,0.04); border-radius:12px; border:1px solid rgba(16,185,129,0.15);">
        <i class="ti ti-circle-check" style="font-size:32px; color:${color}; display:block; margin-bottom:8px;"></i>
        <div style="font-size:16px; font-weight:700; color:${color}; margin-bottom:4px;">✅ Today: ${rec.status}</div>
        <div style="font-size:12px; color:var(--text-secondary);">Self-marked at <b>${rec.markedAt || 'N/A'}</b> via GPS verification</div>
        ${rec.status === 'Late' ? '<div style="font-size:11px; color:var(--color-warning); margin-top:8px;">⚠️ Half-day salary deduction will apply in payroll.</div>' : ''}
      </div>`;
  } else {
    // Show mark button — admin marking doesn't count as self-mark
    if (tooLate) {
      panel.innerHTML = `
        <div style="text-align:center; padding:20px; background:rgba(239,68,68,0.04); border-radius:12px; border:1px solid rgba(239,68,68,0.12);">
          <i class="ti ti-clock-off" style="font-size:32px; color:var(--color-danger); display:block; margin-bottom:8px;"></i>
          <div style="font-weight:600; color:var(--color-danger); margin-bottom:4px;">Attendance Window Closed</div>
          <div style="font-size:12px; color:var(--text-secondary);">Attendance cannot be marked after ${SCHOOL_GEO.absentAfter}. You have been marked Absent.</div>
        </div>`;
      autoMarkTeacherAbsent(teacher, today);
    } else {
      const adminNote = rec ? `<div style="font-size:11px; color:var(--color-warning); margin-bottom:12px;">⚠️ Admin marked you as ${rec.status} — you can override by self-marking via GPS.</div>` : '';
      panel.innerHTML = `
        <div style="text-align:center; padding:20px;">
          ${adminNote}
          <button class="btn btn-primary" onclick="openTeacherSelfAttendance()" style="width:100%; max-width:300px; padding:14px; font-size:15px; border-radius:12px;">
            <i class="ti ti-map-pin"></i> Mark My Attendance
          </button>
          <div style="font-size:11px; color:var(--text-secondary); margin-top:10px;">
            📍 Must be within <b>${SCHOOL_GEO.radiusMeters}m</b> of school &nbsp;|&nbsp; ⏰ On time before <b>${SCHOOL_GEO.lateAfter}</b>
          </div>
        </div>`;
    }
  }
}
// -------------------------------------------------------------

// Auto-mark absent after 2PM for teachers who haven't marked attendance
function checkAutoAbsentTeachers() {
  const now = new Date();
  const timeStr = now.toTimeString().substring(0, 5);
  if (timeStr < SCHOOL_GEO.absentAfter) return; // Not yet 2PM

  const today = now.toISOString().split('T')[0];
  if (!State.staffAttendance[today]) State.staffAttendance[today] = [];
  const records = State.staffAttendance[today];
  let changed = false;

  State.staff.forEach(st => {
    const existing = records.find(r => r.id === st.id);
    if (!existing) {
      records.push({
        id: st.id,
        name: st.name,
        role: st.role || 'Teacher',
        status: 'Absent',
        markedAt: 'Auto-2PM',
        markedBy: 'system'
      });
      changed = true;
    }
  });

  if (changed) {
    saveState();
    console.log('Auto-marked absent for unmarked staff at 2PM');
  }
}

// Run auto-absent check every 5 minutes
setInterval(checkAutoAbsentTeachers, 5 * 60 * 1000);

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
  document.getElementById('set-formspree').value = State.config.formspreeId || '';
  
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
    State.config.schoolName = nameInput.value.trim() || 'VBNIC';
    State.config.address = document.getElementById('set-address').value.trim() || 'Address';
    State.config.phone = document.getElementById('set-phone').value.trim() || 'Phone';
    State.config.prefix = document.getElementById('set-prefix').value.trim() || 'SAC';
    State.config.currency = document.getElementById('set-currency').value;
    State.config.latefee = parseFloat(document.getElementById('set-latefee').value) || 0;
    State.config.receiptNote = document.getElementById('set-receipt-note').value.trim() || '';
    State.config.formspreeId = (document.getElementById('set-formspree').value || '').trim();
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

  // Cap audit log at 100 entries to prevent unbounded growth
  if (State.auditLog.length > 100) {
    State.auditLog.pop();
  }
  // NOTE: saveState() is intentionally NOT called here.
  // The caller (admitStudent, collectFee, etc.) always calls saveState() right after logActivity().
  // Calling it here would cause a double-write on every action.
}

// -------------------------------------------------------------
// ADMIN SECURITY & AUDIT PORTAL RENDERER
// -------------------------------------------------------------
function renderAuditPanel() {
  const logBody = document.getElementById('audit-log-body');
  const homeworkBody = document.getElementById('audit-homework-body');

  if (!logBody || !homeworkBody) return;

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

  // 2. Render Homework history
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

  // 3. Render Credentials Directory
  renderCredentialsDirectory();
}

// -------------------------------------------------------------
// CREDENTIALS DIRECTORY RENDERER
// -------------------------------------------------------------
function renderCredentialsDirectory() {
  const credBody = document.getElementById('audit-credentials-body');
  if (!credBody) return;

  // Only admins can see this
  if (State.auth.currentRole !== 'admin') {
    credBody.innerHTML = `<tr><td colspan="4" class="center-col" style="color:var(--text-tertiary); padding:24px 0;"><i class="ti ti-lock" style="font-size:24px; display:block; margin-bottom:8px;"></i>Admin access required to view credentials.</td></tr>`;
    return;
  }

  const searchVal = (document.getElementById('cred-search') || {}).value || '';
  const filterVal = (document.getElementById('cred-filter') || {}).value || '';
  const search = searchVal.toLowerCase();

  let rows = [];

  // Staff credentials
  if (!filterVal || filterVal === 'staff') {
    State.staff.forEach(st => {
      const stNamePart = (st.name || '').replace(/\s+/g, '').substring(0, 3).toLowerCase();
      const pwd = `Username: ${st.username || st.id} | Pass: ${st.password || 'not set'}`;
      rows.push({ id: st.id, name: st.name, role: st.role || 'Staff', password: pwd, type: 'staff' });
    });
  }

  // Student credentials
  if (!filterVal || filterVal === 'student') {
    State.students.forEach(s => {
      const namePart = (s.name || '').replace(/\s+/g, '').substring(0, 3).toLowerCase();
    const dob = s.dob || '';
    const dobParts = dob.split('-');
    const dobFormatted = dobParts.length === 3 ? dobParts[2] + dobParts[1] + dobParts[0] : '';
    const pwd = (s.password && s.password !== 'student123') ? s.password : (namePart + dobFormatted || 'Set DOB to generate');
      rows.push({ id: s.id, name: s.name, role: `${s.cls} – Sec ${s.sec}`, password: pwd, type: 'student' });
    });
  }

  // Apply search
  if (search) {
    rows = rows.filter(r => r.id.toLowerCase().includes(search) || r.name.toLowerCase().includes(search));
  }

  if (rows.length === 0) {
    credBody.innerHTML = `<tr><td colspan="4" class="center-col" style="color:var(--text-tertiary); padding:24px 0;">No records match your search.</td></tr>`;
    return;
  }

  credBody.innerHTML = rows.map(row => `
    <tr>
      <td><code style="background:rgba(99,102,241,0.08); color:var(--accent); padding:2px 6px; border-radius:4px; font-size:12px; font-weight:700">${row.id}</code></td>
      <td style="font-weight:600">${row.name}</td>
      <td><span class="pill ${row.type === 'staff' ? 'pill-blue' : 'pill-green'}" style="font-size:10px">${row.role}</span></td>
      <td><code style="background:rgba(16,185,129,0.08); color:#10b981; padding:2px 8px; border-radius:4px; font-size:12px; font-family:monospace; font-weight:700; letter-spacing:0.5px">${row.password}</code></td>
    </tr>
  `).join('');
}

// Emergency Reset Utility: Clears corrupted local caches and restores full VBNS database state
async function resetDatabaseToDefault(event) {
  if (event) event.preventDefault();
  
  const confirmText = "Are you sure you want to restore the VBNS database to system defaults? This will erase all local modifications, log out the current session, and reset all students, staff, and payroll settings to high-fidelity factory configurations.";
  if (!confirm(confirmText)) {
    return;
  }
  
  const password = prompt("Re-authentication Required: Please enter the Admin password to authorize database reset:");
  if (!password) {
    showToast('Reset Cancelled', 'Database reset was cancelled or password was not provided.', 'ti-alert-triangle');
    return;
  }
  
  try {
    const passwordHash = await hashPassword(password.trim(), 'admin');
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAO8dHzpF-mWhr6sY0LSOxdPs5RQEj9gKU', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'admin', role: 'admin', passwordHash })
    });
    
    const data = await response.json();
    if (response.ok && data.idToken) {
      // Re-authenticated! Reset localStorage and reload
      localStorage.removeItem('apex_school_crm_state');
      sessionStorage.clear();
      showToast('Database Reset', 'Database successfully restored to factory defaults.', 'ti-refresh');
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else {
      showToast('Reset Failed', 'Invalid admin password. Database reset denied.', 'ti-lock');
    }
  } catch (err) {
    console.error("Reset re-auth connection error:", err);
    showToast('Reset Failed', 'Could not connect to central server for re-authentication.', 'ti-alert-circle');
  }
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

// Submit the public Admission Enquiry Form (Admissions & Contact Forms Sync)
function submitPublicEnquiry(event) {
  event.preventDefault();
  
  const formId = event.target.id;
  let nameId = 'pub-enq-child';
  let parentId = 'pub-enq-parent';
  let classId = 'pub-enq-class';
  let phoneId = 'pub-enq-phone';
  let addressId = 'pub-enq-address';

  if (formId === 'public-admissions-form') {
    nameId = 'pub-adm-child';
    parentId = 'pub-adm-parent';
    classId = 'pub-adm-class';
    phoneId = 'pub-adm-phone';
    addressId = 'pub-adm-address';
  } else if (formId === 'public-contact-form') {
    nameId = 'pub-con-child';
    parentId = 'pub-con-parent';
    classId = 'pub-con-class';
    phoneId = 'pub-con-phone';
    addressId = 'pub-con-message';
  }

  const nameEl = document.getElementById(nameId);
  const parentEl = document.getElementById(parentId);
  const classEl = document.getElementById(classId);
  const phoneEl = document.getElementById(phoneId);
  const addressEl = document.getElementById(addressId);

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
  const newEnquiry = {
    name: name,
    cls: cls,
    parent: parent,
    phone: phone,
    address: address || '',
    source: formId === 'public-admissions-form' ? 'Digital Admissions Page Form' : 'Digital Contact Page Form',
    status: 'Interested',
    date: new Date().toISOString().split('T')[0],
    timestamp: new Date().toISOString()
  };
  State.enquiries.push(newEnquiry);

  // Write directly to Firestore enquiries collection (works even for unauthenticated visitors)
  if (window.db && window.fsLib) {
    try {
      const { doc, setDoc, collection } = window.fsLib;
      const enqId = 'ENQ-' + Date.now();
      setDoc(doc(window.db, 'enquiries', enqId), { ...newEnquiry, id: enqId })
        .then(() => console.log('✅ Enquiry saved to Firebase:', enqId))
        .catch(e => console.warn('Enquiry Firebase write failed:', e));
    } catch(e) {
      console.warn('Enquiry direct write error:', e);
    }
  }

  // Log in CRM activity history
  logActivity('Public Website Visitor', 'Online Enquiry Logged', 'system', `Submitted admission enquiry form for candidate child: ${name}`);

  // Save new database state
  saveState();

  // Connect forms to Formspree if formspreeId is configured
  if (State.config && State.config.formspreeId) {
    const formData = new FormData();
    formData.append('Name', name);
    formData.append('Parent/Guardian', parent);
    formData.append('Class Sought', cls);
    formData.append('Phone', phone);
    formData.append('Address or Message', address);
    formData.append('Form Source', formId === 'public-admissions-form' ? 'Digital Admissions Page Form' : 'Digital Contact Page Form');

    fetch(`https://formspree.io/f/${State.config.formspreeId}`, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        showToast('Sync Successful', 'Details successfully pushed to external Formspree email backend.', 'ti-cloud-check');
      } else {
        console.warn('Formspree response not OK:', response);
      }
    })
    .catch(error => {
      console.error('Error sending form data to Formspree:', error);
    });
  }

  // Reset form inputs
  nameEl.value = '';
  parentEl.value = '';
  phoneEl.value = '';
  if (addressEl) addressEl.value = '';

  // Show a gorgeous custom success message
  showToast('Enquiry Submitted', "Thank you, we'll call you within 24 hours.", 'ti-circle-check-filled');
}

function renderPublicNotices() {
  const container = document.getElementById('public-notices-feed');
  if (!container) return;

  // Retrieve active announcements from state registers (get latest 3)
  const noticesArray = Array.isArray(State.notices) ? State.notices : [];
  const list = [...noticesArray].reverse().slice(0, 3);
  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 24px 16px;">
        <i class="ti ti-bell-off" style="font-size:28px; color:var(--text-tertiary); display:block; margin-bottom:8px;"></i>
        <p style="font-size:13px; color:var(--text-tertiary);">No notices published yet. Check back soon.</p>
      </div>`;
    return;
  }

  container.innerHTML = list.map(item => {
    let pClass = 'normal';
    const priority = item.priority || 'Normal Broadcast';
    if (priority.includes('Urgent')) pClass = 'urgent';
    else if (priority.includes('Important')) pClass = 'important';

    const pBadge = priority.split(' ')[0] || 'Notice';

    return `
      <div class="notice-item public-feed-card priority-${pClass}" style="margin-bottom: 12px; padding: 14px 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <h4 style="font-size: 13.5px; font-weight: 600; color: var(--text-primary); margin: 0;">${item.title || 'Bulletin Posting'}</h4>
          <span class="badge" style="font-size: 9px; padding: 2px 6px; border-radius: 4px; border: 1px solid var(--border-secondary); background: var(--bg-tertiary); color: var(--text-primary);">${pBadge}</span>
        </div>
        <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.5; margin: 6px 0;">${item.body || ''}</p>
        <div style="display: flex; justify-content: space-between; font-size: 10px; color: var(--text-tertiary); margin-top: 8px;">
          <span>By: <b>${item.by || 'Administration'}</b></span>
          <span>Date: ${item.date || ''}</span>
        </div>
      </div>
    `;
  }).join('');
}

// 6-Page SPA Routing Engine for public sections
function navigatePublic(pageId, event) {
  if (event) event.preventDefault();
  
  if (pageId === 'hero') pageId = 'home';

  // Highlight active link in navigation
  document.querySelectorAll('.public-nav .nav-link').forEach(link => {
    link.classList.remove('active');
  });

  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  } else {
    // Find active nav link programmatically
    const activeLink = document.querySelector(`.public-nav a[href="#${pageId}"]`) || document.querySelector(`.public-nav a[onclick*="'${pageId}'"]`);
    if (activeLink) activeLink.classList.add('active');
  }

  // Close public mobile hamburger menu drawer if open
  const navLinks = document.querySelector('.public-nav .nav-links');
  if (navLinks) navLinks.classList.remove('mobile-open');

  // Switch displayed sub-page views
  document.querySelectorAll('.pub-page').forEach(page => {
    page.style.display = 'none';
  });

  const activePage = document.getElementById(`pub-page-${pageId}`);
  if (activePage) {
    activePage.style.display = 'block';
    
    // Smooth cross-fade transition
    activePage.style.opacity = '0';
    setTimeout(() => {
      activePage.style.transition = 'opacity 0.4s ease';
      activePage.style.opacity = '1';
    }, 50);
  }

  // Scroll smoothly back to top so it simulates full page navigation
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Scroll viewport smoothly to section coordinate (compatibility mapper)
function scrollToSection(id) {
  if (id === 'hero') id = 'home';
  navigatePublic(id);
}

// Filter gallery masonry items by category
function filterGallery(category) {
  // Reset all buttons style
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.style.background = 'transparent';
    btn.style.color = 'var(--accent)';
    btn.style.borderColor = 'var(--accent)';
  });

  // Highlight current button
  const currentBtn = event ? event.target : null;
  if (currentBtn) {
    currentBtn.classList.add('active');
    currentBtn.style.background = 'var(--accent)';
    currentBtn.style.color = '#ffffff';
  }

  // Filter grid items
  document.querySelectorAll('.g-item').forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'flex';
      item.style.opacity = '0';
      setTimeout(() => {
        item.style.transition = 'opacity 0.3s ease';
        item.style.opacity = '1';
      }, 50);
    } else {
      item.style.display = 'none';
    }
  });
}

// Toggle public mobile layout links hamburger drawer
function togglePublicMobileMenu() {
  const navLinks = document.querySelector('.public-nav .nav-links');
  if (navLinks) {
    navLinks.classList.toggle('mobile-open');
  }
}

// Database Backup: Stringifies State and triggers automatic local JSON file download
function exportSchoolDatabase() {
  try {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(State, null, 2));
    const dlAnchorElem = document.createElement('a');
    const dateStr = new Date().toISOString().split('T')[0];
    
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `vbns_crm_backup_${dateStr}.json`);
    dlAnchorElem.click();
    
    showToast('Backup Created', 'Database JSON export file downloaded to your system.', 'ti-database-export');
    logActivity(State.auth.currentUser ? State.auth.currentUser.name : 'System Admin', 'Database Export', 'system', 'Successfully exported system database locally');
  } catch (e) {
    showToast('Export Error', 'Failed to generate JSON backup sheet.', 'ti-alert-octagon');
  }
}

// Triggers hidden database import file dialog click
function triggerImportSelection() {
  const fileInput = document.getElementById('database-import-file-input');
  if (fileInput) fileInput.click();
}

// Database Restore: Reads selected JSON backup file and replaces browser's active localStorage state
function importSchoolDatabase(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const parsed = JSON.parse(e.target.result);
      
      // Validation: Ensure the JSON sheet represents a valid VBNS CRM Database
      if (!parsed.students || !parsed.ledger) {
        showToast('Restore Failed', 'Invalid database sheet structure. Required properties missing.', 'ti-alert-octagon');
        return;
      }

      if (!confirm("Are you sure you want to restore this database backup? This will overwrite all active student profiles, financial sheets, and configuration settings in this browser!")) {
        return;
      }

      // Overwrite current state and sync
      State = parsed;
      saveState();
      
      showToast('Database Restored', 'All custom student records, transactions, and settings successfully imported!', 'ti-database-import');
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      
    } catch (err) {
      showToast('Restore Error', 'Corrupted file payload. Could not parse database JSON.', 'ti-alert-triangle');
    }
  };
  reader.readAsText(file);
}




// =============================================================
// WELCOME ADVERTISEMENT POPUP LOGIC (NEW)
// =============================================================

// Open the advertisement popup modal once per session
window.addEventListener('DOMContentLoaded', () => {
  // Only show if it has not been shown in this browser session
  if (!sessionStorage.getItem('welcome_ad_shown')) {
    setTimeout(() => {
      const popup = document.getElementById('welcome-ad-popup');
      if (popup) {
        popup.classList.add('active');
      }
    }, 1200); // 1.2 second slight delay for natural presentation
  }
});

// Close the advertisement popup modal
function closeAdPopup() {
  const popup = document.getElementById('welcome-ad-popup');
  if (popup) {
    popup.classList.remove('active');
    sessionStorage.setItem('welcome_ad_shown', 'true');
  }
}

// Redirect user to admissions section and close popup
function handleAdClick(event) {
  if (event) event.preventDefault();
  closeAdPopup();
  navigatePublic('admissions');
  // Scroll smoothly to Admissions page
  window.location.hash = '#admissions';
}



