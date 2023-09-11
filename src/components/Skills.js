import React from 'react';
import './Styles.css'
import bg from '../assets/images/resumeBG.jpg'
import football from '../assets/images/football.png'
import music from '../assets/images/music.png'
import travel from '../assets/images/travel.png'
import game from '../assets/images/game.png'
import phone from '../assets/images/call.png'
import mail from '../assets/images/email.png'

export const Skills = () => {

  return (
    <div className="">
      <div>
        <div className='overResume' ></div>
        <img className='resumeBg' src={bg} alt="" />
        <h1 className='resume' >RESUME</h1>
      </div>
      <div className='details'>
        <div className='education' >
          <h3 className='eHeading' >Education</h3>
          <p className='eDetails'> B.Tech in Computer Science and Engineering, Bhagwan Parshuram Institute of Technology - 2019 - 2023 </p>
          <p className='eDetails'> XII CBSE, Ryan International School - 2019 </p>
          <p className='eDetails'> X CBSE, Ryan International School - 2017 </p>
          <div className="line"></div>
        </div>
        <div className="exp">
          <h3 className='xHeading' >Practical Experience</h3>
          <br />
          <p className='xCompany' > Software Developer Intern • Internship •  Alphech Global Pvt Ltd  (August'23 - Current)</p>
          <p className='xSummary' > Working on a live project for an international client. Using MERN stack to develop a SAAS model called Senior Life (Mexico). Learning about the react-native framework for building mobile applications  </p>

          <p className='xCompany' > MERN Developer Intern • Internship • CoreTech Info (April'23 - May'23)</p>
          <p className='xSummary' > Learned about REST APIs. Worked on a live project for a client. Developed the REST APIs using NodeJS and used the SQL as the database along with the frontend with ReactJS and Material UI for the admin dashboard.  </p>
          <p className='xCompany' > Software Developer Intern • Internship • CppSecrets (June'22 - July'22)</p>
          <p className='xSummary' > Learnt about C++ library called Raylib,which is used to for making video games. Implemented the gained knowledge on a self project. Created a 2D arcade game called flappy birds  </p>
          <p className='xCompany' > C++ Development Associate • Internship • The Entrepreneurship Network (Oct'21 - Dec'21)</p>
          <p className='xSummary' > Learned about the C++ file managment system and worked on projects along with the team members. Implemented the knowledge gained on a project called supermarket billing system.  </p>
          <div className="line"></div>
        </div>
        <div className="techskills">

          <h3 className='tHeading' style={{paddingBottom:15}}>Technical Skills</h3>
          <div className="skillx">
            <p className='tSkill'> C++ </p>
            <div className='knowledge'>
              <div className="levelB"></div>
              <div className="levelB"></div>
              <div className="levelW"></div>
            </div>
          </div>
          <div className="skillx">
            <p className='tSkill'> HTML </p>
            <div className='knowledge'>
              <div className="levelB"></div>
              <div className="levelB"></div>
              <div className="levelW"></div>
            </div>
          </div><div className="skillx">
            <p className='tSkill'> CSS </p>
            <div className='knowledge'>
              <div className="levelB"></div>
              <div className="levelB"></div>
              <div className="levelW"></div>
            </div>
          </div><div className="skillx">
            <p className='tSkill'> ReactJS </p>
            <div className='knowledge'>
              <div className="levelB"></div>
              <div className="levelB"></div>
              <div className="levelW"></div>
            </div>
          </div><div className="skillx">
            <p className='tSkill'> NodeJS </p>
            <div className='knowledge'>
              <div className="levelB"></div>
              <div className="levelW"></div>
              <div className="levelW"></div>
            </div>
          </div><div className="skillx">
            <p className='tSkill'> React-native </p>
            <div className='knowledge'>
              <div className="levelB"></div>
              <div className="levelW"></div>
              <div className="levelW"></div>
            </div>
          </div><div className="skillx">
            <p className='tSkill'> Redux </p>
            <div className='knowledge'>
              <div className="levelB"></div>
              <div className="levelW"></div>
              <div className="levelW"></div>
            </div>
          </div><div className="skillx">
            <p className='tSkill'> SQL </p>
            <div className='knowledge'>
              <div className="levelB"></div>
              <div className="levelW"></div>
              <div className="levelW"></div>
            </div>
          </div><div className="skillx">
            <p className='tSkill'> DSA </p>
            <div className='knowledge'>
              <div className="levelB"></div>
              <div className="levelB"></div>
              <div className="levelW"></div>
            </div>
          </div><div className="skillx">
            <p className='tSkill'> OOPS </p>
            <div className='knowledge'>
              <div className="levelB"></div>
              <div className="levelB"></div>
              <div className="levelW"></div>
            </div>
          </div>
          <div className="line"></div>

        </div>

        <div className="techskills">

          <h3 className='tHeading' style={{paddingBottom:15}} >Design Skills</h3>
          
          <div className="skillx">
            <p className='tSkill'> Adobe XD </p>
            <div className='knowledge'>
              <div className="levelB"></div>
              <div className="levelW"></div>
              <div className="levelW"></div>
            </div>
          </div>
          <div className="skillx">
            <p className='tSkill'> Canva </p>
            <div className='knowledge'>
              <div className="levelB"></div>
              <div className="levelB"></div>
              <div className="levelW"></div>
            </div>
          </div>
          <div className="skillx">
            <p className='tSkill'> Figma </p>
            <div className='knowledge'>
              <div className="levelB"></div>
              <div className="levelB"></div>
              <div className="levelW"></div>
            </div>
          </div>

          <div className="line"></div>
        </div>

        <div className="hobbies">
          <h3 className='hHeading' >Hobbies</h3>
          <div className='hobbyContainer' >
            <div className='l' >
              <p className="hobby">Football</p>
              <img src={football} alt="football" height='25px' />
            </div>
            <div className='l' >
              <p className="hobby">Music</p>
              <img src={music} alt="football" height='25px' />
            </div>
            <div className='l' >
              <p className="hobby">Videogames</p>
              <img src={game} alt="game" height='25px' />
            </div>
            <div className='l' >
              <p className="hobby">Travelling</p>
              <img src={travel} alt="travel" height='25px' />
            </div>
          </div>
          <div className="line"></div>
        </div>

        <div className="contact">
          <h3 className='cHeading' >Contact</h3>
          <div className='contactContainer' >
            <div className='cInfo' >
              <img src={phone} height="30px" alt="cell" />
              <a href="tel:8800913015" style={{ color: 'inherit', textDecoration: 'inherit', paddingLeft: "15px" }}  >  8800913015</a>
            </div>
            <div className='cInfo' >
              <img src={mail} height="25px" alt="cell" />
              <a href="mailto:herumbn@gmail.com" style={{ color: 'inherit', textDecoration: 'inherit', paddingLeft: "15px" }}  > herumbn@gmail.com</a>
            </div>
          </div>
        </div>


      </div>



    </div >
  );
}