import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleChefV1 = ({ chef }) => {
    const { id, thumb, designation, name } = chef

    return (
        <>
            <div className="chef-style-one">
                <div className="chef-thumb">
                    <img src={`assets/img/team/${thumb}`} alt="Image Not Found" />
                    <div className="info">
                        <h4>{name}</h4>
                        <span style={{textTransform:"none", height:"80px"}}>{designation}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleChefV1;