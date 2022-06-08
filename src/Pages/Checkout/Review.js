import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Review = () => {
    const [api, setApi] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Cihsan/product-analysis-09/main/public/review.json')
            .then(res => res.json())
            .then(data => setApi(data))
    }, [])
    return (
        <div className='container'>
            <h1 style={{textAlign:'center',marginBottom: '10px',marginTop: '10px',}}>My Clients Review</h1>
            <div>
                {
                    api.map(rv =>
                        <div style={{ display: 'flex', marginBottom: '20px', alignItems: 'center', gap: '10px'}}>
                            <div >
                                <img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={rv.pic} alt="" />
                            </div>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                                    <h5 className=''>{rv.name}</h5>
                                    <small>
                                        <Rating initialRating={rv.rating} emptySymbol={<FontAwesomeIcon icon={faStar} />} fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />} readonly></Rating>
                                    </small>
                                </div>

                                <p className=''>
                                    {rv.review.slice(0,80)}</p>

                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Review;

/* 
.d-flex{
    display: flex;
    text-align: left;
    align-items: center
}
.d-flex img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.d-flex h5{
margin-left: 10px;
}
.line{
    display: flex;
    align-items: center;
}
.m {
    margin-left: 10px;
    font-size: small;
}
*/