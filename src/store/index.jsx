import React ,{useReducer} from 'react';
import {userInitialState} from "./user/userInitialState";
import {userReducer} from "./user/userReducer";
import {reservationInitialState} from "./reservation/reservationInitialState";
import {reservationReducer} from "./reservation/reservationReducer";
import { vehiclesInitialState } from './vehicles/vehiclesInitialState';
import {vehiclesReducer} from "./vehicles/vehiclesReducer";


/* Merkezi state olusturuldu */
const Store = React.createContext();
Store.displayName="Store";

/* Merkezi state in diger componentlerde kullanilmasini kolaylastirmak icin tamamladik*/

export const useStore = () => React.useContext(Store);


export const StoreProvider=({children}) =>{
const [userState , dispatchUser] = React.useReducer(userReducer , userInitialState);
const [reservationState , dispatchReservation] = useReducer(reservationReducer , reservationInitialState);
const [vehiclesState , dispatchVehicles] = useReducer(vehiclesReducer , vehiclesInitialState);

return(
    <Store.Provider value={{userState , dispatchUser , reservationState ,
        dispatchVehicles,  dispatchReservation ,vehiclesState}}> 
        {children}
    </Store.Provider>
)

}