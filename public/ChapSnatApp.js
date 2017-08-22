import React from 'react';
import PhotoForm from './components/SinglePhotoImportForm';

class ChapSnatApp extends React.Component {
    constructor() {
        super();
        this.state = {
            test: 'message'
        };
    }

    render() {
        return (
            <div>
                <PhotoForm />
            </div>
        );
    }
}
export default ChapSnatApp;
