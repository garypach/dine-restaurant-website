import Image from "next/image";
import Link from 'next/link';
import { useStateContext } from "../EMProvider/EmailProvider";
const Reserve = () => {
    const newState = useStateContext();
   return (
     <section className="email-modal">
       <div className="book-triple-line">
            <Image src="/patterns/pattern-lines.svg" width="160px" height="76px" alt="Enjoyable place"/>
            </div>
       <form onSubmit={newState.submittedForm}>
         <div className="email-modal__form-group">
           <div>
           <input
             onChange={newState.handleNameInput}
             value={newState.name}
             type="name"
             className={`email-modal__input ${
              newState.nameError ? "email-modal__input--active" : ""
            } `}             
            placeholder="Name"
             onBlur={newState.checkForName}
             onFocus={newState.removeNameError}
           />
           <div
         className={`email-modal__error-message ${
           newState.nameError ? "email-modal__error-message--active" : ""
         } `}
       >
         This field is required
         </div>
       </div>
         </div>
         <div className="email-modal__form-group">
           <div>
           <input
             type="email"
             className={`email-modal__input ${
              newState.emailError ? "email-modal__input--active" : ""
            } `}  
              placeholder="Email"
             onChange={newState.handleEmailInput}
             value={newState.email}
             onBlur={newState.checkForEmail}
             onFocus={newState.removeEmailError}
           />
            <div
         className={`email-modal__error-message ${
           newState.emailError ? "email-modal__error-message--active" : ""
         } `}
       >
         This field is required
         </div>
       </div>
         </div>
         <div className="email-modal__form-group">
           <div className="time-req">
         <p> Pick a date</p><div
         className={`email-modal__error-message ${
           newState.monthError ? "email-modal__error-message--active" : ""
         } `}
       >
         This field is required
       </div>
       </div>
           <div className="time">
             <input
               type="number"
               className={` time-input ${
                newState.monthError ? "time-input--active" : ""
              } `}                 placeholder="MM"
               onChange={newState.handleMonthInput}
               value={newState.month}
               onBlur={newState.checkForMonth}
              onFocus={newState.removeMonthError}
             />
             <input
               type="number"
               className={` time-input ${
                newState.dayError ? "time-input--active" : ""
              } `}                placeholder="DD"
               onChange={newState.handleDayInput}
               value={newState.day}
               onBlur={newState.checkForDay}
               onFocus={newState.removeDayError}
             />
             <select className="time-local">
               <option value="2021">2021</option>
               <option value="2022">2022</option>
             </select>
           </div>
         </div>
         <div className="email-modal__form-group">
         <div className="time-req">
         <p> Pick a time</p>
         <div
         className={`email-modal__error-message ${
           newState.hourError ? "email-modal__error-message--active" : ""
         } `}
       >
         This field is required
       </div>
       </div>
           <div className="time">
             <input
               type="number"
               className={` time-input ${
                newState.hourError ? "time-input--active" : ""
              } `}                placeholder="09"
               onChange={newState.handleHourInput}
               value={newState.hour}
               onBlur={newState.checkForHour}
               onFocus={newState.removeHourError}
             />
             <input
               type="number"
               className={` time-input ${
                newState.minuteError ? "time-input--active" : ""
              } `}                placeholder="00"
               onChange={newState.handleMinuteInput}
               value={newState.minute}
               onBlur={newState.checkForMinute}
               onFocus={newState.removeMinuteError}
             />
             <select className="time-local">
               <option value="AM">AM</option>
               <option value="PM">PM</option>
             </select>
           </div>
         </div>
         <div className="email-modal__form-group">
           <div className="people">
             <button
               onClick={newState.decrementPeople}
               className="people-buttons"
             >
               -
             </button>
             <input
               type="number"
               className="people-input"
               value={newState.people}
               onChange={newState.handlePeopleInput}
             />
             <button
               onClick={newState.incrementPeople}
               className="people-buttons"
             >
               +
             </button>
           </div>
         </div>
        
         <button type="submit" className="email-modal__button">
           MAKE A RESERVATION
         </button>
       </form>
     </section>
   );
}

export default Reserve;