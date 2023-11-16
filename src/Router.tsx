import { Route, Routes } from "react-router-dom";
import { InterestSelect } from "./pages/InterestSelect";
import { Landing } from "./pages/Landing";
import { TestInit } from "./pages/TestInit";
import { TestStart } from "./pages/TestStart";
import { TestResult } from "./pages/TestResult";
import { Home } from "./pages/Home";
import { Content } from "./pages/Content";
import { TestVoca } from "./pages/TestVoca";
import { TestReading } from "./pages/TestReading";
import { TestWriting } from "./pages/TestWriting";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/interest" element={<InterestSelect />} />
      <Route path="/testInit" element={<TestInit />} />
      <Route path="/testStart" element={<TestStart />} />
      <Route path="/testResult" element={<TestResult />} />
      <Route path="/home" element={<Home />} />
      <Route path="/content" element={<Content />} />
      <Route path="/test/voca" element={<TestVoca />} />
      <Route path="/test/reading" element={<TestReading />} />
      <Route path="/test/writing" element={<TestWriting />} />
    </Routes>
  )
}