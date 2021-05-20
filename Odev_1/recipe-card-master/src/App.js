import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/sarma.jpg"; // Tell webpack this JS file uses this image

function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeItem = {
    title: "Yaprak Sarma",
    date: "20 Mayıs 2021, Perşembe",
    image: food,
    description:
    "Sarma, Yaprak sarması ya da Yaprak dolması, bulgur ya da pirinç başta olmak üzere çeşitli iç malzemelerin, genellikle beyaz lahana, kara lahana, dut yaprağı, kiraz yaprağı veya asma yaprağıyla sarılmasıyla yapılan bir yiyecek.",
  };
  
  const likeCount = 193;
  const isLiked = false;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          /* prop ismi = { değişken } */
          author = {recipeAuthor}
          title = {recipeItem.title}
          date = {recipeItem.date}
          image = {recipeItem.image}
          description = {recipeItem.description}
          likeCount = {likeCount}
          isLiked = {isLiked}
        />
      </header>
    </div>
  );
}

export default App;
