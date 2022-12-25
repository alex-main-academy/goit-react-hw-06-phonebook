import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from 'redux/store';

import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import SearchContact from './SearchContact/SearchContact';

export const App = () => {
  const dispatch = useDispatch();
  const contactsArray = useSelector(state => state.contacts);

  const handleAddContact = (event, name, number, handleClearState) => {
    event.preventDefault();

    if (contactsArray.find(item => item.name.includes(name))) {
      alert('You can not add user with this name');
      handleClearState();
      return;
    }

    dispatch(addUser({ name, number, id: nanoid() }));
    handleClearState();
  };

  return (
    <section className="phonebook">
      <h1 className="phonebook__title">Phone book</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <h2 className="contacts__title">Contacts:</h2>
      <SearchContact />
      <ContactsList />
    </section>
  );
};
