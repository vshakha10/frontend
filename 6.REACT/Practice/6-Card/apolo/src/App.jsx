import ListName from "./ListName";
import Card from "./Card";
import "./App.css";

function App() {
  const profile = {
    subject: "javascript",
    time: "8 to 10",
  };

  // let array = ["click", "submit", "play", "readmore"];

  const titles = [
    { title: "This Is Card1",
      btn:'click',
      discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, perferendis.',
      img : 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
     },
    { title: "This is Card2",
      btn:'submit',
      discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa amet voluptatum animi soluta iure aperiam!',
      img : 'https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=600'
     },
    { title: "This is Card3",
      btn:'play',
      discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, perferendis veniam.',
      img : 'https://images.pexels.com/photos/935743/pexels-photo-935743.jpeg?auto=compress&cs=tinysrgb&w=600'
     },
    { title: "This is Card4",
      btn:'readmore',
      discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad omnis atque maxime dolorum nemo reiciendis vero quo!',
      img : 'https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=600'
     },
  ];

  return (
    <>
      <h1>This is App Component</h1>
      <ListName user={profile} />
      <div className="flex flex-wrap">
        <Card titles={titles} />
      </div>
    </>
  );
}

export default App;
