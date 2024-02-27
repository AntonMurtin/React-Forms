import './card.css';

import { useState } from 'react';

const ProductCard = ({ 
    product,
    onRemove
 }) => {
    
    const [imgClass, setImgClass] = useState('slideImg');
    const [isFavorit, setIsFavorit] = useState(false);
    const [deleteProduct, setDeleteProduct] = useState(false);
    const [addclass, setAddClass] = useState('fa-regular')

    const onChange = () => {
        if (isFavorit) {
            setIsFavorit(false);
            setAddClass('fa-regular')
        } else if (!isFavorit) {
            setIsFavorit(true);
            setAddClass('fa-solid')
        }
    }

    const onClose = () => {
        setDeleteProduct(false)
    }

    return (
        <div className="details detailsFlex ">

            <div className="detailsLeft">
                <div className="detailsImage">
                    <img src={product.image} className={`slideImg ${imgClass}`} />
                </div>
                <div className="option detailsFlex">
                    <img src={product.image} className='slideImg0' onClick={() => setImgClass('slideImg0')} />
                    <img src={product.image} className='slideImg1' onClick={() => setImgClass('slideImg1')} />
                    <img src={product.image} className='slideImg2' onClick={() => setImgClass('slideImg2')} />
                    <img src={product.image} className='slideImg3' onClick={() => setImgClass('slideImg3')} />
                    <img src={product.image} className='slideImg4' onClick={() => setImgClass('slideImg4')} />

                </div>
            </div>

            <div className="detailsRight">
                <h3 className='detailsH3' >{product.title}</h3>
                <h4 className='detailsH4' >{`Price: ${product.price} $`}</h4>
                <p className='detailsP' >{product.description}</p>

                <div className="detailsBtnDiv">


                    <span
                        onClick={() => setDeleteProduct(true)}
                        className={`detailsBtn  detailsDelete ${deleteProduct ? 'disabledBtn' : ''}`} >
                        <i className="fa-regular fa-trash-can"></i></span>
                    <span className="detailsBtn detailsFavBtn"
                        onClick={onChange} >
                        <i className={`fa-heart fa-2x ${addclass} `}></i>
                    </span >

                </div>
            </div>

            <div className={`removeWrapper ${deleteProduct ? '' : 'removeNone'}`}>
                <div className='removeDiv'>
                    <h3>You want to delete it!</h3>
                    <div >
                        <span
                        onClick={onRemove}
                            className="removeBtn"><i className="fa-solid fa-check fa-lg "></i></span>
                        <span
                            onClick={onClose}
                            className="closeRemove"><i className="fa-solid fa-xmark fa-lg "></i></span>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default ProductCard