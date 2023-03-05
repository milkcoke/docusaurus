---
title: Goroutine State
description: Describe goroutine state
tags: [go]
keywords: [go, goroutine]
last_update:
    date: 2023-03-05
---

## State of goroutine
![Goroutine state](img/goroutine_state.png)

### Runnable
Wait in the run queue.

### Executing
Running state on OS thread <br></br>
Runnable state to Executing state when preempted by scheduler as time goes by more than time slice (Default `10 ms`).

![Runnable to Executing](img/Goroutine_State.gif)

### Waiting
Waiting state
Running state to this state when I/O or event wait (e.g. blocked on channel, blocked on a system call or waiting for the mutex lock) <br></br>
After I/O or event completes, moved back to the runnable state.

![Executing to Waiting](img/Goroutine_Executing_Waiting.gif)