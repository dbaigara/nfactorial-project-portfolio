import './style.css'
import LOGO from "../About/img/logo-twitter.png"
import POINTER from "../About/img/Pointer.png"

export default function Projects(){

    const projects = [
        {
            name: 'Project name',
            descriptions: "I'm software developer and this is my portfolio. I'm software developer and this is my portfolio. I'm software developer and this is my portfolio. I'm software developer and this is my portfolio.",
            list: ['Lorem Ipsum Description Text', 'Lorem Ipsum Description Text'],
            img: LOGO
        },
        {
            name: 'Project name',
            descriptions: "I'm software developer and this is my portfolio. I'm software developer and this is my portfolio. I'm software developer and this is my portfolio. I'm software developer and this is my portfolio",
            list: ['Lorem Ipsum Description Text', 'Lorem Ipsum Description Text'],
            img: LOGO
        }
    ]
    return (
        <div className="projects">
            <h2 className='mb-5 projects_title'>Projects I've Worked On</h2>
            <div>
                {projects.map((item) => {
                    return (
                    <div className='d-flex mt-5'>
                        <div className='col-6'>
                            <img className='logo ms-5 ps-5' src={item.img} alt="logo"/>
                        </div>
                        <div className='col-6 mt-3'>
                            <div className='proj_name'>{item.name}</div>
                            <div className='proj_description mt-4'>{item.descriptions}</div>
                            <div className='d-flex flex-column'>
                                <div className='mt-4'>{item.list.map((listItem) => {
                                    return (
                                    <div className='d-flex mt-3'>
                                        <img className='me-3' src={POINTER} alt="pointer"/>
                                        <div className='proj_listItem'>{listItem}</div> 
                                    </div>   
                                    )
                                })}</div>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}