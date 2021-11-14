import React from 'react';
import {useRef} from 'react';

function incomeForm({income, setIncome}) {

// eslint-disable-next-line react-hooks/rules-of-hooks
const desc= useRef(null);
// eslint-disable-next-line react-hooks/rules-of-hooks
const date= useRef(null);
// eslint-disable-next-line react-hooks/rules-of-hooks
const price= useRef(null);

const AddIncome= e =>
{
    e.preventDefault();

    let d= date.current.value.split("-");
    let newD= new Date(d[0], d[1], d[2])

    setIncome([...income,{
        "desc": desc.current.value,
        "price": price.current.value,
        "date": newD.getTime()
    }])
 
    desc.current.value=""
    price.current.value=null
    date.current.value=null
}

    return (
        <form className="income-form" onSubmit={AddIncome}>
            <div className="form-inner">
                <input type="text" name="desc" id="desc" placeholder="Market opinion, position details or etc... " ref={desc}></input>
                <input type="number" name="price" id="price" placeholder="Income Size" ref={price}></input>
                <input type="date" name="date" id="date" placeholder="Income date" ref={date}></input>
                 <input type="submit" value="Add Income"></input>
            </div>
            
        </form>
    )
}

export default incomeForm
