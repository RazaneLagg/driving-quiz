import React from 'react';
import '../styles/LessonProfile.css';

import { Link, useLocation } from 'react-router-dom';

function LessonProfile() {
    const location = useLocation();
    const { title } = location.state || {
    title: "Mastering Roundabouts",
    image: "./assets/images/officer.png",
    };
    return (
        <div id='lessonProfile'>
            <div id='lessonpageContent'>
                <div id='coursepicSection'>
                    <span class='spacing'></span>
                    <div id='courseInfo'>
                        <span id='courseName'>{title}</span>
                        <div id='courseTags'>
                            <div class='courseTag'>Driving Techniques</div>
                            <div class='courseTag'>Intermediate</div>
                            <div class='courseTag'>Step-by-Step</div>
                        </div>
                        <span id='quickDesc'>Learn the skills required to navigate roundabouts effectively and with confidence.</span>
                        <span class='spacing'></span>
                        <span class='spacing'></span>
                        <span id='mentorCreator'>Created by Meriem Maroua, <u>BMW M driving school</u></span>
                        <span class='spacing'></span>
                        <span class='spacing'></span>
                        <span class='spacing'></span>
                        <Link to='/lesson' id='buttonDiv'>
                            <button class="buttonStyle">Start Lesson</button>
                        </Link>
                    </div>
                </div>

                <div id='courseDetails'>
                    <div class='pageSection'>
                        <span class='title'>What You Will Learn</span>
                        <ul>
                            <li class='courseItem'><span>Proper entry and exit techniques for roundabouts</span></li>
                            <li class='courseItem'><span>Understanding right-of-way rules</span></li>
                            <li class='courseItem'><span>How to assess traffic flow and make safe decisions</span></li>
                            <li class='courseItem'><span>Common mistakes to avoid at roundabouts</span></li>
                        </ul>
                    </div>
                    <span class='spacing'></span>
                    <div class='pageSection'>
                        <span class='title'>This course includes</span>
                        <div id='courseMore'>
                            <ul>
                                <li class='courseItem'><span>10 instructional videos</span></li>
                                <li class='courseItem'><span>Available on all devices</span></li>
                            </ul>
                            <span class='spacingH'></span>
                            <ul>
                                <li class='courseItem'><span>Interactive exercises</span></li>
                                <li class='courseItem'><span>Knowledge quizzes</span></li>
                            </ul>
                        </div>
                    </div>
                    <span class='spacing'></span>
                    <div class='pageSection'>
                        <span class='title'>Lessons</span>
                        <div id='lessons'>
                            <div class='lessonItem'>
                                <span class='lessonName'>01: Introduction to Roundabouts</span>
                                <span class='lessonDuration'>5 min</span>
                            </div>
                            <div class='lessonItem'>
                                <span class='lessonName'>02: Identifying Entry Points</span>
                                <span class='lessonDuration'>7 min</span>
                            </div>
                            <div class='lessonItem'>
                                <span class='lessonName'>03: Safe Exit Strategies</span>
                                <span class='lessonDuration'>6 min</span>
                            </div>
                            <div class='lessonItem'>
                                <span class='lessonName'>04: Handling Multi-Lane Roundabouts</span>
                                <span class='lessonDuration'>8 min</span>
                            </div>
                            <div class='lessonItem'>
                                <span class='lessonName'>05: Practical Scenarios</span>
                                <span class='lessonDuration'>10 min</span>
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
                                    mentorName: "Meriem Maroua",
                                    mentorImage: "./assets/images/avatarmentor2.jpg",
                                    mentorLocation: "Algiers, Algeria",
                                    age: "32",
                                    gender: "Female",
                                    bio: "A seasoned driving instructor with over 15 years of experience, specializing in advanced road navigation techniques.",
                                    experience: [
                                        "Certified road safety expert",
                                        "Trained over 5,000 students across skill levels",
                                        "Passionate about safe and confident driving",
                                    ],
                                    certificates: "Certified by the Algerian Driving Federation",
                                }}
                            >
                                <img id='imane-mentor-pic' src="./assets/images/avatarmentor2.jpg" alt="Mentor" />
                            </Link>

                            <div id='instructorInfo'>
                                <div class='title'>Meriem Maroua</div>
                                <div id='Location'>Algiers, Algeria</div>
                                <span class='spacing'></span>
                                <div><b>Age: </b>32 years old</div>
                                <div><b>Gender: </b>Male</div>
                                <span class='spacing'></span>
                                <span>An expert in road safety and navigation, committed to helping learners master the art of confident driving.</span>
                                <span class='spacing'></span>
                                <span class='spacing'></span>
                                <div class='title'>Experiences And Qualifications</div>
                                <span class='spacing'></span>
                                <div class='Subtitle'>Certificates</div>
                                <span>Certified by the Algerian Driving Federation</span>
                                <span class='spacing'></span>
                                <div class='Subtitle'>Experience</div>
                                <ul>
                                    <li class='experienceItem'>Certified road safety expert</li>
                                    <li class='experienceItem'>Trained over 5,000 students across skill levels</li>
                                    <li class='experienceItem'>Passionate about safe and confident driving</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <span class='spacing'></span>
                    
                </div>
            </div>
        </div>
    );
}

export default LessonProfile;
