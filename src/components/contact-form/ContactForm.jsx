import { v4 as uuidv4 } from 'uuid';

import { useState } from 'react';
import { addUser } from '../../utils/firebase/firebase';

import './contact-form.css';

import { PrimaryButton } from '../../utils/components';

const ContactForm = () => {
  const [inputsFields, setInputFields] = useState({
    nom: '',
    email: '',
    tel: '',
    genre: '',
    message: '',
  });

  const { nom, email, tel, genre, message } = inputsFields;

  const onChangeHandler = (e) =>
    setInputFields((lastFields) => ({
      ...lastFields,
      [e.target.name]: e.target.value,
    }));

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newId = uuidv4();
    const newContact = { ...inputsFields, id: newId };
    addUser(newContact);

    setInputFields({
      nom: '',
      email: '',
      tel: '',
      genre: '',
      message: '',
    });

    window.location.href('/');
  };

  return (
    <form className="contact-form container" onSubmit={onSubmitHandler}>
      <div className="input-item">
        <label htmlFor="nom">Nom:</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={nom}
          required
          onChange={onChangeHandler}
        />
      </div>

      <div className="input-item">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          required
          onChange={onChangeHandler}
        />
      </div>

      <div className="input-item">
        <label htmlFor="tel">Téléphone:</label>
        <input
          type="tel"
          id="tel"
          name="tel"
          value={tel}
          required
          onChange={onChangeHandler}
        />
      </div>

      <div className="input-item">
        <select
          id="client-ou-fournisseur"
          name="genre"
          value={genre}
          required
          onChange={onChangeHandler}
        >
          <option value="">-- Client ou Fournisseur --</option>
          <option value="client">Client</option>
          <option value="fournisseur">Fournisseur</option>
        </select>
      </div>

      <div className="input-item message">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          required
          onChange={onChangeHandler}
        ></textarea>
      </div>
      <PrimaryButton className="btn-form" type="submit">
        Envoyer
      </PrimaryButton>
    </form>
  );
};

export default ContactForm;
