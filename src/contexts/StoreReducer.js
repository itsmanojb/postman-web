const StoreReducer = (state, action) => {
  switch (action.type) {
    case 'SET_OVERVIEW':
      return {
        ...state,
        overviewTab: action.payload,
      };
    case 'CLOSE_OVERVIEW':
      return {
        ...state,
        overviewTab: '',
      };
    case 'SET_SIDEDRAWER':
      return {
        ...state,
        sideDrawerOpened: action.payload,
      };
    case 'SET_SIDEDRAWER_TAB':
      return {
        ...state,
        sideDrawerTab: action.payload,
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
    case 'SET_AUTH':
      return {
        ...state,
        auth: action.payload,
        authHeader: '',
      };
    case 'SET_AUTH_LOCATION':
      return {
        ...state,
        authLocation: action.payload,
      };
    case 'SET_AUTH_HEADER':
      return {
        ...state,
        authHeader: action.payload,
      };
    case 'SET_REQUEST_HEADERS':
      return {
        ...state,
        requestHeaders: action.payload,
      };
    case 'SET_PAYLOAD':
      return {
        ...state,
        formData: {
          ...state.formData,
          payload: action.payload,
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
        formData: {
          method: '',
          url: '',
          params: '',
          payload: null,
        },
        formSubmitted: false,
      };
    case 'SET_RESPONSE_UI':
      return {
        ...state,
        responseUI: action.payload,
      };
    case 'SET_API_RESPONSE':
      return {
        ...state,
        apiResponse: action.payload,
        apiError: null,
        formSubmitted: false,
      };
    case 'SET_API_ERROR':
      return {
        ...state,
        apiResponse: {},
        apiError: action.payload,
        formSubmitted: false,
      };
    case 'RESET_FORM':
      return {
        ...state,
        formData: {
          method: '',
          url: '',
          params: '',
          payload: null,
        },
        auth: '',
        authHeader: '',
        authLocation: 'header',
        requestHeaders: [],
        formSubmitted: false,
        responseUI: false,
        apiResponse: {},
      };
    default:
      break;
  }
};

export default StoreReducer;
