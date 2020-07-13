import React from 'react'


function App() {
  return (
    <div>
     
    <nav class="navbar navbar-light bg-dark text-white">
       <a class="navbar-brand text-white" href="#!">ADMIN Dashboard</a>
    </nav>

    <div class="container">
      <div class="row">
        <div class="col-md-4 my-3">
 
          <form>
          <div class="form-group">
         <input type="text" class="form-control" id="username" name="username" placeholder="Username" />
           </div>
          <div class="form-group">
          <input type="text" class="form-control" id="email" name="email" placeholder="Email" />
          </div>
          <div class="form-group">
          <input type="text" class="form-control" id="password" name="password" placeholder="Email" />
          </div>
          <div class="form-group">
          <button type="submit" class="btn btn-primary mb-2">Submit</button>
          </div>
          </form>
        </div>

        <div class="col-md-8 my-3">
        <table class="table table-hover table-responsive">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>gowthamaraj</td>
            <td>gowthamaraj360@gmail.com</td>
            <td>*************</td>
            <td><i class="fa fa-pencil-square" aria-hidden="true"></i></td>
            <td><i class="fa fa-trash" aria-hidden="true"></i></td>
          </tr>
        </tbody>
      </table>

        </div>
      </div>
    </div>

    </div>
  );
}

export default App;
