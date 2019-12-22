import React from 'react';
import studentShape from '../../helpers/propz/studentShape';

class Gravestone extends React.Component {
  static propTypes = {
    DeadStudents: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;
    return (
      <React.Fragment>
      <div className="cardDeadFish">
      <div className="card-body">
          <h5 className="card-title">{student.firstName} {student.lastName}</h5>
      </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Gravestone;
