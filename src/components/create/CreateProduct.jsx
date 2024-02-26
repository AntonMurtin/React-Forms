import './create.css';





import { errorMessage, initialFocusCreate, initialValuesCreate, inputValidtion } from '../../config/constants';
import { useForm } from '../../hooks/useForm';


const CreateProduct = ({
    onCreateProduct,
    onClose
}) => {
   

    const {
        values,
        focus,
        changeHandler,
        onSubmit,
        changeFocus
    } = useForm(
        initialValuesCreate,
        initialFocusCreate,
        onCreateProduct)

    return (


        <div className='createPage'>
            <p onClick={onClose} className="close">X</p>
            <form method='POST' className="createForm" onSubmit={onSubmit}>
               <h3 className='createTop'> Create an Product</h3>

                <div className='formDiv'>

                    <input
                        required
                        onBlur={changeFocus}
                        focused={focus.title.toString()}
                        type="text"
                        name='title'
                        placeholder="Title"
                        value={values.title}
                        onChange={changeHandler}
                    />
                    <span>{errorMessage.title}</span>
                </div>

                <div className='formDiv'>

                    <input
                        required
                        onBlur={changeFocus}
                        focused={focus.image.toString()}
                        pattern={inputValidtion.image}
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
                        focused={focus.price.toString()}

                        type="number"
                        name='price'
                        min={1}
                        placeholder="Price"
                        id="price"
                        value={values.price}
                        onChange={changeHandler}
                    />
                    <span>{errorMessage.price}</span>
                </div>

                <div className='formDiv'>
                    <textarea
                        className='description'
                        required
                        onBlur={changeFocus}
                        focused={focus.description.toString()}
                        pattern={inputValidtion.description}
                        type="text"
                        name='description'
                        placeholder="Description "
                        id="description"
                        value={values.description}
                        onChange={changeHandler}
                    />
                    <span>{errorMessage.description}</span>
                </div>

                <button className='btn-log-reg'>Create</button>
            </form>
        </div>

    );
};

export default CreateProduct;