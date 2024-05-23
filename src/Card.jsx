const Card = ({ id, title, text }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-5">
      <div className="card" style={{ width: "19rem" }}>
        <img src="https://via.placeholder.com/500x325" className="img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
          <p className="card-text text-center p-3">{text}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center">
            <button className="btn btn-primary d-inline-block">Find Out More!</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;

