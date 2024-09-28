# Genie Getaways

## Overview
Genie Getaways is a personalized and gamified travel planning website designed for my final year project for UCC 2024. Users interact with a quiz guided by a genie to express their travel preferences, which are then used to suggest top travel destinations with the power of artifical intelligence. Users can save and rate destinations. They can also receive extra recommendations based on their interactions beyond the quiz using the secondary recommender system. The website features a user-friendly interface with gamification elements to make travel planning enjoyable and non-intimidating. 

## Features
- **User Authentication**: Secure login and sign-up functionalities.
- **Interactive Quiz**: A quiz to collect user travel preferences.
- **Dynamic Results Page**: Displays top 3 destinations based on user's preferences sourced via OpenAI API.
- **Ratings and Save Options**: Users can rate destinations and save their favorites.
- **Recommender System**: Utilizes user ratings and quiz responses to suggest additional destinations using cosine similarity algorithms.

## Technology Stack
- **Frontend**: Next.js, Tailwind CSS, SVGs for visuals
- **Backend**: Flask (Python)
- **Database**: Firebase
- **APIs**: OpenAI API for generating destination suggestions, Firebase for data management

## Installation

### Prerequisites
- Next.js
- Python (with pip)

1. **Install JavaScript dependencies**
   npm install
2. **Install Python dependencies**  
    pip install flask firebase-admin pandas sklearn flask-cors openai

## Running the project

**Frontend Server:**

npm run dev

**Backend Server:**

python app.py

**Access the Application:**

Open your web browser and navigate to http://localhost:3000 to view the frontend.


### Additional Notes
- **API Keys**: The codebase includes API keys for testing purposes. However, if you wish to replace these with your own. To update API keys, go to the `.env.local` file in the root directory of the project and replace the existing keys with your new ones.
- Ensure all paths and external configurations are correctly set up in your Firebase and OpenAI integrations.
- **OpenAI Model Updates**: The OpenAI models used in the code may expire or become outdated. If the current model name in the code becomes unavailable, you will need to update it to a newer model. You can find the model (GPT 3.5 Turbo) used in the quiz and recommender within the JS application files where OpenAI API calls are made. Look for the `model` parameter in the API request body and replace it with the name of the new model available from [OpenAI API documentation on models.](https://beta.openai.com/docs/models/gpt-3.5-turbo)

## Author
Samina Arshad
Final Year Project, UCC 2024