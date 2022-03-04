const TOGGLE = 'mode/TOGGLE' as const;

export const toggle = () =>({
  type: TOGGLE
});

type ModeAction = | ReturnType<typeof toggle>;

const initialState: string = "light";

const mode = (state: string = initialState, action: ModeAction): string => {
  switch (action.type) {
    case TOGGLE:
      if(state === "light") state = "dark";
      else state = "light";
      return state;
    default:
      return state;
  }
}

export default mode;
