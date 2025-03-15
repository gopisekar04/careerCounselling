import React, { useState } from 'react';
import './App.css';
import { careerCounsellingTeam } from './blogTeam';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Dashboard() {
  // Setting up State
  const [topic, setTopic] = useState('');
  const [blogPost, setBlogPost] = useState('');
  const [stats, setStats] = useState(null);

  // Connecting to the KaibanJS Store
  const useTeamStore = careerCounsellingTeam.useStore();
  
  const {
    agents,
    tasks,
    teamWorkflowStatus
  } = useTeamStore(state => ({
    agents: state.agents,
    tasks: state.tasks,
    teamWorkflowStatus: state.teamWorkflowStatus
  }));

  const generateBlogPost = async () => {
    setBlogPost('');
    setStats(null);
  
    try {
      const output = await careerCounsellingTeam.start({ topic });
      if (output.status === 'FINISHED') {
        setBlogPost(output.result);
  
        const { costDetails, llmUsageStats, duration } = output.stats;
        setStats({
          duration: duration,
          totalTokenCount: llmUsageStats.inputTokens + llmUsageStats.outputTokens,
          totalCost: costDetails.totalCost
        });
      } else if (output.status === 'BLOCKED') {
        console.log(`Workflow is blocked, unable to complete`);
      }
    } catch (error) {
      console.error('Error generating blog post:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="header">AI Agents News Blogging Team</h1>
      <div className="grid">
        <div className="column">
          <div className="options">
            <input  
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter a topic... E.g. 'ask any query'"
              overflow="auto"
            />
            <button onClick={generateBlogPost}>
              Generate
            </button>
          </div>
          
          {/* Generated Blog Post */}
          <div className="blog-post">
  {blogPost ? (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{blogPost}</ReactMarkdown>
  ) : (
    <p className="blog-post-info"><span>ℹ️</span><span>No blog post available yet</span><span>Enter a topic and click 'Generate' to see results here.</span></p>
  )}
</div>  
        </div>

        {/* We'll add more UI elements in the next steps */}
        
      </div>
    </div>
  );
}

export default Dashboard;