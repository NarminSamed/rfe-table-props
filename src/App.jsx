import { useState } from 'react';
import AddStudent from '../src/components/AddStudents';
import StudentsTable from '../src/components/StudentsTable';

const App = () => {
  const [students, setStudents] = useState([]);

  return (
    <div>
      <AddStudent students={students} setStudents={setStudents} />
      <StudentsTable students={students} setStudents={setStudents} />
    </div>
  );
};

export default App;
