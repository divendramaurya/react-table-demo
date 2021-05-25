import "./App.css";
import { BasicTable } from "./components/BasicTable";
import { ColumnHiding } from "./components/ColumnHiding";
import { ColumnOrder } from "./components/ColumnOrder";
import { FilteringTable } from "./components/FilteringTable";
import { PaginationTable } from "./components/PaginationTable";
import { RowSelection } from "./components/RowSelection";
import { SortingTable } from "./components/SortingTable";
import { StickyTable } from "./components/StickyTable";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import styled from "styled-components";

function App() {
  const DIV = styled.div`
    padding: 8px;
    margin: 10px;
    color: red;
    border: 2px solid gray;
    text-align: center;
    font-size: 50px;
    background-color: yellow;
  `;

  return (
    <>
      <BrowserRouter>
        <DIV>React Table Demo</DIV>
        <hr></hr>
        {"  |  "}
        <Link to="/">Basic Table</Link>
        {"  |  "}
        <Link to="/SortingTable">SortingTable</Link>
        {"  |  "}
        <Link to="/FilteringTable">FilteringTable</Link>
        {"  |  "}
        <Link to="/PaginationTable">PaginationTable</Link>
        {"  |  "}
        <Link to="/RowSelection">RowSelection</Link>
        {"  |  "}
        <Link to="/ColumnOrder">ColumnOrder</Link>
        {"  |  "}
        <Link to="/ColumnHiding">ColumnHiding</Link>
        {"  |  "}
        <Link to="/StickyTable">StickyTable</Link>
        {"  |  "}
        <hr></hr>
        <Route exact path="/" component={BasicTable}></Route>
        <Route exact path="/SortingTable" component={SortingTable}></Route>
        <Route exact path="/FilteringTable" component={FilteringTable}></Route>
        <Route
          exact
          path="/PaginationTable"
          component={PaginationTable}
        ></Route>
        <Route exact path="/RowSelection" component={RowSelection}></Route>
        <Route exact path="/ColumnOrder" component={ColumnOrder}></Route>
        <Route exact path="/ColumnHiding" component={ColumnHiding}></Route>
        <Route exact path="/StickyTable" component={StickyTable}></Route>
        {/* <BasicTable /> */}
        {/* <SortingTable /> */}
        {/* <FilteringTable /> */}
        {/* <PaginationTable /> */}
        {/* <RowSelection /> */}
        {/* <RowSelection /> */}
        {/* <ColumnOrder /> */}
        {/* <ColumnHiding /> */}
        {/* <StickyTable /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
