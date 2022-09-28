import Card from "react-bootstrap/Card";
const convert = (kelvin) => {
  return kelvin - 273;
};

function Mini({ data }) {
  if (data == null) return;
  const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  return (
    <div className="align Mini">
      <Card>
        <Card.Img variant="top" src={`./img/${data.weather[0].icon}.svg`} />
        <Card.Body>
          <Card.Title>{forecastDays[data.idx]}</Card.Title>
          <Card.Text>
            <div className="detail">
              <div className="Melement">
                Max-Temp: {Math.round(convert(data.main.temp_max))}&deg;C
              </div>
              <div className="Melement">
                Min-Temp: {Math.round(convert(data.main.temp_min))}&deg;C
              </div>
              <div className="Melement">
                Humidity:{Math.round(data.main.humidity)}%
              </div>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </div>
  );
}

export default Mini;
