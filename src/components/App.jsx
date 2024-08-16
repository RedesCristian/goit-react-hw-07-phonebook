import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operation';
import { getIsLoading, getContacts } from '../redux/selectors';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import FilterForm from '../components/FilterForm/FilterForm';
import { Circles } from 'react-loader-spinner';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const contacts = useSelector(getContacts); // Asigură-te că datele sunt corect preluate

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  console.log(contacts); // Adaugă acest log pentru a verifica dacă datele sunt disponibile

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        marginTop: '40px',
      }}
    >
      {isLoading ? (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          visible={true}
        />
      ) : (
        <>
          <ContactForm />
          <FilterForm />
          <ContactList />
        </>
      )}
    </div>
  );
};

export default App;
