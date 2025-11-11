import React from "react";
import Button from "./Button";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Easy UI Button Demo</h1>
      <Button variant="primary" size="md" onClick={() => alert("Primary clicked!")}>
        Primary
      </Button>
      <Button variant="outline" size="lg">Outline</Button>
      <Button variant="ghost" size="sm" disabled>Disabled Ghost</Button>
    </div>
  );
}