<script setup>
import Alterations from './components/Alterations.vue'
import IncomeAndExpenses from './components/IncomeAndExpenses.vue'
import Taxes from './components/Taxes.vue'
import ComplaintsAndViolations from './components/ComplaintsAndViolations.vue'
</script>

<template>
  <div class="space-y-16">
    <Alterations />
    <IncomeAndExpenses />
    <Taxes />
    <ComplaintsAndViolations />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
