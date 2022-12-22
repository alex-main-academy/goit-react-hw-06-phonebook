import { useDispatch } from 'react-redux';
import { filterArray } from 'redux/store';
import css from './SearchContact.module.css';

const SearchContact = () => {
  const dispatch = useDispatch();

  return (
    <>
      <label className={css.find__contacts}>
        Find contacts by name:
        <input
          type="text"
          name="search"
          onChange={event => dispatch(filterArray(event.target.value))}
        />
      </label>
    </>
  );
};

export default SearchContact;
