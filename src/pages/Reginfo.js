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
        const currentUuid = localStorage.getItem('uuid');
        //   console.log('if you deconstruct using data, then data is null here: It is sending action.responseData so maybe that has no value? well, useHttp useReducer, data defaults to null. So is data not being updated with responseData? ok trace down requestFunction, is that not sending anything into responseData? I think when it returns null, that is better than undefined.');
        console.log('data:', data);
      history.push('/attendee/items/'+currentUuid);
    }
  }, [status, data, history]);

  const registerHandler = (registerData) => {
    sendRequest(registerData);
  };

  return <ReginfoForm isLoading={status === 'pending'} onRegister={registerHandler} />;
};

export default Reginfo;