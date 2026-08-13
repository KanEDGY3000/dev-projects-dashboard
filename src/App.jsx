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
  },
  {
    id: 2,
    title: 'Users Catalog',
    description: 'Каталог пользователей с загрузкой данных, поиском и избранным.',
    technologies: ['JavaScript', 'API', 'localStorage'],
    status: 'completed',
  },
  {
    id: 3,
    title: 'Dev Projects Dashboard',
    description: 'React-приложение для отслеживания учебных и портфолио-проектов.',
    technologies: ['React', 'Vite', 'CSS'],
    status: 'in-progress',
  },
  {
  id: 4,
  title: 'Weather App',
  description: 'Будущее приложение прогноза погоды с загрузкой данных из API.',
  technologies: ['React', 'API', 'CSS'],
  status: 'planned',
},
];

function App() {

  return (
    <main className='app'>
      <Hero />
      <ProjectsList project={projects} />
    </main>
  );
}

export default App;