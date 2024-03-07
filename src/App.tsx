import { Body } from "./shared/components/containers/Body";
import { Header } from "./shared/components/containers/Header"
import { Navbar } from "./shared/components/sharedComponents/Navbar";
import classes from './App.module.scss'

export const App = () => {

  return (
    <div className={classes.homeContainer}>
        <div className={classes.navbarzone}>
            <Navbar />
        </div>
        <header className={classes.hpHeader}>
            <Header />
        </header>
        <Body />
    </div>
  )
}