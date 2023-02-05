import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/dashboardpageComp/pagesComp/home/Home";
import List from "../components/dashboardpageComp/pagesComp/list/List";
import New from "../components/dashboardpageComp/pagesComp/new/New";
import Single from "../components/dashboardpageComp/pagesComp/single/Single";
import BlankLayout from "../layouts/BlankLayout";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import MainLayout from "../layouts/MainLayout";
import AccountPage from "../pages/AccountPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NewEvents from "../pages/Newfeed/Events/Events";
import NewfeedHome from "../pages/Newfeed/Home/Home";
import NewMusic from "../pages/Newfeed/Music/Music";
import NewPictures from "../pages/Newfeed/Pictures/Pictures";
import Watch from "../pages/Newfeed/Watch/Watch";
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import UserProfilePage from "../pages/UserProfilePage";
import AuthRequire from "./AuthRequire";
import { productInputs, userInputs } from "../formSource";

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRequire>
            <MainLayout />
          </AuthRequire>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="user/:userID" element={<UserProfilePage />} />
      </Route>

      <Route path="/newfeed" element={<DefaultLayout />}>
        <Route index element={<NewfeedHome />} />
        <Route path="watch" element={<Watch />} />
        <Route path="events" element={<NewEvents />} />
        <Route path="pictures" element={<NewPictures />} />
        <Route path="profile" element={<NewfeedHome />} />
        <Route path="music" element={<NewMusic />} />
      </Route>
      <Route path="/dashboard">
        <Route index element={<Home />} />
        <Route path="users">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} />
          <Route
            path="new"
            element={<New inputs={userInputs} title="Add New User" />}
          />
        </Route>
        <Route path="products">
          <Route index element={<List />} />
          <Route path=":productId" element={<Single />} />
          <Route
            path="new"
            element={<New inputs={productInputs} title="Add New Product" />}
          />
        </Route>
      </Route>

      <Route element={<BlankLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
