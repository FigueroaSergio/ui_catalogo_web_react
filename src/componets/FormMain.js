function FormMain(props) {
  return (
    <>
      <div className="col-8">
        <div className="card">
          <div className="card-body">
            <form>
              {props.children}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export { FormMain };
