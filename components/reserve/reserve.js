import Image from "next/image";
import Link from 'next/link';
import { useStateContext } from "../EMProvider/EmailProvider";
const Reserve = () => {
    const newState = useStateContext();
   return(
    <section className="email-modal">
        <form onSubmit={newState.submittedForm}>
    <div className="email-modal__form-group">
          <input 
          onChange={newState.handleNameInput} 
          value={newState.name}
          type="name" 
          className="email-modal__input" 
          placeholder="Name" 
          onBlur = {newState.checkForName}
          onFocus = {newState.removeNameError}
          />
        </div>
        <div className="email-modal__form-group">
          <input type="email" className="email-modal__input" placeholder="Email"
            onChange={newState.handleEmailInput} 
            value={newState.email}
            onBlur = {newState.checkForEmail}
            onFocus = {newState.removeEmailError}
          />
        </div>
          <button type="submit" className="email-modal__button">MAKE A RESERVATION</button>
          </form>
          <div className={`email-modal__error-message ${newState.nameError ? 'email-modal__error-message--active' : ''} `}>
            This field is required
          </div>
          <div className={`email-modal__error-message ${newState.emailError ? 'email-modal__error-message--active' : ''} `}>
            This field is required
          </div>
    </section>
   )
}

export default Reserve;