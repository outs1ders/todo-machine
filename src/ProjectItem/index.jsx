import './ProjectItem.css';
import { StatusIcon } from './StatusIcon';

function ProjectItem({ color,title,date,status,onStatus }) {

  return(
    <div className='projectItemContainer'>
      
      <div className="projectItem">
        
        <div className="color" style={{ backgroundColor : color }}></div>
        <p>{ title }</p>
        <time>{ date }</time>

      </div>
      
      <div className='ProjectStatus'>
        <StatusIcon 
          status = {status} 
          onStatus = {onStatus} 
        />
      </div>
    </div>
  );
}

export { ProjectItem };
