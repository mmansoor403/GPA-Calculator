import React, {useState} from 'react';

import classes from  './AddData.module.css'
import Card from '../UI/Card';
import Button from '../UI/Button';
import GpaModal from '../UI/GpaModal';




const AddData = props => {




    const [subjectName, setSubjectName] = useState("");
    const [gradeName, setGradeName] = useState("");
    const [gradeValue, setGradeValue] = useState("");
    const [credit, setCredit] = useState("");
    const [totalCredit, setTotalCredit] = useState(0);
    const [multipliedValue, setMultipliedValue] = useState(0);
    const [multipliedTotalValue, setMultipliedTotalValue] = useState(0);
    const [gpa, setGpa] = useState(0);
    const [result, setResult] = useState(false);


    
 

    

    


    
    

    const gradeChangeHandler = (event) => {
      
        setGradeName(event.target.options[event.target.selectedIndex].text);
        setGradeValue(+event.target.value);
        setMultipliedValue(+event.target.value * credit);
      };

    const creditChangeHandler = (event) => {
        setCredit(+event.target.value)
        setTotalCredit(+totalCredit+parseInt(event.target.value));
        setMultipliedValue(gradeValue * event.target.value);
        setMultipliedTotalValue(+multipliedTotalValue+parseInt(gradeValue * event.target.value),10); // need to move this to addDataHandler
    
      };

      const subjectNameHandler = (event) => {
          setSubjectName(event.target.value);
      };
     
      const addDataHandler = (event) => {
        
            event.preventDefault();
            setGpa((multipliedTotalValue/totalCredit).toFixed(2));
            props.onAddData(subjectName, gradeName, credit);
            console.log(subjectName, gradeName, credit);
            console.log("TotalCredit: ",totalCredit);
            console.log("Multiplied Value: ", multipliedValue);
            console.log("Multiplied Total Value: ", multipliedTotalValue);
            
            setSubjectName("");
            setGradeName("");
            setGradeValue("");
            setCredit("");
      };

      const calculateGpa = () => {
        setResult(true);
        console.log("GPA: ",gpa);
       
      };

      const closeModal = () => {
          setResult(false);
      };

      const resetValues = () => {
        props.onResetData(subjectName, gradeName, credit);
        setSubjectName("");
        setGradeName("");
        setGradeValue("");
        setCredit("");
        setTotalCredit(0);
        setMultipliedValue(0);
        setMultipliedTotalValue(0);
        setGpa(0);
      };


  return (
      <div>
        {result && <GpaModal content={gpa} onConfirm={closeModal} />}
        <Card className={classes.input}>
        <form onSubmit={addDataHandler}>
            <label htmlFor="subname">Subject Name</label>
            <input id="subname" value={subjectName} type="text" onChange={subjectNameHandler}/>

            <label htmlFor="grade">Grade</label>
            <select id="grade" value={gradeValue} onChange={gradeChangeHandler}> 
                <option value="select Grade">  Select Grade  </option>
                <option value="10">O</option>
                <option value="9">A+</option>
                <option value="8">A</option>
                <option value="7">B+</option>
                <option value="6">B</option>
                <option value="0">RA</option>
                
           
        </select>

        <label htmlFor="credit">Credit</label>
            <select id="credit" value={credit} onChange={creditChangeHandler}> 
                <option value="select Credit">  Select Credit  </option>
                <option className={classes.credit} disabled = {gradeValue === 0 ? true : false} value="10">10</option>
                <option className={classes.credit} disabled = {gradeValue === 0 ? true : false} value="4">4</option>
                <option className={classes.credit} disabled = {gradeValue === 0 ? true : false} value="3">3</option>
                <option className={classes.credit} disabled = {gradeValue === 0 ? true : false} value="2">2</option>
                <option className={classes.credit} disabled = {gradeValue !== 0 ? true : false} value="0">0</option>
            </select>
            
        <Button type="submit">Add Data</Button> 
        <Button onClick={calculateGpa}>Get GPA</Button>
        <Button onClick={resetValues}>Reset</Button>  
            
        </form>
        </Card>
    </div>
  );
};

export default AddData;