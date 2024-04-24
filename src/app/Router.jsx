import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Read from "../pages/Read/Read";
import Create from "../pages/Create/Create";
import Delete from "../pages/Delete/Delete";

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;
