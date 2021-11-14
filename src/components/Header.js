import React from 'react'

function Header({totalIncome}) {
    return (
        <header>
            <h1> INCOME TRACKER</h1>
            <div className="balance-text">Total Balance: </div>
            <div className="total-income">${totalIncome}</div>
        </header>
    )
}

export default Header
