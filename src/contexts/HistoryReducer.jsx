const HistoryReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NEW_ENTRY':
      const entries = [...state];
      entries.unshift(action.payload);
      if (entries.length > 50) entries.pop();
      return entries;
    case 'CLEAR_HISTORY':
      return [];
    default:
      break;
  }
};

export default HistoryReducer;
