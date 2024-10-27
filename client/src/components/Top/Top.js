import React from 'react';
import './Top.css';

const Top = () => {

    return (
      <>
              <div className='top flex justify-between items-center p-5'>
                <>
                    <div className="n-info flex gap-6">
                        <p>Biratnagar, Collage Road</p>
                        <p className='number'>+977 9810534413</p>
                        <p className='email'>bhanucollage@gmail.com</p>
                    </div>
                    <div className="o-info flex gap-5">
                        <p><i className="fa fa-facebook"></i></p>
                        <p><i className="fa fa-twitter"></i></p>
                        <p><i className="fa fa-instagram"></i></p>
                    </div>
                </>
        </div>
          </>
    );
};

export default Top;
