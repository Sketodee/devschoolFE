import React, { useEffect, useRef, useState } from 'react'
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


    //--------- for dorpdown option----

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const dropdownMenuRef = useRef(null);
    const caretRef = useRef(null);

    const toggleDropdown = (event) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };

    const selectOption = (option) => {
        setSelectedOption(option);
        setFormData(prev => ({ ...prev, course: option }))
        setErrors(prev => ({...prev, course: ''}))
        console.log(formData)
        setIsOpen(false);
    };

    const handleOutsideClick = (event) => {
        if (dropdownMenuRef.current && !dropdownMenuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (caretRef.current) {
            caretRef.current.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
        }

        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [isOpen]);


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

                    <div className="py-2 basis-1/2 ">
                        <label htmlFor="course" className="block text-sm pb-1">Course</label>
                        <div className="relative inline-block w-full text-left">
                            <div>
                                <button
                                    id="dropdown-button"
                                    type="button"
                                    className="inline-flex justify-center items-center w-full px-3 py-2 border  border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 "
                                    aria-haspopup="true"
                                    aria-expanded={isOpen ? "true" : "false"}
                                    onClick={toggleDropdown}
                                >
                                    <span id="dropdown-selected-option" className="w-full text-left overflow-hidden flex-1">{selectedOption ? selectedOption : 'Select a course'}</span>
                                    <svg
                                        ref={caretRef}
                                        className="ml-2.5 -mr-1.5 h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course}</p>}
                            </div>
                            {isOpen && (
                                <div
                                    ref={dropdownMenuRef}
                                    id="dropdown-menu"
                                    className=" w-full left-0 mt-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="dropdown-button"
                                    tabIndex={-1}
                                >
                                    <div className="py-1 h-24 overflow-auto" role="none">
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-left text-sm hover:bg-purple-100 "
                                            role="menuitem"
                                            onClick={() => selectOption("Frontend Development")}
                                        >
                                            Frontend Development
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-left text-sm hover:bg-purple-100 "
                                            role="menuitem"
                                            onClick={() => selectOption("Backend Development")}
                                        >
                                            Backend Development
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-left text-sm hover:bg-purple-100 "
                                            role="menuitem"
                                            onClick={() => selectOption("Product Management")}
                                        >
                                            Product Management
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-left text-sm hover:bg-purple-100 "
                                            role="menuitem"
                                            onClick={() => selectOption("Product Design")}
                                        >
                                            Product Design
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-left text-sm hover:bg-purple-100 "
                                            role="menuitem"
                                            onClick={() => selectOption("Data Analysis")}
                                        >
                                            Data Analysis
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>





                <div className="flex justify-end">
                    <button disabled={isLoading} type="submit" className="relative mt-2 px-3 py-2 rounded-lg bg-purple-600  text-white">
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