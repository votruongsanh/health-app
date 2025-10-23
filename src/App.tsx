import RootLayout from "@/components/common/layout/RootLayout";
import AuthProvider from "@/context/AuthContext";
import ColumnPage from "@/pages/ColumnPage";
import MyRecordPage from "@/pages/MyRecordPage";
import TopPage from "@/pages/TopPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<TopPage />} />
            <Route path="my-record" element={<MyRecordPage />} />
            <Route path="column" element={<ColumnPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
