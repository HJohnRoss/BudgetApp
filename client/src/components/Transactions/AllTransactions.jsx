import React from 'react'

const AllTransactions = (props) => {
  return (
    <>
      <h1>All Transactions</h1>
      <hr />
      {
        props.user.transactions.map((item, i) =>
          <div key={i}>
            <p>Expense: {item.expense}</p>
            <p>-${item.amount}</p>
            <p>Category: {item.category}</p>
            <hr />
          </div>
        )
      }
    </>
  )
}

export default AllTransactions