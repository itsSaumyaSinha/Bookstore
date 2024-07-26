import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Signup from './Signup';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_5").close()}>
                            ✕
                        </Link>
                        <h3 className="font-bold text-lg">User Login</h3>
                        <div className="mt-4 space-y-3">
                            {/* Email */}
                            <span>Email</span><br />
                            <input type="email" placeholder="Enter your E-mail Address" className="w-80 px-2 py-1 border rounded-md outline-none"
                                {...register("email", { required: true })} />
                            <br />{errors.email && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        {/* Password */}
                        <div className="mt-4 space-y-2">
                            <span>Password</span><br />
                            <input type="password" placeholder="Please enter your Password" className="w-80 px-2 py-1 border rounded-md outline-none"
                                {...register("password", { required: true })} />
                            <br />{errors.password && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <div>
                            <div className="flex justify-around mt-4">
                                <button className="btn mt-4 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-700 duration-200">Submit</button>
                                <br />
                                <div className='mt-4'>
                                    <p>If Not Registered?</p>
                                    <button className="text-blue-900 cursor-pointer" onClick={() => { document.getElementById("my_modal_5").close(); document.getElementById("my_modal_3").showModal(); }}>
                                        <u>Sign up</u>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
            <Signup />
        </div>
    );
}

export default Login;

