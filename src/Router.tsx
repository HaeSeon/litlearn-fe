import { Route, Routes } from "react-router-dom";
import { InterestSelect } from "./pages/InterestSelect";
import { Landing } from "./pages/Landing";
import { TestInit } from "./pages/TestInit";
import { TestStart } from "./pages/TestStart";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/interest" element={<InterestSelect />} />
      <Route path="/testInit" element={<TestInit />} />
      <Route path="/testStart" element={<TestStart />} />
    </Routes>
  )
}