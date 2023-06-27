

export const todoReducer = (initialState = [], action) => {
  

    switch ( action.type) {
        case '[TODO] Add Todo':
            
            // action.payload esto es algo que pudiereas ser de cuaquier tipo
            return [ ...initialState, action.payload];

        case '[TODO] Remove Todo':
            
            // action.payload esto es algo que pudiereas ser de cuaquier tipo
            return initialState.filter( todo => todo.id !== action.payload );

            case '[TODO] Toggle Todo':

            return initialState.map( todo => {

                if( todo.id === action.payload){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });
    
        default:
            return initialState;
    }

}
