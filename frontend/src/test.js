import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch, Routes, BrowserRouter } from "react-router-dom";
import ClientPage from './Test/ClientPage';
import AdminPage from './Test/AdminPage';
import AuthForm from './testform/AuthForm';

const Test = () => {
    const role = localStorage.getItem("role");

    useEffect(() => {
        if (!role) {
            // Nếu không có role (người dùng chưa đăng nhập), chuyển hướng về login
            window.location.href = "/login";
        }
    }, [role]);

    return (
        <BrowserRouter basename="/app">
            <Routes>
                <Route path="/" component={AuthForm} />
                <Route path="/client" render={() => (role === "client" ? <ClientPage /> : <Redirect to="/login" />)} />
                <Route path="/admin" render={() => (role === "admin" ? <AdminPage /> : <Redirect to="/login" />)} />
                <Redirect from="/" to={role === "admin" ? "/admin" : "/client"} />
            </Routes>
        </BrowserRouter>
    );
};

export default Test;
