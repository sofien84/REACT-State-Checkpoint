// import React, { Component } from 'react'
// class Profile extends React.Component {
//   state = {
//     Person: {
//       fullName: "Yahyaoui Sofien",
//       bio: " Geologist in Sciences-Exploration Geophysics (Water, Environment, Petroleum, Mining, Geothermal plumes, etc.) and geological sciences exploration",
//       profession: "Geologist",
//       count :0
//     },
//     show: true
//   };
   
//   handleClick = () => {
//     this.setState({
//       ...this.state.Person,
//       show: !this.state.show
//     });
//   };
  
 
//    componentDidMount() {
//     const inter = setInterval(() => {
//       this.setState(prevState => {
//         return {
//           count: prevState.count+ 1,
//         };
//       });
//     }, 100);
    
//   }


//  render() {
//    return ( <div>
//      {this.state.show && (
//           <section>
//             <h1>Full name:{this.state.Person.fullName}</h1>
//             <h1>bio:{this.state.Person.bio}</h1>
//             <h1>Profession:{this.state.Person.profession}</h1>
            
//           </section>
//         )}
//    <button onClick={this.handleClick}> ClickMe</button>
//    <h1>The component has been rendered for {this.state.count} seconds</h1>
//    </div>
//    );
//      }
// }
// export default Profile;

