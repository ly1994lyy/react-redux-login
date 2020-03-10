import React from 'react'
import classnaems from 'classnames'

export default class FlashMessage extends React.Component {

  onClick=()=>{
    this.props.daleteFlashMessage(this.props.message.id)
  }

  render() {
    const {type,text} = this.props.message
    return(
      <div className={classnaems('alert',{
        'alert-success':type==='success',
        'alert-danger':type==='danger'
      })}>
      <button className="close" onClick={this.onClick}>&times;</button>
        {text}
      </div>
    )
  }
}