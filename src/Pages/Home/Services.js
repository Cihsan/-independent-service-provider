import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'

const Service = () => {
    
    
    return (
        <div className='service'>
            <h1 style={{marginTop: '20px', marginBottom: '20px'}}>Services</h1>
            <div className='grid'>
                <div className="card">
                    <div><img style={{borderRadius:'50%',width:'100px',height:'100px'}} src={img1} alt="" /></div>
                    <h2>Basic Package for Residential</h2>
                    <p><span className="brandColor">✓</span> Any Electical Installation</p>
                    <p><span className="brandColor">✓</span> Electical Wiring</p>
                    <p><span className="brandColor">✓</span> Drilling</p>
                    <p><span className="brandColor">✓</span> Switching</p>
                    <p><span className="brandColor">✓</span> Safety Ensuring</p>
                    <h3>$100</h3>
                    <Link className='checklink' to='/checkout'>Check Now</Link>
                </div>
                <div className="card">
                    <div><img style={{borderRadius:'50%',width:'100px',height:'100px'}} src={img2} alt="" /></div>
                    <h2>Standard Package For Residential</h2>
                    <p><span className="brandColor">✓</span> Any Electical Installation</p>
                    <p><span className="brandColor">✓</span> Electical Wiring</p>
                    <p><span className="brandColor">✓</span> Drilling</p>
                    <p><span className="brandColor">✓</span> Switching</p>
                    <p><span className="brandColor">✓</span> Safety Ensuring</p>
                    <h3>$120</h3>
                    <Link className='checklink' to='/checkout'>Check Now</Link>
                </div>
                <div className="card">
                    <div><img style={{borderRadius:'50%',width:'100px',height:'100px'}} src={img3} alt="" /></div>
                    <h2>Premium Package For Residential</h2>
                    <p><span className="brandColor">✓</span> Any Electical Installation</p>
                    <p><span className="brandColor">✓</span> Electical Wiring</p>
                    <p><span className="brandColor">✓</span> Drilling</p>
                    <p><span className="brandColor">✓</span> Switching</p>
                    <p><span className="brandColor">✓</span> Safety Ensuring</p>
                    <h3>$150</h3>
                    <Link className='checklink' to='/checkout'>Check Now</Link>
                </div>
                <div className="card">
                <div><img style={{borderRadius:'50%',width:'100px',height:'100px'}} src={img4} alt="" /></div>
                    <h2>Basic Package for Commercial</h2>
                    <p><span className="brandColor">✓</span> Any Electical Installation</p>
                    <p><span className="brandColor">✓</span> Electical Wiring</p>
                    <p><span className="brandColor">✓</span> Drilling</p>
                    <p><span className="brandColor">✓</span> Switching</p>
                    <p><span className="brandColor">✓</span> Safety Ensuring</p>
                    <h3>$150</h3>
                    <Link className='checklink' to='/checkout'>Check Now</Link>
                </div>
                <div className="card">
                    <div><img style={{borderRadius:'50%',width:'100px',height:'100px'}} src={img3} alt="" /></div>
                    <h2>Standerd Package for Commercial</h2>
                    <p><span className="brandColor">✓</span> Any Electical Installation</p>
                    <p><span className="brandColor">✓</span> Electical Wiring</p>
                    <p><span className="brandColor">✓</span> Drilling</p>
                    <p><span className="brandColor">✓</span> Switching</p>
                    <p><span className="brandColor">✓</span> Safety Ensuring</p>
                    <h3>$200</h3>
                    <Link className='checklink' to='/checkout'>Check Now</Link>
                </div>
                <div className="card">
                    <div><img style={{borderRadius:'50%',width:'100px',height:'100px'}} src={img5} alt="" /></div>
                    <h2>Premium Package for Commercial</h2>
                    <p><span className="brandColor">✓</span> Any Electical Installation</p>
                    <p><span className="brandColor">✓</span> Electical Wiring</p>
                    <p><span className="brandColor">✓</span> Drilling</p>
                    <p><span className="brandColor">✓</span> Switching</p>
                    <p><span className="brandColor">✓</span> Safety Ensuring</p>
                    <h3>$250</h3>
                    <Link className='checklink' to='/checkout'>Check Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;