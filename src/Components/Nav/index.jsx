import './style.css'

export default function Nav(){
    return (
        <div className="nav d-flex justify-content-between mt-4 mb-4">
            <div className=''>Dosbol Baigarashev</div>
            <div className=''>
                <ul className="ul d-flex">
                    <li className='me-4'>About</li>
                    <li className='me-4'>Experience</li>
                    <li className='me-4'>Projects</li>
                    <li className='me-4'>Contacts</li>
                </ul>
            </div>
        </div>
    )
}