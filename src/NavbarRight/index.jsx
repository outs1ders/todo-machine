import './NavbarRight.css';
import avatar from '../assets/img/avatar.jpg';

function NavbarRight({ name }) {
  return(
    <div className="navbar-right">
      <ul>
        <li>
          <img id='avatar' src={avatar} alt='avatar'/> 
          <p id='email'>{name}@ucatolica.edu.co</p>
        </li>
      </ul>
    </div>  
    
  );
}
  
export { NavbarRight };
