import { useContext,useState,createContext } from "react";

export const StateContext = createContext();

export function useStateContext(){
    return useContext(StateContext)
}
export function EMProvider({children}){
    const [name,SetName] = useState('')
    const handleNameInput = (e)=>{
        SetName(e.target.value)
    }
    const[nameError,SetNameError] = useState(false)
    const checkForName =(e)=>{
        console.log('check name')
        function nameValid(text){
            return /^[a-z ,.'-]+$/i.test(text)
        }
        if(nameValid(name)){
        }else{
            SetNameError(true)
        }
    }
    const removeNameError =(e)=>{
        SetNameError(false)    
    }
    const [email,SetEmail] = useState('')
    const handleEmailInput = (e)=>{
        SetEmail(e.target.value)
    }
    const[emailError,SetEmailError] = useState(false)
    const checkForEmail = (e)=>{
        console.log('check email')
        function EmailValid(etext){
            return /\S+@\S+\.\S+/.test(etext)
        }
        if(EmailValid(email)){
        }else{
            SetEmailError(true)
        }
    }
    const removeEmailError =(e)=>{
        SetEmailError(false)    
    }

    const[formSubmit,SetSubmitForm] = useState(false)

    const submittedForm = (e) =>{
        e.preventDefault()
        if(emailError === false && email.length > 5 && nameError === false && name.length > 2){
            SetSubmitForm(true)
            console.log("submit")
        }
    }

    return(
        <StateContext.Provider value={{
            name,
            handleNameInput,
            email,
            handleEmailInput,
            checkForName,
            removeNameError,
            nameError,
            checkForEmail,
            removeEmailError,
            emailError,
            formSubmit,
            submittedForm
            }}>
            {children}
        </StateContext.Provider>
    )
}