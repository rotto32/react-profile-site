import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="tab">
        <h3>
          <img src="./imgs/asteroid.png" className="page-icon" />
          Contact
        </h3>
      </div>
    );
  }
}

export default Contact;
