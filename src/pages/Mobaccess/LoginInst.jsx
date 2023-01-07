import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import logo from '../../images/white-logo.png';
import MobForm from './MobForm';

const LoginInst = () => {

    return (

        <>
         <div className="upsc-background">
                <div className="logged">
                    <Navbar logoimg={logo} />
                </div>
            </div>

            <div className="container">
                <div className="login-page py-5">

                    <MobForm title='Login as Institute' btn='Sign In' account='Already you have an account ?' with='Or Sign In with' />

                </div>
            </div>

            <Footer />
        </>

    )
}

export default LoginInst