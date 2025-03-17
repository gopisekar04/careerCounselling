import { Agent, Task, Team } from 'kaibanjs';
import { TavilySearchResults } from '@langchain/community/tools/tavily_search';

// Define the search tool used by the Research Agent
const searchTool = new TavilySearchResults({
  maxResults: 5,
  apiKey: import.meta.env.VITE_TRAVILY_API_KEY
});


// // Define the Career Research Agent
const researchAgent = new Agent({
    name: 'Ava',
    role: 'Career Researcher',
    goal: 'Find and summarize the latest career trends, college options, and scholarships for a given topic.',
    background: 'Experienced in academic counseling and industry research',
    tools: [searchTool],
    llmConfig: {
        provider: 'google',
        model: 'gemini-1.5-flash',
    }
});

// Define the Career Advisor Agent
const advisorAgent = new Agent({
    name: 'Kai',
    role: 'Career Advisor',
    goal: 'Provide personalized career advice based on research insights',
    background: 'Skilled in career counseling and education planning',
    tools: [],
    llmConfig: {
        provider: 'google',
        model: 'gemini-1.5-flash',
    }
});

// Define Tasks
const researchTask = new Task({
    title: 'Career Opportunities Research',
    description: 'Research career trends, required qualifications, entrance exams, and top colleges related to: {topic}',
    expectedOutput: 'A detailed summary of relevant career paths, required skills, entrance exams, and scholarship opportunities.',
    agent: researchAgent
});

const adviceTask = new Task({
    title: 'Career Guidance Report',
    description: 'Generate a personalized career guidance report based on research insights for: {topic}',
    expectedOutput: 'A structured career roadmap with suggested education paths, job prospects, and salary trends in Markdown format.',
    agent: advisorAgent
});

// Create the Team
const careerCounsellingTeam = new Team({
    name: 'AI Career Counselling Team',
    agents: [researchAgent, advisorAgent],
    tasks: [researchTask, adviceTask],
    env: {
        GOOGLE_API_KEY: 'AIzaSyDT7Mg7ERsqd0bW74hg54g0vMJWiqQKCf0'
    }
});

export { careerCounsellingTeam };
