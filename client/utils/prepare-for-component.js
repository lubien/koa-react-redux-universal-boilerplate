import store from '../store';

export default function prepareForComponent(func) {
  return (state, callback, dispatch = store.dispatch) => func(state, dispatch, callback);
}
