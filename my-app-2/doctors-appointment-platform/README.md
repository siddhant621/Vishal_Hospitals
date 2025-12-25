 
🏥 Hospital Patient Appointment Booking System with Video Consultation

A modern, secure, and scalable hospital appointment booking system that allows patients to book appointments and consult doctors remotely through real-time video calls. This project aims to reduce manual hospital workload, improve patient accessibility, and enable efficient digital healthcare services.

📌 Features

🔐 Secure authentication & role-based access (Patients / Doctors / Admin)

📅 Real-time appointment booking and scheduling

🎥 Integrated video consultation for remote healthcare

☁️ Cloud-based database for scalable data storage

⚡ Fast, responsive, and user-friendly UI

🔔 Appointment confirmations and reminders

🛠️ Tech Stack
Frontend

Next.js

HTML, CSS, JavaScript

Backend

Node.js

API Routes (Next.js)

Authentication

Clerk

Database

Neon (Serverless PostgreSQL)

Prisma ORM

Video Consultation

Vonage Video API

Deployment

Vercel (Frontend & Backend)

🧩 System Architecture

The system follows a client–server architecture:

Client: Next.js frontend

Server: Next.js API routes

Authentication handled by Clerk

Database managed using Neon

Video calls powered by Vonage

🔄 Workflow Overview

User registers/logs in using Clerk authentication

Patient selects doctor and available time slot

Appointment details are stored in Neon database

For video consultations, a secure Vonage session is generated

Doctor and patient join the consultation at scheduled time

Appointment status and records are updated in real time

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/siddhant621/Vishal_Hospitals.git
cd Vishal_Hospitals

2️⃣ Install dependencies
npm install

3️⃣ Configure environment variables

Create a .env file and add:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

DATABASE_URL=

VONAGE_API_KEY=
VONAGE_API_SECRET=

4️⃣ Run database migrations
npx prisma migrate dev

5️⃣ Start development server
npm run dev

🚀 Future Enhancements

📱 Dedicated mobile application

🧠 AI-based symptom analysis

📄 Electronic Medical Records (EMR)

💳 Payment & insurance integration

📊 Advanced analytics and reporting

📈 Performance & Benefits

Reduces hospital waiting time

Minimizes appointment conflicts

Enables remote healthcare access

Improves doctor schedule management

Cost-effective and scalable solution

👨‍💻 Author

Siddhant
Final Year Project – Hospital Management System
📌 Interested in Full-Stack / Software Engineering roles

📜 License

This project is developed for academic and learning purposes.
