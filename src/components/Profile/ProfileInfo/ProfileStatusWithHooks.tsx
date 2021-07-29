import React, {ChangeEvent, useEffect, useState} from 'react'


export const ProfileStatusWithHooks = ({status, updateUserStatus}: PropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [statusValue, setStatusValue] = useState(status)

    useEffect(() => {
        setStatusValue(status)
    }, [status])


    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        updateUserStatus(statusValue)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatusValue(e.currentTarget.value)
    }

    return (
        <div>
            {
                !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{`🖊️ ${status} `}</span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input
                        autoFocus
                        value={statusValue}
                        onBlur={deactivateEditMode}
                        onChange={onStatusChange}
                    />
                </div>
            }
        </div>
    )
}


//types
type PropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

