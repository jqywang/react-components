// TODO
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  onListItemClick (event){
    console.log(this);
  }
  render(){
    return (
      <li>{this.props.food}</li>
    )
  }
};
var HypeGrocList = (props) => (
  <ul>
    <h2>TJ's trip goals</h2>
    {props.food.map(food => <GroceryListItem food = {food}/>)} 
  </ul>
);
var groceryItems = ['Peanut Butter', 'Jelly', 'Bread', 'Alcohol', 'Bananas'];



// // var PeanutButter = () => (
//   <li> Peanut Butter </li>
// );

// var Bread = () => (
//   <li> Bread </li>
// );

// var Jelly = () => (
//   <li> Jelly </li>
// );

ReactDOM.render(<HypeGrocList food={groceryItems}/>, document.getElementById("app"));


/*

// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
class TodoListItem extends React.Component {

  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
  }

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {

    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    return (
      <li>{this.props.todo}</li>
    );

  }

}

// Update our `TodoList` to use the new `TodoListItem` component
// This can still be a stateless function component!
var TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <TodoListItem todo={todo} />
    )}
  </ul>
);
*/