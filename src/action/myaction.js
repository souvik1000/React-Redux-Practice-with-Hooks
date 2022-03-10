export const anothername = () => {
  return async (dispatch) => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then((res) => res.json());
    // const res2 = await data.json();
    dispatch({ type: "CHANGE_NAME", payload: data[0].name });
  };
};

export const addwish = () => {
  return {
    type: "ADD_WISH",
    payload: "code"
  };
};
