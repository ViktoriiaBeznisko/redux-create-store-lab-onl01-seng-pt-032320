function createStore(reducer){
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  };

  return {
    dispatch,
    getState
  };
}

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

  let store = createStore(candyReducer)

    function render() {
      let container = document.getElementById('container');
      if(store.getState()) {
        container.textContent = store.getState().join(' ')
      } else {
        throw new Error("Store's state has not been defined")
      }
    };
    store.dispatch({type: '@@INIT'}) 
