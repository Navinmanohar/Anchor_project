import react from 'react';
import logo from '../../img/logo.png'
import  {UilSearch} from "@iconscout/react-unicons"

const LogoSearh=()=>{
return<>

    <div className='logoSearch'>
    <img src={logo} alt="" />
    <div className='Search'>
        <input type='text 'placeholder='#Explore'/>
        <div className='s-icon'>
            <UilSearch />
        </div>
    </div>
    </div>
   

</>
}
export default LogoSearh;