import React from 'react';

;

class S3 extends React.Component {
    componentDidUpdate() {
        console.log("S3  得到更新，s2的")
    }
    render() {
        return (
            <div>
                这是S3
            </div>
        );
    }
}

export default S3;



