import React from 'react'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import LazyImage from '../../components/LazyImage'

const Courses = () => {
    const navigate = useNavigate();
    return (
        <div className='raleway-500 py-10 w-full px-3 sm:px-0 md:w-[90%] lg:w-[70%] mx-auto'>
            <div className="text-center">
                <h2 className='platypi-400 text-4xl lg:text-5xl text-purple-600 py-5'>Our Courses</h2>
                <p className='pb-10'> Here are some courses from our schools that we offer. Enroll and kickstart your tech career.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-1'>

                <div className='basis-1/3 px-0 sm:px-2 pb-5'>
                    <img className='h-80 w-full object-cover' src="/course3.webp" alt="" />
                    {/* <LazyImage className={'h-80 w-full object-cover'} alt={''} src={'/course3.webp'} /> */}
                    <div className="px-4">
                        <p className='py-5 text-2xl font-bold'>Backend Development </p>
                        <p>Begin our back-end development program structured to help students launch a new career in web development.</p>
                        <Button onClick={() => navigate('/engineering')} text={"Learn More"} className={"bg-purple-600 my-5 text-white"} />
                    </div>
                </div>

                <div className='basis-1/3 px-2 pb-5'>
                    <img className='h-80 w-full object-cover' src="/course4.webp" alt="" />
                    {/* <LazyImage className={'h-80 w-full object-cover'} alt={''} src={'/course4.webp'} /> */}
                    <div className="px-4">
                        <p className='py-5 text-2xl font-bold'>Frontend Development </p>
                        <p>Begin our front-end development program structured to help students launch a new career in web development.</p>
                        <Button onClick={() => navigate('/engineering')}  text={"Learn More"} className={"bg-purple-600 my-5 text-white"} />
                    </div>
                </div>

                <div className='basis-1/3 px-2 pb-5'>
                    <img className='h-80 w-full object-cover' src="/course5.webp" alt="" />
                    {/* <LazyImage className={'h-80 w-full object-cover'} alt={''} src={'/course5.webp'} /> */}
                    <div className="px-4">
                        <p className='py-5 text-2xl font-bold'>Product Management </p>
                        <p>The management program is taught by prominent product management experts in the tech industry.</p>
                        <Button onClick={() => navigate('/product')}  text={"Learn More"} className={"bg-purple-600 my-5 text-white"} />
                    </div>
                </div>

                <div className='basis-1/3 px-2 pb-5'>
                    <img className='h-80 w-full object-cover' src="/course1.webp" alt="" />
                    {/* <LazyImage className={'h-80 w-full object-cover'} alt={''} src={'/course1.webp'} /> */}
                    <div className="px-4">
                        <p className='py-5 text-2xl font-bold'>Product Design</p>
                        <p>Design user experiences for products in today's digital world. Build a portfolio that showcases your ability to transform products.</p>
                        <Button onClick={() => navigate('/product')}  text={"Learn More"} className={"bg-purple-600 my-5 text-white"} />
                    </div>
                </div>

                <div className='basis-1/3 px-2 pb-5'>
                    <img className='h-80 w-full object-cover' src="/course2.webp" alt="" />
                    {/* <LazyImage className={'h-80 w-full object-cover'} alt={''} src={'/course2.webp'} /> */}
                    <div className="px-4">
                        <p className='py-5 text-2xl font-bold'>Data</p>
                        <p>Use Python, SQL, and statistics to uncover insights, communicate critical findings, and create data-driven solutions</p>
                        <Button onClick={() => navigate('/data')}  text={"Learn More"} className={"bg-purple-600 my-5 text-white"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses