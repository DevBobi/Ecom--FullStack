import React from "react";
import Footer from "../../screens/Footer/Footer";
import Header from "../../screens/Header/Header";


const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;