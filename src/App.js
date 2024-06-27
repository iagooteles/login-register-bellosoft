import './App.css';
import Login from './components/Login/Login';

export default function App() {
  return (
    <div className="App">
      <Login />


    </div>
  );
}


// COLOCAR NO github e fazer deploy do projeto, enviar no deploy e mostrar código no github //

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   font-family: 'Poppins', sans-serif;
// }

// /* ======- BODY -====== */
// body {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   background: linear-gradient(#1E2022, #52616B);
//   overflow: hidden;
// }

// /* ======- FORM -======= */
// .wrapper {
//   position: relative;
//   width: 400px;
//   height: 500px;
// }

// /* Form color */
// .form-wrapper {
//   position: absolute;
//   top: 0;
//   left: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100%;
//   background: #F0F5F9;
//   box-shadow: 0 0 10px rgba(0, 0, 0, .2);
// }
// /* Animação */
// .wrapper.animate-signUp .form-wrapper.sign-in {
//   animation: animateRotate .7s ease-in-out forwards;
//   animation-delay: .3s;
// }

// .wrapper.animate-signIn .form-wrapper.sign-in {
//   animation: animateSignIn 1.5s ease-in-out forwards;
// }

// @keyframes animateSignIn {
//   0% {
//       transform: translateX(0);
//   }

//   50% {
//       transform: translateX(-500px);
//   }
// }

// .wrapper.animate-signIn .form-wrapper.sign-up {
//   animation: animateRotate .7s ease-in-out forwards;
//   animation-delay: .3s;
// }

// @keyframes animateRotate {
//   100% {
//       transform: rotate(0);
//       z-index: 1;
//   }
// }

// .wrapper.animate-signUp .form-wrapper.sign-up {
//   animation: animateSignUp 1.5s ease-in-out forwards;
// }

// @keyframes animateSignUp {
//   0% {
//       transform: translateX(0);
//       z-index: 1;
//   }

//   50% {
//       transform: translateX(500px);
//   }
// }
// /* Heading text */
// h2 {
//   font-size: 30px;
//   color: #1E2022;
//   font-family: Tenor Sans;
// }
// .subtext {
// margin-top: 23px;
// font-size: 14px;
// color: #8B8B8B;
// line-height: 28px;
// }
// /* Input text */
// .input-group {
//   position: relative;
//   width: 320px;
//   margin: 30px 0;
// }

// .input-group label {
//   position: absolute;
//   top: 50%;
//   left: 5px;
//   transform: translateY(-50%);
//   font-size: 16px;
//   color: #1E2022;
//   padding: 0 5px;
//   pointer-events: none;
//   transition: .5s;
// }

// .input-group input {
//   width: 100%;
//   height: 40px;
//   font-size: 16px;
//   color: #1E2022;
//   padding: 0 10px;
//   background: transparent;
//   border: 1px solid #1E2022;
//   outline: none;
//   border-radius: 5px;
// }
// /* Input label color */
// .input-group input:focus~label,
// .input-group input:valid~label {
//   top: 0;
//   font-size: 12px;
//   background: #F0F5F9;
// }

// .forgot-pass {
//   margin: -15px 0 15px;
// }
// /* Forgot password text */
// .forgot-pass a {
//   color: #1E2022;
//   font-size: 14px;
//   text-decoration: none;
// }

// .forgot-pass a:hover {
//   text-decoration: underline;
// }
// /* Button */
// .btn {
//   position: relative;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 40px;
//   background: linear-gradient(to right, #1E2022, #52616B);
//   box-shadow: 0 2px 10px rgba(0, 0, 0, .4);
//   font-size: 16px;
//   color: #F0F5F9;
//   font-weight: 500;
//   cursor: pointer;
//   border-radius: 5px;
//   border: none;
//   outline: none;
// }

// .sign-link {
//   font-size: 14px;
//   text-align: center;
//   margin: 25px 0;
// }
// /* Sign link text */
// .sign-link p {
//   color: #1E2022;
// }

// .sign-link p a {
//   color: #4592AF;
//   text-decoration: none;
//   font-weight: 600;
// }

// .sign-link p a:hover {
//   text-decoration: underline;
// }