import React, { useState, useEffect } from 'react'
import './module.allbudgets.css'

const AllBudgets = (props) => {
  const page = props.user.pages[props.index]

  const handleClick = (i) => {
    if (props.budgetId === null || i != props.budgetId) {
      props.setBudgetId(i)
    } else {
      props.setBudgetId(null)
    }
  }
  return (
    <>
      <h1 className='text-center'>Fast Approaching Budgets</h1>
      {
        page.categories.map((oneBudget, i) =>
          <button onClick={() => handleClick(i)} key={i} className={props.theme === 'dark' ? 'lbtn container-fluid' : 'dbtn container-fluid'}>
            <h4>{oneBudget.name}</h4>
            <h5>${oneBudget.itemTotal} of ${oneBudget.amount}</h5>
            <div className='progress' role='progressbar' aria-valuenow={0} aria-valuemin={0} aria-valuemax={props.budget}>
              <div className='progress-bar bg-danger' style={{ width: ((parseFloat(oneBudget.itemTotal) / parseFloat(oneBudget.amount)) * 100) + "%" }}></div>
            </div>
          </button>
        )
      }
    </>
  )
}

export default AllBudgets