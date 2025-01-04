import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleFoodCategory = ({ food }) => {
    const { thumb, category, name } = food

    return (
        <>
            <Link style={{cursor:"default"}}>
                <img src={`assets/img/menu/${thumb}`} alt="Image Not Found" />
                <div className="overlay">
                    <h5>{name}</h5>
                </div>
            </Link>
        </>
    );
};

export default SingleFoodCategory;