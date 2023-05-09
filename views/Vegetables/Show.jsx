const React = require("react");
class Show extends React.Component {
  render() {
    const vegetable = this.props.vegetable
    return (
      <div>
        <h1> Vegetables Page </h1>
        The <strong>{vegetable.name.toUpperCase()}</strong> is <strong>{vegetable.color}</strong>.<br/>
        {vegetable.readyToEat
          ? " Its is ready to eat"
          : " It is not ready to eat... Cant touch this"}
      </div>
    );
  }
}
module.exports = Show;
