const programs = [
  {'id': 1, 'name': 'program1', 'status': 'ready'},
  {'id': 2, 'name': 'program2', 'status': 'ready'},
  {'id': 3, 'name': 'program3', 'status': 'pending'},
  {'id': 4, 'name': 'program4', 'status': 'pending'},
  {'id': 5, 'name': 'program5', 'status': 'ready'},
  {'id': 6, 'name': 'program6', 'status': 'finished'},
  {'id': 7, 'name': 'program7', 'status': 'finished'}
]

export default {
  getPrograms (cb) {
    setTimeout(() => cb(programs), 1000)
  }
}
