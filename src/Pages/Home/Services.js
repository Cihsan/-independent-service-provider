import React from 'react';
import { Link } from 'react-router-dom';


const Service = () => {
    
    
    return (
        <div>
            <h1>Services</h1>
            <div className='grid'>
                <div className="card">
                    <h2>Basic Package for Residential</h2>
                    <p><span className="brandColor">✓</span> Any Electical Installation</p>
                    <p><span className="brandColor">✓</span> Electical Wiring</p>
                    <p><span className="brandColor">✓</span> Drilling</p>
                    <p><span className="brandColor">✓</span> Switching</p>
                    <p><span className="brandColor">✓</span> Safety Ensuring</p>
                    <h3>$100</h3>
                    <Link className='checklink' to='/checkout'>Place Order</Link>
                </div>
                <div className="card">
                    <h2>Standard Package For Residential</h2>
                    <p><span className="brandColor">✓</span> Any Electical Installation</p>
                    <p><span className="brandColor">✓</span> Electical Wiring</p>
                    <p><span className="brandColor">✓</span> Drilling</p>
                    <p><span className="brandColor">✓</span> Switching</p>
                    <p><span className="brandColor">✓</span> Safety Ensuring</p>
                    <h3>$120</h3>
                    <Link className='checklink' to='/checkout'>Place Order</Link>
                </div>
                <div className="card">
                    <h2>Premium Package For Residential</h2>
                    <p><span className="brandColor">✓</span> Any Electical Installation</p>
                    <p><span className="brandColor">✓</span> Electical Wiring</p>
                    <p><span className="brandColor">✓</span> Drilling</p>
                    <p><span className="brandColor">✓</span> Switching</p>
                    <p><span className="brandColor">✓</span> Safety Ensuring</p>
                    <h3>$150</h3>
                    <Link className='checklink' to='/checkout'>Place Order</Link>
                </div>
                <div className="card">
                    <h2>Basic Package for Commercial</h2>
                    <p><span className="brandColor">✓</span> Any Electical Installation</p>
                    <p><span className="brandColor">✓</span> Electical Wiring</p>
                    <p><span className="brandColor">✓</span> Drilling</p>
                    <p><span className="brandColor">✓</span> Switching</p>
                    <p><span className="brandColor">✓</span> Safety Ensuring</p>
                    <h3>$150</h3>
                    <Link className='checklink' to='/checkout'>Place Order</Link>
                </div>
                <div className="card">
                    <h2>Standerd Package for Commercial</h2>
                    <p><span className="brandColor">✓</span> Any Electical Installation</p>
                    <p><span className="brandColor">✓</span> Electical Wiring</p>
                    <p><span className="brandColor">✓</span> Drilling</p>
                    <p><span className="brandColor">✓</span> Switching</p>
                    <p><span className="brandColor">✓</span> Safety Ensuring</p>
                    <h3>$200</h3>
                    <Link className='checklink' to='/checkout'>Place Order</Link>
                </div>
                <div className="card">
                    <h2>Premium Package for Commercial</h2>
                    <p><span className="brandColor">✓</span> Any Electical Installation</p>
                    <p><span className="brandColor">✓</span> Electical Wiring</p>
                    <p><span className="brandColor">✓</span> Drilling</p>
                    <p><span className="brandColor">✓</span> Switching</p>
                    <p><span className="brandColor">✓</span> Safety Ensuring</p>
                    <h3>$250</h3>
                    <Link className='checklink' to='/checkout'>Place Order</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;