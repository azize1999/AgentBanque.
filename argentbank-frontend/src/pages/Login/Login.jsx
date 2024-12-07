import React from 'react';
import Form from '../../components/Form/Form';
import './Login.scss';

/* Login page */
function Login () {
    return (
        <div className='signin-page'>
            <main className='bg-dark'>
                {/* Returns form component */}
                < Form />
            </main>
        </div>
        
    )
}

export default Login;