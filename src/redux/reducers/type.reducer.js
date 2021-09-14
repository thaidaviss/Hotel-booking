import {
  createReducer
} from "@reduxjs/toolkit";
import {
  TYPE_ACTION,
  FAILURE,
  REQUEST,
  SUCCESS
} from "redux/constants";


const initialState = {
  typeList: {
    data: [],
    pagination: {
      "_page": 1,
      "_limit": 1,
      "_totalRows": 3
    },
    load: false,
    error: null,
  },
  typeDetail: {
    data: {},
    load: false,
    error: null,
  },
};

const typeReducer = createReducer(initialState, {
  // get list
  [REQUEST(TYPE_ACTION.GET_TYPE_LIST)]: (state, action) => {
    return {
      ...state,
      typeList: {
        ...state.typeList,
        load: true,
      },
    };
  },
  [SUCCESS(TYPE_ACTION.GET_TYPE_LIST)]: (state, action) => {
    const {
      data
    } = action.payload;
    return {
      ...state,
      typeList: {
        data,
        load: false,
        error: null,
      },
    }
  },
  [FAILURE(TYPE_ACTION.GET_TYPE_LIST)]: (state, action) => {
    const {
      error
    } = action.payload;
    return {
      ...state,
      typeList: {
        ...state.typeList,
        load: false,
        error,
      },
    }
  },
  // get filter list
  [REQUEST(TYPE_ACTION.GET_FILTER_TYPE_LIST)]: (state, action) => {
    return {
      ...state,
      typeList: {
        ...state.typeList,
        load: true,
      },
    };
  },
  [SUCCESS(TYPE_ACTION.GET_FILTER_TYPE_LIST)]: (state, action) => {
  
    return {
      ...state,
      typeList: {
        ...action.payload.data,
        load: false,
        error: null,
      },
    }
  },
  [FAILURE(TYPE_ACTION.GET_FILTER_TYPE_LIST)]: (state, action) => {
    const {
      error
    } = action.payload;
    return {
      ...state,
      typeList: {
        ...state.typeList,
        load: false,
        error,
      },
    }
  },
  // get detail
  [REQUEST(TYPE_ACTION.GET_TYPE_DETAIL)]: (state, action) => {
    return {
      ...state,
      typeDetail: {
        ...state.typeDetail,
        load: true,
      },
    };
  },
  [SUCCESS(TYPE_ACTION.GET_TYPE_DETAIL)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      typeDetail: {
        ...state.typeDetail,
        data,
        load: false,
        error: null,
      },
    }
  },
  [FAILURE(TYPE_ACTION.GET_TYPE_DETAIL)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      typeDetail: {
        ...state.typeDetail,
        load: false,
        error,
      },
    }
  },
  // create type list
  // [REQUEST(TYPE_ACTION.CREATE_TYPE)]: (state, action) => {
  //   return {
  //     ...state,
  //     typeList: {
  //       ...state.typeList,
  //       load: true,
  //     },
  //   }
  // },
  [SUCCESS(TYPE_ACTION.CREATE_TYPE)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      typeList: {
        ...state.typeList,
        data: [
          data,
          ...state.typeList.data,
        ],
        load: false,
      },
    }
  },
  // [FAILURE(TYPE_ACTION.CREATE_TYPE)]: (state, action) => {
  //   const { error } = action.payload;
  //   return {
  //     ...state,
  //     typeList: {
  //       ...state.typeList,
  //       load: false,
  //       error,
  //     },
  //   }
  // },
  // edit type
  // [REQUEST(TYPE_ACTION.EDIT_TYPE)]: (state, action) => {
  //   return {
  //     ...state,
  //     typeList: {
  //       ...state.typeList,
  //       load: true,
  //     },
  //   }
  // },
  [SUCCESS(TYPE_ACTION.EDIT_TYPE)]: (state, action) => {
    const {
      data
    } = action.payload;
    const newTypeList = [...state.typeList.data];
    const typeIndex = newTypeList.findIndex((type) => type.id === data.id);
    newTypeList.splice(typeIndex, 1, data);
    return {
      ...state,
      typeList: {
        ...state.typeList,
        data: newTypeList,
      },
    };
  },
  // [FAILURE(TYPE_ACTION.EDIT_TYPE)]: (state, action) => {
  //   const { error } = action.payload;
  //   return {
  //     ...state,
  //     typeList: {
  //       ...state.typeList,
  //       load: false,
  //       error,
  //     },
  //   }
  // },

  // delete type
  // [REQUEST(TYPE_ACTION.DELETE_TYPE)]: (state, action) => {
  //   return {
  //     ...state,
  //     typeList: {
  //       ...state.typeList,
  //       load: true,
  //     },
  //   }
  // },
  [SUCCESS(TYPE_ACTION.DELETE_TYPE)]: (state, action) => {
    const {
      id
    } = action.payload;
    const newTypeList = [...state.typeList.data];
    const typeIndex = newTypeList.findIndex((type) => type.id === id);
    newTypeList.splice(typeIndex, 1);
    return {
      ...state,
      typeList: {
        ...state.typeList,
        data: newTypeList,
      },
    };
  },
  // [FAILURE(TYPE_ACTION.DELETE_TYPE)]: (state, action) => {
  //   const { error } = action.payload;
  //   return {
  //     ...state,
  //     typeList: {
  //       ...state.typeList,
  //       load: false,
  //       error,
  //     },
  //   }
  // },

});

export default typeReducer;