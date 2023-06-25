import React, { useRef,useState } from 'react';


function Drop(){

    
        const [selectedOption, setSelectedOption] = useState('');
        
        const eleRef = useRef(null);
        const handleDropdownChange = (event) => {
          setSelectedOption(event.target.value);
        };

        const handleClickChange = (event) => {
            console.log(selectedOption);
            if(selectedOption==="option1"){
                  eleRef.current.style.backgroundColor = 'red'; 
            }else if(selectedOption==="option2"){
                eleRef.current.style.backgroundColor = 'blue';
            }else if(selectedOption==="option3"){
                eleRef.current.style.backgroundColor = 'green';
                
            }else{
                eleRef.current.style.backgroundColor = '';
            }
          };

          const handleClickChange2 = (event) => {
            console.log(selectedOption);
            if(selectedOption==="option6"){
                eleRef.current.style.fontSize = '40px'; 
            }else if(selectedOption==="option7"){
                eleRef.current.style.fontSize = '50px';
            }else if(selectedOption==="option8"){
                eleRef.current.style.fontSize = '60px';
            }else{
                eleRef.current.style.fontSize = '';
            }
          };
    return(
        <div>
         
         <select onClick={handleClickChange} value={selectedOption} onChange={handleDropdownChange}>
            <option value="option4">Select color</option>
      <option  value="option1">Red</option>
      <option value="option2">Blue</option>
      <option value="option3">Green</option>
    </select>

<select onClick={handleClickChange2} value={selectedOption} onChange={handleDropdownChange}>
<option value="option5">Select font</option>
  <option value="option6">10</option>
  <option value="option7">20</option>
  <option value="option8">30</option>
</select>

<div ref={eleRef}>Understandin react clearly</div>
        </div>
    )
}

export default Drop


// import React, { useState } from 'react';

// const Drop = () => {
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleDropdownChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleButtonClick = () => {
//     console.log(selectedOption);
//   };

//   return (
//     <div>
//       <select id='aman' value={selectedOption} onChange={handleDropdownChange}>
//         <option value="option1">Option 1</option>
//         <option value="option2">Option 2</option>
//         <option value="option3">Option 3</option>
//       </select>
//       <button onClick={handleButtonClick}>Get Selected Option</button>
//     </div>
//   );
// };

// export default Drop;
