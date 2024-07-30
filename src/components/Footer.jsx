import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='bg-purple-600 py-8 raleway-500 mt-auto'>
            <div className='w-[70%] mx-auto text-white flex justify-between items-start'>
                <div className='basis-1/4'>
                    <p className='text-2xl font-bold'>Logo</p>
                    <p className='text-sm pt-4'>An organization that is focused on equipping African youths with the knowledge and skills needed in the tech space.</p>
                    <div className="flex py-4">
                        <p><FaXTwitter /></p>
                        <p className='ps-5'><BsInstagram /></p>
                    </div>
                </div>
                <div className='basis-1/4  leading-10'>
                    <p className='text-xl font-bold py-2'>COMPANY </p>
                    <p className='py-2'>About</p>
                    <p className='py-2'>FAQs</p>
                    <p className='py-2'>Join Our Community</p>
                    <p className='py-2'>Partnership </p>
                </div>
                <div className='basis-1/4 leading-10'>
                    <p className='text-xl font-bold py-2'>SCHOOLS </p>
                    <p className='py-2'>School of Product</p>
                    <p className='py-2'>School of Data</p>
                    <p className='py-2'>School of Enginering</p>
                </div>
                <div className='basis-1/4  leading-10'>
                    <p className='text-xl font-bold py-2'>CONTACTS </p>
                    <p className='py-2'>Email Address</p>
                    <p className='py-2'>Contact1</p>
                    <p className='py-2'>Contact2</p>
                    <p className='py-2'>Contact3 </p>
                </div>
            </div>
        </div>
    )
}

export default Footer