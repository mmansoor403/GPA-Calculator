import React, {useState} from 'react';
import AddData from './components/Users/AddData';
import DataList from './components/Users/DataList';




function App() {

    const [datasList, setDatasList] = useState([]);

    const addDataHandler = (subName, subGrade, subCredit) => {
      setDatasList((prevDatasList) => {
        return [
          ...prevDatasList,
          {subject: subName, grade: subGrade, credit: subCredit, id: Math.random().toString() },
        ]
      });
    }

    const resetDataHandler = () => {
      setDatasList(()=> {
        return [];
      });
    }

  return (
    <div>
      <AddData onAddData={addDataHandler} onResetData={resetDataHandler} />
      <DataList datas={datasList} />
    </div>
  );
}

export default App;
