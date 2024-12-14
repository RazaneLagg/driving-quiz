import React from 'react';
import '../styles/LessonProfile.css';

import { Link, useLocation } from 'react-router-dom';

function LessonProfileDash() {
    const location = useLocation();
    const { title } = location.state || {
    title: "Default Lesson Title",
    image: "./assets/images/officer.png", 
    };
    return(
        <div id='lessonProfile'>
        
         <div id='lessonpageContent'>
            <div id='coursepicSection'>
                <span class='spacing'></span>
                <div id='courseInfo'>
                    <span id='courseName'>{title}</span>
                    <div id='courseTags'>
                        <div class='courseTag'>practice</div>
                        <div class='courseTag'>beginner</div>
                        <div class='courseTag'>with illustrations</div>
                    </div>
                    <span id='quickDesc'>Learn how to navigate complex intersections safely and confidently.</span>
                    <span class='spacing'></span>
                    <span class='spacing'></span>
                    <span id='mentorCreator'>created by Ning Yizhuo, <u>Adlene Auto Ecole</u></span>
                    <span class='spacing'></span>
                    <span class='spacing'></span>
                    <span class='spacing'></span>
                    <Link to='/lesson' id='buttonDiv'>
                        <button class="buttonStyle">Watch course</button>
                    </Link>
                </div>
            </div>

            <div id='courseDetails'>
                <div class='pageSection'>
                    <span class='title'>What You Will Learn</span>
                    <ul>
                        <li class='courseItem'><span>how to ijbol in the right way</span></li>
                        <li class='courseItem'><span>understand aespa concept</span></li>
                        <li class='courseItem'><span>realise that no one is nice and everyone should just die</span></li>
                        <li class='courseItem'><span>ijbol</span></li>
                    </ul>
                </div>
                <span class='spacing'></span>
                <div class='pageSection'>
                    <span class='title'>This course includes</span>
                        <div id='courseMore'>
                            <ul>
                                <li class='courseItem'><span>30 videos</span></li>
                                <li class='courseItem'><span>acessible anywhere</span></li>
                            </ul>
                            <span class='spacingH'></span>
                            <ul >
                                <li class='courseItem'><span>interactive assignments</span></li>
                                <li class='courseItem'><span>quizzes</span></li>
                            </ul>
                        </div> 
                </div>
                <span class='spacing'></span>
                <div class='pageSection'>
                    <span class='title'>Lessons</span>
                    <div id='lessons'>
                        <div class='lessonItem'>
                            <span class='lessonName'>01 : Introduction about</span>
                            
                            <span class='lessonDuration'>2 min</span>
                        </div>
                        <div class='lessonItem'>
                            <span class='lessonName'>01 : Introduction about </span>
                            
                            <span class='lessonDuration'>2 min</span>
                        </div>
                        <div class='lessonItem'>
                            <span class='lessonName'>01 : Introduction about</span>
                            
                            <span class='lessonDuration'>2 min</span>
                        </div>
                        <div class='lessonItem'>
                            <span class='lessonName'>01 : Introduction about </span>
                            
                            <span class='lessonDuration'>2 min</span>
                        </div>
                        <div class='lessonItem'>
                            <span class='lessonName'>01 : Introduction about </span>
                            
                            <span class='lessonDuration'>2 min</span>
                        </div>
                        <div class='lessonItem'>
                            <span class='lessonName'>01 : Introduction about </span>
                            
                            <span class='lessonDuration'>2 min</span>
                        </div>
                    </div>
                </div>
                <span class='spacing'></span>
                <div class='pageSection'>
                    <span class='title'>Instructor</span>
                    <div id='instructorSection'>
                    <Link
                        to="/mentorprofile"
                        state={{
                            mentorName: "Ning Yizhuo",
                            mentorImage: "./assets/images/ning.png",
                            mentorLocation: "Ain Benian, Algiers, Algeria",
                            age: "22",
                            gender: "Female",
                            bio: "Push the limits of physics, master cornering at high speeds...",
                            experience: [
                            "Over 10 years of teaching drivers of different levels",
                            "Specialized in dealing with nervous drivers and helping build confidence",
                            "Professional racer"
                            ],
                            certificates: "No attached PDF sorry",
                        }}
                        >
                        <img src="./assets/images/ning.png" alt="Mentor" />
                    </Link>

                        <div id='instructorInfo'>
                            <div class='title'>Ning Yizhuo</div>
                            <div id='Location'>Ain Benian, Algiers, Algeria</div>
                            <span class='spacing'></span>
                            <div><b>Age: </b>22 years Old</div>
                            <div><b>Gender: </b>Female</div>
                            <span class='spacing'></span>
                            <span>Push the limits of physics, master cornering at high speeds, and discover the true potential of BMW's high-performance engineering—all while enjoying a luxurious and safe environment designed for automotive excellence.</span>
                            <span class='spacing'></span>
                            <span class='spacing'></span>
                            <div class='title'>Experiences And Qualifications</div>
                            <span class='spacing'></span>
                            <div class='Subtitle'>Certificates</div>
                            <span>No attached PDF sorry</span>
                            <span class='spacing'></span>
                            <div class='Subtitle'>Experience</div>
                            <ul>
                                <li class='experienceItem'>Over 10 years of teaching drivers of different levels</li>
                                <li class='experienceItem'>specialized in dealing with nervous drivers and help building confidence</li>
                                <li class='experienceItem'>professional racer</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <span class='spacing'></span>
                <div class='pageSection'>
                <div class='title'>See Also</div>

                </div>
            </div>
            
         </div>
        </div>
    );
}

export default LessonProfileDash;