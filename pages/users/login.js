import { useForm } from 'react-hook-form';
import Head from 'next/head';
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react';
import login from '../api/login';
const Login =()=>{
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    useEffect(()=>{
        fetch("/api/login")
            .then((res) => res.json())
            .then((data) => {
                setValue('username',data.name)
                setValue('password',data.password)
                setValue('email',data.email)
              setLoading(false);
            })

        .catch((error)=>{

        });

    },[])

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit,setValue, formState } = useForm(formOptions);
    const { errors } = formState;

    const onSubmit =({username,password,email})=>{
        alert(username)
        alert(password)
        alert(email)


    }
    return(
        <div className='container'>
             <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className='card'>
        <h3 className='card-header'>Login</h3>
        <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
  <label for="pswrd">Password:</label>
  <input
    type="password"
    id="pswrd"
    name="pswrd"
    pattern="[a-z0-9]{1,15}"
    title="Password should be digits (0 to 9) or alphabets (a to z)."
  />

  <button type="submit">Submit</button>
</form>
        </div>
    </div>

<style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .but_width{
            width:18%
        }
        .but_left{
            margin-left:5%
        }
        .card{
            width:50%
        }
        .form-control{
            margin-top:1rem
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

       

        .logo {
          height: 1em;
        }

        @media (max-width: 900px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
          .but_left{
            margin-left:auto
        }
          .but_width{
            width:57%
        }
        .card{
            width:67%
        }
        }
      `}</style>
        </div>

    )

}
export default Login