  // function generateRandomDate(from: any, to: any) {
  //   return new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime())).getTime();
  // }

  // const generateData = () => {
  //   let data: any = { tasks: {}, owners: ["Круглов Алексей", "Бессонов Герман", "Федоров Александр", "Царева Анна", "Цветкова Алиса"] };
  //   for (let i = 0; i < 1000; i++) {
  //     let task: any = {};
  //     task.id = new Date().getTime();
  //     task.date = generateRandomDate(new Date(2024, 4, 1), new Date(2024, 6, 31));
  //     task.owner = data.owners[Math.floor(Math.random() * data.owners.length)];
  //     task.text = "Lorem ipsum dolor sit amet, consectetur";
  //     task.state = Math.random() < 0.5;
  //     if (data.tasks[new Date(task.date).getMonth().toString() + new Date(task.date).getFullYear().toString()] === undefined) {
  //       data.tasks[new Date(task.date).getMonth().toString() + new Date(task.date).getFullYear().toString()] = [];
  //     }
  //     data.tasks[new Date(task.date).getMonth().toString() + new Date(task.date).getFullYear().toString()].push(task);
  //   }
  //   console.log(data);
  // };

  // generateData();
	export {}