import './style.css'
import LOGO from './img/logo-twitter.png'
import POINTER from './img/Pointer.png'

export default function About(){

    const descr = ['Lorem Ipsum Description Text', 'Lorem Ipsum Description Text', 'Lorem Ipsum Description Text', 'Lorem Ipsum Description Text' ];

    return (
        <div className="about d-flex mb-5 pb-5">
            <div className='col-9'>
                <h2 className='aboutMe mt-3 mb-4'>About me</h2>
                <h5 className='about_text mb-5'>I’m software developer and this is my portfolio.<br/>
                    I’m software developer and this is my portfolio. I’m software developer<br/> and this is my portfolio. I’m software developer and this is my portfolio.
                </h5>
                <ul className='ul'>
                    {descr.map((item) => {
                    return (
                            <div className='d-flex mt-2'>
                                <img className='me-2' src={POINTER} alt="circle"/>
                                <p className='lorem_text'>{item}</p>
                            </div>                            
                        )
                    })}
                </ul>

            </div>
            <div className='col-3 '>
                <img className='logo p-5 mt-3' src={LOGO} alt="logo" />
            </div>
        </div>
    )
}