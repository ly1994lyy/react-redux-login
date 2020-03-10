import React from "react";
import classnaems from 'classnames'
import {withRouter} from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfilmation: "",
      errors:{},
      isLoading:false
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({errors:{},isLoading:true})
    this.props.signupActions.userSignupRequest(this.state).then(
      ()=>{
        this.props.flashActions.addFlashMessage({
          type:"success",
          text:"注册成功！欢迎你的加入！"
        })
        this.props.history.push('/')
      },
      ({response}) => {
        this.setState({
          errors:response.data,
          isLoading:false
        })
      }
    )
  }

  render() {
    const {errors,isLoading} = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join Our Community</h1>
        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.onChange}
            className={classnaems('form-control',{'is-invalid':errors.username})}
          />
          {errors.username && <span className="form-text text-muted">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            type="email"
            value={this.state.email}
            name="email"
            onChange={this.onChange}
            className={classnaems('form-control',{'is-invalid':errors.email})}
          />
          {errors.email && <span className="form-text text-muted">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            type="password"
            value={this.state.password}
            name="password"
            onChange={this.onChange}
            className={classnaems('form-control',{'is-invalid':errors.password})}
          />
          {errors.password && <span className="form-text text-muted">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label className="control-label">passwordConfilmation</label>
          <input
            type="password"
            value={this.state.passwordConfilmation}
            name="passwordConfilmation"
            onChange={this.onChange}
            className={classnaems('form-control',{'is-invalid':errors.passwordConfilmation})}
          />
          {errors.passwordConfilmation && <span className="form-text text-muted">{errors.passwordConfilmation}</span>}
        </div>
        <div className="form-group">
          <button disabled={isLoading} className="btn btn-primary btn-lg">注册</button>
        </div>
      </form>
    );
  }
}

export default withRouter(SignupForm);
