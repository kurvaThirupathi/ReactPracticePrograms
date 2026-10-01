import {  useReducer, useState,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InfiniteScroll from './components/InfiniteScroll/InfiniteScroll'
import Todo from './components/Todo/Todo'
import ImageSlider from './components/ImageSlider/ImageSlider'
import ImageSliderSingle from './components/ImageSliderSingle/ImageSliderSingle'
import StarRating from './components/StarRating/StarRating'
import FileStructure from './components/FileStructure/FileStructure'
import Modal from './components/Modal/Modal'
import MultiDropdown from './components/MultiDropdown/MultiDropdown'
import Drag from './components/Drag/Drg'
import Accordion from './components/Accordion/Accordion'
import Chips from './components/Chips/Chips'
import Pagination from './components/Pagination/Pagination'
import Progressbar from './components/Progressbar/Progressbar'
import SearchFilter from './components/SearchFilter/SearchFilter'
import Theme from './components/Theme/Theme'
import TrafficLight from './components/TrafficLight/TrafficLight'
import TicTac from './components/TicTac/TicTac'
import Tabs from './components/Tabs/Tabs'
import FormValidation from './components/FormValidations/FormValidations'
import FormValidations from './components/FormValidations/FormValidations'
import SearchAPI from './components/SearchAPI/SearchAPI'
import ProgressBarr from './components/ProgressBarr/ProgressBarr'
import Login from './components/Login/Login'
import { reducer } from './reducer/reducer'
import { init } from './reducer/init'
import { appCxt, Provider } from './appContext/appContext'
import StopWatch from './components/StopWatch'
import TypeWriter from './components/TypeWriter'
import CharacterCount from './components/CharacterCount'
import NestedCircle from './components/NestedCircle'
import SessionTimeout from './components/SessionTimeout'
import AutoTypeHead from './components/AutoTypeHead'
import ProgressbarValidation from './components/ProgressbarValidation'
import Captcha from './components/Captcha'
import VirtualList from './components/VirtualList'
import TableNumbers from './components/TableNumbers'

// function AppContent() {

//     const { state } = useContext(appCxt);

//     return (
//         <>
//             {state?.isLoggedIn ? <SearchAPI /> : <Login />}
//         </>
//     );
// }
function App() {
 
       const [state,dispatch] = useReducer(reducer, init)
  return (
    <>
  {
  /* <Provider value={{state,dispatch}} > */
  }

  {/* <Provider value={{state,dispatch}}> */}
    {/* <ImageSlider /> */}
    {/* <Todo /> */}
    {/* <InfiniteScroll /> */}
    {/* <ImageSliderSingle /> */}
    {/* <StarRating /> */}
    {/* <FileStructure /> */}
    {/* <Modal /> */}
    {/* <MultiDropdown /> */}
    {/* <Drag /> */}
    {/* <Accordion /> */}
    {/* <Chips /> */}
    {/* <Pagination /> */}
    {/* <Progressbar /> */}
    {/* <SearchFilter /> */}
    {/* <Theme /> */}
    {/* <TrafficLight /> */}
    {/* <TicTac /> */}
    {/* <Tabs /> */}
    {/* <FormValidations /> */}
    {/* <SearchAPI /> */}
    {/* <ProgressBarr /> */}
    {/* <AppContent />*/}
    {/* {state?.isLoggedIn ? <Login />: <SearchAPI />} */}
    {/* </Provider>*/}
    <StopWatch />
    {/* <TypeWriter /> */}
    {/* <CharacterCount /> */}
    {/* <NestedCircle /> */}
    {/* <SessionTimeout /> */}
    {/* <AutoTypeHead /> */}
    {/* <ProgressbarValidation /> */}
    {/* <Captcha /> */}
    {/* <TableNumbers /> */}
    {/* <VirtualList /> */}
    </>
  )
}

export default App
