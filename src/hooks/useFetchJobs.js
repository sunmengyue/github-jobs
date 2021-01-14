import { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = { jobs: [], loading: true };
const BASE_URL =
  'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { jobs: [], loading: true };
    case ACTIONS.GET_DATA:
      return { ...state, jobs: action.payload.jobs, loading: false };
    case ACTIONS.ERROR:
      return {
        ...state,
        jobs: [],
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export default function useFetchJobs(terms, page) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios
      .get(BASE_URL, {
        cancelToken: cancelToken.token,
        params: { markdown: true, page: page, ...terms },
      })
      .then((res) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } });
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });

    return () => {
      cancelToken.cancel();
    };
  }, [terms, page]);

  return state;
}
