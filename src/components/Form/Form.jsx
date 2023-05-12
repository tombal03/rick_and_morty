import style from './Form.module.css'
import { useState } from 'react';
import validation from './validation';
import { eventWrapper } from '@testing-library/user-event/dist/utils';


const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
  
    const handleChange = (event) => {
        setErrors(validation({...userData,[event.target.name]: event.target.value}))
        setUserData({...userData,[event.target.name]: event.target.value})
    }

    const [errors, setErrors] = useState({
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }


    return(
        <div className={style.detail}>
            <form action="">
                <hr className={style.linea1}/>
                <label htmlFor="email"> Email: </label>
                <input onChange={handleChange} value={userData.email} type="text" name='email'/>
                {errors.e1 ? (<p> {errors.e1}</p>) : errors.e2 ? (<p> {errors.e1}</p>) :  (<p> {errors.e3}</p>) }

                <hr className={style.linea1}/>
                
                <label htmlFor="password">Password: </label>
                <input onChange={handleChange} value={userData.password} type="password" name='password'/>

                {errors.p1 ? (<p>{errors.p1}</p>) : (<p> {errors.p2}</p>)}

                <hr className={style.linea1}/>
                <button onClick={handleSubmit} type='submit'> Submit  </button>
            </form>
        </div>
    )
}

export default Form;