import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from 'redux/store';
import css from './ContactsList.module.css';

const ContactsList = () => {
  let userContacts = useSelector(state => state.contacts);
  const searchFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  if (searchFilter !== '') {
    userContacts = [
      ...userContacts.filter(item => item.name.includes(searchFilter)),
    ];
  } else {
    userContacts = [...userContacts];
  }

  return (
    <ul className={css.contacts__list}>
      {userContacts.map(({ name, number, id }) => {
        return (
          <li key={id} className={css.contacts__item}>
            {name} {number}
            <button
              onClick={() => dispatch(deleteUser(id))}
              className={css.contacts__delete}
            >
              x
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
