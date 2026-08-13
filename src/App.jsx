import { useState } from 'react';
import Hero from './components/Hero.jsx';
import ProjectsList from './components/ProjectList.jsx';
import './App.css';
import { projects } from './data/projects.js';
import ProjectStats from './components/ProjectStats.jsx';

function App() {
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredProjects = selectedStatus === 'all'
    ? projects
    : projects.filter((projects) => projects.status === selectedStatus);

  return (
    <main className='app'>
      <Hero />
      <ProjectStats projects={projects} />
      <ProjectsList
        project={filteredProjects}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
      />
    </main>
  );
}

export default App;