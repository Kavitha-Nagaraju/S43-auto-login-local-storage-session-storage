import React, { useRef } from 'react'
import { Link, useLocation} from 'react-router-dom';

function Signup() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let selectStateRef = useRef();
    let femaleRBRef = useRef();
    let maleRBRef = useRef();
    let msgParaRef = useRef();
    let locObj = useLocation();
    let selectGender;
    let selectMaritalStatus;
    let salutation;
    let selectLanguages={
        tel:false,
        eng:false,
        hin:false,
        kan:false,
       };

  return (
    <div>
        <Link to="/topnavigation">TopNavigation</Link>
        <h1>Signup Form</h1>
        <form>
            <div>
                <label>First Name</label>
                <input ref={firstNameInputRef}></input>
            </div>
            <div>
                <label>Last Name</label>
                <input ref={lastNameInputRef}></input>
            </div>
            <div>
                <label >State</label>
                <select ref={selectStateRef} className='state'>
                    <option>Telangane</option>
                    <option>Andhra Pradesh</option>
                    <option>Maharastra</option>
                    <option>Tamilnadu</option>
                </select>
            </div>
            <div>
                <label>Gender</label>
                <input type="radio" name="gender" ref={femaleRBRef} onChange={()=>{
                    if(femaleRBRef.current.checked==true){
                       selectGender="Female";
                    }
                }}></input>
                <label className='checkbox' >Female</label>
                <input type="radio" name="gender" ref={maleRBRef} onChange={()=>{
                    if(maleRBRef.current.checked){
                        selectGender="Male";
                    }
                }}></input>
                <label className='checkbox' >Male</label>
            </div>
            <div>
                <label >MarritalStatus</label>
                <input type="radio" name="ms"  onChange={(eO)=>{
                    if(eO.target.checked==true){
                        selectMaritalStatus="Married";
                    }
                }}></input>
                <label className='checkbox' >Married</label>
                <input type="radio" name="ms" onChange={(eO)=>{
                    if(eO.target.checked==true){
                        selectMaritalStatus="Unmarried";
                    }
                }}></input>
                <label className='checkbox' >UnMarried</label>
            </div>
            <div>
                <label className='lan'>Languages Known</label>
                <input type="checkbox" onChange={(eventObject)=>{
                    selectLanguages.tel=eventObject.target.checked
                        
                    
                }} ></input>
                <label  className='checkbox'>Telugu</label>
                <input type="checkbox"  onChange={(eO)=>{
                    selectLanguages.eng=eO.target.checked
                           
                    
                    
                }}></input>
                <label  className='checkbox'>English</label>
                <input type="checkbox"  onChange={(eO)=>{
                    selectLanguages.hin=eO.target.checked
                     
                    
                }}></input>
                <label  className='checkbox'>Hindhi</label>
                <input type="checkbox"  onChange={(eO)=>{
                    selectLanguages.kan=eO.target.checked
                }}></input>
                <label  className='checkbox'>Kannada</label>
            </div>
            <div>
                <h1>Message:{locObj && locObj.state && locObj.state.msg?locObj.state.msg:"Hi! Welcome"}</h1>
            </div>
            <div>
                <button type="button" onClick={()=>{
                    let firstName = firstNameInputRef.current.value;
                    let lastName = lastNameInputRef.current.value;
                    if(selectGender=="Male"){
                            salutation="Mr";
                    }
                    else{
                        if(selectMaritalStatus=="Married"){
                            salutation="Mrs";
                        }
                        else{
                            salutation="Miss";
                        }
                    }
                msgParaRef.current.innerHTML =`${salutation} ${firstName} ${lastName} from ${selectStateRef.current.value} Knowned Languages ${selectLanguages.tel==true?"Telugu":""} ${selectLanguages.eng==true?"English":""} ${selectLanguages.hin==true?"Hindhi":""} ${selectLanguages.kan==true?"Kannada":""}`;
                }}>Submit</button>
            </div>
            <div>
                <p ref={msgParaRef}>Result</p>
            </div>
            <div>
                <p>If you have account please login now  </p>
                <Link to ="/">Home</Link>
            </div>
        </form>
      
    </div>
  )
}

export default Signup
