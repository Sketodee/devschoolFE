import React, { useState } from 'react'
import Modal from './Modal'
import { useModal } from '../context/ModalContext';
import apis from '../api/apis';
import { toast } from 'react-toastify';


const ApplicationModal = () => {

    const { closeModal } = useModal();
    const [isLoading, setIsLoading] = useState(false)

    const [formData, setFormData] = useState({
        surname: '',
        firstName: '',
        email: '',
        phone: '',
        course: ''
    });

    const [errors, setErrors] = useState({
        surname: '',
        firstName: '',
        email: '',
        phone: '',
        course: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };


    const validate = () => {
        const newErrors = {};
        if (!formData.surname) {
            newErrors.surname = 'Surname is required';
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!formData.firstName) {
            newErrors.firstName = 'First Name is required'
        }
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required'
        } else if (!/^\d+$/.test(formData.phone)) {
            newErrors.phone = 'Phone number is invalid';
        }
        if (!formData.course) {
            newErrors.course = 'Please select a course';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsLoading(false)
        } else {
            const submittedData = {
                ...formData,
            };
            try {
                const response = await apis.post('/apply/newapplication', submittedData);
                if (response.data.success) {
                    resetFormData()
                    closeModal()
                    notify()
                    setIsLoading(false)
                }
            } catch (error) {
                console.error('Error:', error);
            }

            // console.log(submittedData)
        }
    }

    const resetFormData = () => setFormData(prev => ({ ...prev, surname: '', firstName: '', email: '', phone: '', course: '' }));

    const notify = () => toast('Application Successful', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        // theme: "colored",
        style: {
            backgroundColor: '#9333ea', // Tomato color
            color: '#fff', // White text color
        },
    });


    return (
        <Modal >
            <h2 className="text-xl font-medium py-2">Apply</h2>
            <hr className="pb-2" />


            <form onSubmit={handleSubmit}>

                <div className="lg:flex justify-between">
                    <div className="py-2 pe-2 basis-1/2">
                        <label htmlFor="surname" className="block text-sm ">Surname</label>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 "
                        />
                        {errors.surname && <p className="text-red-500 text-xs mt-1">{errors.surname}</p>}
                    </div>


                    <div className="py-2 pe-2 basis-1/2">
                        <label htmlFor="firstName" className="block text-sm ">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 "
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                    </div>

                </div>

                <div className="py-2 ">
                    <label htmlFor="email" className="block text-sm "> Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 "
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>



                <div className="lg:flex justify-between">
                    <div className="py-2 pe-2 basis-1/2">
                        <label htmlFor="phone" className="block text-sm "> Phone No </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border  border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 "
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    <div className="py-2 basis-1/2">
                        <label htmlFor="course" className="block text-sm ">Course</label>
                        <select
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border  border-purple-200 rounded-lg focus:outline-none focus:border-purple-500"
                        >
                            <option value="">Select an Option</option>
                            <option value="Frontend Development">Frontend Development</option>
                            <option value="Backend Development"> Backend Development </option>
                            <option value="Data Science"> Data Science </option>
                            <option value="Product Design"> Product Design</option>
                            <option value="Product Management"> Product Management </option>
                        </select>
                        {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course}</p>}
                    </div>

                </div>


                <div className="flex justify-end">
                    <button disabled= {isLoading} type="submit" className="relative mt-2 px-3 py-2 rounded-lg bg-purple-600  text-white">
                        {isLoading && (
                            <span className="absolute inset-0 flex items-center justify-center">
                                <div className="w-6 h-6 border-2 border-t-transparent border-white border-solid rounded-full animate-spin"></div>
                            </span>
                        )}
                        <span className={isLoading ? "opacity-0" : "opacity-100"}>Submit</span>
                    </button>
                </div>
            </form>

        </Modal>
    )
}

export default ApplicationModal