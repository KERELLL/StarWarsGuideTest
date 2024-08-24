interface TStrore {
  theme: "light" | "dark";
}

type TAction = {
  type: "SET_THEME";
  payload: "light" | "dark";
};
