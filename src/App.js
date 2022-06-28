import './App.css';

function App() {

  const colorArr = ['#518cef', '#3b10c4', '#9aede6', '#8ee763', '#a30dd0'];

  let index = Math.floor(Math.random() * colorArr.length);
  

  return (
    <main>
      <div style={{backgroundColor: colorArr[index]}}>
        <h1>{colorArr[index]}</h1>
      </div>
    </main>
  );
}


// <div className="App">
//       <div className='App-container'>
//         <Content/>
//       </div>
//     </div>
export default App;
