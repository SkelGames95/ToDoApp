import { Button } from '../sharedComponents/Button'
import { Input } from '../sharedComponents/Input'
import { Schedule } from './Schedule'
import classes from './style/Body.module.scss'

export const Body = () => {
    return (
        <div className={classes.bodyCont}>
            <div>
                <div>
                    <Schedule />
                </div>
                <div>
                    {/* <AddSchedule /> */}
                </div>
                <div>
                    <Input />
                </div>
                <div className={classes.buttons}>
                    <Button />
                </div>
            </div>
        </div>
    )
}