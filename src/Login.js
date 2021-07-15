import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import first from './Components/first-pic.jpg';
import second from './Components/second-pic.jpg';
import third from './Components/third-pic.jpg';
import { useForm } from 'react-hook-form';
import './Login.css';
import Userlist from './Userlist';

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
    const [users, setAlluser] = useState([])
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (e) => {
        fetch('http://localhost:5000/addUser', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(e)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Send Successfully');
                }
            })
    }

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setAlluser(data))
    }, [])
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
                <div>
                    {
                        users.map(user => <Userlist user={user}></Userlist>)
                    }
                </div>
            </div>
            <div className="col-md-4 col-ms-12 form">
                <form style={customStyles} className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-primary"> Info-collection</h1>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" name="name" placeholder="Your Name" {...register("name")} required />
                        {errors?.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" name="email" placeholder="Email"{...register("email")} required />
                        {errors?.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" name="phone" placeholder="Phone"{...register("phone")} required />
                        {errors?.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group text-right">
                        <button type="submit" value="null" onClick={() => window.location.reload(false)} className="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>
        </section>
    );
};
// ReactDOM.render(<Login />, document.querySelector('.demo-carousel'));
export default Login;
