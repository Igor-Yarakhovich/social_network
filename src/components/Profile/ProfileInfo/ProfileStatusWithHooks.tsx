import React, {useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}


export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}
                >{props.status || '----'}</span>
            </div>}
            {editMode &&
            <div>
                <input autoFocus={true}
                       onBlur={deactivateEditMode}
                       onChange={onStatusChange}
                       value={status}
                />
            </div>}
        </>
    )
}
