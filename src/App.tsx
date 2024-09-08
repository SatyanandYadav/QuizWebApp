import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, Question, Result } from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QuizContextProvider from "./context/QuizContext";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <QuizContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/question" element={<Question />} />
            <Route path="/result" element={<Result />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </QuizContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
