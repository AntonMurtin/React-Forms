import './create.css';

import { 
    errorMessage, 
    initialFocusregister, 
    initialValuesRegister, 
    inputValidation 
} from '../../config/constants';
import { useForm } from '../../hooks/useForm';




const CreateUser = ({
    onCreateUser,
    onClose
}) => {

    const { values, focus, changeHandler, onSubmit, changeFocus } = useForm(
        initialValuesRegister,
        initialFocusregister,
        onCreateUser)

    return (
        <div className='registerPage'>
            <p onClick={onClose} className="close">X</p>
            <form method='POST' className="registerForm" onSubmit={onSubmit}>
                <h3 className='registerTop'> Create an Account</h3>

                <div className='formDiv'>
                    <input
                        required
                        onBlur={changeFocus}
                        focused={focus.name.toString()}
                        type="text"
                        name='name'
                        placeholder="Name"
                        value={values.name}
                        onChange={changeHandler}
                    />
                    <span>{errorMessage.name}</span>
                </div>

                <div className='formDiv'>

                    <input
                        required
                        onBlur={changeFocus}
                        focused={focus.image.toString()}
                        pattern={inputValidation.image}
                        type="text"
                        name='image'
                        placeholder="Image"
                        id="image"
                        value={values.image}
                        onChange={changeHandler}
                    />
                    <span>{errorMessage.image}</span>
                </div>

                <div className='formDiv'>
                    <input
                        required
                        onBlur={changeFocus}
                        focused={focus.email.toString()}
                        type="email"
                        name='email'
                        placeholder="Email"
                        value={values.email}
                        onChange={changeHandler}
                    />
                    <span>{errorMessage.email}</span>
                </div>

                <div className='formDiv'>
                    <input
                        required
                        onBlur={changeFocus}
                        focused={focus.phone.toString()}
                        pattern={inputValidation.phone}
                        type="text"
                        name='phone'
                        placeholder="Phone"
                        value={values.phone}
                        onChange={changeHandler}
                    />
                    <span>{errorMessage.phone}</span>
                </div>

                <div className='formDiv'>
                    <input
                        required
                        onBlur={changeFocus}
                        focused={focus.town.toString()}
                        type="text"
                        name='town'
                        placeholder="Town"
                        value={values.town}
                        onChange={changeHandler}
                    />
                    <span>{errorMessage.town}</span>
                </div>

                <div className='formDiv'>
                    <input
                        required
                        onBlur={changeFocus}
                        focused={focus.street.toString()}
                        type="text"
                        name='street'
                        placeholder="Street"
                        value={values.street}
                        onChange={changeHandler}
                    />
                    <span>{errorMessage.street}</span>
                </div>

                <div className='formDiv'>
                    <input
                        required
                        onBlur={changeFocus}
                        focused={focus.password.toString()}
                        pattern={inputValidation.password}
                        type="password"
                        name='password'
                        placeholder="Password"
                        value={values.password}
                        onChange={changeHandler}
                    />
                    <span>{errorMessage.password}</span>
                </div>

                <div className='formDiv'>
                    <input
                        required
                        onBlur={changeFocus}
                        focused={focus.confirmPassword.toString()}
                        pattern={values.password}
                        type="password"
                        name='confirmPassword'
                        placeholder="Confirm Password"
                        value={values.confirmPassword}
                        onChange={changeHandler}
                    />
                    <span>{errorMessage.confirmPassword}</span>
                </div>
                <button className='btn-log-reg'>Create</button>
            </form>
        </div>
    );
};

export default CreateUser;