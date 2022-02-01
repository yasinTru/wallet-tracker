import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './components/Header.js';
import IncomeForm from './components/IncomeForm.js'
import IncomeList from './components/IncomeList.js';

function App() {
  const [income, setIncome]= useState( ()=>{const localData= localStorage.getItem('myIncome'); return localData ? JSON.parse(localData) : []});
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

  useEffect(()=>
  {
    localStorage.setItem("myIncome", JSON.stringify(income))
  }, [income])

  return (
    <div className="App"> 
      <Header totalIncome={totalIncome} ></Header>
    
      <IncomeForm income={income} setIncome={setIncome}></IncomeForm>
      <div className="sub-header">
        <div className="desc-text">DESC</div>
        <div className="expected-text">EXPECTED</div>
        <div className="income-text"> INCOMES</div>
        <div className="date-text">DATE</div>
      </div>
      <IncomeList income={income} setIncome= {setIncome}></IncomeList>

    </div>
  );
}

export default App; 
 