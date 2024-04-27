
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import { PROJECTS, SKILLS } from './Data';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <>
      <div>
        <Navbar name='Mohammed Hammad Zaid'></Navbar>

        <About>Recent Computer Science graduate with a passion for technology and problem-solving. Experienced in JavaScript, Python, and web development frameworks like React and Django.
          Ready to make an impact through innovative software solutions. Explore my portfolio and let's connect!</About>
        {/* <Skills></Skills> */}

        <main>
          <section className="px-10 w-full my-40 max-w-5xl mx-auto details" id="skills">
           
            
            <h2 className="text-center text-6xl text-emerald-500 font-bold " >My Skills</h2>
              <ul>
                {/* access array item dynamically */}

                {SKILLS.map((Item) => <Skills key={Item.title} {...Item} />)}

              </ul>
            </section>
          

          <section className="px-10 w-full my-40 max-w-5xl mx-auto details" id="projects">
          
            
            <h2 className="text-center text-6xl text-emerald-500 font-bold" >My Projects</h2>
              <ul>
                {/* access array item dynamically */}
                {PROJECTS.map((Item) => <Projects key={Item.title} {...Item} />)}

              </ul>
          </section>
          <section className="px-10 w-full my-40 max-w-5xl mx-auto details" >
            <Contact/>
            
          </section>

</main>
      </div>
    </>
  );
}

export default App;
