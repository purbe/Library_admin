import React from 'react';
import './webpage.css';

const Home = () => {
return(
        <div className='container mt-5 text-center'>
            <h3 className='text-center'>Welcome To The Application</h3>
            <div className='MainClass'>
                <a href='/list-page'>List Page</a>
                <a href='/detail-page'>Detail Page</a>
            </div>
        </div>
    );
}
export default Home;