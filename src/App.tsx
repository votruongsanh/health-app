import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import TopPage from "./pages/TopPage";
import MyRecordPage from "./pages/MyRecordPage";
import ColumnPage from "./pages/ColumnPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<TopPage />} />
          <Route path="my-record" element={<MyRecordPage />} />
          <Route path="column" element={<ColumnPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
