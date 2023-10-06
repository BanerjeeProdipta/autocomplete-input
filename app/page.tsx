"use client";
import AutoCompleteInput from "./components/AutoComplete";

const data = ["One", "Two", "Three"];

export default function Home() {
  const handleSelection = (selectedOption: string) => {
    console.log({ Selected: { selectedOption } });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AutoCompleteInput
        options={data.map((v: string) => v)}
        handleSelection={handleSelection}
      />
    </main>
  );
}
