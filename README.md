---

# Quiz Application

This project is a simple quiz application where users can start a quiz, answer questions, and receive a score report. The application communicates with a mock API to handle the quiz flow, including fetching questions, submitting answers, and generating the final score.

### Website URL
[https://quiz-web-app-omega.vercel.app/](https://quiz-web-app-omega.vercel.app/)

## Features

### Home Screen
- **Start Quiz**: The user clicks the "Start" button to initiate the quiz. This triggers an API request to create a new quiz and fetch the questions.

### Question Screen
- Displays one question at a time to the user.
- Questions may include optional images shown below the text.
- Questions can have either a single correct choice or multiple correct choices.
- **Answer Submission**:
  - Users must select at least one option before proceeding to the next question.
  - The selected choices are submitted to the API along with the time taken for that question before moving to the next.
  - For the final question, an API request is made to finish the test and fetch the score report.

### Report Screen
- Displays the total score, along with the number of correct and incorrect answers.
- **Start Again**: Users can click the "Start Again" button to take the quiz again from the beginning.

## API Endpoints

1. **Start Quiz**:  
   - `POST /api/quiz/start`
   - Description: Initiates a new quiz and returns a quiz ID.
   - Example Response:
     ```json
     {
       "quizId": "12345"
     }
     ```

2. **Fetch Quiz Questions**:  
   - `GET /api/quiz/:quizId/questions`
   - Description: Fetches all the questions for the quiz associated with the `quizId`.

3. **Submit Answer**:  
   - `POST /api/quiz/:quizId/questions/:questionId/submit`
   - Description: Submits the user's selected answers and the time taken for the specific question.

4. **Finish Quiz**:  
   - `POST /api/quiz/:quizId/finish`
   - Description: Submits the final quiz responses and retrieves the score report.

## Technologies Used
- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **State Management & Caching**: React Query
- **Routing**: React Router DOM
- **API Communication**: Axios or Fetch API for handling HTTP requests
- **Mock API**: Postman
- **Custom Hooks**: Used for abstracting logic like API calls, timer management, etc.
- **Reusable Components**: Created for UI elements such as buttons, question cards, and result displays for consistent UI across the app.

## Deployment

This project is deployed on **Vercel** and connected to a GitHub repository. The deployment automatically syncs with changes made to the `main` branch.

### Deployment Steps:

1. **Login to Vercel**:  
   - Visit [vercel.com](https://vercel.com) and log in with your Vercel account.
   
2. **Connect to GitHub**:  
   - Link your GitHub account to Vercel and grant access to the repository containing this quiz application.

3. **Select Repository & Branch**:  
   - Choose your quiz application repository from the list.
   - Set the `main` branch as the branch to automatically deploy.

4. **Deploy**:  
   - Vercel will automatically deploy your application and provide a live URL after the process is complete.
   - Future updates to the `main` branch will trigger automatic redeployments.

### Website URL
[https://quiz-web-app-omega.vercel.app/](https://quiz-web-app-omega.vercel.app/)

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/SatyanandYadav/QuizWebApp.git
   ```
2. Navigate to the project directory:
   ```bash
   cd quiz-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## How to Use

1. Start the quiz by clicking the **Start** button.
2. Answer the questions one by one. Ensure you select at least one option before proceeding.
3. Once all questions are answered, the report will be shown with your score.
4. Click **Start Again** to retake the quiz.

---
