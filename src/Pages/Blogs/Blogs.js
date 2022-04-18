import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <article>
                <h1>Difference between authorization and authentication</h1>
                <p>When Verify Any User that's called authentication</p>
                <p>When Give permission Any User to access and modify that's called authorization</p>
                
                <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p>I am using firebase for authentication purpose and Deploy my app</p>
                <p>I am interested in two or multifactor authentication and also Token-based,Biometric,Certificate-based authentication etc.</p>

                <h1>What other services does firebase provide other than authentication</h1>
                <p>Cloud Storage for storing contents</p>
                <p>Hosting for deploy applicaton site</p>
                <p>Cloud Firestore for giving Realtime Update</p>
                <p>In-App Messaging for sending messages at a time</p>
                <p>Remote Config for controling app behavior</p>
                <p>App Distribution for pre-realse app versions</p>
            </article>
        </div>
    );
};

export default Blogs;