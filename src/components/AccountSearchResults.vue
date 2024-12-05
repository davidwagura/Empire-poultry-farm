<template>
    <div class="p-4 bg-white border border-gray-300 rounded-md">
      <h2 class="font-bold text-lg bg-purple-600 text-white p-2">Account / Meter Search Results</h2>
      <div class="grid grid-cols-2 gap-4 mt-2">
        <div>
          <!-- <p><strong>Name:</strong> {{ accountData.fullName }}</p>
          <p><strong>Account number:</strong> {{ accountData.accountReference }}</p>
          <p><strong>Meter number:</strong> {{ accountData.meterList[0].serialNum }}</p>
          <p>
            <strong>Balance:</strong>
            <span :class="balanceClass">{{ formattedBalance }}</span>
          </p> -->
        </div>
        <div>
          <!-- <p><strong>Unpaid Bill Amount:</strong> {{ lastBill.lastBillAmount }}</p>
          <p><strong>Due Date:</strong> {{ formatDate(lastBill.dueDate) }}</p>
          <p><strong>Bill Date:</strong> {{ formatDate(lastBill.billDate) }}</p>
          <p><strong>Bill Number:</strong> {{ lastBill.billNumber }}</p> -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['accountData'],
    computed: {
      lastBill() {
        return this.accountData.colBills[0];
      },
      balanceClass() {
        return this.accountData.balance > 0 ? 'text-green-500' : 'text-red-500';
      },
      formattedBalance() {
        return this.accountData.balance > 0
          ? `+${this.accountData.balance} (Over Payment)`
          : this.accountData.balance.toFixed(2);
      },
    },
    methods: {
      formatDate(timestamp) {
        return new Date(timestamp).toLocaleDateString();
      },
    },
  };
  </script>
  