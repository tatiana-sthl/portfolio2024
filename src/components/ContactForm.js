import { useForm, ValidationError } from '@formspree/react';


const ContactForm = () => {

  const [state, handleSubmit] = useForm("xjvnrjgy");
  if (state.succeeded) {
      return <p className='success'>Je vous recontacte très bientôt !</p>;
  };
  
  return (
    <>
    <div>  
      <form className='contactForm' onSubmit={handleSubmit}>
        <div className='mailInfos'>
          <div className='formGroup'>
            <label className='label' htmlFor="email">Votre mail :</label>
            <input
              type="email"
              id="email"
              name="email"
              className='input'
              placeholder='exemple@gmail.com'
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
              
        <div className='formGroupTextarea'>
          <label className='label' htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            className='textarea'
            placeholder=
            {`Après avoir vu votre travail exceptionnel, j'ai hâte de travailler avec vous !`}
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
        <div className='formButton'>
          <button className='button' type="submit" disabled={state.submitting}>Envoyer</button>
        </div>
        
      </form>
    </div>

    </>
  );
};

export default ContactForm;