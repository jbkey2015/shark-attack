import React from 'react';
import PropTypes from 'prop-types';

import LiveStudent from '../LiveStudent/LiveStudent';
import studentShape from '../../helpers/propz/studentShape';


class SharkTank extends React.Component {
  static propTypes = {
    liveStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const livingStudents = this.props.liveStudents;
    // const { liveStudents } = this.props;
    // const { dearBeloved } = this.props;

    const studentCards = livingStudents.map((student) => <LiveStudent key={student.id} student={student} />);

    return (
      <div className="SharkTank row">
        {studentCards}
      </div>
    );
  }
}

export default SharkTank;
