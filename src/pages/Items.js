import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import ItemsForm from '../components/Forms/ItemsForm';
import useHttp from '../hooks/use-http';
import { addItems } from '../lib/api';


const Items = () => {
  const { sendRequest, status, data } = useHttp(addItems);
  const history = useHistory();
  useEffect(() => {
      if (status === 'completed') {
        const currentUuid = localStorage.getItem('uuid');
        //   console.log('if you deconstruct using data, then data is null here: It is sending action.responseData so maybe that has no value? well, useHttp useReducer, data defaults to null. So is data not being updated with responseData? ok trace down requestFunction, is that not sending anything into responseData? I think when it returns null, that is better than undefined.');
        console.log('data:', data);
      history.push('/attendee/review/'+currentUuid);
    }
  }, [status, data, history]);

  const addItemsHandler = (addItemsData) => {
    sendRequest(addItemsData);
  };

  return <ItemsForm isLoading={status === 'pending'} onAddItems={addItemsHandler} />;
};

export default Items;