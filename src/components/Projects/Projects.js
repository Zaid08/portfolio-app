

// import React from 'react'
import './Projects.css'
// export default function Projects({image,title,description}) {
//   return (
//     <li>
//         <img id='projectImg' src={image} alt={title} />
//         <h3 className='font-bold'>{title}</h3>
//         <p>{description}</p>
//       </li>
//   )
// }

export default function Projects({title,description,image,link}) {
  return (
      <section 
               className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
          {/* <h2 className="text-5xl text-emerald-500 font-bold text-center">
              My Projects
          </h2> */}
          <div className="p-10  flex flex-col justify-center items-center
                          gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                          hover:shadow-xl hover:scale-[102%] w-full">
              <div className="rounded">
                  <a href={link}

                      className="w-full h-full">
                      <img id='projectImg'src={image}

                           alt={title}
                           className="w-full h-full 
                                      bg-cover rounded"/>
                  </a>
              </div>
              <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                  <h2 className="font-bold text-3xl text-center">
                      <a className="hover:underline"
                          href={link}>
                          {title}
                      </a>
                  </h2>
                  <p>
                     {description}
                  </p>
              </div>
          
          
          </div>
      </section>
  );
}