import { Center } from '@chakra-ui/react';
import React from 'react';

const LearnWebDev = () => {
    const containerStyle = {
        width: '50%',
        height: '200px',
        backgroundColor: '#f1f1f1',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display:'flex',
        justifyContent: 'center',
        alignItem:'center'
      };
  return (
    <div style={containerStyle} className='web'>
        <div >
        <div>
      <h1>Learn Web Development</h1>
      <p>
        Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.
      </p>
      <br/>
      <br/>
      <p>
        The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from the rest of MDN, and other intermediate to advanced resources that assume a lot of previous knowledge.
      </p>
      <br/>
      <br/>
      <p>
        If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.
      </p>
      </div>
      </div>
    </div>
  );
};

export default LearnWebDev;
