var React = require('react');

var SSEMeeting = React.createClass({

  render() {
    return (
      <section className="container">
        <div className="gtv-event-header">
            <h3>SSE Meetings</h3>
        </div>
        <div id="meeting-img" className="info-content-with-footer" />
        <div className="info-footer">
          <h3>Fridays at 3:00 PM</h3>
        </div>
      </section>
    );
  }
});

module.exports = SSEMeeting;