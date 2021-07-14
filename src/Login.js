import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import first from './Components/first-pic.jpg';
import second from './Components/second-pic.jpg';
import third from './Components/third-pic.jpg';
import { useForm } from 'react-hook-form';
import './Login.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = e => {
        console.log(e)
        // fetch('https://secure-harbor-26795.herokuapp.com/learnerData', {
        //     method: 'POST',
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify( data )
        // })
        //     .then(res => res.json())
        //     .then(success => {
        //         if (success) {
        //             alert('Booking Successfully');
        //         }
        //     })
    }
    return (
        <section className="d-flex section2">
            <div className="col-md-8 col-ms-12 image-control">
                <Carousel>
                    <div>
                        <img src={second} alt="Login-image" />
                    </div>
                    <div>
                        <img src={first} alt="Login-image" />
                    </div>
                    <div>
                        <img src={third} alt="Login-image" />
                    </div>
                </Carousel>
            </div>
            <div className="col-md-4 col-ms-12 form">
                <form style={customStyles} className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-primary"> Info-collection</h1>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" name="name" placeholder="Your Name" {...register("name")} />
                        {errors?.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" name="email" placeholder="Email"{...register("email")} />
                        {errors?.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" name="phone" placeholder="Phone"{...register("phone")} />
                        {errors?.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>
        </section>
    );
};
// ReactDOM.render(<Login />, document.querySelector('.demo-carousel'));
export default Login;
