import {Table} from 'react-bootstrap';
function Employeesalary(){
  return(
      <>
        <h2>Account department</h2>
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>shanu</td>
      <td>kumar</td>
      <td>40000</td>
    </tr>
    <tr>
      <td>2</td>
      <td>shubham</td>
      <td>singh</td>
      <td>65000</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>virat</td>
      <td>35000</td>
    </tr>
  </tbody>
</Table>
      </>
  )

}
export default Employeesalary;