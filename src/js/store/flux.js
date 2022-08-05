const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: null,
			planets: null,
			vehicles: null,
			favorite: [],
			liked:[],
		},


		actions: {

			getPeople: async url => {
				fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				})
					.then((response) => {
						console.log(response);
						return response.json();
					})
					.then((data) => {
						setStore({ people: data });

					})
					.catch((error) => {
						console.log(error);
					});
			},
			getPlanets: async url => {
				fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				})
					.then((response) => {
						console.log(response);
						return response.json();
					})
					.then((data) => {
						setStore({ planets: data });

					})
					.catch((error) => {
						console.log(error);
					});
			},
			getVehicles: async url => {
				fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				})
					.then((response) => {
						console.log(response);
						return response.json();
					})
					.then((data) => {
						setStore({ vehicles: data });

					})
					.catch((error) => {
						console.log(error);
					});
			},

			insertFavorite: (insertF) => {
				const store = getStore()
				setStore({favorite: store.favorite.concat({name:insertF})})
			},

			deleteFavorite: (deleteF) => {
				const store=getStore()
				setStore ({favorite: store.favorite.filter(favorite=>favorite.name!==deleteF)})
			}
		},
	};
};

export default getState;
