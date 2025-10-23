import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RootLayout from "./components/common/layout/RootLayout";
import ColumnPage from "./pages/ColumnPage";
import MyRecordPage from "./pages/MyRecordPage";
import TopPage from "./pages/TopPage";

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
