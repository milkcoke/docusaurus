---
title: Context Switching
description: Context switching in go when system call occurs.
tags: [go]
keywords: [go, goroutine]
last_update:
    date: 2023-03-05
---

## Synchronous system call
### Problem
Synchronous system call blocks the thread until I/O is to be completed. <br></br>
When synchronous system call occurs, OS thread is to be waiting state, and enqueue into waiting queue. This is not occupied by CPU. <br></br>
This means synchronous system call reduces parallelism.
multiple goroutines can't be executed parallely since OS thread is blocked and waiting which has multiple logical processor including goroutine,

> How to handle this problem in go scheduler?

### Solution
Go scheduler gets another OS thread from thread pool or creates new one. <br></br>
Process is shown below

![Synchronous context switching in Go](img/Context_Switching_Synchronous.gif)

1. Synchronous system call occurs. (e.g. File Read)
2. OS thread is blocked and transforming state from running to waiting. <br></br>
   Which is located into waiting queue.
3. Go scheduler gets another OS thread from thread pool cache or creates new one.
4. And move the logical processor to new one except goroutine which makes I/O task.
5. With new OS thread, the other goroutines are activated by go scheduler.
6. In one side, IO completion, the I/O goroutine is returned to new OS thread.
7. Old OS thread is returned to thread pool cache.

## Asynchronous system call
### Problem
Asynchronous system call occurs when file descriptor (**FD** as acronym) is used on network IO with non-blocking mode. <br></br>
Async syscall doesn't block the OS thread but occurs error when the socket buffer is empty trying Read or buffer full trying Write. <br></br>
In async mode, it should provide retrying mechanism network IO after error occurs.

> How does go handle this problem?

### Solution
Go uses [NetPoller](https://github.com/golang/go/blob/master/src/runtime/netpoll.go) for handling asynchronous system call. <br></br>
The NetPoller uses interface provided by OS (epoll kqueue, IOPC) to do polling status of FD.

![Asynchronous system call context switching in go](img/Asynchronous_contexet_swiching_in_go.gif)

1. Asynchronous system call occurs in goroutine
2. Go scheduler move the goroutine to NetPoller thread out of OS thread which is created.
3. NetPoller do polling the status of FD
4. If IO operation is ready, NetPoller could get notification from OS
5. NetPoller will notify to the goroutine to retry I/O
6. The goroutine would return to origin logical run queue when I/O operation completes.

