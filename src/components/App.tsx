import '../assets/index.css';
import CursorGlow from './CursorGlow';
import Nav from './Nav';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import Timeline from './Timeline';
import Contact from './Contact';

const App = () => (
  <>
    {/* animated backdrop */}
    <div className="aurora" aria-hidden="true">
      <span className="aurora-blob" />
    </div>
    <div className="grid-overlay" aria-hidden="true" />
    <CursorGlow />

    <Nav />
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
    </main>
  </>
);

export default App;
