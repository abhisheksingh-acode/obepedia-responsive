import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import logo from '../../images/white-logo.png';
import MobForm from './MobForm';

const InstRegister = () => {

    return (

        <>
       <div className="upsc-background">
                <div className="logged">
                    <Navbar logoimg={logo} />
                </div>
            </div>


            <div className="container">
                <div className="login-page py-5">
                    <MobForm title='Register as Intitute' btn='Register' account='Login' with='Or Register In with' />
                </div>
            </div>

            <Footer />
        </>


    )
}

export default InstRegister