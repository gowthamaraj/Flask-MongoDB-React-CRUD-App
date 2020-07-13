import React, { Component } from 'react'

export default class Edit extends Component {
    render() {
        return (
            <div>
            <nav class="navbar navbar-light bg-dark text-white">
                 <a class="navbar-brand text-white" href="#!">ADMIN Dashboard</a>
             </nav>

             <div class="container my-4 col-md-6">
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
                <button type="submit" class="btn btn-primary mb-2">Update</button>
                </div>
          </form>

             </div>
                
            </div>
        )
    }
}
