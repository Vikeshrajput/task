import React from 'react'

import classes from './Posts.module.css';
import { MdArrowDropDown } from 'react-icons/md'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { HiPencil } from 'react-icons/hi'
import { GrLocation } from 'react-icons/gr'
import { PiWarningCircleLight } from 'react-icons/pi'
import { BsThreeDots, BsEyeFill } from 'react-icons/bs'
import { BiSolidShareAlt, BiCalendarEvent, BiShoppingBag } from 'react-icons/bi'
import { FcReading } from 'react-icons/fc'
import { FiThumbsUp } from 'react-icons/fi'

const Posts = ({joinGroup, onJoinGroup}) => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='container-fluid'>
                    <div className='d-flex justify-content-between my-2 mt-4'>
                        <div className='d-flex'>
                            <span className={`${classes.mr}`}>All posts (364)</span>
                            <span className={`${classes.mr} d-none d-md-block`}>Article</span>
                            <span className={`${classes.mr} d-none d-md-block`}>Event</span>
                            <span className={`${classes.mr} d-none d-md-block`}>Education</span>
                            <span className={`${classes.mr} d-none d-md-block`}>Job</span>
                        </div>
                        <div className='d-none d-md-block'>
                            <button className={`${classes.mr} border-0 px-2 py-1`}>Write a Post <MdArrowDropDown className='h5'/></button>
                            <button className={`${classes.mr} ${joinGroup ? 'border border-dark text-dark' : 'border-0 bg-primary text-light'} px-2 py-1 fw-medium`} onClick={onJoinGroup}><AiOutlineUsergroupAdd className='h6'/>{joinGroup ? 'Leave Group' : 'Join Group'}</button>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className='col-md-6 col-12'>
                            <div className='border'>
                            <div className="w-100 h-25 content-div">
                                <img src="https://img.freepik.com/free-photo/blossom-floral-bouquet-decoration-colorful-beautiful-flowers-background-garden-flowers-plant-pattern-wallpapers-greeting-cards-postcards-design-wedding-invites_90220-1103.jpg" height="200" style={{width: '100%'}} alt='article'/>
                            </div>
                                <div className='px-3 py-1'>
                                    <span className='mb-1'><FcReading /> Article</span>
                                    <div className='row'>
                                        <div className='col-8 fw-medium h5'>What if famous brands had reglar fonts? Meet regulaBrands!</div>
                                        <div className='col-3'></div>
                                        <div className={`col-1 fw-medium`} style={{cursor: 'pointer'}}><BsThreeDots /></div>
                                    </div>
                                    <p className={`text-gray ${classes.post_paragraph}`}>
                                        I've worked inUX for the better part of a decade. Form now on, I paln to reiceive and worked for the organization
                                    </p>
                                    <div className='d-flex justify-content-between'>
                                        <div><div className='rounded-circle'></div><span className='fw-medium'><img src="https://img.freepik.com/free-photo/neon-tropical-monstera-leaf-banner_53876-138943.jpg?w=2000" className='rounded-circle mx-1' height="30" style={{width: '30%'}} alt='this' />Sarthak</span></div>
                                        <div className='d-flex justify-content-center'><span className="mx-2"><BsEyeFill /></span><p>1.4k views</p><span className="mx-4 my-1 px-2 mb-2" style={{backgroundColor: 'lightgray'}}><BiSolidShareAlt /></span></div>
                                    </div>
                                </div>
                            </div>
                            <div className='border mt-4'>
                            <div className="w-100 h-25 content-div">
                                <img src="https://img.freepik.com/free-photo/flowing-purple-mountain-spiral-bright-imagination-generated-by-ai_188544-9853.jpg" height="200" style={{width: '100%'}} alt='article'/>
                            </div>
                                <div className='px-3 py-1'>
                                    <span className='mb-1'><FcReading /> Education</span>
                                    <div className='row'>
                                        <div className='col-8 fw-medium h5'>What if famous brands had reglar fonts? Meet regulaBrands!</div>
                                        <div className='col-3'></div>
                                        <div className={`col-1 fw-medium`} style={{cursor: 'pointer'}}><BsThreeDots /></div>
                                    </div>
                                    <p className={`text-gray ${classes.post_paragraph}`}>
                                        I've worked inUX for the better part of a decade. Form now on, I paln to reiceive and worked for the organization
                                    </p>
                                    <div className='d-flex justify-content-between'>
                                        <div><div className='rounded-circle'></div><span className='fw-medium'><img src="https://img.freepik.com/free-photo/flowing-purple-mountain-spiral-bright-imagination-generated-by-ai_188544-9853.jpg" className='rounded-circle mx-1' height="30" style={{width: '30%'}} alt='this' />Sarthak</span></div>
                                        <div className='d-flex justify-content-center'><span className="mx-2"><BsEyeFill /></span><p>1.4k views</p><span className="mx-4 my-1 px-2 mb-2" style={{backgroundColor: 'lightgray'}}><BiSolidShareAlt /></span></div>
                                    </div>
                                </div>
                            </div>
                            <div className='border mt-4'>
                                <div className="w-100 h-25 content-div">
                                    <img src="https://img.freepik.com/free-photo/neon-tropical-monstera-leaf-banner_53876-138943.jpg?w=2000" height="200" style={{width: '100%'}} alt='article'/>
                                </div>
                                <div className='px-3 py-1'>
                                    <span className='mb-1'><BiCalendarEvent className='my-2 mb-2' /> Meetup</span>
                                    <div className='row'>
                                        <div className='col-8 fw-medium h5'>What if famous brands had reglar fonts? Meet regulaBrands!</div>
                                        <div className='col-3'></div>
                                        <div className={`col-1 fw-medium`} style={{cursor: 'pointer'}}><BsThreeDots /></div>
                                    </div>
                                    <div className='row mb-1'>
                                        <div className='col-4'><BiCalendarEvent className='mb-2'/> Fri, 12 Oct, 2018</div>
                                        <div className='col-4'><GrLocation className='mb-2' /> Ahemdabad</div>
                                        <div className='col-4'></div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12 text-center border border-2 rounded py-1 mb-2 text-danger fw-bold'>View Website</div>
                                    </div>
                                    <div className='d-flex justify-content-between mt-2'>
                                        <div><div className='rounded-circle'></div><span className='fw-medium'><img src="https://img.freepik.com/free-photo/flowing-purple-mountain-spiral-bright-imagination-generated-by-ai_188544-9853.jpg" className='rounded-circle mx-1' height="30" style={{width: '30%'}} alt='this' />Sarthak</span></div>
                                        <div className='d-flex justify-content-center'><span className="mx-2"><BsEyeFill /></span><p>1.4k views</p><span className="mx-4 my-1 px-2 mb-2" style={{backgroundColor: 'lightgray'}}><BiSolidShareAlt /></span></div>
                                    </div>
                                </div>
                            </div>
                            <div className='border mt-4 mb-4'>
                                <div className='px-3 py-1'>
                                    <span className='mb-1'><BiShoppingBag className='my-2 mb-2' /> Job</span>
                                    <div className='row'>
                                        <div className='col-8 fw-medium h5'>What if famous brands had reglar fonts? Meet regulaBrands!</div>
                                        <div className='col-3'></div>
                                        <div className={`col-1 fw-medium`} style={{cursor: 'pointer'}}><BsThreeDots /></div>
                                    </div>
                                    <div className='row mb-1'>
                                        <div className='col-4'><BiShoppingBag className='mb-2'/> Innovacer</div>
                                        <div className='col-4'><GrLocation className='mb-2' /> Ahemdabad</div>
                                        <div className='col-4'></div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12 text-center border border-2 rounded py-1 mb-2 text-success fw-bold'>Apply on TimesJobs</div>
                                    </div>
                                    <div className='d-flex justify-content-between mt-2'>
                                        <div><div className='rounded-circle'></div><span className='fw-medium'><img src="https://img.freepik.com/free-photo/flowing-purple-mountain-spiral-bright-imagination-generated-by-ai_188544-9853.jpg" className='rounded-circle mx-1' height="30" style={{width: '30%'}} alt='this' /><span>Jos Gray</span></span></div>
                                        <div className='d-flex justify-content-center'><span className="mx-2"><BsEyeFill /></span><p>1.4k views</p><span className="mx-4 my-1 px-2 mb-2" style={{backgroundColor: 'lightgray'}}><BiSolidShareAlt /></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-1 col-0'></div>
                        <div className='col-md-5 col-0 mx-md-0 mx-2'>
                            <div className='position-relative'>
                                <GrLocation className={`${classes.mr}`}/>
                                <input type='text' defaultValue="Noida, India" className='w-50 border-0' />
                                <HiPencil className={`positionn-absolute mx-lg-5`} />
                                <hr className='w-75' />
                            </div>
                            <p className='mx-md-4 mt-4 w-75 contain-fluid'><PiWarningCircleLight /> Your Locatoin will help us serve better and <br />extend a personalised experience</p>
                            <div className={`fw-medium mt-4 w-75 ${joinGroup ? 'd-block' : 'd-none'}`}>
                                <div>
                                    <FiThumbsUp className='mb-1 mx-1 fw-bold' />RECOMMENDED GROUPS
                                </div>
                                <div className='d-flex justify-content-between mt-4 mb-1'>
                                    <div>
                                        <img src="https://img.freepik.com/free-photo/flowing-purple-mountain-spiral-bright-imagination-generated-by-ai_188544-9853.jpg" className='rounded-circle mx-1' height="30" style={{width: '30%'}} alt='this' /><span> Leisure</span>
                                    </div>
                                    <div><button className='border-0 px-3 py-1' style={{borderRadius: '20px'}}>Follow</button></div>
                                </div>
                                <div className='d-flex justify-content-between mt-5 mb-1'>
                                    <div>
                                        <img src="https://img.freepik.com/free-photo/flowing-purple-mountain-spiral-bright-imagination-generated-by-ai_188544-9853.jpg" className='rounded-circle mx-1' height="30" style={{width: '30%'}} alt='this' /><span> Activism</span>
                                    </div>
                                    <div><button className='border-0 px-3 py-1' style={{borderRadius: '20px'}}>Follow</button></div>
                                </div>
                                <div className='d-flex justify-content-between mt-5 mb-1'>
                                    <div>
                                        <img src="https://img.freepik.com/free-photo/flowing-purple-mountain-spiral-bright-imagination-generated-by-ai_188544-9853.jpg" className='rounded-circle mx-1' height="35" style={{width: '35%'}} alt='this' /><span> MBA</span>
                                    </div>
                                    <div><button className='border-0 px-3 py-1' style={{borderRadius: '20px'}}>Follow</button></div>
                                </div>
                                <div className='d-flex justify-content-between mt-5 mb-1'>
                                    <div>
                                        <img src="https://img.freepik.com/free-photo/flowing-purple-mountain-spiral-bright-imagination-generated-by-ai_188544-9853.jpg" className='rounded-circle mx-1' height="25" style={{width: '25%'}} alt='this' /><span> Philosophy</span>
                                    </div>
                                    <div><button className='border-0 px-3 py-1' style={{borderRadius: '20px'}}>Follow</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Posts