import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import studentsData from '../helpers/data/studentsData';
import SharkTank from '../components/SharkTank/SharkTank';

class App extends React.Component {
  state = {
    students: [],
    liveStudents: [],
    dearBeloved: [],
  }

  componentDidMount() {
    const students = studentsData.getStudents();
    this.setState({ students });
    const liveStudents = studentsData.livingStudents();
    this.setState({ liveStudents });
    const dearBeloved = studentsData.dearlyBeloved();
    this.setState({ dearBeloved });
  }

  // liveStudents = (studentId) => {
  //   studentsData.livingStudents(studentId);
  //   const students = studentsData.getStudents();
  //   this.setState({ students });
  // }

  // dearBeloved = (studentId) => {
  //   studentsData.dearlyBeloved(studentId);
  //   const students = studentsData.getStudents();
  //   this.setState({ students });
  // }

  render() {
    return (
    <div className="App">
      <h1>GraveYard</h1>
      <SharkTank liveStudents={this.state.liveStudents} />
    </div>
    );
  }
}

export default App;
