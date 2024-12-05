<template>
  <div>
    <HeaderPage />
    <SearchForm />
    <ResultsTable />
  </div>
</template>

<script>
import HeaderPage from "./components/HeaderPage.vue";
import SearchForm from "./components/SearchForm.vue";
import ResultsTable from "./components/ResultsTable.vue";

export default {
  components: {
    HeaderPage,
    SearchForm,
    ResultsTable,
  },
};
</script>
