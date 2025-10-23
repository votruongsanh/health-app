import RootLayout from "@/components/common/layout/RootLayout";
import AuthProvider from "@/context/AuthContext";
import ColumnPage from "@/pages/ColumnPage";
import MyRecordPage from "@/pages/MyRecordPage";
import TopPage from "@/pages/TopPage";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" index element={<Navigate to="/column" replace />} />
            <Route path="top-page" element={<TopPage />} />
            <Route path="my-record" element={<MyRecordPage />} />
            <Route path="column" element={<ColumnPage />} />
            <Route element={<ColumnPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
