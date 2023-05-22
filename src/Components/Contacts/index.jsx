import "./style.css"

export default function Contacts(){
    return (
        <div className="contacts">
            <div className="mt-5 pt-5 contact_main">Say Hello</div>
            <h5 className="mt-5 cont_desc">I'm software developer and this is my portfolio</h5>
            <div className="d-flex mt-4">
                <button className="button">
                    <a className="anchor" href="https://www.github.com/dbaigara" target="_blank"><p className="anchor">GitHub.io</p></a>
                </button>
            </div>

        </div>
    )
}