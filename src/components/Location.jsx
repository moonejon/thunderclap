import locationIcon from "../assets/location-icon.png";

export const Location = () => {

    const date = new Date();
    const formattedDate = date.toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  return (
    <div id="location">
      <div id="location-name">
        <img src={locationIcon} alt="location icon" id="location-icon" />
        Dallas, TX
      </div>
      <div id="location-time">{formattedDate}</div>
    </div>
  );
};
