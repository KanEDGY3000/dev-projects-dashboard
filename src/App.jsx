import { useState, useEffect } from 'react';
import Hero from './components/Hero.jsx';
import ProjectsList from './components/ProjectList.jsx';
import './App.css';
import { projects } from './data/projects.js';
import ProjectStats from './components/ProjectStats.jsx';
import { PROJECT_STATUSES } from './data/projectStatuses.js';
import GitHubRepoInfo from './components/GitHubRepoInfo.jsx';

const SELECTED_STATUS_KEY = 'selectedStatus';
const COMPACT_VIEW_KEY = 'isCompactView';

function App() {
  const [selectedStatus, setSelectedStatus] = useState(() => {
    return localStorage.getItem(SELECTED_STATUS_KEY) || PROJECT_STATUSES.all;
  });
  const [isCompactView, setIsCompactView] = useState(() => {
    return localStorage.getItem(COMPACT_VIEW_KEY) === 'true';
  });

  const filteredProjects = selectedStatus === PROJECT_STATUSES.all
    ? projects
    : projects.filter((projects) => projects.status === selectedStatus);

  useEffect(() => {
    localStorage.setItem(SELECTED_STATUS_KEY, selectedStatus);
  }, [selectedStatus]);

  useEffect(() => {
    localStorage.setItem(COMPACT_VIEW_KEY, String(isCompactView))
  }, [isCompactView]);

  function handleViewToggle() {
    setIsCompactView((currentValue) => !currentValue);
  }

  return (
    <main className='app'>
      <Hero />
      <ProjectStats projects={projects} />
      <GitHubRepoInfo />
      <ProjectsList
        projects={filteredProjects}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        isCompactView={isCompactView}
        onViewToggle={handleViewToggle}
      />
    </main>
  );
}

export default App;