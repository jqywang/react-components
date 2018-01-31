// TODO
var GroceryListItem = (props) => {
  var onListItemClick = (event) => {
    console.log(this);
  };
  return (<div>
      <ul>
        <li onClick={onListItemClick} >{props.food[0]}</li>
        <li>{props.food[1]}</li>
        <li>{props.food[2]}</li>
        <li>{props.food[4]}</li>
        <li>{props.food[3]}</li>
      </ul>
    </div>)
};
var HypeGrocList = () => (
  <div>
    <h2>TJ's trip goals</h2>
    <GroceryListItem food={groceryItems}/> 
  </div>
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

ReactDOM.render(<HypeGrocList />, document.getElementById("app"));


/*

var TodoList = (props) => {

  // This function will be called when the first `<li>` below is clicked on
  // Notice that event handling functions receive an `event` object
  // We want to define it where it has access to `props`

  var onListItemClick = (event) => {
    console.log('I got clicked');
  };

  // Because we used curly braces with this arrow function
  // we have to write an explicit `return` statement
  return (
    <ul>
      <li onClick={onListItemClick}>{props.todos[0]}</li>
      <li>{props.todos[1]}</li>
      <li>{props.todos[2]}</li>
    </ul>
  );
}

var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
  </div>
);
*/