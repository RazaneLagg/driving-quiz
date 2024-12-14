import React from 'react';
import Footer from '../components/Footer';
import LessonsProgressSection from '../components/lessonwithprogresssection';

import '../styles/progressPage.css';

function ProgressPage() {
    return(
        <div id='progressPage'>
            
            <div id='progressPageContent'>
                <div id='takenLessons'>
                    <div id='salutations'><span class='title'>Dear <span id='name'>Imad</span>,</span></div>
                    <LessonsProgressSection type='lessons'/>
                    <hr id='divider' />
                </div> 

                <div id='takenLessons'>
                    <LessonsProgressSection />
                </div>
                
            </div>
        </div>
    );
}

export default ProgressPage;