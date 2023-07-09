import { AiOutlineArrowLeft } from "react-icons/ai";

const LandingSection = ({ joinGroup, onJoinGroup }) => {
    return (
        <div className="w-100 h-25 content-div position-relative">
            <div className="d-block d-md-none">
                <div className='d-flex position-absolute container justify-content-between mt-2'>
                    <div className="text-light col-4"><AiOutlineArrowLeft /></div>
                    <div>
                        <button className={`border-0 d-block d-sm-none bg-primary px-2 py-1 text-light fw-medium ${joinGroup ? 'border border-dark bg-light text-dark' : 'border-0 bg-primary text-light'}`} onClick={onJoinGroup}>{joinGroup ? 'Leave Group' : 'Join Group'}</button>
                    </div>
                </div>
            </div>
            <img src="https://img.freepik.com/free-photo/blossom-floral-bouquet-decoration-colorful-beautiful-flowers-background-garden-flowers-plant-pattern-wallpapers-greeting-cards-postcards-design-wedding-invites_90220-1103.jpg" height="350" style={{width: '100%'}} alt="landing"/>
            <div className="position-absolute container bottom-0 row">
                <div className="col-1"></div>
                <div className="col-7">
                    <h2 className="text-light">Computer Engineering</h2>
                    <p className="text-light">142,765 Computer Engeeniers follow this</p>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}

export default LandingSection;