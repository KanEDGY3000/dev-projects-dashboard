function Hero() {

    const developerName = 'KanEDGY3000';

    return (
            <section className='hero'>
                <p className='eyebrow'>React portfolio project</p>

                <h1>Панель проектов frontend-разработчика</h1>

                <p className='hero-text'>Приложение для отслеживания учебных и портфолио-проектов: статусы, технологии, прогресс и быстрый обзор.</p>

                <p className='developer'>Автор проекта: {developerName}</p>
            </section>
    );
}

export default Hero;