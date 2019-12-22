import React from 'react';
import PropTypes from 'prop-types';
import studentData from '../../helpers/data/studentsData';
import studentShape from '../../helpers/propz/studentShape';
import LiveStudent from '../LiveStudent/LiveStudent';

class SharkTank extends React.Component {
  static propTypes = {
    liveStudents: PropTypes.arrayOf(studentShape.studentShape),
    sharkAttack: PropTypes.func,
  }

  sharkAttackEvent = (e) => {
    const students = studentData.livingStudents();
    if (students.length > 0) {
      const { sharkAttack } = this.props;
      e.preventDefault();
      sharkAttack();
    }
  }

  render() {
    const livingStudents = this.props.liveStudents;
    const studentCard = livingStudents.map((student) => <LiveStudent key={student.id} student={student} />);
    return (
      <div className="text-Center">
        <button className="btn btn-outline-danger" onClick={this.sharkAttackEvent}>Shark Attack!</button>
      <div className="d-flex flex-wrap justify-content-between">
      {studentCard}
      </div>
      </div>
    );
  }
}

export default SharkTank;
