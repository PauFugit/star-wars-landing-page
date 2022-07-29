import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);


const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			
			state.actions.getPlanets("https://swapi.dev/api/planets/")
			state.actions.getPeople("https://swapi.dev/api/people/")
			state.actions.getVehicles("https://swapi.dev/api/vehicles/")
		}, []);

		
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
