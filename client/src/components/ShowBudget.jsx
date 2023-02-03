import react from "react"

const ShowBudget = (props) => {
  const page = props.user.pages[props.index]
  return (
    <>
      <h1>{page.month} {page.year} Budget : ${page.budget}</h1>
    </>
  )
}

export default ShowBudget