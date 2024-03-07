import { TasksButtons } from '../buttons/TasksButtons'
import { Input } from '../sharedComponents/Input'
import { Schedule } from './Schedule'
import classes from './style/Body.module.scss'

export const Body = () => {
    return (
        <div className={classes.bodyCont}>
            <div>
                <Schedule />
                {/* <AddSchedule /> */}
                
            </div>
            <div>
                <TasksButtons />
            </div>
            <div>
                <Input />
            </div>
            
        </div>
    )
}