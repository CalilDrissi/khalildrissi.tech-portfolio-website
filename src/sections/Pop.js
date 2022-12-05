import styled from "styled-components";
import { createPortal } from "react-dom";
import React, {useRef, useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const Popup = styled.div`
 
  position: fixed;
  top: 0;
  z-index: 10;
  background: rgba(12, 12, 12, 0.9);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
 

`;

const Box = styled.div`
/* z-index: 100 ; */
  /* display: flex ;
  justify-content: space-between ; */
  overflow-y: scroll;
  width: 45vw;
  height: 85vh ;
  position: relative;
 background: #000 ;
background: -webkit-linear-gradient(to top, #333333, rgb(25, 25, 25));  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #333333, rgb(25, 25, 25)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: .5%;
  padding: 3rem ;

  & * {
    margin-top: 5px ;
  }


  @media (max-width: 990px) {
    margin-top: -30px;
    width: 95%;
    max-height: 100vh;
    font-size: 12px;
    
   
  }
  
  @media (max-width: 490px) {
    margin-top: 5px
    width: 95%;
    max-height: 100vh;
    font-size: 12px;
    
    
  }

  
`;


const InputBox = styled.div`
      width: 100% ;
      min-height: 100px ;
      border-bottom: 1px solid #fff ;
      font-weight: 100 ;
      display: flex ;
      flex-direction: column ;
      justify-content: flex-end ;

`
const Label = styled.label`
  display: block;
  font-weight: lighter ;
  font-size: 32px ;
  
  @media (max-width: 990px) {
   
    font-size: 20px;
    
   
  }
  
  @media (max-width: 490px) {
   
    font-size: 20px;
    
    
  }
`;

const InputField = styled.input`
      background-color: rgba(120, 120, 120, 0) ;
      border: none;
      color: #fff;
      font-size: 24px ;
      font-family: inherit ;
      font-weight: light;
      min-height: 32px ;
      display: block ;
      :focus{
        outline: none;
       
      }

      ::placeholder{
        font-weight: 100 ;
      }
`

const InputArea = styled.div`
      width: 100% ;
      margin-top: 20px;
      font-weight: 100 ;
      display: flex ;
      flex-direction: column ;
      justify-content: flex-end ;
      
      

`

const InputMessage = styled.textarea`
      ::placeholder{
        font-weight: 100;
        
      }
      height: 120px;
      resize: none;
      padding: 5px;
       background-color: rgba(120, 120, 120, 0) ;
      border: none;
      color: #fff;
      font-size: 16px ;
      font-family: inherit ;
      font-weight: bold;
      
      :focus{
        outline: none;
         border: 1px dashed #393f47;
      }
      
      
      
      @media (max-width: 490px) {
       height: 80px;
        
      }

`


const Captcha = styled.div`

margin-bottom: 10px;

 @media (max-width: 490px) {
   
& * {
    transform: scale(.95);
    transform-origin:0 0;
}
  
}

`

const SubmitBtn = styled.button`

      
      background-color: #222;
      border-radius: 4px;
      border-style: none;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      font-family: "Farfetch Basis","Helvetica Neue",Arial,sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.5;
      max-width: none;
      min-height: 44px;
      min-width: 10px;
      outline: none;
      overflow: hidden;
      padding: 9px 20px 8px;
      position: relative;
      text-align: center;
      text-transform: none;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      width: 100%;
    
    :hover, :focus {
      opacity: .75;
    }


`

const CloseBtn = styled.button`

position: absolute;
top: 7px;
right: 7px;
cursor: pointer;
color: white;
background: #333333;
width: 40px;
height: 40px;
border-radius: 50%;
border: none;
font-weight: bold;

 :hover, :focus {
  opacity: .75;
}
`

const Heading = styled.h1`



font-size: 40px;
text-align: center;


 @media (max-width: 490px) {
   
   font-size: 25px
   
   
}



`


const Pop = ({ closePop }) => {
  const formId = "auQtBhSs";
  const formSparkUrl = `https://submit-form.com/${formId}`;
  const recaptchaKey = "6LcbVh4gAAAAAAxOVnbvLl_ie-MbG8vKeeM6jvuu";
  
  const recaptchaRef = useRef();
  


  const initialFormState = {
    email: "",
    name: "",
    message: "",
  };

  const [formState, setFormState] = useState(initialFormState);

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState();
  const [recaptchaToken, setReCaptchaToken] = useState();

  const submitForm = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };

  const postSubmission = async () => {
    const payload = {
      ...formState,
      "g-recaptcha-response": recaptchaToken,
    };

    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
      setMessage({
        text: "Thanks, I will be in touch shortly.",
      });
      
      setFormState(initialFormState);
      
      recaptchaRef.current.reset();
              
      
      
      
    } catch (error) {
      console.log(error);
      setMessage({
        text: "Sorry, there was a problem. Please try again or contact support.",
      });
    }
  };

  // keep this snippet for handling onChange in form inputs
  const updateFormControl = (event) => {
    const { id, value } = event.target;
    const key = id;
    const updatedFormState = { ...formState };
    updatedFormState[key] = value;
    setFormState(updatedFormState);
  };

  const updateRecaptchaToken = (token) => {
    setReCaptchaToken(token);
  };


  return createPortal(
    <Popup>
      <Box>
      
        <CloseBtn
          onClick={() => closePop(false)}
          style={{
          }}
        >
          X
        </CloseBtn>
        
        {message && <div> <h2>{message.text}</h2></div>}
        
        <Heading  >Leave Me a Message 📨</Heading>
        <p>Or send me an email to: <span style={{fontWeight: "lighter"}}>
          <a href = "mailto: mail@khalildrissi.tech ">mail@khalildrissi.tech</a>
          </span>
          </p>
        
        
        
        <form onSubmit={submitForm}>


          <InputBox>
            <Label for='name'> Name  </Label>
              
              <InputField
               id="name"
               required
                onChange={updateFormControl}
                type="text"
                value={formState.name}
                placeholder='*John Doe'
              />
           
          </InputBox>


          <InputBox>
            <Label> Email </Label>
             
              <InputField
                onChange={updateFormControl}
                type="email"
                required
                id="email"
                value={formState.email}
                placeholder='*johndoe@gmail.com'
              />
            
          </InputBox>


          <InputArea>
          <Label> Your Message  </Label>
          
          <InputMessage
            
            placeholder="*Write your message here!"
           
            onChange={updateFormControl}
            id="message"
            value={formState.message}
           
          ></InputMessage>
          </InputArea>

          <Captcha
            style={{
              maxWidth: '50%',
              display: "block",
              marginTop: "10px"
            }}
          >
          
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recaptchaKey}
            onChange={updateRecaptchaToken}
          />

          </Captcha>

           <SubmitBtn disabled={submitting}>
             {submitting ? "Submitting..." : "Submit"}
           </SubmitBtn>
          
        
          
        </form>
        
         
      </Box>
    </Popup>,
    document.getElementById("portal")
  );
};

export default Pop;
