import React from 'react';
import './App.css'
import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import Accordion from 'react-bootstrap/Accordion';
import { TbWorld } from "react-icons/tb";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

function App() {

  return (
    <div>
      <section className='first_poster_zomato_main'> 
            <div className="first_innerdiv">
                <div className="first_navbar">
                    <div className="first_navbarleft">
                        <h5 style={{color:'white',fontSize:"16px"}}>Get the App</h5>
                    </div>
                    <div className="first_navbarright">
                        <h5 style={{color:'white'}}>Investor Relations</h5>
                        <h5 style={{color:'white'}}>Add resturant</h5>
                        <h5 style={{color:'white'}}>Log in</h5>
                        <h5 style={{color:'white'}}>Sign up</h5>
                    </div>
                </div>
                <div className='first_middle_main'>
                    <img height={'60px'} width={'300px'} src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="" />
                    <h1 style={{color:'white',marginTop:'2%',marginBottom:'2%'}}>Discover the best food & drinks in Kochi</h1>
                    <div className='first_inputsmain'>
                        <FaLocationDot className='first_location_icon'/>
                        <div className='first_maindropdown'>
                        <select className='first_dropdown_location'>
                            <option>Fort Kochi, Kochi</option>
                        </select>
                        </div>
                        <div className="first_linebreak_inputs"></div>
                        <div>
                        <input className='first_search' type="text" placeholder='Search for resturant, cuisine or a dish' />
                        <CiSearch  className='first_searchicon'/>
                        </div>
                    </div>
                </div>

            </div>

        </section>
        <section className="second_main">
            <div className="second_inner_div">
               <div className="second_card_main">
                    <div className="second_card_anbyone">
                        <img height={'200px'} width={'100%'} style={{borderTopLeftRadius:'15px',borderTopRightRadius:'15px'}} src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="" />
                        <div style={{paddingLeft:'3%'}}>
                            <h4 style={{fontSize:"23px",color:'black'}}>Order Online</h4>
                            <div style={{fontSize:"18px"}}>Stay home an order to your doorstep</div>
                        </div>
                    
                    </div>
                    <div className="second_card_anbyone">
                        <img height={'200px'} width={'100%'} style={{borderTopLeftRadius:'15px',borderTopRightRadius:'15px'}} src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="" />
                        <div style={{paddingLeft:'3%'}}>
                            <h4 style={{fontSize:"23px", color:'black'}}>Dining</h4>
                            <div style={{fontSize:"18px"}}>View the city's favourite dining venues</div>
                        </div>     
                    </div>
               </div>
               <div className='second_collections_main'> 
                <h1>Collections</h1>
                <div className="second_collection_subheadingmain ">
                    <p className='second_collection_subheadingleft'>Explore curated lists of top restaurants, cafes, pubs, and bars in Kochi, based on trends</p>
                    <p className='second_collection_subheadingright'>All collections in Kochi <IoMdArrowDroprightCircle style={{fontSize:"25px"}} /></p>
                </div>
                <div className="second_collection_cardmain">
                    <div className="second_collection_onebyonecard one_collection">
                       <div className="second_collection_onebyonecard_inner">
                            <h5 >Places for Art Lovers</h5>
                          <h6>7 Places</h6>
                       </div>
                    </div>
                    <div className="second_collection_onebyonecard two_collection">
                       <div className="second_collection_onebyonecard_inner">
                          <h5>Great Cafes</h5>
                          <h6>11 Places</h6>
                       </div>
                    </div>
                    <div className="second_collection_onebyonecard third_collection">
                       <div className="second_collection_onebyonecard_inner">
                          <h5>Places for Authentic Kuzhi..</h5>
                          <h6>5 Places</h6>
                       </div>
                    </div>
                    <div className="second_collection_onebyonecard four_collection">
                       <div className="second_collection_onebyonecard_inner">
                          <h5>5 Must-visit Legendary Pl...</h5>
                          <h6>5 Places</h6>
                       </div>
                    </div>
                </div>   
               </div>
            </div>
        </section>
        <section className='third_section_main'>
            <div className="third_inner_div_main">
                <div>
                    <h1></h1>
                </div>
                <div className="third_card_section">
                    <div className="third_card_onbyone">
                    <div className="third_card_onbyone_inner">
                        <div className="third_card_onbyone_left">
                            <div style={{fontSize:'24px',color:'black'}}>Kakkanad</div>
                            <div style={{fontSize:'18px',color:'black'}}>525 Places</div>
                        </div>
                        <div className="third_card_onbyone_right">
                        <MdKeyboardArrowRight style={{fontSize:'25',color:'black'}} />
                        </div>
                    </div>
                    </div>
                    <div className="third_card_onbyone">
                    <div className="third_card_onbyone_inner">
                        <div className="third_card_onbyone_left">
                            <div style={{fontSize:'24px',color:'black'}}>Edappally</div>
                            <div style={{fontSize:'18px',color:'black'}}>382 places</div>
                        </div>
                        <div className="third_card_onbyone_right">
                        <MdKeyboardArrowRight style={{fontSize:'25',color:'black'}} />
                        </div>
                    </div>
                    </div>
                    <div className="third_card_onbyone">
                    <div className="third_card_onbyone_inner">
                        <div className="third_card_onbyone_left">
                            <div style={{fontSize:'24px',color:'black'}}>Fort Kochi</div>
                            <div style={{fontSize:'18px',color:'black'}}>143 places</div>
                        </div>
                        <div className="third_card_onbyone_right">
                        <MdKeyboardArrowRight style={{fontSize:'25',color:'black'}} />
                        </div>
                    </div>
                    </div>
                    <div className="third_card_onbyone">
                    <div className="third_card_onbyone_inner">
                        <div className="third_card_onbyone_left">
                            <div style={{fontSize:'24px',color:'black'}}>Panampilly Nagar</div>
                            <div style={{fontSize:'18px',color:'black'}}>111 places</div>
                        </div>
                        <div className="third_card_onbyone_right">
                        <MdKeyboardArrowRight style={{fontSize:'25',color:'black'}} />
                        </div>
                    </div>
                    </div>
                    <div className="third_card_onbyone">
                    <div className="third_card_onbyone_inner">
                        <div className="third_card_onbyone_left">
                            <div style={{fontSize:'24px',color:'black'}}>MG Road</div>
                            <div style={{fontSize:'18px',color:'black'}}>104 places</div>
                        </div>
                        <div className="third_card_onbyone_right">
                        <MdKeyboardArrowRight style={{fontSize:'25',color:'black'}} />
                        </div>
                    </div>
                    </div>
                    <div className="third_card_onbyone">
                    <div className="third_card_onbyone_inner">
                        <div className="third_card_onbyone_left">
                            <div style={{fontSize:'24px',color:'black'}}>Kacheripady</div>
                            <div style={{fontSize:'18px',color:'black'}}>127 places</div>
                        </div>
                        <div className="third_card_onbyone_right">
                        <MdKeyboardArrowRight style={{fontSize:'25',color:'black'}} />
                        </div>
                    </div>
                    </div>
                    <div className="third_card_onbyone">
                    <div className="third_card_onbyone_inner">
                        <div className="third_card_onbyone_left">
                            <div style={{fontSize:'24px',color:'black'}}>Palarivattom</div>
                            <div style={{fontSize:'18px',color:'black'}}>175 places</div>
                        </div>
                        <div className="third_card_onbyone_right">
                        <MdKeyboardArrowRight style={{fontSize:'25',color:'black'}} />
                        </div>
                    </div>
                    </div>
                    <div className="third_card_onbyone">
                    <div className="third_card_onbyone_inner">
                        <div className="third_card_onbyone_left">
                            <div style={{fontSize:'24px',color:'black'}}>Vyttila</div>
                            <div style={{fontSize:'18px',color:'black'}}>142 places</div>
                        </div>
                        <div className="third_card_onbyone_right">
                        <MdKeyboardArrowRight style={{fontSize:'25',color:'black'}} />
                        </div>
                    </div>
                    </div>
                    <div className="third_card_onbyone">
                    <div className="third_card_onbyone_inner">
                       <div className="third_card_onbyone_inner last_card">
                        <div style={{fontSize:'20px',color:'black'}}>see more <MdKeyboardArrowDown />
                        </div>
                       </div>
                    </div>
                    </div>

                </div>
            </div>

        </section>
        <section className="forth_section_main">
            <div className="forth_inner_div">
                <div className="forth_left">
                    <img height={'480px'} width={'490px'} src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png" alt="imgeee" />

                </div>
                <div className="forth_rigth">
                 <div style={{width:'80%'}}>
                 <h1>Get the Zomato app</h1>
                 <div style={{fontSize:'16px'}}>We will send you a link, open it on your phone to download the app</div><br />

                 <div className='forth_radio_main'>
                    <div style={{fontSize:'20px'}}>
                    <input className='inputs_forth_radio' type="radio" />&nbsp; Email
                    </div>
                    <div style={{fontSize:'20px'}}>
                    <input className='inputs_forth_radiophone' type="radio" />&nbsp; Phone
                    </div>
                 </div>
                 <div style={{display:"flex",justifyContent:'space-between'}}>
                    <input type="text" placeholder='Email' className='forth_input_email' />

                    <button className='forth_applink'>Share App Link</button>
                 </div><br />
                 <div style={{color:'grey'}}>Download app from</div><br />
                <div style={{display:'flex'}}> 
                    <img height={'40px'} width={'150px'} style={{marginRight:'3%'}} src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="1" />
                <img height={'40px'} width={'150px'} src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="2" /></div>
                 </div>
                </div>
            </div>
        </section>
        <section className="fifthsectionmain">
            <div className="fifth_inner_div">
                <h1>Explore options near me</h1>

            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1" className='box_fifth' >
                <Accordion.Header>Popular cuisines near me</Accordion.Header>
                <Accordion.Body>
                Arabian near meBakery near meBeverages near meBiryani near meBurger near meChinese near meContinental near meDesserts near meIce Cream near meJuices near meKerala near meNorth Indian near mePizza near meSandwich near meSeafood near meShake near meShawarma near meSichuan near meSouth Indian near meStreet near me
                </Accordion.Body>
            </Accordion.Item> <br />
            <Accordion.Item eventKey="2">
                <Accordion.Header>Popular restaurant types near me</Accordion.Header>
                <Accordion.Body>
                Bakeries near meBars near meBeverage Shops near meCafés near meCasual Dining near meDessert Parlors near meDhabas near meFine Dining near meFood Courts near meFood Trucks near meKiosks near mePaan Shop near meQuick Bites near meSweet Shops near me
                </Accordion.Body>
            </Accordion.Item>
            </Accordion><br />

            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="3">
                <Accordion.Header>Top restaurant chains</Accordion.Header>
                <Accordion.Body>
                Burger KingKFCMcDonald'sPizza HutWOW! Momo
                </Accordion.Body>
            </Accordion.Item> <br />
            <Accordion.Item eventKey="4">
                <Accordion.Header>Cities we deliver to</Accordion.Header>
                <Accordion.Body>
                Delhi NCR Kolkata Mumbai Bengaluru Pune Hyderabad Chennai Lucknow  Kochi Jaipur Ahmedabad   Chandigarh Goa IndoreGangtokNashik Ooty Shimla Ludhiana Guwahati Amritsar Kanpur Allahabad Aurangabad Bhopal Ranchi Visakhapatnam Bhubaneswar Coimbatore Mangalore Vadodara Nagpur Agra Dehradun Mysore  Puducherry Surat Varanasi Patna Udaipur Srinagar Khajuraho Neemrana Cuttack Trivandrum Haridwar Leh Pushkar Rajkot Madurai Kozhikode Alappuzha Thrissur Manipal Vijayawada Jodhpur Kota Ajmer Mussoorie Rishikesh Jalandhar Jammu Manali All delivery cities
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>

            </div>
        </section>
        <footer className='footer_main'>
            <div className="footer_inner_div">
                <div className="footer_heading">
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="zomato"  />
                    <div >
                        <button className='button_india_footer'> <img src="https://cdn.pixabay.com/photo/2016/08/24/17/07/india-1617463_1280.png" alt="flag" width={'24px'} height={'17px'} style={{paddingRight:'5px'}}/> India <MdKeyboardArrowDown /></button>
                        <button className='button_english_footer'> <TbWorld /> English <MdKeyboardArrowDown /></button>
                    </div>
                </div>
                <div className="middle_footer">
                <div className="first_footer">
                    <h5>About Zomato</h5>
                    <div style={{marginBottom:'3px',color:'grey'}}>Who We Are</div>
                    <div style={{marginBottom:'3px',color:'grey'}}>Blog</div>
                    <div style={{marginBottom:'3px',color:'grey'}}>Work With Us</div>
                    <div style={{marginBottom:'3px',color:'grey'}}>Investor Relations</div>
                    <div style={{marginBottom:'3px',color:'grey'}}>Report Fraud</div>
                    <div style={{marginBottom:'3px',color:'grey'}}>Contact Us</div>
                </div>
                <div className="second_footer">
                    <h5>Zomaverse</h5>
                    <div style={{marginBottom:'3px',color:'grey'}}>Zomato</div>
                    <div style={{marginBottom:'3px',color:'grey'}}>Blinkit</div>
                    <div style={{marginBottom:'3px',color:'grey'}}>District</div>
                    <div style={{marginBottom:'3px',color:'grey'}}>Feeding India</div>
                    <div style={{marginBottom:'3px',color:'grey'}}>Hyperpure</div>
                    <div style={{marginBottom:'3px',color:'grey'}}>Zomato Live</div>
                    <div style={{marginBottom:'3px',color:'grey'}}>Zomaland</div>
                    <div style={{marginBottom:'3px',color:'grey'}}>Weather Union</div>
                </div>
                <div className="third_footer">
                    <h5>For Restaurants</h5>
                    <div style={{marginBottom:'3px',color:'grey'}}>Partner With Us</div>
                    <div style={{marginBottom:'3px',color:'grey'}}>Apps For You</div>
                </div>
                <div className="forth_footer">
                    <h5>Learn More</h5>
                    <div style={{marginBottom:'3px',color:'grey'}}>Privacy</div>
                    <div style={{marginBottom:'3px',color:'grey'}}>Security</div>
                    <div style={{marginBottom:'3px',color:'grey'}}>Terms</div>
                </div>
                <div className="fifth_footer">
                    <h5>Social links</h5>
                    <div>
                    <TbBrandLinkedinFilled style={{fontSize:'25px', marginRight:'5px'}}/>
                    <FaSquareInstagram style={{fontSize:'25px', marginRight:'5px'}}/>
                    <FaSquareXTwitter style={{fontSize:'25px', marginRight:'5px'}}/>
                    <FaSquareYoutube style={{fontSize:'25px', marginRight:'5px'}}/>
                    <FaFacebookSquare style={{fontSize:'25px', marginRight:'5px'}}/>
                    </div>
                    <img style={{marginTop:'8%'}} height={'40px'} width={'150px'} src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="2" />
                    <img height={'40px'} width={'150px'} style={{marginTop:'8%'}} src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="1" />
                </div>
                </div>
                <hr />
                <div style={{color:'grey'}}>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2025 © Zomato™ Ltd. All rights reserved.</div>
            </div>
        </footer>
    </div>
  )
}

export default App
