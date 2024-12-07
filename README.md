frontend/
├── public/                      # Static assets
│   ├── index.html               # Main HTML file
│   └── assets/                  # Images, fonts, icons...
│       ├── logos/               # Logo assets
│       ├── icons/               # Icon assets
├── src/                         # Main React application code
│   ├── components/              # Reusable components
│   │   ├── Navbar.jsx           # Navbar component
│   │   ├── Footer.jsx           # Footer component
│   │   └── FormInput.jsx        # Shared input field component
│   ├── pages/                   # Feature-specific pages
│   │   ├── Auth/                # Authentication-related pages
│   │   │   ├── Login.jsx        # Login page
│   │   │   ├── Register.jsx     # Registration page (role-based forms)
│   │   │   └── VerifyEmail.jsx  # Email verification page
│   │   ├── Home.jsx             # Home page (general quizzes/courses)
│   │   ├── DrivingSchool.jsx    # Driving school lookup and access
│   │   └── Quiz/                # Quiz-related pages
│   │       ├── QuizList.jsx     # List of quizzes
│   │       ├── QuizDetail.jsx   # Quiz questions
│   │       └── Progress.jsx     # Progress tracking page
│   ├── contexts/                # Context providers for global state
│   │   ├── AuthContext.jsx      # Handles user authentication state
│   │   └── QuizContext.jsx      # Handles quiz-related state
│   ├── styles/                  # Global and component-specific styles
│   │   ├── global.css           # Global CSS styles
│   │   └── components/          # CSS files for components
│   ├── utils/                   # Utility functions and helpers
│   │   ├── api.js               # API configuration and calls
│   │   ├── constants.js         # Constant values ( roles, difficulty levels)
│   │   └── validators.js        # Validation functions ( email, password)
│   ├── App.jsx                  # Main App component
│   ├── index.js                 # React DOM rendering
│   └── routes.jsx               # Application routes

