import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LearnScreen from './screens/LearnScreen';
import { Link } from 'react-router-dom';
import EnrollScreen from './screens/EnrollScreen';
import StudentScreen from './screens/StudentScreen';
import QuestionsScreen from './screens/QuestionsScreen';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="site-container d-flex flex-column">
        <header>
          <Navbar
            expand="md"
            bg="dark"
            variant="dark"
            className="py-3"
            fixed="top"
          >
            <Container>
              <LinkContainer
                onClick={() => {
                  document.getElementById('close-button').click();
                }}
                to="/"
              >
                <Navbar.Brand>FullStack Courses</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Link
                    onClick={() => {
                      document.getElementById('close-button').click();
                    }}
                    className="nav-link"
                    to="/learn"
                  >
                    What You'll Learn
                  </Link>
                  <Link
                    onClick={() => {
                      document.getElementById('close-button').click();
                    }}
                    className="nav-link"
                    to="/questions"
                  >
                    Questions
                  </Link>
                  <Link
                    onClick={() => {
                      document.getElementById('close-button').click();
                    }}
                    className="nav-link"
                    to="/enroll"
                  >
                    Sign Up
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main className="mt-5">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/learn" element={<LearnScreen />} />
            <Route path="/enroll" element={<EnrollScreen />} />
            <Route path="/students" element={<StudentScreen />} />
            <Route path="/questions" element={<QuestionsScreen />} />
          </Routes>
        </main>
        <footer className="p-3 bg-dark text-white text-center">
          <Container>
            <p className="lead m-0">Copyright @ 2023 Fullstack Courses</p>
          </Container>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
