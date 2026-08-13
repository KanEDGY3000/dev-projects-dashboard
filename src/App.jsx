import { useState } from 'react';
import Hero from './components/Hero.jsx';
import ProjectsList from './components/ProjectList.jsx';
import './App.css';

const projects = [
  {
    id: 1,
    title: 'Personal Page',
    description: 'Учебная личная страница с HTML, CSS и JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    status: 'completed',
    // repoUrl: 'KanEDGY3000',
  },
  {
    id: 2,
    title: 'Users Catalog',
    description: 'Каталог пользователей с загрузкой данных, поиском и избранным.',
    technologies: ['JavaScript', 'API', 'localStorage'],
    status: 'completed',
    // repoUrl: 'KanEDGY3000',
  },
  {
    id: 3,
    title: 'Dev Projects Dashboard',
    description: 'React-приложение для отслеживания учебных и портфолио-проектов.',
    technologies: ['React', 'Vite', 'CSS'],
    status: 'in-progress',
    repoUrl: 'https://github.com/KanEDGY3000/dev-projects-dashboard',
  },
  {
    id: 4,
    title: 'Weather App',
    description: 'Будущее приложение прогноза погоды с загрузкой данных из API.',
    technologies: ['React', 'API', 'CSS'],
    status: 'planned',
    // repoUrl: 'KanEDGY3000',
  },
];

function App() {
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredProjects = selectedStatus === 'all'
    ? projects
    : projects.filter((projects) => projects.status === selectedStatus);

  return (
    <main className='app'>
      <Hero />
      <ProjectsList
        project={filteredProjects}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
      />
    </main>
  );
}

export default App;