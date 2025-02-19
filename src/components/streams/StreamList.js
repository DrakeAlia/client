import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
	componentDidMount() {
		this.props.fetchStreams();
	}

	renderAdmin(stream) {
		if (stream.userId === this.props.currentUserId) {
			return (
				<div className="right floated content">
					<Link to={`/streams/edit/${stream.id}`} className="ui button primary">
						Edit
						</Link>
					<Link to={`/streams/delete/${stream.id}`} 
					className="ui button negative">
						Delete
					</Link>
				</div>
			);
		}
	}

	renderList() {
		return this.props.streams.map((stream) => {
			return (
				<div className="item" key={stream.id}>
					{this.renderAdmin(stream)}
					<i className="large middle aligned icon camera" />
					<div className="content">
						<Link to={`/streams/${stream.id}`} className="header" >
						{stream.title}
						</Link>
						<div className="description">{stream.description}</div>
					</div>
				</div>
			);
		});
    }
    
    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui button primary">
                    Create Stream
                    </Link>
                </div>
            );
        }
    }

	render() {
		return (
			<div>
				<h2>Streams</h2>
				<div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
	};
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);



// ========================================================================================================================================================
// Coding Exercise 16: Filtering the Stream List:
// import React from 'react';

// export class StreamList extends React.Component {
//   componentDidMount() {
//     this.props.fetchStreams();
//   }

//   renderAdmin(stream) {
//     if (stream.userId === this.props.currentUserId) {
//       return (
//         <div className="right floated content">
//           <a to={`/streams/edit/${stream.id}`} className="ui button primary">
//             Edit
//           </a>
//           <a
//             to={`/streams/delete/${stream.id}`}
//             className="ui button negative"
//           >
//             Delete
//           </a>
//         </div>
//       );
//     }
//   }

//   renderList() {
//     return this.props.streams.map(stream => {
//       return (
//         <div className="item" key={stream.id}>
//           {this.renderAdmin(stream)}
//           <i className="large middle aligned icon camera" />
//           <div className="content">
//             <a to={`/streams/${stream.id}`} className="header">
//               {stream.title}
//             </a>
//             <div className="description">{stream.description}</div>
//           </div>
//         </div>
//       );
//     });
//   }

//   renderCreate() {
//     if (this.props.isSignedIn) {
//       return (
//         <div style={{ textAlign: 'right' }}>
//           <a to="/streams/new" className="ui button primary">
//             Create Stream
//           </a>
//         </div>
//       );
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h2>Streams</h2>
//         <div className="ui celled list">{this.renderList()}</div>
//         {this.renderCreate()}
//       </div>
//     );
//   }
// }
// ========================================================================================================================================================
// SOLUTION:

// import React from 'react';

// export class StreamList extends React.Component {
//   componentDidMount() {
//     this.props.fetchStreams();
//   }

//   renderAdmin(stream) {
//     if (stream.userId === this.props.currentUserId) {
//       return (
//         <div className="right floated content">
//           <a to={`/streams/edit/${stream.id}`} className="ui button primary">
//             Edit
//           </a>
//           <a
//             to={`/streams/delete/${stream.id}`}
//             className="ui button negative"
//           >
//             Delete
//           </a>
//         </div>
//       );
//     }
//   }

//   renderList() {
//     return this.props.streams.map(stream => {
	// if (this.props.currentUserId !== stream.userId) { <<<<<	if those are not the same, then we return null/early 
		// return null; <<<<<	
	// } <<<<<<<
//       return (
//         <div className="item" key={stream.id}>
//           {this.renderAdmin(stream)}
//           <i className="large middle aligned icon camera" />
//           <div className="content">
//             <a to={`/streams/${stream.id}`} className="header">   
//               {stream.title}
//             </a>
//             <div className="description">{stream.description}</div>
//           </div>
//         </div>
//       );
//     });
//   }

//   renderCreate() {
//     if (this.props.isSignedIn) {
//       return (
//         <div style={{ textAlign: 'right' }}>
//           <a to="/streams/new" className="ui button primary">
//             Create Stream
//           </a>
//         </div>
//       );
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h2>Streams</h2>
//         <div className="ui celled list">{this.renderList()}</div>
//         {this.renderCreate()}
//       </div>
//     );
//   }
// }
