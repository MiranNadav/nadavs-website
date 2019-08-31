import React from 'react'
import Download from '../components/Download';
import resume from '../files/resume.pdf'

const DownloadResume = () => (
    <Download href={resume} download={'David Shemain resume'} text={'Resume'}/>
);

export default DownloadResume;