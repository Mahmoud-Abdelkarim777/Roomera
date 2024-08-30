import React from 'react';
import Button from 'react-bootstrap/Button';

// import 'src/assets/css/hero.css'
import '../assets/css/hero.css';

const hero = () => {
return (
    <div className="container my-5">
        <div className="box d-flex justify-content-between gap-3">
            <div className="box1 d-flex align-items-center px-5 border" id='box1'>
                <div className="text">
                    <p>Create a free property listing</p>
                    <Button variant="secondary">I need a flatmate</Button>{' '}
                </div>
                <div className="img">
                    <img src="src\assets\image\bed.jpg"  alt="photo" />
                </div>
            </div>
            <div className="box1 d-flex align-items-center px-5 border " id='box2'>
                <div className="text">
                    <p>Create a free property listing</p>
                    <Button variant="secondary">I need a place</Button>{' '}
                </div>
                <div className="img">
                    <img src="src\assets\image\hi.jpg"  alt="photo" />
                </div>
            </div>
            
        </div>
    </div>
    
);
}

export default hero;
