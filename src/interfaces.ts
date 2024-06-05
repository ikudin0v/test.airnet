export interface ITask {
	id:number
	date: number,
	owner: string,
	text: string,
	state: boolean,
}

export interface IUseData {
	month:[number,number]
	setMonth:React.Dispatch<React.SetStateAction<[number,number]>>;
	view:string
	setView:React.Dispatch<React.SetStateAction<string>>;
	profiles:string[],
	activeProfile:string,
	setActiveProfile:React.Dispatch<React.SetStateAction<string>>;
	tasks:ITask[],
	setTasks:React.Dispatch<React.SetStateAction<ITask[]>>;
}