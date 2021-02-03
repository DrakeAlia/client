// Sample Code!!!
// So we are replacing a record inside our array
// Array-based approach:
// const streamReducer = (state=[], action) => {
//     switch (action.type) {
//         case EDIT_STREAM:
//             return state.map(stream => {
//                 if (stream.id === action.payload.id) {
//                     return action.payload;
//                 } else {
//                     return stream;
//                 }
//             });
//             default:
//                 return state;
//     }
// };

// Object-based approach:
// const streamReducer = (state={}, action) => {
//     switch (action.type) {
//         case EDIT_STREAM:
//             // const newState = { ...state };
//             // newState[action.payload.id] = action.payload;
//             // return newState;

//             // Shorthand Way:

//                 return { ...state, [action.payload.id]: action.payload };
//             default:
//                 return state;
//     }
// };