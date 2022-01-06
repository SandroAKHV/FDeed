import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes ,Link} from "react-router-dom";
import FeedList from "./components/FeedList";
import FeedStats from "./components/FeedStats";
import FeedForm from "./components/FeedForm";
import About from "./components/pages/About";
import { FeedbackProvider } from "./context/FeedContext";
function App() {
    const text = "ae yleo";
    return (
        <FeedbackProvider>

            <Router>
                <Header text={text} />
                <div className="container">
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <>
                                    <FeedForm  />
                                    <FeedStats/>
                                    <FeedList   />
                                </>
                            }
                        ></Route>
                        <Route path="/about" element={<About />} />
                    </Routes>
                    <Link className="about-link" to="/about">About</Link>
                </div>
            </Router>
        </FeedbackProvider>
    );
}

export default App;
