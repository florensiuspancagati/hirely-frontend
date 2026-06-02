# Cerovix Frontend - Project Context Documentation

**Last Updated**: June 2, 2026  
**Repository**: hirely-frontend  
**Status**: Active Development (MVP Stage)

---

## 1. Repository Overview

### Name & Purpose
**Cerovix** (Frontend Application) - An AI-powered CV analysis and job matching platform designed to help job seekers optimize their CVs for Applicant Tracking Systems (ATS).

### Main Responsibilities
- Provide an intuitive UI for CV submission and job description input
- Handle PDF CV file uploads
- Collect manual CV data (name, position, education, experience, skills)
- Display AI-generated analysis results including match scores and skill gaps
- Implement authentication UI and login/logout flows
- Present company information and team details

### Current Development Status
- **Phase**: MVP (Minimum Viable Product)
- **Frontend Status**: Functional prototype
- **Backend Integration**: Connected to backend API (partial implementation)
- **Authentication**: Mock-based (localStorage only, NOT production-ready)
- **Premium Features**: Partially implemented with login gates

---

## 2. Technology Stack

### Core Framework & Build Tools
- **React**: 19.2.6 - Modern frontend library with functional components
- **React Router DOM**: 7.15.1 - Client-side routing for multi-page navigation
- **Vite**: 8.0.12 - Fast build tool and dev server
- **@vitejs/plugin-react**: 6.0.1 - React Fast Refresh support

### Styling & UI
- **CSS**: Custom CSS stylesheets (no CSS framework)
- **Font Awesome**: 6.5.1 - Icon library via CDN
- **Google Fonts**: Plus Jakarta Sans (300, 400, 500, 600, 700, 800 weights)

### Development Tools
- **ESLint**: 10.3.0 - Code linting
- **eslint-plugin-react-hooks**: 7.1.1
- **eslint-plugin-react-refresh**: 0.5.2
- **Globals**: 17.6.0

### Build & Runtime
- **Node.js Module Type**: ES modules

---

## 3. Architecture Overview

### Frontend Architecture Pattern
**Component-Based Architecture with Page-Service Separation**

```
App (Root with Router)
├── AppContent (Wrapper for conditional rendering)
│   ├── Navbar (Persistent header)
│   ├── Routes
│   │   ├── Home (Main analysis page)
│   │   ├── Result (Analysis results display)
│   │   ├── Login (Authentication UI)
│   │   ├── About (About Cerovix)
│   │   └── Team (Team information)
│   └── Footer (Conditional rendering based on route)
├── Services
│   ├── api.js (API configuration)
│   └── analyses-services.js (CV analysis service)
└── Components
    ├── ManualForm (Modal for CV data input)
    └── HowItWorks (Step-by-step guide)
```

### Key Architectural Decisions
1. **Conditional Footer Rendering**: Footer is hidden on `/login`, `/result`, and `/about` routes
2. **State Management**: React hooks (useState) for local component state
3. **Service Layer**: Isolated API calls through dedicated service modules
4. **Modal Pattern**: ManualForm as reusable modal component
5. **Client-side Navigation**: React Router for SPA navigation without page reloads

---

## 4. Folder Structure Summary

| Folder | Purpose | Contains |
|--------|---------|----------|
| `src/pages/` | Main page components | Home, Result, Login, About, Team |
| `src/components/` | Reusable UI components | Navbar, Footer, HowItWorks, ManualForm |
| `src/services/` | API communication layer | API configuration, analysis endpoints |
| `src/styles/` | Component-scoped stylesheets | CSS for pages and components |
| `src/assets/` | Static resources | Images (logo.png), team photos |
| `public/FotoTeam/` | Team member photographs | Profile images for Team page |

---

## 5. Features

### 1. **CV Analysis & Matching**
- **Purpose**: Core feature - analyze CV against job descriptions using AI
- **Main Files**: 
  - [Home.jsx](src/pages/Home.jsx)
  - [analyses-services.js](src/services/analyses-services.js)
- **Current Status**: ✅ Implemented and integrated with backend
- **Details**:
  - Users input job description
  - Upload PDF CV file
  - Provide manual CV data (name, position, education, experience, skills)
  - Send all data to backend for NLP analysis
  - Display match score and skill gaps

### 2. **Match Score Display**
- **Purpose**: Show visual CV-to-job alignment percentage
- **Main Files**: [Result.jsx](src/pages/Result.jsx)
- **Current Status**: ✅ Implemented
- **Details**:
  - Score displayed as circular gauge (0-100)
  - Count of detected issues
  - Tag-based issue display

### 3. **Skill Gap Detection**
- **Purpose**: Identify missing/weak skills for target position
- **Main Files**: [Result.jsx](src/pages/Result.jsx)
- **Current Status**: ✅ Implemented
- **Details**:
  - Lists missing skills from backend analysis
  - Displayed as warning tags with icons

### 4. **Smart Recommendations**
- **Purpose**: Provide actionable improvement suggestions
- **Main Files**: [Result.jsx](src/pages/Result.jsx)
- **Current Status**: ⚠️ Partially Implemented
- **Details**:
  - Free tier: Shows first recommendation for improvements and skills
  - Premium tier: Full list of recommendations (requires login)
  - Recommendations include CV structure advice and course suggestions

### 5. **Authentication UI**
- **Purpose**: Login and registration interface
- **Main Files**: [Login.jsx](src/pages/Login.jsx)
- **Current Status**: ⚠️ Mock-based (NOT production-ready)
- **Details**:
  - Toggle between login/register modes
  - Stores login state in localStorage
  - No backend validation or JWT tokens
  - Triggers page reload to update navbar state

### 6. **Premium Feature Gating**
- **Purpose**: Restrict detailed analysis results to logged-in users
- **Main Files**: [Result.jsx](src/pages/Result.jsx)
- **Current Status**: ✅ Implemented
- **Details**:
  - Locked overlay shows "Login to unlock" message
  - Premium content revealed after login
  - Uses localStorage to check authentication status

### 7. **Navigation & Routing**
- **Purpose**: Multi-page SPA experience
- **Main Files**: 
  - [App.jsx](src/App.jsx)
  - [Navbar.jsx](src/components/Navbar.jsx)
- **Current Status**: ✅ Fully Implemented
- **Details**:
  - Home, About, Team, Result, Login pages
  - Conditional navbar links based on login status
  - Mobile-responsive navbar with hamburger menu

### 8. **About Page**
- **Purpose**: Explain Cerovix's mission and value proposition
- **Main Files**: [About.jsx](src/pages/About.jsx)
- **Current Status**: ✅ Implemented
- **Details**:
  - Describes ATS challenges and how Cerovix helps
  - Mentions NLP and AI technology
  - Highlights Dicoding Camp origin

### 9. **Team Information Page**
- **Purpose**: Display team members and roles
- **Main Files**: [Team.jsx](src/pages/Team.jsx)
- **Current Status**: ⚠️ Partially Implemented (Placeholder Data)
- **Details**:
  - Organized by divisions: Full-Stack, Data Science, AI
  - Contains one real team member (Fatahul Fahmi - Frontend)
  - Other members are placeholders ("Anggota BE", "Anggota DS 1", etc.)

### 10. **Manual CV Data Input**
- **Purpose**: Collect structured CV information via modal form
- **Main Files**: [ManualForm.jsx](src/components/ManualForm.jsx)
- **Current Status**: ✅ Fully Implemented
- **Details**:
  - Modal popup form for CV data
  - Fields: Full Name, Target Position, Education, Experience, Skills
  - Form validation at HTML level
  - Data passed to Home component and backend

### 11. **How It Works Guide**
- **Purpose**: Educate users about 4-step process
- **Main Files**: [HowItWorks.jsx](src/components/HowItWorks.jsx)
- **Current Status**: ✅ Implemented
- **Details**:
  - 4-step process visualization:
    1. Input Data (CV + Jobdesc)
    2. AI Processing (NLP extraction)
    3. Skill Gap Detection
    4. Results & Recommendations

### 12. **Loading State UI**
- **Purpose**: Provide feedback during backend analysis
- **Main Files**: [Home.jsx](src/pages/Home.jsx)
- **Current Status**: ✅ Implemented
- **Details**:
  - Loading spinner animation
  - "AI sedang menganalisis CV-mu..." message
  - Substatus: "Mencocokkan kata kunci dan mendeteksi skill gap."
  - Replaces form while processing

---

## 6. Data Flow

### Complete User Journey Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                      USER INTERACTION FLOW                          │
└─────────────────────────────────────────────────────────────────────┘

1. HOME PAGE - Input Phase
   ├─ User enters Job Description
   │  └─ [jobDesc state]
   ├─ User clicks "Deskripsi CV Secara Singkat"
   │  └─ ManualForm modal opens
   │     ├─ User fills form (fullname, position, education, experience, skill)
   │     └─ Data saved to [manualData state]
   │        └─ Button status changes to "✓ Deskripsi CV Sudah Tersimpan"
   └─ User uploads PDF CV file
      └─ [cvFile state]
         └─ Validation: PDF format check

2. VALIDATION PHASE
   ├─ Check jobDesc is not empty ✓
   ├─ Check isManualFilled is true ✓
   └─ Check cvFile is selected ✓

3. SUBMISSION → BACKEND API
   ├─ POST to /hirely-api/v1/analyses
   ├─ FormData payload:
   │  ├─ jobDescription: string
   │  ├─ fullname: string
   │  ├─ position: string
   │  ├─ education: string
   │  ├─ experience: string
   │  ├─ skill: string
   │  └─ cv: File object (PDF)
   └─ setIsAnalyzing(true) → Shows loading screen

4. BACKEND PROCESSING (NLP/AI)
   ├─ Extract CV text from PDF
   ├─ Parse job description keywords
   ├─ Compare CV against job requirements
   └─ Generate match score and analysis

5. RESPONSE HANDLING
   ├─ Parse response.data.analyses
   ├─ Save to localStorage:
   │  └─ localStorage.setItem("analysesResult", JSON.stringify(data))
   └─ Navigate to /result with state

6. RESULT PAGE - Display Phase
   ├─ Load data from location.state OR localStorage
   ├─ Display Match Score (0-100)
   ├─ Display Missing Skills (missingSkills array)
   ├─ Display First Improvement & Skill Recommendation (free tier)
   └─ Premium Content Lock:
      ├─ IF isUserLoggedIn = true
      │  └─ Show full improvements and skill recommendations
      └─ ELSE
         └─ Show locked overlay with login CTA

7. OPTIONAL: LOGIN FLOW
   ├─ User clicks login on Result page
   └─ Navigate to /login
      ├─ Toggle between login/register modes
      ├─ Submit form (mock validation)
      ├─ localStorage.setItem("isLoggedIn", "true")
      ├─ alert("Login Berhasil!")
      └─ window.location.reload() → Updates Navbar
         └─ Navigate to /
            └─ User can re-analyze and see premium content

8. LOGOUT FLOW
   ├─ User clicks "Logout" button in Navbar
   ├─ localStorage.removeItem("isLoggedIn")
   ├─ setIsUserLoggedIn(false)
   ├─ alert("Anda telah logout.")
   ├─ Navigate to /
   └─ window.location.reload() → Updates Navbar
```

### State Management Overview

#### Home.jsx
```javascript
useState({
  jobDesc: string,              // Job description input
  cvFile: File | null,          // Uploaded PDF
  isAnalyzing: boolean,         // Loading state
  isModalOpen: boolean,         // Manual form visibility
  isManualFilled: boolean,      // Validation flag
  manualData: {                 // Manual CV data
    fullname: string,
    position: string,
    education: string,
    experience: string,
    skill: string
  }
})
```

#### Result.jsx
```javascript
useState({
  isUserLoggedIn: boolean       // Premium content gating
})
useLocation().state || localStorage // Analysis data
```

#### Login.jsx
```javascript
useState({
  isLogin: boolean,             // Mode toggle
  email: string,
  password: string,
  name: string
})
localStorage.setItem("isLoggedIn", "true")
```

#### Navbar.jsx
```javascript
useState({
  isMobile: boolean,            // Mobile menu toggle
  isUserLoggedIn: boolean       // Conditional rendering
})
useEffect(() => {               // Sync with localStorage
  const loggedIn = localStorage.getItem("isLoggedIn")
})
```

---

## 7. API Analysis

### Backend Endpoint Consumed

#### POST `/hirely-api/v1/analyses`
**Purpose**: Analyze CV against job description and return match score with recommendations

**Request Format**:
```javascript
// FormData payload
{
  "jobDescription": "string",      // Job posting text
  "fullname": "string",            // User's full name
  "position": "string",            // Target job position
  "education": "string",           // Education level/details
  "experience": "string",          // Work experience summary
  "skill": "string",               // Skills (comma-separated)
  "cv": File                       // PDF file object
}
```

**Response Format**:
```javascript
{
  "data": {
    "analyses": {
      "score": number,                        // 0-100 match percentage
      "missingSkills": [string],              // Array of missing skills
      "improvements": [string, string],       // 2 improvement suggestions
      "recommendedSkills": [string, string]   // 2 skill recommendations
    }
  },
  "message": "string"  // Success/error message
}
```

**Authentication**: None (currently)

**Error Handling**:
- Returns error message if response is not ok
- Frontend displays alert with error.message

### API Configuration

**Base URL** (from [api.js](src/services/api.js)):
```javascript
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/hirely-api/v1"
```

**Environment Variable**:
- `VITE_API_URL`: Backend API base URL (Vite environment variable)
- Default: `http://localhost:3000/hirely-api/v1`

**Consumption Method**:
- Imported in [Home.jsx](src/pages/Home.jsx) via [analyses-services.js](src/services/analyses-services.js)
- Uses native Fetch API (no axios/http client)
- FormData for multipart/form-data handling

---

## 8. Authentication Analysis

### Current Implementation
**Status**: ⚠️ Mock-based, NOT production-ready

### Authentication Type
- **Method**: Client-side localStorage simulation
- **Token Type**: None (no JWT or session tokens)
- **Backend Integration**: Not implemented

### Login/Logout Flow

**Login** ([Login.jsx](src/pages/Login.jsx)):
1. User submits email/password (no validation)
2. localStorage.setItem("isLoggedIn", "true")
3. Page reload triggers Navbar update
4. Conditional rendering shows "Logout" button

**Logout** ([Navbar.jsx](src/components/Navbar.jsx)):
1. Click "Logout" button
2. localStorage.removeItem("isLoggedIn")
3. Update useState and navigate to home
4. Page reload

**Access Control**:
- Premium content in [Result.jsx](src/pages/Result.jsx) checks:
  ```javascript
  const loggedIn = localStorage.getItem("isLoggedIn")
  if (loggedIn === "true") {
    // Show premium content
  } else {
    // Show locked overlay
  }
  ```

### Protected Routes
- **Not implemented** - No route guards or authentication middleware
- Premium features gated by localStorage check (not secure)

### Security Concerns
🚨 **Critical Issues**:
- No password validation
- No backend authentication
- No session management
- Users can fake login by editing localStorage
- No CSRF protection
- No rate limiting on API

---

## 9. Database Analysis

**Status**: Unknown from current repository

The frontend application does not directly interact with a database. All data is:
1. Sent to backend via API for analysis
2. Stored temporarily in localStorage for offline access
3. Not persisted on frontend

**Expected Backend Database** (inferred from API calls):
- Likely stores user accounts, analysis history, CV data
- Unknown schema, models, relationships

---

## 10. Environment Variables

### Required Environment Variables

| Variable | Purpose | Default | Environment |
|----------|---------|---------|-------------|
| `VITE_API_URL` | Backend API base URL | `http://localhost:3000/hirely-api/v1` | All |

### Configuration Points

**Development** (`npm run dev`):
- API URL defaults to `http://localhost:3000/hirely-api/v1`
- Expects backend running on local machine

**Production** (`npm run build`):
- Must set `VITE_API_URL` to production backend URL
- Example: `https://api.cerovix.ai/hirely-api/v1`

### How to Configure
Create `.env` file in project root:
```
VITE_API_URL=http://localhost:3000/hirely-api/v1
```

Or set environment variable before build:
```bash
VITE_API_URL=https://api.cerovix.ai/hirely-api/v1 npm run build
```

---

## 11. External Integrations

### Third-Party Services

#### 1. **Font Awesome Icons** (CDN)
- **URL**: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css`
- **Usage**: Icons throughout UI (upload, check, lock, chart, etc.)
- **Status**: ✅ Integrated

#### 2. **Google Fonts**
- **URL**: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans`
- **Weights**: 300, 400, 500, 600, 700, 800
- **Usage**: Primary typography
- **Status**: ✅ Integrated

#### 3. **Backend NLP/AI Service**
- **Endpoint**: `/hirely-api/v1/analyses`
- **Purpose**: CV-to-job matching analysis
- **Expected Capabilities**:
  - PDF text extraction
  - NLP keyword matching
  - Skill gap analysis
  - Match score calculation
  - Recommendation generation
- **Status**: ✅ Integration started (awaiting full backend)

### No Direct Third-Party Integrations
- No payment gateway (premium features not yet monetized)
- No email service (no account confirmation)
- No file storage service (CV stored temporarily during request)
- No analytics service
- No auth service (LinkedIn OAuth, Google Sign-in, etc.)

---

## 12. Current User Flow

### Complete Working Journey

**Step 1: Visit Home Page**
- Landing page with hero text explaining Cerovix
- User sees "How It Works" 4-step guide

**Step 2: Input Job Description**
- User pastes job posting from LinkedIn/Glints
- Text entered into jobdesc textarea

**Step 3: Input CV Details**
- Click "Deskripsi CV Secara Singkat" button
- Modal form opens
- Fill: Full Name, Target Position, Education, Experience, Skills
- Click "Simpan" to close modal
- Button changes to "✓ Deskripsi CV Sudah Tersimpan"

**Step 4: Upload CV File**
- Drag & drop or click to upload PDF
- Validation checks PDF format
- Shows file name on upload

**Step 5: Submit Analysis**
- Click "Mulai Analisis" button
- Loading screen appears with spinner
- Backend analyzes CV (10-30 seconds typically)

**Step 6: View Results**
- Redirect to `/result` page
- See Match Score (0-100) in circular gauge
- View list of missing skills
- Read first improvement & skill recommendation

**Step 7a: Without Login**
- See locked content area
- Overlay shows "Ingin melihat lebih lengkap?"
- Click "Masuk / Daftar Sekarang" link

**Step 7b: With Login**
- Click "Masuk" in navbar
- Go to `/login` page
- Toggle to Register if new user
- Enter name, email, password
- Click "Masuk ke Dashboard" or "Daftar Sekarang"
- localStorage saves login state
- Page reloads, navbar shows "Logout"
- Navigate back to analysis result
- Full premium recommendations now visible

**Step 8: Upload New CV (Optional)**
- Click "🔄 Unggah CV Baru" button on Result page
- Returns to Home
- Clear states, start over

---

## 13. Missing Features

### Evidence from Source Code

#### 1. **User Account System**
- **Evidence**: Mock login in [Login.jsx](src/pages/Login.jsx) with localStorage only
- **Expected**: Real authentication with backend, password hashing, user profiles
- **Status**: Not implemented

#### 2. **Analysis History/Dashboard**
- **Evidence**: Commented code in [Navbar.jsx](src/components/Navbar.jsx) line 38:
  ```javascript
  {/* <li><Link to="/history">Riwayat Analisis</Link></li> */}
  ```
- **Expected**: `/history` or `/dashboard` page showing past analyses
- **Status**: Planned but disabled for MVP

#### 3. **User Profile Management**
- **Evidence**: No `/profile` or `/settings` route in [App.jsx](src/App.jsx)
- **Expected**: User profile update, password change, account settings
- **Status**: Not implemented

#### 4. **Data Persistence**
- **Evidence**: All data cleared on localStorage removal
- **Expected**: Server-side storage of user analyses and history
- **Status**: Not implemented (frontend-only)

#### 5. **Backend Authentication**
- **Evidence**: No JWT tokens or authorization headers in [analyses-services.js](src/services/analyses-services.js)
- **Expected**: Bearer tokens, refresh tokens, session management
- **Status**: Not implemented

#### 6. **Complete Team Member Information**
- **Evidence**: Placeholders in [Team.jsx](src/pages/Team.jsx):
  ```javascript
  { name: "Anggota BE", id: "xxxxx", ... },
  { name: "Anggota DS 1", ... },
  ```
- **Expected**: All team members with real names and photos
- **Status**: Only 1/8 members filled (Fatahul Fahmi)

#### 7. **Real Payment/Subscription System**
- **Evidence**: No payment gateway integration
- **Expected**: Stripe/PayPal, subscription tiers, payment forms
- **Status**: Not implemented (all features currently free)

#### 8. **Email Verification**
- **Evidence**: No email input validation or verification flow
- **Expected**: Email confirmation before account activation
- **Status**: Not implemented

#### 9. **Password Reset**
- **Evidence**: No `/forgot-password` route
- **Expected**: Email-based password recovery
- **Status**: Not implemented

#### 10. **Advanced Search & Filtering**
- **Evidence**: No job search or CV filter functionality
- **Expected**: Save favorite jobs, filter by industry, etc.
- **Status**: Not implemented

#### 11. **Comparison Feature**
- **Evidence**: Single analysis only, no comparison logic
- **Expected**: Compare multiple CVs against same job or compare same CV against multiple jobs
- **Status**: Not implemented

#### 12. **PDF Editor**
- **Evidence**: Only upload, no inline editing
- **Expected**: In-app CV editor, PDF annotation tools
- **Status**: Not implemented

---

## 14. Known Technical Debt

### Code Quality Issues

#### 1. **ESLint Disable Directives**
- **Files**: [Home.jsx](src/pages/Home.jsx) (line 1), [ManualForm.jsx](src/components/ManualForm.jsx) (line 1)
- **Evidence**: `/* eslint-disable no-unused-vars */`
- **Issue**: Unused variables not properly cleaned up
- **Priority**: Low - cleanup task

#### 2. **Missing Error Handling**
- **File**: [Home.jsx](src/pages/Home.jsx), [Login.jsx](src/pages/Login.jsx)
- **Evidence**: Basic try-catch with generic alert()
- **Issue**: No user-friendly error messages, console.error() for debugging
- **Example**: 
  ```javascript
  catch (error) {
    console.error(error);
    alert(error.message)  // Plain error message
  }
  ```
- **Priority**: High - impacts UX

#### 3. **Hardcoded Values**
- **Evidence**: Default API URL in [api.js](src/services/api.js):
  ```javascript
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/hirely-api/v1"
  ```
- **Issue**: Localhost default assumes local development
- **Priority**: Medium - deployment blocker

#### 4. **Form Validation is Minimal**
- **Evidence**: Only HTML required attributes, no regex or format validation
- **Files**: [ManualForm.jsx](src/components/ManualForm.jsx), [Login.jsx](src/pages/Login.jsx)
- **Issue**: User can submit invalid data (e.g., email without @)
- **Priority**: Medium - data quality

#### 5. **Mock Authentication**
- **Evidence**: localStorage-based login without backend validation
- **File**: [Login.jsx](src/pages/Login.jsx)
- **Issue**: Users can fake login by editing browser storage
- **Priority**: Critical - security risk

#### 6. **Page Reload for State Sync**
- **Evidence**: `window.location.reload()` in [Login.jsx](src/pages/Login.jsx) and Navbar
- **Issue**: Unnecessary full page reload, loses browser history state
- **Priority**: Medium - UX degradation

#### 7. **localStorage Dependency**
- **Evidence**: Data stored/retrieved in multiple places:
  - [Home.jsx](src/pages/Home.jsx): `localStorage.setItem("analysesResult", ...)`
  - [Result.jsx](src/pages/Result.jsx): `JSON.parse(localStorage.getItem("analysesResult"))`
  - [Login.jsx](src/pages/Login.jsx): `localStorage.setItem("isLoggedIn", ...)`
  - [Navbar.jsx](src/components/Navbar.jsx): `localStorage.getItem("isLoggedIn")`
- **Issue**: Fragile, no encryption, data lost in private browsing
- **Priority**: High - data loss risk

#### 8. **No Loading States for UI**
- **Evidence**: Only loading screen for analysis, no loading states for:
  - Form submission
  - File upload progress
  - Navigation transitions
- **Priority**: Low - minor UX improvement

#### 9. **CSS Not Organized**
- **Evidence**: Individual CSS files for each component (8 separate files)
- **Issue**: Potential style conflicts, hard to maintain consistent theming
- **Priority**: Low - future refactor with CSS-in-JS or SCSS

#### 10. **Missing Input Type Checks**
- **File**: [Home.jsx](src/pages/Home.jsx)
- **Evidence**: File type checking only checks extension:
  ```javascript
  if (file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf"))
  ```
- **Issue**: Extension spoofing possible (user could rename malicious file)
- **Priority**: Medium - backend should validate

#### 11. **No Accessibility Attributes**
- **Evidence**: Missing aria-labels, alt text on some images
- **Priority**: Low - MVP doesn't require WCAG compliance

#### 12. **Incomplete Response Handling**
- **File**: [Result.jsx](src/pages/Result.jsx)
- **Evidence**: Assumes backend response structure:
  ```javascript
  analysesResult.score
  analysesResult.missingSkills
  analysesResult.improvements
  analysesResult.recommendedSkills
  ```
- **Issue**: No validation if backend structure changes
- **Priority**: Medium - prone to runtime errors

---

## 15. Integration Context

### What This Repository Expects from Backend

#### 1. **CV Analysis Endpoint**
- **Route**: POST `/hirely-api/v1/analyses`
- **Expectations**:
  - Accept FormData with PDF file and text fields
  - Perform NLP analysis on CV and job description
  - Return structured JSON response
  - Process time: ~10-30 seconds typical

#### 2. **Response Structure**
```javascript
{
  "success": true,
  "message": "Analisis berhasil",
  "data": {
    "analyses": {
      "score": 85,                                    // Required
      "missingSkills": ["Docker", "Kubernetes"],     // Required: array
      "improvements": [                               // Required: array of 2+ items
        "First improvement suggestion",
        "Second improvement suggestion"
      ],
      "recommendedSkills": [                          // Required: array of 2+ items
        "First skill recommendation",
        "Second skill recommendation"
      ]
    }
  }
}
```

#### 3. **Error Response Handling**
Backend should return:
```javascript
{
  "success": false,
  "message": "Error description"
}
```

Frontend will display: `alert(result.message || "Analisis gagal")`

#### 4. **Authentication Integration** (Future)
- Frontend will need user registration/login endpoints
- JWT tokens for secure analysis requests
- User profile storage for history

#### 5. **File Upload Handling**
- Accept PDF files up to ~2MB
- Extract text from PDF (server-side)
- Handle corrupted/invalid PDF gracefully

### Backend Technologies (Inferred from Code)

Based on route pattern `/hirely-api/v1/`:
- Likely **Express.js** backend (REST API pattern)
- **NLP/ML** service for CV analysis (Python ML model or Node.js NLP library)
- **PDF parsing** library (pdfparse, pdf-extract, etc.)
- **Database** for user data and history (Unknown type)

### Shared Business Rules

1. **CV Analysis Algorithm**:
   - Match score: percentage of job requirements met
   - Skill gaps: required skills missing from CV
   - Improvements: structural and content suggestions
   - Recommendations: skill courses/certifications to pursue

2. **Free vs Premium Content**:
   - Free: First improvement + first skill recommendation visible
   - Premium: All improvements + all recommendations after login

3. **Supported File Format**:
   - Only PDF files accepted
   - Max size: 2MB (inferred from UI text)

4. **Language**:
   - All text in Indonesian (Bahasa Indonesia)
   - Support for job descriptions and CVs in Indonesian

---

## 16. AI Assistant Context

### Repository Summary
**Cerovix** is a React + Vite frontend application for an AI-powered CV analysis platform. It helps job seekers optimize their CVs for Applicant Tracking Systems (ATS) by analyzing them against job descriptions and identifying skill gaps.

### Current Implementation Status

**Completed (MVP Stage)**:
- ✅ React SPA with React Router (5 pages: Home, Result, Login, About, Team)
- ✅ CV file upload (PDF validation)
- ✅ Manual CV data form (modal input)
- ✅ Backend API integration for analysis
- ✅ Results display with match score
- ✅ Loading states and animations
- ✅ Responsive navbar with login detection
- ✅ Premium content gating (localStorage-based)
- ✅ 4-step guide component
- ✅ About page with mission statement
- ✅ Team showcase page (partial data)

**Not Completed**:
- ❌ Real backend authentication (mock only)
- ❌ Analysis history/dashboard
- ❌ User profiles and account management
- ❌ Server-side data persistence
- ❌ Payment/subscription system
- ❌ Complete team member information
- ❌ Email verification
- ❌ Password reset

### Critical Files & Workflows

| File | Purpose | Criticality | Key Logic |
|------|---------|-------------|-----------|
| [App.jsx](src/App.jsx) | Root router | Critical | Routes definition, footer conditional |
| [Home.jsx](src/pages/Home.jsx) | Main analysis page | Critical | Form validation, API submission, state mgmt |
| [Result.jsx](src/pages/Result.jsx) | Results display | Critical | Data display, premium gating, localStorage |
| [analyses-services.js](src/services/analyses-services.js) | API integration | Critical | Backend communication, FormData handling |
| [api.js](src/services/api.js) | API config | Critical | Base URL configuration |
| [Login.jsx](src/pages/Login.jsx) | Auth UI | Important | Mock authentication, localStorage |
| [Navbar.jsx](src/components/Navbar.jsx) | Navigation | Important | Conditional rendering, logout |
| [ManualForm.jsx](src/components/ManualForm.jsx) | CV data form | Important | Modal form, data collection |

### Critical Workflows

1. **CV Analysis Workflow**:
   - Home.jsx → Form validation → analyses-services.js → Backend API → Result.jsx

2. **Authentication Workflow**:
   - Login.jsx → localStorage → Navbar.jsx → Result.jsx (premium gating)

3. **Navigation Workflow**:
   - Router (App.jsx) → Route selection → Component render → Navbar/Footer conditional

### Next Development Priorities

**High Priority** (Blocking Features):
1. Implement real backend authentication (JWT tokens)
2. Fix localStorage dependency (use context API or state management)
3. Add proper error handling and user feedback
4. Form validation on client side (email format, password strength)
5. Implement analysis history storage

**Medium Priority** (Feature Completion):
6. Complete team member information on Team page
7. Implement user profile/settings page
8. Add email verification for registration
9. Create dashboard/history page
10. Implement password reset flow

**Low Priority** (Enhancements):
11. Refactor CSS (SCSS/CSS-in-JS for consistency)
12. Add accessibility improvements (ARIA labels)
13. Implement analytics tracking
14. Create admin panel for metrics
15. Add support for multiple CV formats (docx, etc.)

### Known Integration Blockers

🚨 **Critical Blockers**:
1. **No Backend Authentication System** - Cannot verify user identity or persist data
2. **Mock Login Only** - Premium features not secure, users can fake login
3. **No User Database** - Cannot store user profiles or analysis history
4. **No Payment System** - Cannot monetize premium features

⚠️ **Moderate Issues**:
1. **Hardcoded API URL** - Deployment requires environment variable setup
2. **localStorage for State** - Data lost in private browsing, no encryption
3. **Incomplete Team Data** - User experience broken on Team page

### Performance Considerations

- **Current State**: MVP with no optimization
- **Load Time**: Depends entirely on backend analysis time (~10-30 seconds)
- **Bundle Size**: Minimal (React + React Router only)
- **No Code Splitting**: All pages loaded upfront
- **No Lazy Loading**: Images and components not optimized

### Security Notes

🚨 **Current Security Issues**:
- No authentication (localStorage-based fake login)
- No CSRF protection
- No rate limiting on API
- User can modify localStorage to fake login
- No input sanitization on text fields
- Form data sent as plain multipart/form-data

✅ **What Should Be Implemented**:
- Backend JWT authentication
- HTTPS enforcement
- Rate limiting
- Input validation and sanitization
- CORS configuration
- Content Security Policy headers

---

## Summary

**Cerovix Frontend** is a well-structured React SPA in MVP stage with clear separation of concerns (pages, components, services). The core CV analysis workflow is functional and integrated with a backend API. However, it relies on mock authentication and localStorage for state management, making it unsuitable for production use without backend integration.

The codebase is clean and readable, but needs:
1. Real authentication system
2. Proper state management (Context API/Redux)
3. Error handling improvements
4. Form validation
5. Data persistence on backend

**Recommendation**: Focus on completing backend authentication and user data storage before public launch. The frontend architecture is solid and can support these additions with minimal refactoring.

---

**Generated**: June 2, 2026  
**Last Updated**: As per analysis date
