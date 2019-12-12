import React from 'react';
import studentShape from '../../helpers/propz/studentShape';

class LiveStudent extends React.Component {
  static propTypes = {
    liveStudents: studentShape.studentShape,
  }

  // liveStudentsEvent = (e) => {
  //   const { liveStudents, student } = this.props;
  //   e.preventDefault();
  //   liveStudents(student.id);
  // }

  // dearBelovedEvent = (e) => {
  //   const { dearBeloved, student } = this.props;
  //   e.preventDefault();
  //   dearBeloved(student.id);
  // }

  render() {
    const { student } = this.props;

    return (
      <div className="card col-3">
        <div className="card-header">
          {student.firstName}, {student.lastName}
        </div>
      </div>
    );
  }
}

export default LiveStudent;
