import React from 'react'

const MovieComment = () => {
  return (
    <form className="mt-2">
      <div className="form-group">
          <h5>First name</h5>
          <input
            type="text"
            className="form-control"
            placeholder="What's your first name?"
            name="fname"
          />
        </div>
        <div className="form-group">
          <h5>Last name</h5>
          <input
            type="text"
            className="form-control"
            placeholder="What's your last name?"
            name="lname"
          />
        </div>
        <div className="form-group">
          <h5>Comment</h5>
          <input
            type="text"
            className="form-control"
            placeholder="What's your comment?"
            name="comment"
          />
        </div>
        <div className="form-group">
          <h5>Rate</h5>
          <input
            type="number"
            className="form-control"
            placeholder="What's your rating? (0 - 100)"
            name="rating"
            min="0"
            max="100"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
        >
          Post your comment
        </button>
      </form>
  )
}

export default MovieComment
