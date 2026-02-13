function task(
  taskName: string,
  deadline?: Date,
  reminder?: string,
  priority: string = deadline ? "High" : "Low",
): void {
  console.log("Task Name : " + taskName);

  if (deadline == undefined) {
    console.log("The deadline is not provided");
  } else {
    console.log("The deadline is " + deadline.toDateString());
  }

  console.log("Reminder : " + reminder);
  console.log("Priority : " + priority);
}

task("Submit Assignment");
task("Client Meeting ", new Date("10-02-2026"));
task("Leetcode time", new Date("10-02-2026"), "Complete in 2 hours");
