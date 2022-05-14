import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import { ToastContainer } from 'react-toastify'
import './styles/global.scss'


export function App() {
  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      <Header />
      <TaskList />
    </>
  )
}