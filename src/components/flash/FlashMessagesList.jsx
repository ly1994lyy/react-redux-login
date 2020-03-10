import React from 'react';
import FlashMessage from './FlashMessage'
import {connect} from 'react-redux'
import {daleteFlashMessage} from '../../actions/flashMessages'

class FlashMessagesList extends React.Component {
  render() {
    const messages = this.props.messages.map(message=>{
      return <FlashMessage key={message.id} message={message} daleteFlashMessage={this.props.daleteFlashMessage} />
    })
    return(
      <div className="container">
        {messages}
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    messages:state.flashMessages
  }
}

export default connect(mapStateToProps,{daleteFlashMessage})(FlashMessagesList)