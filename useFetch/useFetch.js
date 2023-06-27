import { useEffect, useState } from "react";

export const useFetch = ( url ) => {
  
    const [state, setstate] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async() => {

        setstate({
            ...state,
            isLoading: true,
        });
        
        const resp = await fetch( url );
        const data = await resp.json();
        //console.log('dara ' , data)

        setstate({
            //data: data, es lo mismo que hacer esto
            data,
            isLoading: false,
            hasError: null,
        });
    }

    useEffect(() => {
        getFetch();
      //cada vez que el url cambie se dispara el useffect, y si la url es la misma no hace nada
    }, [ url ])
    
  
    return{
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}
