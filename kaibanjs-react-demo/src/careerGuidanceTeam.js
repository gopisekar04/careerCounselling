import { Agent, Task, Team } from 'kaibanjs';

const profileAnalyzer = new Agent({
    name: 'Zoe',
    role: 'Profile Analyzer',
    goal: 'Extract structured information from student input, including academic background, skills, and career goals.',
    background: 'Data Extraction and NLP Specialist',
    llmConfig: {
        provider: 'google',
        model: 'gemini-1.5-pro',
        apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
        retryConfig: { retries: 3, delay: 2000 } // Adds retry mechanism
    }
});

const careerAdvisor = new Agent({
    name: 'Alex Mercer',
    role: 'Career Advisor',
    goal: `Provide personalized career recommendations based on the student's academic history.`,
    background: `Extensive experience in career counseling.`,
    llmConfig: {
        provider: 'google',
        model: 'gemini-1.5-pro',
        apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
        retryConfig: { retries: 3, delay: 2000 } // Adds retry mechanism
    }
});

// Define tasks
const profileAnalysisTask = new Task({
    description: `Extract relevant details such as name, academic background, interests, and skills.`,
    expectedOutput: 'Structured student profile.',
    agent: profileAnalyzer
});

const careerGuidanceTask = new Task({
    description: `Generate career recommendations based on student profile.`,
    expectedOutput: `A well-structured career guidance report.`,
    agent: careerAdvisor
});

// Create and export the team
const careerGuidanceTeam = new Team({
    name: 'AI Career Guidance Team',
    agents: [profileAnalyzer, careerAdvisor],
    tasks: [profileAnalysisTask, careerGuidanceTask],
    inputs: {
        studentProfile: `Rahul has completed his 12th grade with 530/600 marks and is interested in software development.`
    },
    env: { GOOGLE_API_KEY: import.meta.env.VITE_GOOGLE_API_KEY }
});

export { careerGuidanceTeam };
