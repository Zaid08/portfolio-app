
import './Skills.css';

export default function Skills({image,title}) {
    
    return (
        <li  className='text-emerald-500'>
        <img id='skillImg'  src={image} alt={title} />
        
      </li>
        
    )
}