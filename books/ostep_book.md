# Virtualization
- **Mechanisms**: Low-level machinery
- **Time sharing**: Technique used by an OS to share a resource
- **Special registers**:
	- **Program counter (PC) / Instruction pointer (IP)**: Indicates which instruction of the program to execute next
	- **Stack pointer and frame pointer**: Manage the stack for function parameters, local variables, and return addresses
- **OS tasks to run a program**:
	- Load code and static data into memory to the program's address space
	- In early OSes, resources were loaded eagerly (all at process startup)
	- In modern OSes, resources are loaded lazily:
		- Allocate memory for the stack (used for local variables, function parameters, and return addresses in C programs)
			- OS initializes the stack with arguments (e.g., in C, `argc` and `argv` array)
		- Heap may also be allocated for explicitly requested, dynamically allocated data (e.g., `malloc`, `free`)
- ## Process API
- **fork, wait, exec**: Used to operate a Unix shell
	- **fork**: Creates a new process (child), nearly an identical copy of the creator (parent)
	- **wait**: Allows the parent to wait for its child
	- **exec**: System call that lets a child execute a new program, breaking free from its parent
- **Pipe**: Used to transfer information between child and parent
	- Double-ended:
		- `[0]` Read end
		- `[1]` Write end
- ## Mechanism: Limited Direct Execution
- **User mode vs. Kernel mode**:
	- In user mode, a program cannot issue I/O requests
	- Program switches to kernel mode via system calls
- **Trap system call**: Enables switching to kernel mode
- **LDE phases**:
  1. Initialize the trap table on boot
  2. Kernel sets up things before using a "return from trap" instruction
- **Switching processes**:
	- **Cooperative approach**: Process voluntarily returns control via syscall or illegal action
	- **Non-cooperative approach**: Timer interrupt triggers process switching (started on boot)
- ## Schedulers
	- Decides whether to continue running the current process or switch to another
	- Switches context by changing the stack pointer to the new process's kernel stack
	- **Timer interrupts** (see chart on p.11)
	- **Types of schedulers**:
		- Favor turnaround time (e.g., SJF, STCF): Bad for response time
		- Optimize response time (e.g., RR): Bad for turnaround time
	- **Multi-Level Feedback Queue (MLFQ)**:
		- Combines approaches to balance scheduling
		- **Rules**:
		  1. If `Priority(A) > Priority(B)`, A runs (B doesn't).
		  2. If `Priority(A) = Priority(B)`, A & B run in round-robin using the time slice (quantum length) of their queue.
		  3. When a job enters the system, it starts at the highest priority (topmost queue).
		  4. If a job uses up its time allotment at a given level, its priority decreases (it moves down one queue).
		  5. After time period `S`, move all jobs back to the topmost queue.
		- MLFQ provides the best of both worlds.
	- ### Proportional Share (Fair Share)
	- Lottery scheduling:
		- Each process gets a ticket, representing its share of the CPU.
		- Processes with more tickets run more often.
		- This method effectively represents proportional ownership.
		- Ticket currency: Allow a user with a set of tickets to allocate tickets among their own jobs
		- Ticket transfer: Process can temporarily hand off tickets to another, e.g. client-server setting
		- Ticket inflation: Process can temporarily raiser or lower number of tickets it owns
		- Simple to implement
	- Stride scheduling:
		- Deterministic fair-share scheduler
		- Stride = inverse in proportion to the number of tickets it has