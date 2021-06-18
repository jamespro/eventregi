import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import ReginfoForm from '../components/Forms/ReginfoForm';
import useHttp from '../hooks/use-http';
import { register } from '../lib/api';


const Reginfo = () => {
  const { sendRequest, status, data } = useHttp(register);
  const history = useHistory();

  useEffect(() => {
      if (status === 'completed') {
          console.log(data);
      history.push('/attendee/items');
    }
  }, [status, history]);

  const registerHandler = (registerData) => {
    sendRequest(registerData);
  };

  return <ReginfoForm isLoading={status === 'pending'} onRegister={registerHandler} />;
};

export default Reginfo;