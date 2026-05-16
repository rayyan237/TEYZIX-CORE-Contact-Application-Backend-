# TEYZIX CORE - Contact & Application Backend (Task ID: BE-2)

This is a backend RESTful API built for TEYZIX CORE to handle incoming contact form submissions and internship applications.

## Technologies Used
* Node.js
* Express.js
* MongoDB (Mongoose)
* dotenv (for environment variables)
* CORS

## Local Setup Instructions

1. **Clone the repository:**
   \`\`\`bash
   git clone <your-github-repo-link-here>
   \`\`\`
2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`
3. **Set up environment variables:**
   Create a \`.env\` file in the root directory and add your MongoDB URI:
   \`\`\`text
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   \`\`\`
4. **Start the server:**
   \`\`\`bash
   node server.js
   \`\`\`

---

## API Endpoints

### 1. Submit Contact Message
* **URL:** `/contact`
* **Method:** `POST`
* **Description:** Saves a new contact message to the database.
* **Request Body (JSON):**
  \`\`\`json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I have a question about TEYZIX CORE."
  }
  \`\`\`
* **Success Response:** `201 Created`

### 2. Submit Internship Application
* **URL:** `/apply`
* **Method:** `POST`
* **Description:** Saves a new internship application.
* **Request Body (JSON):**
  \`\`\`json
  {
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "+92 300 0000000",
    "domain": "Backend Web Development"
  }
  \`\`\`
* **Success Response:** `201 Created`

### 3. Admin View
* **URL:** `/admin/view`
* **Method:** `GET`
* **Description:** Fetches all contact messages and applications (sorted by newest first).
* **Success Response:** `200 OK` (Returns a JSON object containing total counts and arrays of the data).