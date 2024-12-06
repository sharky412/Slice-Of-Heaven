import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signinUser } from '../services/user';
export function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //get navigation function
  const navigate = useNavigate();

  const onSignin = async () => {
    if (email.length ==0) {
      toast.warn("Please enter your email");
    } else if (password.length === 0) {
      toast.warn("Please enter your password");
    } else {
      const result = await signinUser(email, password);
      {
         if (result['status'] === 'success') {
          //cache the token
            const token=result['data']['token']
            sessionStorage['token']=token 

          toast.success("Successful login");
          navigate("/home");
        } else {
             toast.error(result['error'])
         }
      }
    }
  };

  return (
    <>
      <h1 className="title">Signin</h1>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb3">
              <label htmlFor="">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="abc@gmail.com"
                className="form-control"
              />
            </div>
            <div className="mb3">
              <label htmlFor="">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="xxxxxxx"
                className="form-control"
              />
            </div>
            <div className="mb3">
              <div>
                Don't have an account?<Link to="/signup">Signup here</Link>
              </div>
              <button onClick={onSignin} className="btn btn-primary mt-2">Signin</button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
}

export default Signin;
