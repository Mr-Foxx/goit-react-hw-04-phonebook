import React from "react"
import { ContactList,ItemsContact,DeleteBtn } from "./Contacts.styled";
import PropTypes from 'prop-types';



export const Contacts=({contacts,deleteContact})=>{

    return(


        <ContactList>
        {contacts.map(contact => (
          <ItemsContact key={contact.id}>
            {contact.name}: {contact.number} 
            <DeleteBtn type="button" onClick={()=>deleteContact(contact.id)}>Delete</DeleteBtn>
          </ItemsContact>
        ))}
      </ContactList>
    )
}

Contacts.propTypes={
  deleteContact:PropTypes.func.isRequired,
  contacts:PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.string.isRequired,
      name:PropTypes.string.isRequired,
      number:PropTypes.string.isRequired,
    })
  )
}

// newName: '',
    // newNumber: '',

// import { Formik, Form, Field } from 'formik';

// export const ContactForm = ({ handleSubmit }) => {
//   return (
//     <Formik
//       initialValues={{ name: '', number: '' }}
//       onSubmit={handleSubmit}
//     >
//       {() => (
//         <Form>
//           <label htmlFor="name">Name</label>
//           <Field
//             name="name"
//             type="text"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//           <br />

//           <label htmlFor="number">Number</label>
//           <Field
//             name="number"
//             type="tel"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//           <br />

//           <button type="submit">Add Contact</button>
//         </Form>
//       )}
//     </Formik>
//   );
// };