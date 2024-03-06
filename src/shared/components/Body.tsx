import { Button } from './sharedComponents/Button'
import { Schedule } from './sharedComponents/Schedule'
import classes from './style/Body.module.scss'

export const Body = () => {
    return (
        <div className={classes.bodyCont}>
            <div>
                <div>
                    <Schedule />
                </div>
                <div>

                </div>
                <div className={classes.buttons}>
                    <Button />
                </div>
            </div>
        </div>
    )
}