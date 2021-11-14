import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './components/Header.js';
import IncomeForm from './components/IncomeForm.js'
import IncomeList from './components/IncomeList.js';

function App() {
  const [income, setIncome]= useState([]);
  const [totalIncome, setTotalIncome]= useState(0);
  
  useEffect(()=>
  {
    let temp=0;
    for (let i=0; i<income.length; i++) {
      temp+=parseInt(income[i].price);
    }
    setTotalIncome(temp)
  },  [income]
    
  )

  return (
    <div className="App"> 
      <Header totalIncome={totalIncome} ></Header>
      <IncomeForm income={income} setIncome={setIncome}></IncomeForm>
     
      <IncomeList income={income} setIncome= {setIncome}></IncomeList>

    </div>
  );
}

export default App; 
 