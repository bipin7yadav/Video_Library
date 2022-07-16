import "./App.css";
import { Header, Login, SignUP ,Logout} from "./components/index"
import { Routes, Route } from "react-router-dom"
import { Home, MainPage, ScreenPlay, History, NotFound, PlayList, LikedVideos, WatchLater, SinglePlayList } from "./pages/index"
import RequireAuth from "./Authentication/requireAuth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  
  return (
    <div className="App">
      <ToastContainer className="toaster" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Video" element={<MainPage />} />
        <Route path="/screenPlay" element={
          <RequireAuth>
            <ScreenPlay />
          </RequireAuth>
        } />
        <Route path="/history" element={
          <RequireAuth>
            <History />
          </RequireAuth>
        } />
        <Route path="/watchLater" element={
          <RequireAuth>
            <WatchLater />
          </RequireAuth>
        } />
        <Route path="/likedVideos" element={
          <RequireAuth>
            <LikedVideos />
          </RequireAuth>
        } />
        <Route path="/playList" element={
          <RequireAuth>
            <PlayList />
          </RequireAuth>
        } />
        <Route path="*" element={<NotFound />} />
        <Route path="/video/:videoId" element={
          <RequireAuth>
            <ScreenPlay />
          </RequireAuth>
        } />
        <Route path="/playlist/:playlistId" element={
          <RequireAuth>
            <SinglePlayList />
          </RequireAuth>
        } />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUP />} />
        <Route path="logout" element={ <Logout/> }/> 

      </Routes>

    </div>
  );
}

export default App;
