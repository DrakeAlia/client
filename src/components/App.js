import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';


const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<div>
					<Header />
					<Switch>
						<Route path="/" exact component={StreamList} />
						<Route path="/streams/new" exact component={StreamCreate} />
						<Route path="/streams/edit/:id" exact component={StreamEdit} />
						<Route path="/streams/delete/:id" exact component={StreamDelete} />
						<Route path="/streams/:id" exact component={StreamShow} />
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;

// =====================================================================================================================
// App Setup:
// Open three terminals
// Go to streams dir
// (streams)client - npm start
// (streams)api - npm start (after npm init)
// (streams)rtmpserver - npm start (after npm init)
// =====================================================================================================================


// =====================================================================================================================
// Coding Exercise 14: Adding Another Route

// import React from 'react';
// import { BrowserRouter, Route } from './react-router-dom';
// import { Header } from './Header';
// import { StreamList } from './StreamList';
// import { StreamDetails } from './StreamDetails';

// const App = () => {
//     return (
//         <div className="ui container">
//             <BrowserRouter>
//                 <div>
//                     <Header />
//                     <Route path="/" exact component={StreamList} />
//                 </div>
//             </BrowserRouter>
//         </div>
//     );
// };

// export default App;

// import React from 'react';
// import { Link } from './react-router-dom';

// const StreamList = () => {
//     return (
//         <div className="stream-list">
//             <h3>StreamList</h3>
//         </div>
//     );
// };

// export { StreamList };

// import React from 'react';
// import { Link } from './react-router-dom';

// const StreamDetails = () => {
//     return (
//         <div className="stream-details">
//             <h3>StreamDetails</h3>
//         </div>
//     );
// };

// export { StreamDetails };

// ====================================================================================================================
// SOLUTION:

// import React from 'react';
// import { BrowserRouter, Route } from './react-router-dom';
// import { Header } from './Header';
// import { StreamList } from './StreamList';
// import { StreamDetails } from './StreamDetails';

// const App = () => {
//     return (
//         <div className="ui container">
//             <BrowserRouter>
//                 <div>
//                     <Header />
//                     <Route path="/" exact component={StreamList} />
//                     <Route path="/streams/details" exact component={StreamDetails} />
//                 </div>
//             </BrowserRouter>
//         </div>
//     );
// };

// export default App;

// import React from 'react';
// import { Link } from './react-router-dom';

// const StreamList = () => {
//     return (
//         <div className="stream-list">
//         <Link to="/streams/details" className="item">
//            <h3>StreamList</h3>
//            </Link>
//         </div>
//     );
// };

// export { StreamList };

// import React from 'react';
// import { Link } from './react-router-dom';

// const StreamDetails = () => {
//     return (
//         <div className="stream-details">
//         <Link to="/" className="item" >
//            <h3>StreamDetails</h3>
//            </Link>
//         </div>
//     );
// };

// export { StreamDetails };
