<template>
  <div class="dashboard-page">
    <h1>Users</h1>
    <p>Manage all users in your application</p>
    
    <div class="demo-cards">
      <UiCard>
        <h3>Total Users</h3>
        <p class="metric metric--accent">1,234</p>
      </UiCard>
      <UiCard>
        <h3>Active Today</h3>
        <p class="metric metric--success">567</p>
      </UiCard>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>

<style scoped>
.dashboard-page h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.dashboard-page p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.demo-cards {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.demo-cards h3 {
  margin: 0 0 0.5rem;
  color: var(--text-primary);
}

.metric {
  font-size: 2rem;
  font-weight: 700;
  margin-top: 0.5rem;
}

.metric--accent {
  color: var(--accent-strong);
}

.metric--success {
  color: var(--state-success);
}
</style>
