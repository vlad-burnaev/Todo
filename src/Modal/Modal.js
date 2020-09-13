import React from "react";
import "./Modal.css";

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };
  render() {
    return (
      <React.Fragment>
        <button className="btn" onClick={() => this.setState({ isOpen: true })}>
          Open modal
        </button>

        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h3>Modal window</h3>
              <p>This modal window is awesome</p>

              <button
                className="btn"
                onClick={() => this.setState({ isOpen: false })}
              >
                Close modal
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
