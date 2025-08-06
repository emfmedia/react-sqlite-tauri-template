import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Tauri App</h1>
        <p className="text-xl text-gray-600">
          Start building your amazing desktop project here!
        </p>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index; 