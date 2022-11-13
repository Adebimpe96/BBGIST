import { createStore } from 'redux'
const Reduxtest = () => {
    const reducer =(state=0, action)=>{
      switch (action.type) {
          case 'INCREMENT':
              return state + action.payload; 
              case 'DECREMENT':
                return state -  action.payload;
                case 'RESET':
                    return state = 0;
          default:
               return state;
      }
    } 
    const store = createStore(reducer)
   store.subscribe (()=>{
    console.log(store.getState());
   })
    
    store.dispatch({
        type: 'INCREMENT',
        payload: 1
    })
    store.dispatch({
        type: 'INCREMENT',
        payload: 1
    })
    store.dispatch({
        type: 'INCREMENT',
        payload: 1
    })
    store.dispatch({
        type: 'DECREMENT',
        payload: 1
    })
    store.dispatch({
        type: 'RESET'
    })
    console.log(store.getState());
    return ( 
        <div className="content">
            <h2>Redux 101</h2>
        </div>
     );
}
 
export default Reduxtest;