import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import AddTouristSpot from './pages/AddTouristSpot/AddTouristSpot';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import SingleTourSpot from './pages/singleTourSpot/SingleTourSpot';
import AllBookings from './pages/AllBookings/AllBookings';
import MyBooking from './pages/MyBooking/MyBooking';

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/addtouristspot">
              <AddTouristSpot></AddTouristSpot>
            </Route>
            <Route exact path="/allbookings">
              <AllBookings></AllBookings>
            </Route>
            <Route exact path="/mybooking">
              <MyBooking></MyBooking>
            </Route>
            <PrivateRoute path="/booking/:id">
              <SingleTourSpot></SingleTourSpot>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
