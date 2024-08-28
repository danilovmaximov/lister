import { api2 } from './api'

export type TTask = {
  id?: number
  label: string
  text: string
  due_date: string
}

interface getTasksResult {
  tasks: TTask[]
}

export async function getTasks(accessToken: string) {
  try {
    const { data } = await api2.get<getTasksResult>('/tasks', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    console.log(data)
    return data
  } catch (error) {
    console.error(error)
    if (error instanceof Error) {
      return error.message
    }
    return 'Error, watch browser console.'
  }
}

interface addTaskResult {
  tasks: TTask[]
}

export async function addTask(accessToken: string) {
  try {
    const { data } = await api2.post<addTaskResult>('/task', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return data
  } catch (error) {
    console.error(error)
    if (error instanceof Error) {
      return error.message
    }
    return 'Error, watch browser console.'
  }
}

export async function getTask(accessToken: string, taskID: number) {
  try {
    const { data } = await api2.get<TTask>(`/task/${taskID}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return data
  } catch (error) {
    console.error(error)
    if (error instanceof Error) {
      return error.message
    }
    return 'Error, watch browser console.'
  }
}

export async function updateTask(accessToken: string, taskID: number) {
  try {
    const { data } = await api2.put<TTask>(`/task/${taskID}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return data
  } catch (error) {
    console.error(error)
    if (error instanceof Error) {
      return error.message
    }
    return 'Error, watch browser console.'
  }
}

export async function deleteTask(accessToken: string, taskID: number) {
  try {
    const { data } = await api2.delete<undefined>(`/test/${taskID}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return data
  } catch (error) {
    console.error(error)
    if (error instanceof Error) {
      return error.message
    }
    return 'Error, watch browser console.'
  }
}
