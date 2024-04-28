
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import { PROJECTS, SKILLS } from './Data';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <div>
        <Navbar name='Mohammed Hammad Zaid'></Navbar>

        <About>Recent Computer Science graduate with a passion for technology and problem-solving. Experienced in JavaScript, Python, and web development frameworks like React and Django.
          Ready to make an impact through innovative software solutions. Explore my portfolio and let's connect!</About>
        {/* <Skills></Skills> */}


        <div className="container"></div>


        <div className="main" id="skills">
          <section className="px-10 w-full my-40 max-w-5xl mx-auto details " >


            <h2 className="text-center heading-style" >My Skills</h2>
            <ul>
              {/* access array item dynamically */}

              {SKILLS.map((Item) => <Skills key={Item.title} {...Item} />)}

            </ul>
          </section>
        </div>
        
        <div className="main" id="projects">
          <section className="px-10 w-full my-40 max-w-5xl mx-auto details" >
            <h2 className="text-center heading-style" >My Projects</h2>
            <ul>
              
              {PROJECTS.map((Item) => <Projects key={Item.title} {...Item} />)}
            </ul>
          </section>
          
        </div>


        <section className="px-10 w-full my-40 max-w-5xl mx-auto details main" >
          <Contact />
        </section>

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
