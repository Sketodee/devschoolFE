import React from 'react'
import Button from '../../components/Button'

const Courses = () => {
    return (
        <div className='raleway-500 py-10 w-[70%] mx-auto'>
            <div className="text-center">
                <h2 className='agbalumo-regular text-5xl text-purple-600 py-5'>Our Courses</h2>
                <p className='pb-10'> Here are some courses from our schools that we offer. Enroll and kickstart your tech career.</p>
            </div>
            <div className='grid grid-cols-3 gap-1'>

                <div className='basis-1/3 px-2 pb-5'>
                    <img className='h-80 w-full object-cover' src="/course3.jpg" alt="" />
                    <div className="px-4">
                        <p className='py-5 text-2xl font-bold'>Backend Development </p>
                        <p>Begin our back-end development program structured to help students launch a new career in web development.</p>
                        <Button text={"Learn More"} className={"bg-purple-600 my-5"} />
                    </div>
                </div>

                <div className='basis-1/3 px-2 pb-5'>
                    <img className='h-80 w-full object-cover' src="/course4.jpg" alt="" />
                    <div className="px-4">
                        <p className='py-5 text-2xl font-bold'>Frontend Development </p>
                        <p>Begin our front-end development program structured to help students launch a new career in web development.</p>
                        <Button text={"Learn More"} className={"bg-purple-600 my-5"} />
                    </div>
                </div>

                <div className='basis-1/3 px-2 pb-5'>
                    <img className='h-80 w-full object-cover' src="/course5.jpg" alt="" />
                    <div className="px-4">
                        <p className='py-5 text-2xl font-bold'>Product Management </p>
                        <p>The management program is taught by prominent product management experts in the tech industry.</p>
                        <Button text={"Learn More"} className={"bg-purple-600 my-5"} />
                    </div>
                </div>

                <div className='basis-1/3 px-2 pb-5'>
                    <img className='h-80 w-full object-cover' src="/course1.jpg" alt="" />
                    <div className="px-4">
                        <p className='py-5 text-2xl font-bold'>Product Design</p>
                        <p>Design user experiences for products in today's digital world. Build a portfolio that showcases your ability to transform products.</p>
                        <Button text={"Learn More"} className={"bg-purple-600 my-5"} />
                    </div>
                </div>

                <div className='basis-1/3 px-2 pb-5'>
                    <img className='h-80 w-full object-cover' src="/course2.jpg" alt="" />
                    <div className="px-4">
                        <p className='py-5 text-2xl font-bold'>Data</p>
                        <p>Use Python, SQL, and statistics to uncover insights, communicate critical findings, and create data-driven solutions</p>
                        <Button text={"Learn More"} className={"bg-purple-600 my-5"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses