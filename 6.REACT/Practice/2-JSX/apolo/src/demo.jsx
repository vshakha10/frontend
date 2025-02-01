export  function Bio() {
    return (
      <>
      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br/><br/>
        <b>And <i>pictures</i></b> of scientists!
      </p>
    </>
    );
  }


const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  
  export  function TodoList() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }

  const per  = {
    name: 'Gregorio Y. Zara',
    imageUrl: "https://i.imgur.com/7vQD0fPs.jpg",
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };

  export  function H1() {
    return (
      <div style={per.theme}>
        <h1>{per.name}'s Todos</h1>
        <img
          className="avatar"
          src={per.imageUrl}
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }
  





const baseUrl = 'https://i.imgur.com/';
const Todo = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export  function Card() {
  return (
    <div style={Todo.theme}>
      <h1>{Todo.name}'s Todos</h1>
      <img
        className="avatar"
        src={`${baseUrl}${Todo.imageId}${Todo.imageSize}.jpg`}
        alt={Todo.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}


export default Bio

  