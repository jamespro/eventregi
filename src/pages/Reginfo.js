import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import ReginfoForm from '../components/Forms/ReginfoForm';
import useHttp from '../hooks/use-http';
import { register } from '../lib/api';


const Reginfo = () => {
  const { sendRequest, status } = useHttp(register);
  const history = useHistory();

  useEffect(() => {
    if (status === 'completed') {
      history.push('/attendee/items');
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return <ReginfoForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />;
};

export default Reginfo;