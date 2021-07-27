//thunk: function that returns another function, which contains the actual logic that we want to perform when it is triggered.

export const displayAlert = (text) => () => {
	alert(`You clicked on: ${text}`);
};
