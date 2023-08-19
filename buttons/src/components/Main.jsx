import { Route, Routes } from "react-router-dom";
import { Aside } from "../components";
import { ButtonsComponents } from "../pages/ButtonsComponents";
import { InputPage } from "../pages/InputPage";

export const Main = () => {
  return (
    <>
      <main>
        <Routes>
        <Route path="/" element={<ButtonsComponents />} />
     
          <Route path="/inputs" element={<InputPage />} />
        </Routes>
        <Aside />
      </main>
    </>
  );
};
