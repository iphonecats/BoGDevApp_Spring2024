import React from 'react'



const OptionsCell = (props) => {

  const onClickDelete = () => {
    props.context.handleDeleteUser(props.data.id)
  }

  return (
    <div>
      <button onClick={onClickDelete}> delete </button>
    </div>
  )
}

export default OptionsCell