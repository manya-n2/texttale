import { useState } from "react";
import "./App.css";
/* test */
function App() {
  const [storyIdea, setStoryIdea] = useState("");
  const [genre, setGenre] = useState("fantasy");
  const [tone, setTone] = useState("lighthearted");
  const [audience, setAudience] = useState("kids");
  const [story, setStory] = useState([]);

  const generateStory = () => {
    if (!storyIdea.trim()) {
      alert("Please enter a story idea first!");
      return;
    }

    // Demo scenes (replace later with AI backend)
    const demoStory = [
      {
        text: `Once upon a time, ${storyIdea} in a magical land full of wonders.`,
        image: "https://placehold.co/350x350/6b21a8/FFF?text=Scene+1"
      },
      {
        text: "A mysterious event changed everything, leading to an unexpected adventure.",
        image: "https://placehold.co/350x350/4f46e5/FFF?text=Scene+2"
      },
      {
        text: "After many challenges, our hero found courage and hope.",
        image: "https://placehold.co/350x350/9333ea/FFF?text=Scene+3"
      }
    ];

    setStory(demoStory);
  };

  return (
    <div className="App">
      <header>
  <div className="navbar">
    <div className="logo">TextTale</div>
    <nav className="nav-links">
      <a href="#home">Home</a>
      <a href="#about">About Us</a>
      <a href="#story">Stories</a>
    </nav>
    <div className="account">
      <button>Account</button>
    </div>
  </div>

  <div className="header-content">
    <h1>TextTale</h1>
    <p>Create illustrated stories from your ideas ✨</p>
  </div>
</header>


      {/* Input Card */}
      <div className="input-card">
        <textarea
          rows="4"
          placeholder="Enter your story idea..."
          value={storyIdea}
          onChange={(e) => setStoryIdea(e.target.value)}
        />

        <div className="options">
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="fantasy">Fantasy</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="mystery">Mystery</option>
            <option value="comedy">Comedy</option>
          </select>

          <select value={tone} onChange={(e) => setTone(e.target.value)}>
            <option value="lighthearted">Lighthearted</option>
            <option value="epic">Epic</option>
            <option value="dark">Dark</option>
          </select>

          <select value={audience} onChange={(e) => setAudience(e.target.value)}>
            <option value="kids">Kids</option>
            <option value="teens">Teens</option>
            <option value="adults">Adults</option>
          </select>
        </div>

        <button onClick={generateStory}>Generate Story</button>
      </div>

      {/* Story Output */}
      <div className="story-container">
        {story.map((scene, index) => (
          <div key={index} className="scene">
            <div className="scene-text">{scene.text}</div>
            <div className="scene-image">
              <img src={scene.image} alt={`Scene ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
