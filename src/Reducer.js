const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SIDEDRAWER':
      return {
        ...state,
        sideDrawerOpened: action.payload,
      };
    case 'SET_INFOPANEL':
      return {
        ...state,
        infoPanelOpened: action.payload,
      };
    case 'SET_SPLIT_VIEW':
      return {
        ...state,
        splitView: action.payload,
      };
    case 'SET_RESPONSE_PANEL':
      return {
        ...state,
        responsePanelMinimized: action.payload,
      };
    case 'SET_FORM_SUBMIT':
      return {
        ...state,
        formSubmitted: action.payload,
      };
    case 'SHOW_RESPONSE_UI':
      return {
        ...state,
        responseUI: true,
      };
    case 'SET_API_RESPONSE':
      return {
        ...state,
        apiResponse: action.payload,
        formSubmitted: false,
      };
    default:
      break;
  }
};

export default Reducer;
