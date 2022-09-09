export const Toggle = ({handleChange}) => {
  return (
    <div class="button b2" id="units-toggle">
      <input type="checkbox" className="checkbox" onChange={handleChange} />
      <div className="knobs">
        <span>F°</span>
      </div>
      <div class="layer"></div>
    </div>
  );
};
