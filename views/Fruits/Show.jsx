const React = require("react");
class Show extends React.Component {
  render() {
    const fruit = this.props.fruit
    return (
      <div>
        <h1> Fruit Page </h1>
        {/* The {fruit.name} is {fruit.color}. */}
        The <strong>{fruit.name.toUpperCase()}</strong> is <strong>{fruit.color}</strong>.<br/>
        {fruit.readyToEat
          ? " Its is ready to eat."
          : " It is not ready to eat... Cant touch this"}
      </div>
    );
  }
}
module.exports = Show;
