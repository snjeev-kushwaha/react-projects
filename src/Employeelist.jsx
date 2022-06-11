import {Table} from 'react-bootstrap';
function Employeelist(){
   return(
   <>
     <h2>Employee name</h2>
     <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>shanu</td>
      <td>kumar</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>shubham</td>
      <td>singh</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>virat</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
   </>
   )
}
export default Employeelist;