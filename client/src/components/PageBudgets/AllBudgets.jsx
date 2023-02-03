import React from 'react'
import styles from './module.allbudgets.css'
import Container from '@mui/material/Container';

const AllBudgets = (props) => {
  const arr = props.user.pages[props.index].categories
  return (
    <>
      <h1>Fast Approaching Budgets</h1>
      {
        arr.map((oneBudget, i) =>
          <button key={i} className={props.theme === 'dark' ? 'lbtn' : 'dbtn container-fluid'}>
            <h4>{oneBudget.name}</h4>
            <h5>Amount Remaining in Budget: ${oneBudget.itemTotal} of ${oneBudget.amount}</h5>
          </button>
        )
      }
    </>
  )
}

export default AllBudgets