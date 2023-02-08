import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// import { BrowserRouter as Router } from 'react-router-dom';
// import { createRoutesFromElements, createBrowserRouter } from 'react-router-layout';
import {
  createBrowserRouter,
  createRoutesFromElements, defer, Route
} from 'react-router-dom';

import { AuthLayout } from './layouts/authLayout';
import { HomeLayout } from './layouts/homeLayout';
import { ProtectedLayout } from './layouts/protectedLayout';
import { Dashboard } from './pages/dashboard';
import { HomePage } from './pages/homePage';
import { LoginPage } from './pages/loginPage';
import { StudyDetailPage } from './pages/studyDetailPage';
import { StudyDetailLayout } from './layouts/studyDetailLayout';

const getAccessToken = () =>
  new Promise((resolve) => {
    const token = window.localStorage.getItem("access_token");
    resolve(token);
  }
    // setTimeout(() => {
    // })
  );

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AuthLayout />}
        loader={() => defer({ tokenPromise: getAccessToken() })}
      >

        <Route element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="/dashboard" element={<ProtectedLayout />} >
          <Route path="" element={<Dashboard />} />
          <Route path="/dashboard/study" element={<StudyDetailLayout />} >
            <Route path=":studyId" element={<StudyDetailPage />} />
          </Route>
          {/* <Route path="profile" element={<ProfilePage />} /> */}
          {/* <Route path="settings" element={<SettingsPage />} /> */}
        </Route>
      </Route>
    </>
  )
);

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         RSSA Admin
//       </header>
//       <Router basename="/">
//         <Routes>
//           <Route path="/" element={<LoginPage />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
