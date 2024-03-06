import { Body } from "../shared/components/Body";
import { Header } from "../shared/components/containers/Header"
import { Navbar } from "../shared/components/sharedComponents/Navbar";
import classes from './Homepage.module.scss'

export const Homepage = () => {
  return (
    <div className={classes.home}>
        <div className={classes.navbarzone}>
            <Navbar />
        </div>
        <header className={classes.hpHeader}>
            <Header />
        </header>
        <body>
            <Body />
        </body>
    </div>
  )
  
};
