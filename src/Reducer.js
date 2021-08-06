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
    case 'SET_URL':
      return {
        ...state,
        formData: {
          ...state.formData,
          url: action.payload,
        },
      };
    case 'SET_QPARAMS':
      return {
        ...state,
        formData: {
          ...state.formData,
          params: action.payload,
        },
      };
    case 'SET_FORM_SUBMIT':
      return {
        ...state,
        formData: action.payload,
        formSubmitted: true,
      };
    case 'CANCEL_FORM_SUBMIT':
      return {
        ...state,
        formData: null,
        formSubmitted: false,
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
