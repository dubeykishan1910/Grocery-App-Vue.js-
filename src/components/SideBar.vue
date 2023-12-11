<template>


    <div class="menu">
      <!-- Menu Button for Sidebar 1 -->
      <button @click="toggleSidebar('sidebar1')" ref="menuButton1">Sidebar 1</button>
      



      <!-- Sidebar 1 -->
      <aside class="a1" v-if="showSidebar1" ref="sidebar1" @click.self="closeSidebar('sidebar1')">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <!-- Add more sidebar items here -->
        </ul>
      </aside>
  


      <!-- Menu Button for Sidebar 2 -->
      <button @click="toggleSidebar('sidebar2')" ref="menuButton2">Sidebar 2</button>
      


      <!-- Sidebar 2 -->
      <aside class="a2" v-if="showSidebar2" ref="sidebar2" @click.self="closeSidebar('sidebar2')">
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
          <!-- Add more sidebar items here -->
        </ul>
      </aside>


    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showSidebar1: false,
        showSidebar2: false
      };
    },
    mounted() {
      document.addEventListener('click', this.handleClickOutside);
    },
    beforeUnmount() {
      document.removeEventListener('click', this.handleClickOutside);
    },
    methods: {
      toggleSidebar(sidebar) {
        if (sidebar === 'sidebar1') {
          this.showSidebar1 = !this.showSidebar1;
          if (this.showSidebar1) this.showSidebar2 = false;
        } else if (sidebar === 'sidebar2') {
          this.showSidebar2 = !this.showSidebar2;
          if (this.showSidebar2) this.showSidebar1 = false;
        }
      },
      closeSidebar(sidebar) {
        if (sidebar === 'sidebar1') {
          this.showSidebar1 = false;
        } else if (sidebar === 'sidebar2') {
          this.showSidebar2 = false;
        }
      },
      handleClickOutside(event) {
        const sidebar1 = this.$refs.sidebar1;
        const sidebar2 = this.$refs.sidebar2;
        const menuButton1 = this.$refs.menuButton1;
        const menuButton2 = this.$refs.menuButton2;
  
        if (!(sidebar1 && sidebar1.contains(event.target)) && !(menuButton1 && menuButton1.contains(event.target))) {
          this.showSidebar1 = false;
        }
  
        if (!(sidebar2 && sidebar2.contains(event.target)) && !(menuButton2 && menuButton2.contains(event.target))) {
          this.showSidebar2 = false;
        }
      }
    }
  };
  </script>
  









  
  <style scoped>
  .menu{
    margin: 20%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background: #000;
    height: 50vh;
  }
  
  aside {
    margin-top: 20%;
    width: 200px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #9f1818;
    transition: left 0.3s ease-in-out;
    padding: 20px;
    color: aliceblue;
  }

  .a2{
    top: 0;
    left: 0;
  }
  
  aside ul {
    list-style: none;
    padding: 0;
  }
  
  aside ul li {
    margin-bottom: 10px;
  }
  
  button {
    margin: 20px;
  }
  </style>
  