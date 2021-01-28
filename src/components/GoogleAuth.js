import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '150208103266-hloce9ieoo4k8f5f489b83deab2arlrg.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }


    render() {
        return <div>Google Auth</div>;
    }
}

export default GoogleAuth;