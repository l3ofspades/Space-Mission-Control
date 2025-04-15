// Task 1: Declare The Task Array and The Interval ID
let oneTimeTasks = [];
let monitoringTaskId = null;
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).

// Task 2: Add One-Time Task Function
function addOneTimeTask (func, delay)
{
	oneTimeTasks.push({ func, delay});
	// TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. This function should add an object containing both parameters into the `oneTimeTasks` array.
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks ()
{ 
	oneTimeTasks.forEach(task => {
		setTimeout(task.func, task.delay);
	});
	// TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and uses `setTimeout` to schedule each task according to its delay.
}

// Task 4: Start Monitoring Function
function startMonitoring ()
{
	monitoringTaskId = setInterval(() => {
		console.log("Monitoring space station conditions...");
	}, 2000); // every 2 secounds

	// TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.
}

// Task 5: Stop Monitoring Function
function stopMonitoring ()
{
	if (monitoringTaskId !== null) {
		clearInterval(monitoringTaskId);
		console.log("Monitoring Stopped.");
	}
	// TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.
}

// Task 6: Start Countdown Function
function startCountdown (duration)
{
	let timeLeft = duration;
	const countdownId = setInterval(() => {
		if (timeLeft > 0) {
			console.log(` Countdown: ${timeLeft}...`);
			timeLeft--;
		} else {
			clearInterval(countdownId);
			console.log("Liftoff!");
		}
	}, 1000); // every secound
	// TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission ()
{
	// 1 secound in - system check
	addOneTimeTask(() => {
		startMonitoring();
	}, 1000);

	// 2 secounds in - start monitoring
	addOneTimeTask(() => {
		startMonitoring();
	}, 2000);

	// 10 secounds in - stop monitoring
	addOneTimeTask(() => {
		startCountdown(5);
	}, 11000);

	// Launch the one-time task scheduler
	runOneTimeTasks();
	// TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.
}

scheduleMission(); // Starts the mission.
