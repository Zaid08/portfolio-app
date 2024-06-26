import './About.css';

import mainImage from '../../images/mainImg_1.png'
// import reactImg from '../../assets/concepts.png';
export default function About({children}) {
    return (
      <section
        id="about"
        className="px-10 w-full flex gap-12 flex-col lg:flex-row 
                   justify-center items-center align-center mt-40 
                   mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh] ">
        <div className="flex-1 flex flex-col justify-center items-center gap-5 bg ">
          <div>
            <h4 className="text-center text-xl font-bold">
                Hi and welcome to
            </h4>
            <h2 className="text-center  heading-style">
              My Portfolio Website
            </h2>
          </div>
          <p className="text-center">
          {children}
          </p>
        </div>
        <div className="flex-1" >
          <img src={mainImage}
  
               alt="Hello.svg"
               className="w-full  bg-cover"/>
        </div>
      </section>
    );
  }