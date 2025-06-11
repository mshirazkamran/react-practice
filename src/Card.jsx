import "./css/Card.css";

function Card({
  name = "shiraz",
  appointment = "Doctor",
  link = "https://translatio.netlify.app",
  btnText = "default"
}) {
  return (
    <div className="card">
      <h1 className="card-name">Welcome {name}</h1>
      <p className="card-text">We are pleased to have you here {appointment}</p>
      <button className="card-btn">
        <a href={link} target="_blank">{btnText}</a>
      </button>
    </div>
  );
}

export default Card;
