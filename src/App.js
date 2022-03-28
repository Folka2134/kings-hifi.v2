
function App() {
  return (
    <div className="h-screen grid grid-cols-9 bg-purple-400">
      <div className="bg-yellow-500 border-2 border-black">1</div>
      <div className="col-span-7">
        <div>nav</div>
      </div>
      <div className="bg-yellow-500 border-2 border-black">3</div>
    </div>
  );
}

export default App;
