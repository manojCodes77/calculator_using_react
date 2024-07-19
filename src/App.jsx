import styles from './App.module.css';
import Display from './components/Display.jsx';
import ButtonsContainer from './components/ButtonsContainer.jsx';
function App() {
  return (
    <div className="container flex flex-col justify-center items-center min-h-screen min-w-full bg-slate-500 text-white">
      <div className="bg-black border-2 border-rose-600 rounded-xl h-3/4 w-80 p-3  max-w-full max-h-svh">
        <Display />
        <ButtonsContainer />
      </div>
    </div>
  )
}
export default App;