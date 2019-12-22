import React from 'react';
import studentData from '../helpers/data/studentsData';
import SharkTank from '../components/SharkTank/SharkTank';
import GraveYard from '../components/Graveyard/Graveyard';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    students: [],
    liveStudents: [],
    deadStudents: [],
  }

  componentDidMount() {
    const students = studentData.getStudents();
    this.setState({ students });
    const liveStudents = studentData.livingStudents();
    this.setState({ liveStudents });
    const deadStudents = studentData.theDeadStudents();
    this.setState({ deadStudents });
  }

  sharkAttack = () => {
    let liveStudents = studentData.livingStudents();
    const randomStudent = liveStudents[Math.floor(Math.random() * liveStudents.length)];
    const randomStudentId = randomStudent.id;
    studentData.followTheLight(randomStudentId);
    const deadStudents = studentData.theDeadStudents();
    liveStudents = studentData.livingStudents();
    this.setState({ deadStudents, liveStudents });
  }


  render() {
    return (
      <div className="App">
      <div className="d-flex flex-wrap">
        <div className="col-6">
          <h1 className="text-center">Shark Tank</h1>
          <SharkTank liveStudents={this.state.liveStudents} sharkAttack={this.sharkAttack} />
        </div>
        <div className="col-6">
          <h1 className="text-center" id="graveyardTitle">Grave Yard</h1>
          <GraveYard deadStudents={this.state.deadStudents} />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
