var React = require('react');
var ReactDOM = require('react-dom');

// Add these elements inside the form element using JSX:
// <form>
//   Username: <input type="text" name="username">
//   Password: <input type="password" name="password">
//   <input type="submit">
// </form>

var element = "<form>Hello</form>";

ReactDOM.render(<form> Hello </form>, document.getElementById('root'));


			// 	Username: 
			// 		<input type="text" name="username"/> 
			// 	Password: 
			// 		<input type="password" name="password"/> 
			// 	<input type="submit"/> 
			// </form>;