//action creator function (called from application) which returns
//an object called the action

//actions tell application something happened
//reducer handles announcements

export function toggleAddBtnAction(){
    return{
        type: 'TOGGLE_ADD'
    }
}

export const addTaskAction = (text) => {
    //below is what is returned known as the Action
    return {
        type: 'ADD_TASK',
        text: text
    }
};

export const deleteTaskAction = (task) => {
    return {
        type: 'DELETE_TASK',
        id: task.id //get index array reference
    }
};

export const finishTaskAction = (task) => {
    return {
        type: 'FINISH_TASK',
        id: task.id, //get index array reference
        task: task
    }
};

export const editTaskAction = (task) => {
    return {
        type: 'EDIT_TASK',
        id: task.id,
        payload: task,
        text: task.description,
        status: task.status
    }
};

export const submitEditTaskAction = (task, text) => {
    return {
        type: 'SUBMIT_TASK_EDIT',
        id: task.id,
        payload: task,
        text: text,
        status: task.status
    }
};