import http.server
import socketserver
import json
import os
import hashlib

PORT = 3000
DB_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "database.json")

def compute_hash(password, salt):
    return hashlib.sha256((password + salt).encode('utf-8')).hexdigest()

DEFAULT_STAFF = [
  { "id": "TCH-001", "name": "Dr. Rajeev Sharma", "role": "Senior Faculty", "sub": "Mathematics, Statistics", "contact": "+91 98110 22334", "status": "On Duty", "assignedClass": "Class X", "access": ["directory", "notice", "attendance", "timetable", "exam", "results", "library", "transport"] },
  { "id": "TCH-002", "name": "Mrs. Ananya Sen", "role": "Faculty Specialist", "sub": "Physics, Chemistry", "contact": "+91 98110 55667", "status": "On Duty", "assignedClass": "Class IX", "access": ["directory", "notice", "attendance", "timetable", "exam", "results", "library", "transport"] },
  { "id": "TCH-003", "name": "Mr. Vivek Paul", "role": "Faculty Officer", "sub": "English Literature", "contact": "+91 98110 88990", "status": "On Duty", "assignedClass": "Class VIII", "access": ["directory", "notice", "attendance", "timetable", "exam", "results", "library", "transport"] },
  { "id": "TCH-004", "name": "Miss Priya Roy", "role": "Faculty Executive", "sub": "History, Civics", "contact": "+91 98110 11223", "status": "On Duty", "assignedClass": "", "access": ["directory", "notice", "attendance", "timetable", "exam", "results", "library", "transport"] },
  { "id": "ADM-001", "name": "Mrs. Harpreet Kaur", "role": "Head Librarian", "sub": "Library Resource Director", "contact": "+91 98110 44556", "status": "On Leave", "assignedClass": "", "access": ["directory", "notice", "attendance", "timetable", "exam", "results", "library", "transport"] },
  { "id": "ADM-002", "name": "Mr. Ramesh Negi", "role": "Physical Trainer", "sub": "Sports & Gymnasium Coordinator", "contact": "+91 98110 77889", "status": "On Duty", "assignedClass": "", "access": ["directory", "notice", "attendance", "timetable", "exam", "results", "library", "transport"] }
]

DEFAULT_STUDENTS = [
  { "id": "SAC-001", "name": "Aarav Sharma", "cls": "Class X", "sec": "A", "parent": "Ramesh Sharma", "phone": "9812345001", "dob": "2010-03-15", "address": "14 MG Road, New Delhi", "fee": 45000, "balance": 0, "status": "Paid", "enrolledDate": "2025-04-10" },
  { "id": "SAC-002", "name": "Priya Mehta", "cls": "Class X", "sec": "B", "parent": "Suresh Mehta", "phone": "9812345002", "dob": "2010-07-22", "address": "8 Lajpat Nagar, Delhi", "fee": 45000, "balance": 15000, "status": "Partial", "enrolledDate": "2025-04-12" },
  { "id": "SAC-003", "name": "Rohan Gupta", "cls": "Class IX", "sec": "A", "parent": "Vikram Gupta", "phone": "9812345003", "dob": "2011-01-10", "address": "22 Karol Bagh, Delhi", "fee": 40000, "balance": 40000, "status": "Pending", "enrolledDate": "2025-04-15" },
  { "id": "SAC-004", "name": "Sneha Patel", "cls": "Class VIII", "sec": "A", "parent": "Anand Patel", "phone": "9812345004", "dob": "2012-05-30", "address": "6 Dwarka Sector 5", "fee": 35000, "balance": 0, "status": "Paid", "enrolledDate": "2025-04-18" },
  { "id": "SAC-005", "name": "Karan Singh", "cls": "Class X", "sec": "B", "parent": "Harjinder Singh", "phone": "9812345005", "dob": "2010-09-18", "address": "3 Punjabi Bagh", "fee": 45000, "balance": 25000, "status": "Partial", "enrolledDate": "2025-04-20" },
  { "id": "SAC-006", "name": "Ananya Verma", "cls": "Class VIII", "sec": "C", "parent": "Deepak Verma", "phone": "9812345006", "dob": "2012-11-05", "address": "19 Rohini Sector 3", "fee": 35000, "balance": 0, "status": "Paid", "enrolledDate": "2025-04-22" },
  { "id": "SAC-007", "name": "Arjun Nair", "cls": "Class VII", "sec": "A", "parent": "Suresh Nair", "phone": "9812345007", "dob": "2013-04-14", "address": "45 Vasant Kunj", "fee": 35000, "balance": 35000, "status": "Pending", "enrolledDate": "2025-04-25" }
]

DEFAULT_STATE = {
  "config": {
    "schoolName": "VBNS",
    "address": "Shyamdeurwa, Maharajganj – 273301",
    "phone": "+91 91185 08216",
    "prefix": "SAC",
    "currency": "₹",
    "latefee": 2,
    "receiptNote": "Thank you for your payment. Fee once paid is non-refundable.",
    "smsCredits": 850,
    "formspreeId": "",
    "teacherAccess": ["dashboard", "directory", "notice", "attendance", "timetable", "exam", "results", "library", "transport"]
  },
  "auth": {
    "currentRole": None,
    "currentUser": None
  },
  "students": DEFAULT_STUDENTS,
  "ledger": [
    { "voucher": "VOU-1001", "date": "2026-04-01", "desc": "Opening Financial Reserve Allocation", "credit": 250000, "debit": 0, "balance": 250000 },
    { "voucher": "VOU-1002", "date": "2026-05-02", "desc": "Tuition Collection — Aarav Sharma (SAC-001)", "credit": 45000, "debit": 0, "balance": 295000 },
    { "voucher": "VOU-1003", "date": "2026-05-05", "desc": "Purchase of Chemistry Lab Reagents & Flasks", "credit": 0, "debit": 4500, "balance": 290500 },
    { "voucher": "VOU-1004", "date": "2026-05-10", "desc": "Tuition Collection — Priya Mehta (SAC-002)", "credit": 30000, "debit": 0, "balance": 320500 },
    { "voucher": "VOU-1005", "date": "2026-05-15", "desc": "Official School Website Hosting Renewal", "credit": 0, "debit": 1800, "balance": 318700 },
    { "voucher": "VOU-1006", "date": "2026-05-18", "desc": "Tuition Collection — Sneha Patel (SAC-004)", "credit": 35000, "debit": 0, "balance": 353700 },
    { "voucher": "VOU-1007", "date": "2026-05-20", "desc": "Faculty Monthly Salaries (Mid-Term Clearing)", "credit": 0, "debit": 180000, "balance": 173700 },
    { "voucher": "VOU-1008", "date": "2026-05-22", "desc": "Tuition Collection — Karan Singh (SAC-005)", "credit": 30000, "debit": 0, "balance": 203700 },
    { "voucher": "VOU-1009", "date": "2026-05-23", "desc": "Electrical Maintenance — Library AC Unit Repair", "credit": 0, "debit": 5700, "balance": 198000 }
  ],
  "feeLog": [
    { "receipt": "RCP-1040", "studentId": "SAC-001", "name": "Aarav Sharma", "type": "Tuition Fee", "amount": 45000, "mode": "UPI / Netbanking", "date": "2026-05-02", "remarks": "Full Annual tuition clearance" },
    { "receipt": "RCP-1041", "studentId": "SAC-002", "name": "Priya Mehta", "type": "Tuition Fee", "amount": 30000, "mode": "Cash Receipt", "date": "2026-05-10", "remarks": "First installment payment" },
    { "receipt": "RCP-1042", "studentId": "SAC-004", "name": "Sneha Patel", "type": "Tuition Fee", "amount": 35000, "mode": "UPI / Netbanking", "date": "2026-05-18", "remarks": "Full tuition complete" },
    { "receipt": "RCP-1043", "studentId": "SAC-005", "name": "Karan Singh", "type": "Tuition Fee", "amount": 30000, "mode": "Credit / Debit Card", "date": "2026-05-22", "remarks": "Term 1 partial collect" }
  ],
  "enquiries": [
    { "name": "Riya Joshi", "cls": "Class I", "parent": "Mohan Joshi", "phone": "9911223344", "source": "Walk-In Office Visit", "status": "Interested" },
    { "name": "Dev Tiwari", "cls": "Class VI", "parent": "Rajesh Tiwari", "phone": "9922334455", "source": "Digital Web Portal Form", "status": "Follow-Up" },
    { "name": "Sana Khan", "cls": "Class X", "parent": "Dr. Tariq Khan", "phone": "9899887766", "source": "Direct Phone Callback", "status": "Closed" }
  ],
  "smsLog": [
    { "to": "All Parents (247 Recipients)", "msg": "Dear Parent, this is to inform that the mid-term evaluations reports are now published in the central portal. — VBNS", "date": "2026-05-15", "time": "10:15 AM", "credits": 247 },
    { "to": "Defaulters (Outstanding Balance)", "msg": "Dear Parent, a gentle reminder that your child\'s outstanding annual fee installment is overdue. Please ignore if paid. — VBNS", "date": "2026-05-20", "time": "11:45 AM", "credits": 3 }
  ],
  "notices": [
    { "title": "Annual Sports Day Board Assembly", "body": "The Annual Sports Meet is scheduled for 15th December 2026. Grade athletic selections begin Monday.", "date": "2026-05-24", "priority": "Normal Broadcast", "by": "Sports Admin Board" },
    { "title": "Mandatory Parent-Teacher Meeting (PTM)", "body": "Critical academic discussion regarding final board test timetables for Classes VI-X on 10th June 2026, 10:00 AM.", "date": "2026-05-22", "priority": "Important Bulletin", "by": "Principal Office" },
    { "title": "Urgent: compliance", "body": "All Grade X students must submit three verified photographs and duplicate forms by 30th May without fail.", "date": "2026-05-20", "priority": "Urgent Announcement", "by": "Academic Director" }
  ],
  "attendance": {},
  "staffAttendance": {},
  "payrollConfig": {
    "TCH-001": { "base": 45000, "allowance": 3000, "deductions": 0, "status": "Unpaid" },
    "TCH-002": { "base": 35000, "allowance": 3000, "deductions": 0, "status": "Unpaid" },
    "TCH-003": { "base": 35000, "allowance": 3000, "deductions": 0, "status": "Unpaid" },
    "TCH-004": { "base": 35000, "allowance": 3000, "deductions": 0, "status": "Unpaid" },
    "ADM-001": { "base": 35000, "allowance": 3000, "deductions": 0, "status": "Unpaid" },
    "ADM-002": { "base": 35000, "allowance": 3000, "deductions": 0, "status": "Unpaid" }
  },
  "timetable": {
    "Class X-A": [
      { "time": "08:30 AM - 09:15 AM", "mon": { "sub": "Mathematics", "t": "Dr. Sharma" }, "tue": { "sub": "Science", "t": "Mrs. Sen" }, "wed": { "sub": "English", "t": "Mr. Paul" }, "thu": { "sub": "Social Sci.", "t": "Miss Roy" }, "fri": { "sub": "Mathematics", "t": "Dr. Sharma" }, "sat": { "sub": "Science", "t": "Mrs. Sen" } },
      { "time": "09:15 AM - 10:00 AM", "mon": { "sub": "Science", "t": "Mrs. Sen" }, "tue": { "sub": "English", "t": "Mr. Paul" }, "wed": { "sub": "Mathematics", "t": "Dr. Sharma" }, "thu": { "sub": "Hindi", "t": "Mr. Joshi" }, "fri": { "sub": "Social Sci.", "t": "Miss Roy" }, "sat": { "sub": "PT / Games", "t": "Mr. Negi" } },
      { "time": "10:00 AM - 10:15 AM", "mon": { "sub": "Recess", "t": "-" }, "tue": { "sub": "Recess", "t": "-" }, "wed": { "sub": "Recess", "t": "-" }, "thu": { "sub": "Recess", "t": "-" }, "fri": { "sub": "Recess", "t": "-" }, "sat": { "sub": "Recess", "t": "-" } },
      { "time": "10:15 AM - 11:00 AM", "mon": { "sub": "Social Sci.", "t": "Miss Roy" }, "tue": { "sub": "Mathematics", "t": "Dr. Sharma" }, "wed": { "sub": "Science", "t": "Mrs. Sen" }, "thu": { "sub": "English", "t": "Mr. Paul" }, "fri": { "sub": "Hindi", "t": "Mr. Joshi" }, "sat": { "sub": "Library", "t": "Mrs. Kaur" } },
      { "time": "11:00 AM - 11:45 AM", "mon": { "sub": "English", "t": "Mr. Paul" }, "tue": { "sub": "Hindi", "t": "Mr. Joshi" }, "wed": { "sub": "Social Sci.", "t": "Miss Roy" }, "thu": { "sub": "Computer", "t": "Mrs. Dixit" }, "fri": { "sub": "Computer", "t": "Mrs. Dixit" }, "sat": { "sub": "Art & Craft", "t": "Miss Das" } }
    ]
  },
  "exams": [
    { "subject": "Mathematics", "date": "2026-06-15", "slot": "Morning", "duration": "3 Hours", "maxMarks": 100, "hall": "Examination Hall A" },
    { "subject": "Science", "date": "2026-06-17", "slot": "Morning", "duration": "3 Hours", "maxMarks": 100, "hall": "Examination Hall A" },
    { "subject": "English", "date": "2026-06-19", "slot": "Morning", "duration": "3 Hours", "maxMarks": 100, "hall": "Examination Hall B" },
    { "subject": "Social Studies", "date": "2026-06-21", "slot": "Morning", "duration": "3 Hours", "maxMarks": 80, "hall": "Examination Hall B" },
    { "subject": "Hindi", "date": "2026-06-23", "slot": "Morning", "duration": "3 Hours", "maxMarks": 80, "hall": "Examination Hall C" },
    { "subject": "Computer Science", "date": "2026-06-25", "slot": "Afternoon", "duration": "2 Hours", "maxMarks": 50, "hall": "Computer Lab 1" }
  ],
  "results": {
    "SAC-001": { "examName": "Midterm Board Evaluation 2026", "subjects": [{ "sub": "Mathematics", "marks": 92, "max": 100 }, { "sub": "Science", "marks": 88, "max": 100 }, { "sub": "English", "marks": 95, "max": 100 }, { "sub": "Social Studies", "marks": 74, "max": 80 }, { "sub": "Hindi", "marks": 72, "max": 80 }, { "sub": "Computer Science", "marks": 48, "max": 50 }] },
    "SAC-002": { "examName": "Midterm Board Evaluation 2026", "subjects": [{ "sub": "Mathematics", "marks": 85, "max": 100 }, { "sub": "Science", "marks": 91, "max": 100 }, { "sub": "English", "marks": 87, "max": 100 }, { "sub": "Social Studies", "marks": 76, "max": 80 }, { "sub": "Hindi", "marks": 70, "max": 80 }, { "sub": "Computer Science", "marks": 45, "max": 50 }] },
    "SAC-003": { "examName": "Midterm Board Evaluation 2026", "subjects": [{ "sub": "Mathematics", "marks": 56, "max": 100 }, { "sub": "Science", "marks": 62, "max": 100 }, { "sub": "English", "marks": 70, "max": 100 }, { "sub": "Social Studies", "marks": 52, "max": 80 }, { "sub": "Hindi", "marks": 48, "max": 80 }, { "sub": "Computer Science", "marks": 32, "max": 50 }] },
    "SAC-004": { "examName": "Midterm Board Evaluation 2026", "subjects": [{ "sub": "Mathematics", "marks": 99, "max": 100 }, { "sub": "Science", "marks": 96, "max": 100 }, { "sub": "English", "marks": 91, "max": 100 }, { "sub": "Social Studies", "marks": 78, "max": 80 }, { "sub": "Hindi", "marks": 75, "max": 80 }, { "sub": "Computer Science", "marks": 49, "max": 50 }] },
    "SAC-005": { "examName": "Midterm Board Evaluation 2026", "subjects": [{ "sub": "Mathematics", "marks": 71, "max": 100 }, { "sub": "Science", "marks": 68, "max": 100 }, { "sub": "English", "marks": 79, "max": 100 }, { "sub": "Social Studies", "marks": 61, "max": 80 }, { "sub": "Hindi", "marks": 65, "max": 80 }, { "sub": "Computer Science", "marks": 38, "max": 50 }] },
    "SAC-006": { "examName": "Midterm Board Evaluation 2026", "subjects": [{ "sub": "Mathematics", "marks": 88, "max": 100 }, { "sub": "Science", "marks": 82, "max": 100 }, { "sub": "English", "marks": 85, "max": 100 }, { "sub": "Social Studies", "marks": 69, "max": 80 }, { "sub": "Hindi", "marks": 71, "max": 80 }, { "sub": "Computer Science", "marks": 42, "max": 50 }] },
    "SAC-007": { "examName": "Midterm Board Evaluation 2026", "subjects": [{ "sub": "Mathematics", "marks": 42, "max": 100 }, { "sub": "Science", "marks": 50, "max": 100 }, { "sub": "English", "marks": 58, "max": 100 }, { "sub": "Social Studies", "marks": 35, "max": 80 }, { "sub": "Hindi", "marks": 40, "max": 80 }, { "sub": "Computer Science", "marks": 25, "max": 50 }] }
  },
  "library": [
    { "id": "LIB-302", "title": "Concepts of Physics (Vol 1)", "author": "Dr. H.C. Verma", "cls": "Class X", "issuedTo": "Aarav Sharma (SAC-001)", "due": "2026-06-05", "status": "Issued" },
    { "id": "LIB-112", "title": "High School English Grammar", "author": "Wren & Martin", "cls": "Class X", "issuedTo": "Rohan Gupta (SAC-003)", "due": "2026-05-20", "status": "Overdue" },
    { "id": "LIB-098", "title": "Introduction to Algorithms", "author": "Cormen, Leiserson", "cls": "Class X", "issuedTo": "-", "due": "-", "status": "Available" }
  ],
  "transport": [
    { "route": "Route 1 - Shyamdeurwa Central", "driver": "Madan Lal", "vehicle": "UP-56T-4521 (Bus)", "stops": "Shyamdeurwa, Mahmada, Pura", "count": 42, "status": "Operational" },
    { "route": "Route 2 - Maharajganj Link", "driver": "Jaswant Singh", "vehicle": "UP-56T-7890 (Bus)", "stops": "Maharajganj Town, Chowk, Garaura", "count": 35, "status": "Operational" }
  ],
  "staff": DEFAULT_STAFF,
  "homework": [
    { "id": "HW-001", "cls": "Class X", "subject": "Mathematics", "title": "Quadratic Equations Practice", "desc": "Solve questions 1 to 15 from exercise 4.2 in the textbook. Show all workings clearly.", "dueDate": "2026-05-28", "createdDate": "2026-05-24", "by": "Dr. Rajeev Sharma" },
    { "id": "HW-002", "cls": "Class X", "subject": "Science", "title": "Chemical Reactions Report", "desc": "Write a 2-page report on redox reactions with real-life examples and chemical formulas.", "dueDate": "2026-05-29", "createdDate": "2026-05-24", "by": "Mrs. Ananya Sen" },
    { "id": "HW-003", "cls": "Class IX", "subject": "English", "title": "Grammar Exercises", "desc": "Complete active/passive voice worksheets distributed in class.", "dueDate": "2026-05-27", "createdDate": "2026-05-24", "by": "Mr. Vivek Paul" }
  ],
  "auditLog": [
    { "timestamp": "05/06/2026, 17:00:00", "actor": "System Initializer", "action": "System Seed", "category": "system", "details": "Initialized VBNS CRM system state registers" }
  ]
}

def get_initial_db():
    credentials = {
        "ADMIN": compute_hash("Raghu123!", "admin")
    }
    for st in DEFAULT_STAFF:
        credentials[st["id"].upper()] = compute_hash("teacher123", st["id"].upper())
    for s in DEFAULT_STUDENTS:
        credentials[s["id"].upper()] = compute_hash("student123", s["id"].upper())
    return {
        "state": DEFAULT_STATE,
        "credentials": credentials
    }

# Read DB
if os.path.exists(DB_FILE):
    try:
        with open(DB_FILE, "r", encoding="utf-8") as f:
            db_data = json.load(f)
    except Exception as e:
        print("Error reading JSON database, seeding fresh.", e)
        db_data = get_initial_db()
        with open(DB_FILE, "w", encoding="utf-8") as f:
            json.dump(db_data, f, indent=2)
else:
    db_data = get_initial_db()
    with open(DB_FILE, "w", encoding="utf-8") as f:
        json.dump(db_data, f, indent=2)

def save_db():
    with open(DB_FILE, "w", encoding="utf-8") as f:
        json.dump(db_data, f, indent=2)

class CentralERPRequestHandler(http.server.BaseHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        if self.path == "/api/state":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps(db_data["state"]).encode("utf-8"))
        else:
            self.send_response(404)
            self.end_headers()

    def do_POST(self):
        global db_data
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length).decode('utf-8')
        
        try:
            req_data = json.loads(body) if body else {}
        except Exception:
            self.send_response(400)
            self.end_headers()
            self.wfile.write(b"Invalid JSON")
            return

        if self.path == "/api/state":
            db_data["state"] = req_data
            save_db()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"success": True, "message": "State saved"}).encode("utf-8"))

        elif self.path == "/api/auth/login":
            username = req_data.get("username")
            role = req_data.get("role")
            password_hash = req_data.get("passwordHash")

            if not username or not role or not password_hash:
                self.send_response(400)
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "message": "Missing login parameters."}).encode("utf-8"))
                return

            key = username.upper()
            stored_hash = db_data["credentials"].get(key)

            if not stored_hash:
                self.send_response(401)
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "message": "Invalid username or ID."}).encode("utf-8"))
                return

            if stored_hash.lower() == password_hash.lower():
                user_obj = None
                if role == "admin":
                    user_obj = { "name": "CRM Super Admin", "id": "admin" }
                elif role == "teacher":
                    user_obj = next((st for st in db_data["state"]["staff"] if st["id"].upper() == key), None)
                elif role == "student":
                    user_obj = next((s for s in db_data["state"]["students"] if s["id"].upper() == key), None)

                if user_obj:
                    self.send_response(200)
                    self.send_header("Content-Type", "application/json")
                    self.end_headers()
                    self.wfile.write(json.dumps({"success": True, "user": user_obj}).encode("utf-8"))
                    return
                else:
                    self.send_response(404)
                    self.end_headers()
                    self.wfile.write(json.dumps({"success": False, "message": "User profile not found in active database."}).encode("utf-8"))
                    return

            self.send_response(401)
            self.end_headers()
            self.wfile.write(json.dumps({"success": False, "message": "Incorrect password details."}).encode("utf-8"))

        elif self.path == "/api/auth/credentials":
            user_id = req_data.get("userId")
            password_hash = req_data.get("passwordHash")

            if not user_id or not password_hash:
                self.send_response(400)
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "message": "Missing credentials parameters."}).encode("utf-8"))
                return

            db_data["credentials"][user_id.upper()] = password_hash
            save_db()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"success": True, "message": "Credentials updated successfully."}).encode("utf-8"))
        elif self.path == "/api/reset":
            db_data = get_initial_db()
            save_db()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"success": True, "message": "Database reset"}).encode("utf-8"))

        else:
            self.send_response(404)
            self.end_headers()

    def do_DELETE(self):
        if self.path.startswith("/api/auth/credentials/"):
            user_id = self.path.split("/")[-1]
            if user_id:
                key = user_id.upper()
                if key in db_data["credentials"]:
                    del db_data["credentials"][key]
                    save_db()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"success": True}).encode("utf-8"))
        else:
            self.send_response(404)
            self.end_headers()

class ThreadedHTTPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True

print(f"VBNS Central ERP Python Backend Server is running at http://localhost:{PORT}")
with ThreadedHTTPServer(("", PORT), CentralERPRequestHandler) as server:
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("Server shutting down...")
