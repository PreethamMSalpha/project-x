import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
// import AddItems from "./components/addItems/addItems.components";
// import ModalCSS from "./components/modal/modal.components";
// import AddItems from "./components/addItems/addItems.components";
// import Dashboard from "./components/dashboard/dashboard.component";
// import Homepage from "./pages/homepage.component";
// import ShopEntry from "./pages/shopEntry.component";
// import Modal from "./components/modal.components";

// import ShopEntry from "./pages/shopEntry.component";
import Pricing from "./components/shopEntry/pricing.component";
import NavSidebar from "./components/sidebar/sidebar.component";
import Homepage from "./pages/homepage.component";
import TextFields from "./components/shopEntry/textFields.component";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/dash" component={NavSidebar} />
          <Route exact path="/openshop" component={TextFields} />
          <Route exact path="/pricing" component={Pricing} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

// <Route exact path="/shopentry" component={ShopEntry} />

export default App;
