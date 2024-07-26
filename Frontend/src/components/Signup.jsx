import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Login from './Login';

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box border-[2px] shadow-md rounded-md">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>
                            ✕
                        </Link>
                        <h3 className="font-bold text-lg">User Signup</h3>
                        <div className="mt-4 space-y-4">
                            {/* Name */}
                            <div>
                                <span>Name</span><br />
                                <input type="text" placeholder="Enter your Full Name" className="w-80 px-2 py-1 border rounded-md outline-none"
                                    {...register("Name", { required: true })} />
                                <br />{errors.Name && <span className="text-sm text-red-500">This field is required</span>}
                            </div>
                            {/* Email */}
                            <div>
                                <span>Email</span><br />
                                <input type="email" placeholder="Enter your E-mail Address" className="w-80 px-2 py-1 border rounded-md outline-none"
                                    {...register("email", { required: true })} />
                                <br />{errors.email && <span className="text-sm text-red-500">This field is required</span>}
                            </div>
                            {/* Password */}
                            <div>
                                <span>Password</span><br />
                                <input type="password" placeholder="Create a Password" className="w-80 px-2 py-1 border rounded-md outline-none"
                                    {...register("password", { required: true })} />
                                <br />{errors.password && <span className="text-sm text-red-500">This field is required</span>}
                            </div>
                            {/* Confirm Password */}
                            <div>
                                <span>Confirm Password</span><br />
                                <input type="password" placeholder="Confirm your Password" className="w-80 px-2 py-1 border rounded-md outline-none"
                                    {...register("confirm", { required: true })} />
                                <br />{errors.confirm && <span className="text-sm text-red-500">This field is required</span>}
                            </div>
                        </div>
                        <div className="flex justify-around mt-4">
                            <button type="submit" className="btn py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 duration-200">
                                Sign Up
                            </button>
                        </div>
                        <div className='mt-4'>
                            <p>Already Registered?</p>
                            <button className="text-blue-900 cursor-pointer" onClick={() => { document.getElementById("my_modal_3").close(); document.getElementById("my_modal_5").showModal(); }}>
                                <u>Log in</u>
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Signup;
