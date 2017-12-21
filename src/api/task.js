const tasks = [
  {'id': 1, 'name': 'program1', 'status': 'ready', 'programId': 1},
  {'id': 2, 'name': 'program2', 'status': 'ready', 'programId': 1},
  {'id': 3, 'name': 'program3', 'status': 'pending', 'programId': 1},
  {'id': 4, 'name': 'program4', 'status': 'pending', 'programId': 2},
  {'id': 5, 'name': 'program5', 'status': 'ready', 'programId': 2},
  {'id': 6, 'name': 'program6', 'status': 'finished', 'programId': 2},
  {'id': 7, 'name': 'program7', 'status': 'finished', 'programId': 2}
]

export default {
  getTasks (cb) {
    setTimeout(() => cb(tasks), 1000)
  }
}
