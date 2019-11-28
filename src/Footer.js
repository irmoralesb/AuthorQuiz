import React from 'react';

class Footer extends React.Component{

    render(props){
        return(
            <div id="footer" className="row">
                <div className="col-12">
                    <p className="text-muted credit">All images are from <a href="http://commons.wikimedia.org/wiki/Main">Wikimedia Commons</a> and are in the public domain</p>
                </div>
            </div>
        );
    }
}
export default Footer;