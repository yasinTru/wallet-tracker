import React from 'react'
import IncomeItem from './IncomeItem'

function incomeList({income, setIncome} ) {

    const removeIncome= i => {
        let temp= income.filter((v, index)=> index !== i)
        setIncome(temp)
    }

    const sortByDate= (a,b)=>
     {
         return a.date- b.date
     }

    return (
        <div className="income-list">
            {income.sort(sortByDate).map((value, index)=>(
                <IncomeItem key={index} income={value} index={index}
                removeIncome={removeIncome} 
                ></IncomeItem>
            ))}
        </div>
    )
}

export default incomeList
