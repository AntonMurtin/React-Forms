import './card.css'
import { useState } from 'react';

const UserCard = ({
    userData,
    onClose,
}) => {
    const [deleteUser, setDeleteUser] = useState(false);
    const onRemove = () => {
        setDeleteUser(false)
    }
    return (
        <div className="details ">

            <div className="detailsLeft">
                <div >
                    <img src={userData.image} className="leftImage" />
                </div>
            </div>

            <div className="detailsRight">
                <h3 className="detailsH3">{userData.name}</h3>
                <p className="contentP">{`Email: ${userData.email}`}</p>
                <p className="contentP">{`Phone: ${userData.phone}`}</p>
                <p className="contentP">{`Town: ${userData.town}`}</p>
                <p className="contentP">{`Street: ${userData.street}`}</p>
                <div className="detailsBtnDiv">
                    <span
                        onClick={() => setDeleteUser(true)}
                        className={`detailsBtn  detailsDelete ${deleteUser ? 'disabledBtn' : ''}`} >
                        <i className="fa-regular fa-trash-can"></i></span>
                </div>
            </div>

            <div className={`removeWrapper ${deleteUser ? '' : 'removeNone'}`}>
                <div className='removeDiv'>
                    <h3>You want to delete it!</h3>
                    <div >
                        <span
                            onClick={onClose}
                            className="removeBtn"><i className="fa-solid fa-check fa-lg "></i></span>
                        <span
                            onClick={onRemove}
                            className="closeRemove"><i className="fa-solid fa-xmark fa-lg "></i></span>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default UserCard;
