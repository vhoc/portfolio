import React from "react";

const Contact = () => {

    return (

        <>

            <h1>Contact</h1>
            {/*I know, yes, this is an iframe. I'll use a proper form as soon as I finish building it*/}
            <iframe className='col-12 col-sm-10 col-md-7 col-lg-6 col-xl-4' src='https://waxyform.com/app/app/form?id=43&b=0' height='700px'>
                
            </iframe>
            

        </>

    );

}

export default Contact;