import React from 'react'

const RecentTransactions = (props) => {

  return (
    <>
      {
        props.user.transactions.map((item, i) =>
          <div key={i}>
            {
              i > props.user.transactions.length - 4 ?
                <>
                  {
                    i === props.user.transactions.length-1 ?
                      <div className='text-success'>
                        <p>Expense: {item.expense}</p>
                        <p>-${item.amount}</p>
                        <p>Category: {item.category}</p>
                      </div>
                      :
                      <>
                        <p>Expense: {item.expense}</p>
                        <p>-${item.amount}</p>
                        <p>Category: {item.category}</p>
                        <hr />
                      </>
                  }
                </> : ""
            }
          </div>
        )
      }
    </>
  )
}

export default RecentTransactions