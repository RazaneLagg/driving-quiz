import React from 'react';
import '../styles/CourseProfile.css';
import NewLessonPage from '../components/NewLessonPage'

function CourseProfile() {
    
    const { title } = {
    title: "Default Course Title",
    image: "./assets/images/officer.png", 
    };
    return(
        <div id='lessonProfile-salah'>
        
         <div id='lessonpageContent-salah'>
            <div id='coursepicSection-salah'>
                <span className='spacing-salah'></span>
                <div id='courseInfo-salah'>
                    <span id='courseName-salah'>{title}</span>
                    <div id='courseTags-salah'>
                        <div className='courseTag-salah'>Target</div>
                        <div className='courseTag-salah'>Target</div>
                        <div className='courseTag-salah'>Target</div>
                    </div>
                    <span id='quickDesc-salah'>Course Description Course Description Course Description.</span>
                    <span className='spacing-salah'></span>
                    <span className='spacing-salah'></span>
                    <span id='mentorCreator-salah'>created by Ning Yizhuo, <u>Adlene Auto Ecole</u></span>
                    <span className='spacing-salah'></span>
                    <span className='spacing-salah'></span>
                    <span className='spacing-salah'></span>
                    
                </div>
            </div>

            <div id='courseDetails-salah'>
                <div className='pageSection-salah'>
                    
                </div>
                <span className='spacing-salah'></span>
                
                <span className='spacing-salah'></span>
                <NewLessonPage/>
                
            </div>
            
         </div>
        </div>
    );
}

export default CourseProfile;
