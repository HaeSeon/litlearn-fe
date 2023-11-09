import { Route, Routes } from "react-router-dom";
import { InterestSelect } from "./pages/InterestSelect";
import { Landing } from "./pages/Landing";
import { TestInit } from "./pages/TestInit";
import { TestStart } from "./pages/TestStart";
import { TestResult } from "./pages/TestResult";
import { Home } from "./pages/Home";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/interest" element={<InterestSelect />} />
      <Route path="/testInit" element={<TestInit />} />
      <Route path="/testStart" element={<TestStart />} />
      <Route path="/testResult" element={<TestResult />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}