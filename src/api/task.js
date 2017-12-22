const tasks = [
  {'id': 1, 'name': 'task1', 'status': 'undone', 'programId': 1},
  {'id': 2, 'name': 'task2', 'status': 'undone', 'programId': 1},
  {'id': 3, 'name': 'task3', 'status': 'undone', 'programId': 1},
  {'id': 4, 'name': 'task4', 'status': 'undone', 'programId': 2},
  {'id': 5, 'name': 'task5', 'status': 'undone', 'programId': 2},
  {'id': 6, 'name': 'task6', 'status': 'undone', 'programId': 2},
  {'id': 7, 'name': 'task7', 'status': 'undone', 'programId': 2}
]

export default {
  getTasks (cb) {
    setTimeout(() => cb(tasks), 1000)
  }
}
