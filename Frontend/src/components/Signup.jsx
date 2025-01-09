import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };

        await axios.post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success('Signed up successfully!');
                    localStorage.setItem("Users", JSON.stringify(res.data.user));
                }
            })
            .catch((err) => {
                console.log(err);
                if (err.response) {
                    toast.error("Error: " + err.response.data.message);
                } else {
                    toast.error("An error occurred during signup");
                }
            });
    };

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
                                    {...register("fullname", { required: true })} />
                                <br />{errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
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
