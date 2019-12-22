import React from 'react';
import studentShape from '../../helpers/propz/studentShape';

class LiveStudent extends React.Component {
  static propTypes = {
    liveStudents: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;
    return (
      <React.Fragment>
      <div className="cardFish">
      <div className="card-body">
          <h5 className="card-title">{student.firstName} {student.lastName}</h5>
      </div>
      </div>
      </React.Fragment>
    );
  }
}

export default LiveStudent;
