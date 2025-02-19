import React from 'react';
import ReactDOM from 'react-dom';


const Modal = props => {
    return ReactDOM.createPortal(
        <div 
        onClick={props.onDismiss} 
        className="ui dimmer modals visible active"
        >
            <div
             onClick={(e) => e.stopPropagation()} 
             className="ui standard modal visible active"
            >
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;

// ===================================================================================================================
// Coding Exercise 15: Closing the Modal

// import React from 'react';
// import ReactDOM from 'react-dom';

// export const Modal = (props) => {
//     return ReactDOM.createPortal(
//         <div onClick={props.onDismiss} className="ui dimmer modals visible active">
//             <div
//                 onClick={e => e.stopPropagation()}
//                 className="ui standard modal visible active"
//             >
//                 <i className="close icon"></i>
//                 <div className="header">{props.title}</div>
//                 <div className="content">{props.content}</div>
//                 <div className="actions">{props.actions}</div>
//             </div>
//         </div>,
//         document.querySelector('section')
//     );
// }

// ===================================================================================================================
// SOLUTION:

// import React from 'react';
// import ReactDOM from 'react-dom';

// export const Modal = (props) => {
//     return ReactDOM.createPortal(
//         <div onClick={props.onDismiss} className="ui dimmer modals visible active">
//             <div
//                 onClick={e => e.stopPropagation()}
//                 className="ui standard modal visible active"
//             >
//                 <i onClick={props.onDismiss} className="close icon"></i>
//                 <div className="header">{props.title}</div>
//                 <div className="content">{props.content}</div>
//                 <div className="actions">{props.actions}</div>
//             </div>
//         </div>,
//         document.querySelector('section')
//     );
// }