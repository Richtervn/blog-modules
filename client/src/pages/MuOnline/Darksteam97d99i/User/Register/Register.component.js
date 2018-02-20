import React from 'react';

export default () => (<div>REGISTER</div>)

// import './Login.css';
// import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';

// import { InputGroupIcon } from 'components/FormTools';

// import { SideNav } from '../../components';

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: {
//         Username: '',
//         Password: ''
//       }
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     const { name, value } = event.target;
//     this.setState({ value: { ...this.state.value, [name]: value } });
//   }

//   render() {
//     const { history, onSetCurrentPage } = this.props;
//     return (
//       <div className="row">
//         <SideNav>
//           <div className="ds9799-login-form">
//             <InputGroupIcon
//               icon="user"
//               type="text"
//               value={this.state.value.Username}
//               name="Username"
//               onChange={this.handleChange}
//               placeholder='Username'
//             />
//             <InputGroupIcon
//               icon="lock"
//               type="password"
//               value={this.state.value.Password}
//               name="Password"
//               onChange={this.handleChange}
//               placeholder='Password'
//             />
//             <div className="feature">
//               <button className="btn">Login</button>
//               <button
//                 className="btn"
//                 onClick={() => {
//                   onSetCurrentPage('register');
//                   history.push('/darksteam_97d99i/user/register');
//                 }}>
//                 Register
//               </button>
//             </div>
//           </div>
//         </SideNav>
//       </div>
//     );
//   }
// }

// export default withRouter(Login);
