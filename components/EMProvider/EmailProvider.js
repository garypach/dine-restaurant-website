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

    const[people,SetPeople] = useState(1)
    const handlePeopleInput = (e)=>{
        SetPeople(e.target.value)
    }
    const incrementPeople = (e) =>{
        SetPeople(people + 1)
    }
    const decrementPeople = (e) =>{
        if(people > 1){
            SetPeople(people - 1)
        }
     }
     const[hour,SetHour] = useState()
     const handleHourInput = (e)=>{
        SetHour(e.target.value)
    }
    const[hourError,SetHourError] = useState(false)
    const checkForHour = (e)=>{
        console.log('check month')
        function HourValid(etext){
            return /^[0-9]+$/.test(etext)
        }
        if(HourValid(hour) && e.target.value <= 12 && e.target.value >= 1){
        }else{
            SetHourError(true)
        }
    }
    const removeHourError =(e)=>{
     SetHourError(false)    
 }
    const[minute,SetMinute] = useState()
     const handleMinuteInput = (e)=>{
        SetMinute(e.target.value)
    }
    const[minuteError,SetMinuteError] = useState(false)
    const checkForMinute = (e)=>{
        console.log('check month')
        function MinuteValid(etext){
            return /^[0-9]+$/.test(etext)
        }
        if(MinuteValid(minute) && e.target.value <= 59 && e.target.value >= 0){
        }else{
            SetMinuteError(true)
        }
    }
    const removeMinuteError =(e)=>{
     SetMinuteError(false)    
 }
    const[month,SetMonth] = useState()
    const handleMonthInput = (e)=>{
       SetMonth(e.target.value)
   }
   const[monthError,SetMonthError] = useState(false)
   const checkForMonth = (e)=>{
       console.log('check month')
       function MonthValid(etext){
           return /^[0-9]+$/.test(etext)
       }
       if(MonthValid(month) && e.target.value <= 12 && e.target.value >= 1){
       }else{
           SetMonthError(true)
       }
   }
   const removeMonthError =(e)=>{
    SetMonthError(false)    
}
   const[day,SetDay] = useState()
    const handleDayInput = (e)=>{
       SetDay(e.target.value)
   }
 
const[dayError,SetDayError] = useState(false)
const checkForDay = (e)=>{
    console.log('check month')
    function DayValid(etext){
        return /^[0-9]+$/.test(etext)
    }
    if(DayValid(day) && e.target.value <= 31 && e.target.value >= 1){
    }else{
        SetDayError(true)
    }
}
const removeDayError =(e)=>{
 SetDayError(false)    
}
const[formSubmit,SetSubmitForm] = useState(false)

const submittedForm = (e) =>{
    e.preventDefault()
    if(
        emailError === false 
        && email.length > 5 
        && nameError === false 
        && name.length > 2 
        && monthError === false  
        && minuteError === false  
        && hourError === false  
        && dayError === false
        ){
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
            submittedForm,
            people,
            incrementPeople,
            decrementPeople,
            handlePeopleInput,
            hour,
            handleHourInput,
            minute,
            handleMinuteInput,
            month,
            handleMonthInput,
            day,
            handleDayInput,
            monthError,
            checkForMonth,
            removeMonthError,
            dayError,
            checkForDay,
            removeDayError,
            hourError,
            checkForHour,
            removeHourError,
            minuteError,
            checkForMinute,
            removeMinuteError,
            }}>
            {children}
        </StateContext.Provider>
    )
}