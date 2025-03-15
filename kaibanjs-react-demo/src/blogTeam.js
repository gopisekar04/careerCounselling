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


// Define the Research Agent
// const researchAgent = new Agent({
//     name: 'Ava',
//     role: 'News Researcher',
//     goal: 'Find and summarize the latest news on a given topic',
//     background: 'Experienced in data analysis and information gathering',
//     tools: [searchTool],
//     llmConfig: {
//         provider: 'google',
//         model: 'gemini-1.5-flash'  // or 'gemini-1.5-flash'
//     }
//   });
  
//   // Define the Writer Agent
//   const writerAgent = new Agent({
//     name: 'Kai',
//     role: 'Content Creator',
//     goal: 'Create engaging blog posts based on provided information',
//     background: 'Skilled in writing and content creation',
//     tools: [],
//     llmConfig: {
//         provider: 'google',
//         model: 'gemini-1.5-flash'  // or 'gemini-1.5-flash'
//     }
//   });

//   // Define Tasks
// const researchTask = new Task({
//     title: 'Latest news research',
//     description: 'Research the latest news on the topic: {topic}',
//     expectedOutput: 'A summary of the latest news and key points on the given topic',
//     agent: researchAgent
//   });
  
//   const writingTask = new Task({
//     title: 'Blog post writing',
//     description: 'Write a blog post about {topic} based on the provided research',
//     expectedOutput: 'An engaging blog post summarizing the latest news on the topic in Markdown format',
//     agent: writerAgent
//   });

//   // Create the Team
// const blogTeam = new Team({
//     name: 'AI News Blogging Team',
//     agents: [researchAgent, writerAgent],
//     tasks: [researchTask, writingTask],
//     env: {
//         GOOGLE_API_KEY: 'AIzaSyDT7Mg7ERsqd0bW74hg54g0vMJWiqQKCf0'
//     }
//   });
  
//   export { blogTeam };
