import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from 'redux/store';
import css from './ContactsList.module.css';

const ContactsList = () => {
  const userContacts = useSelector(state => state.contacts);
  const searchFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  let newArray = [];

  if (searchFilter !== '') {
    newArray = [
      ...userContacts.filter(item => item.name.includes(searchFilter)),
    ];
  } else {
    newArray = [...userContacts];
  }

  return (
    <ul className={css.contacts__list}>
      {newArray.map(({ name, number, id }) => {
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
