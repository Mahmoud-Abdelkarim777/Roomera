import React from 'react'
import '../assets/css/footer.css';

export default function footer() {
    return (
    <div className=' row bg-secondary mt-5 p-5  text-white'>
        <div className="logo col-lg-4 col-12">
            <a className='text-decoration-none text-dark fs-1' href="/"> Roomera</a>
            <p>Lorem, ipsum dolor sit amet consectetu adipisicing elit.
                Culpa molestias reiciendis est ?</p>
        </div>
        <div className="links col-lg-4 col-12 row ">
            <div className='col-6'>
                <p>سياسة الخصوصية</p>
                <p>من نحن</p>
                <p>عملاؤنا</p>
            </div>
            <div className='col-6'>
                <p>دعم فني</p>
                <p>روميرا</p>
            </div>
        </div>
        <div className="contact col-lg-4 col-12 ">
                <p>تواصل معنا</p>
                <div >
                <i className="fa-brands fa-square-whatsapp mx-2"></i>
                <i className="fa-regular fa-envelope mx-2"></i>
                <i className="fa-brands fa-linkedin mx-2"></i>
                </div>
            </div>
    </div>
)
}
