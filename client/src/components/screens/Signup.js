import React from 'react';  
import {Link} from 'react-router-dom'
const SignIn =()=>{
    return (
        <div className="mycard">
            <div className="card auth-card input-field">
              <h2>Instagram</h2>
              <input
              type="text"
              placeholder="name"
            //   value={email}
            //   onChange={(e)=>setEmail(e.target.value)}
              />
              <input
              type="text"
              placeholder="email"
            //   value={email}
            //   onChange={(e)=>setEmail(e.target.value)}
              />
              <input
              type="password"
              placeholder="password"
            //   value={password}
            //   onChange={(e)=>setPasword(e.target.value)}
              />
              <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
              //onClick={()=>PostData()}
              >
                  Signup
              </button>
              <h5>
                <Link to="/signin">Already have an account?</Link>
            </h5>
      
          </div>
        </div>
     )
}

export default SignIn