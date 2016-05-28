export default function ({ dispatch, getState }) {
  return next => action => {
    const console = window.console;
    const prevState = getState();
    const returnValue = next(action);
    const nextState = getState();
    const actionType = String(action.type);
    const message = `action ${actionType}`;

    // console.log(`%c prev state`, `color: #9e9e9e`, prevState);
    console.log(`%c action`, `color: #03a9f4`, action);
    // console.log(`%c next state`, `color: #4caf50`, nextState);

    return returnValue;
  };
};
