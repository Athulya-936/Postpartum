<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# BLOOM 🎯

## Basic Details

### Team Name: CodeCraft

### Team Members
- Member 1: Athulya K M  - Vidya Academy of Science & Technology
- Member 2: Aswathy M Sunilkumar - Vidya Academy of Science & Technology

### Hosted Project Link
https://drive.google.com/drive/u/0/folders/1c91vn_TjAQrOtT6jREq8M-hwQIJcB_QW

### Project Description
[2-3 lines about what your project does]

### The Problem statement
Let’s start with the reality. The postpartum period is one of the most vulnerable times in a person's life. Statistics show that 1 in 7 women experience postpartum depression, and countless others struggle with physical recovery. Yet, the current digital landscape fails them. Mothers are forced to juggle multiple apps—one for tracking baby feeds, another for meditation, and a calendar for appointments. This fragmentation creates 'app fatigue' for an already exhausted user.

### The Solution
We offer an integrated 'All-in-One' ecosystem. We bridge the gap between physical recovery, mental health, baby care, and medical appointments in a single platform. But BLOOM is more than just a digital diary; it is proactive and intelligent. While other apps passively store data, BLOOM analyzes it. We feature an Automated Warning System—if a user logs a high pain score or a worrying depression indicator, the system immediately flags it and prompts professional intervention. We don't just help you track the baby; we help the mother heal.

---

## Technical Details

### Technologies/Components Used

**For Software:**
- Languages used:  JavaScript, Java, YAML,JSON
- Frameworks used: React, ReactRouter, CSS, Express.js, MongoDB, Docker
- Libraries used: Express.js, MongoDB+Mongoose, JWT+bcryptjs, React + React Router, Axios
- Tools used:  VS Code


## Features

List the key features of your project:
- Feature 1: AI Chat Support
- Feature 2: Mood Tracking
- Feature 3: Recovery Plans
- Feature 4: Partner Support
- Feature 5: Community Features

---

## Implementation

### For Software:

#### Installation
```bash
Installation commands - npm install
```

#### Run
```bash
Run commands - npm start
```


## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

*Login Page*
<img width="1920" height="1080" alt="Screenshot (2)" src="https://github.com/user-attachments/assets/0c19094c-4a66-47ec-b48e-0a18c252606f" />


*Dashboard*
<img width="1920" height="1080" alt="Screenshot (3)" src="https://github.com/user-attachments/assets/64ff722c-3b7a-4992-b006-7ad59fdd5e12" />

*Partner View*
<img width="1920" height="1080" alt="Screenshot (4)" src="https://github.com/user-attachments/assets/27fc01c2-4d39-46ca-8c0d-2f3d67844023" />

#### Diagrams

**System Architecture:**
<img width="1919" height="270" alt="Screenshot 2026-02-28 100510" src="https://github.com/user-attachments/assets/185b1fad-4381-4c43-9538-c73a0f42b53d" />

1. Architecture Model
BLOOM follows a Three-Tier Client-Server Architecture, ensuring separation of concerns:

Presentation Tier: React.js Frontend (User Interface).
Application Tier: Node.js/Express.js Backend (Business Logic).
Data Tier: MongoDB Atlas (Database Storage).
2. Key Components

Frontend (React): Manages UI, state, and routing. It consumes the API using HTTP clients (Axios/Fetch) to send/receive JSON data.
Backend (Node/Express): Acts as the "brain." It handles routing, middleware (authentication), and logic processing. Mongoose ODM is used to interact with the database.
Database (MongoDB): A NoSQL database storing data as Documents in Collections (e.g., users, healthrecords). It offers flexibility for varied health data structures.
3. Tech Stack Interactions

Communication: Frontend and Backend communicate via HTTPS using JSON payloads.
Security: Uses JWT (JSON Web Token) for stateless authentication. The frontend sends a token with every request; the backend verifies it before granting access.
Data Access: Node.js uses Mongoose schemas to enforce structure and simplify database queries without complex SQL.
4. Data Flow (Example: Logging Health)

Action: User submits health form on Frontend.
Request: Frontend sends a POST request with data + JWT token.
Verification: Backend Middleware validates the JWT.
Processing: Controller executes business logic (e.g., checkWarnings()) to flag risks.
Storage: Data is saved to MongoDB via Mongoose.
Response: Success status and results are returned to the Frontend.


**Application Workflow:**

![Workflow](docs/workflow.png)
*Add caption explaining your workflow*

---



#### Build Photos

![Team](Add photo of your team here)

![Components](Add photo of your components here)
*List out all components shown*
<img width="1920" height="1080" alt="Screenshot (8)" src="https://github.com/user-attachments/assets/4d6f4d97-76f6-4fbb-81f9-63b9e22b97b2" />


![Build](Add photos of build process here)
*Explain the build steps*

![Final](Add photo of final product here)
*Explain the final build*

---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

**Base URL:** `https://api.yourproject.com`

##### Endpoints

**GET /api/endpoint**
- **Description:** [What it does]
- **Parameters:**
  - `param1` (string): [Description]
  - `param2` (integer): [Description]
- **Response:**
```json
{
  "status": "success",
  "data": {}
}
```

**POST /api/endpoint**
- **Description:** [What it does]
- **Request Body:**
```json
{
  "field1": "value1",
  "field2": "value2"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Operation completed"
}
```

[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

### For Hardware Projects:

#### Bill of Materials (BOM)

| Component | Quantity | Specifications | Price | Link/Source |
|-----------|----------|----------------|-------|-------------|
| Arduino Uno | 1 | ATmega328P, 16MHz | ₹450 | [Link] |
| LED | 5 | Red, 5mm, 20mA | ₹5 each | [Link] |
| Resistor | 5 | 220Ω, 1/4W | ₹1 each | [Link] |
| Breadboard | 1 | 830 points | ₹100 | [Link] |
| Jumper Wires | 20 | Male-to-Male | ₹50 | [Link] |
| [Add more...] | | | | |

**Total Estimated Cost:** ₹[Amount]

#### Assembly Instructions

**Step 1: Prepare Components**
1. Gather all components listed in the BOM
2. Check component specifications
3. Prepare your workspace
![Step 1](images/assembly-step1.jpg)
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail
![Step 2](images/assembly-step2.jpg)
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)
![Step 3](images/assembly-step3.jpg)
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**
![Final Build](images/final-build.jpg)
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video
[Add your demo video link here - YouTube, Google Drive, etc.]

*Explain what the video demonstrates - key features, user flow, technical highlights*

### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:** [e.g., GitHub Copilot, v0.dev, Cursor, ChatGPT, Claude]

**Purpose:** [What you used it for]
- Example: "Generated boilerplate React components"
- Example: "Debugging assistance for async functions"
- Example: "Code review and optimization suggestions"

**Key Prompts Used:**
- "Create a REST API endpoint for user authentication"
- "Debug this async function that's causing race conditions"
- "Optimize this database query for better performance"

**Percentage of AI-generated code:** [Approximately X%]

**Human Contributions:**
- Architecture design and planning
- Custom business logic implementation
- Integration and testing
- UI/UX design decisions

*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contributions

- [Name 1]: [Specific contributions - e.g., Frontend development, API integration, etc.]
- [Name 2]: [Specific contributions - e.g., Backend development, Database design, etc.]
- [Name 3]: [Specific contributions - e.g., UI/UX design, Testing, Documentation, etc.]

---

## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub
