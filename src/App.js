import { Routes, Route, useLocation } from "react-router-dom";
import Detail from "./pages/detail/Detail";
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import NotFound from "./pages/notFound/NotFound";
import Preview from "./pages/preview/Preview";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="preview" element={<Preview />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
