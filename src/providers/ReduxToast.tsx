import React, { FC } from 'react'
import  ReduxToastr  from 'react-redux-toastr'

const ReduxToast:FC = () => {
  return (
   <ReduxToastr
      newestOnTop={false}
      preventDuplicates
      position="top-left"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      timeOut ={4000}
      progressBar
      />
  )
}

export default ReduxToast