import './style.css';
import POINTER from '../About/img/Pointer.png'
export default function Experience(){
    const experiences = [
        {
            role: "The Role at the Company",
            city: 'Country, City',
            descriptions: "I'm software developer and this is my portfolio. I'm software developer and this is my portfolio. I'm software developer and this is my portfolio. I'm software developer and this is my portfolio.",
            years: '2021-2022'
        },
        {
            role: "The Role at the Company",
            city: 'Country, City',
            descriptions: "I'm software developer and this is my portfolio.",
            years: '2019-2021'
        },
        {
            role: "The Role at the Company",
            city: 'Country, city',
            descriptions: "I'm software developer and this is my portfolio. I'm software developer and this is my portfolio. I'm software developer and this is my portfolio. I'm software developer and this is my portfolio.",
            years: '2019'
        }
    ]
    return (
        <div className="experience d-flex flex-column mb-5">
            <div className='col-6'>
                <h2 className="experience_main">Experience</h2>
                <div className='mt-5'>
                    {experiences.map((item) => {
                        return (
                            <div className='d-flex flex-row'>
                                <div className='me-5 col-2 exp_year'>{item.years}</div>
                                <div>
                                    <div className='d-flex'>
                                        <img className='pointer me-3 mb-3' src={POINTER} alt="pointer"/>
                                        <div className='exp_role'>{item.role}</div>
                                    </div>
                                    <div className='exp_city ms-4 ps-3 mb-4'>{item.city}</div>
                                    <div className='exp_desciptions mb-5'>{item.descriptions}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}