import React from "react"

const ShowBudget = (props) => {
  const page = props.user.pages[props.index]
  return (
    <>
      <h5 className="ms-2">{page.month} {page.year} <br /> Budget: ${page.budget}</h5>
    </>
  )
}

export default ShowBudget