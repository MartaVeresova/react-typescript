import React, {ChangeEvent} from 'react'

type PropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps: PropsType, prevState: any) {
        if (prevProps.status !== this.props.status)
            this.setState({
                status: this.state.status
            })
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '@@@'}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input
                            onBlur={this.deactivateEditMode}
                            autoFocus
                            value={this.state.status}
                            onChange={this.onStatusChange}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus

