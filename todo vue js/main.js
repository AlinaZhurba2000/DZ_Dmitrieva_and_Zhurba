Vue.component('task-list', {
    template: '#task-list',
    props: {
      tasks: {default: []}
    },
    data() {
      return {
        newTask: ''
      };
    },
    methods: {
      addTask() {
        if (this.newTask) {
          this.tasks.push({
            title: this.newTask,
            completed: false
          });
          this.newTask = '';
        }
      },
      completeTask(task) {
        task.completed = ! task.completed;
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
      }
    }
  });
  
  Vue.component('task-item', {
    template: '#task-item',
    props: ['task'],
    computed: {
      className() {
        let classes = ['tasks__item__toggle'];
        if (this.task.completed) {
          classes.push('tasks__item__toggle--completed');
        }
        return classes.join(' ');
      }
    }
  });
  
  let app = new Vue({
    el: '#app',
    data: {
      tasks: []
    },
    flag_rewrite: false,
  });
    