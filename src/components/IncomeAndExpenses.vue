<template>
  <div class="container mx-auto p-4">
    <div class="w-full max-w-xs">
      <h3 class="text-blue-900 text-lg font-bold">Income and Expenses</h3>
    </div>
    <div class="mt-4 md:flex md:flex-wrap md:-mx-4 xl:-mx-8">
      <div class="w-full mb-4 md:w-1/2 md:mb-8 lg:w-1/3 md:px-4 xl:px-8 flex flex-col">
        <div class="bg-blue-900 px-6 py-3 rounded-t">
          <h3 class="text-white font-bold text-sm">2017</h3>
        </div>
        <div
          class="px-6 pt-6 pb-3 border-l border-r border-b border-gray-300 rounded-b flex flex-col flex-grow"
        >
          <h3
            class="text-xs text-[#7A8BA4] uppercase tracking-widest font-bold"
          >
            Income
          </h3>
          <ul class="space-y-2 mt-2">
            <li class="flex justify-between text-sm">
              <span class="text-[#536076]">Retail Income</span>
              <span class="text-gray-900">$507,500</span>
            </li>
            <li class="flex justify-between text-sm">
              <span class="text-[#536076]">Signage Billboard Income</span>
              <span class="text-gray-900">$445</span>
            </li>
            <li class="flex justify-between text-sm">
              <span class="text-[#536076]">Tax Escalation Income</span>
              <span class="text-gray-900">$264,500</span>
            </li>
          </ul>
          <div class="w-full h-px bg-gray-300 my-2"></div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-900 font-medium">Total Income</span>
            <span class="text-gray-900 font-medium">$264,500</span>
          </div>

          <h3
            class="text-xs text-[#7A8BA4] uppercase tracking-widest font-bold mt-12"
          >
            Expenses
          </h3>
          <ul class="space-y-2 mt-2">
            <li class="flex justify-between text-sm">
              <span class="text-[#536076]">Management Expenses</span>
              <span class="text-gray-900">$6,360</span>
            </li>
            <li class="flex justify-between text-sm">
              <span class="text-[#536076]">Signage Billboard Income</span>
              <span class="text-gray-900">$7,209</span>
            </li>
            <li class="flex justify-between text-sm">
              <span class="text-[#536076]">Tax Escalation Income</span>
              <span class="text-gray-900">$2,833</span>
            </li>
            <li class="flex justify-between text-sm">
              <span class="text-[#536076]">Tax Escalation Income</span>
              <span class="text-gray-900">$2,833</span>
            </li>
          </ul>
          <div class="w-full h-px bg-gray-300 my-2"></div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-900 font-medium">Total Expenses</span>
            <span class="text-gray-900 font-medium">$16,402</span>
          </div>
          <div class="mt-auto">
            <div
              class="flex justify-between text-sm bg-green-100 text-green-900 p-3 rounded -mx-3 mt-8"
            >
              <span class="font-bold">Net Operating Income</span>
              <span class="font-bold">$756,204</span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full mb-4 md:w-1/2 md:mb-8 lg:w-1/3 md:px-4 xl:px-8 flex flex-col"
      >
        <div class="bg-blue-900 px-6 py-3 rounded-t">
          <h3 class="text-white font-bold text-sm">2016</h3>
        </div>
        <div
          class="px-6 pt-6 pb-3 border-l border-r border-b border-gray-300 rounded-b flex-grow flex flex-col flex-grow"
        >
          <h3
            class="text-xs text-[#7A8BA4] uppercase tracking-widest font-bold"
          >
            Income
          </h3>
          <ul class="space-y-2 mt-2">
            <li class="flex justify-between text-sm">
              <span class="text-[#536076]">Retail Income</span>
              <span class="text-gray-900">$507,500</span>
            </li>
            <li class="flex justify-between text-sm">
              <span class="text-[#536076]">Signage Billboard Income</span>
              <span class="text-gray-900">$445</span>
            </li>
            <li class="flex justify-between text-sm">
              <span class="text-[#536076]">Tax Escalation Income</span>
              <span class="text-gray-900">$264,500</span>
            </li>
          </ul>
          <div class="w-full h-px bg-gray-300 my-2"></div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-900 font-medium">Total Income</span>
            <span class="text-gray-900 font-medium">$264,500</span>
          </div>

          <h3
            class="text-xs text-[#7A8BA4] uppercase tracking-widest font-bold mt-12"
          >
            Expenses
          </h3>
          <ul class="space-y-2 mt-2">
            <li class="flex justify-between text-sm">
              <span class="text-[#536076]">Management Expenses</span>
              <span class="text-gray-900">$6,360</span>
            </li>
            <li class="flex justify-between text-sm">
              <span class="text-[#536076]">Signage Billboard Income</span>
              <span class="text-gray-900">$7,209</span>
            </li>
            <li class="flex justify-between text-sm">
              <span class="text-[#536076]">Tax Escalation Income</span>
              <span class="text-gray-900">$2,833</span>
            </li>
          </ul>
          <div class="w-full h-px bg-gray-300 my-2"></div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-900 font-medium">Total Expenses</span>
            <span class="text-gray-900 font-medium">$16,402</span>
          </div>
          <div class="mt-auto">
            <div
              class="flex justify-between text-sm bg-red-100 text-red-900 p-3 rounded -mx-3 mt-8"
            >
              <span class="font-bold">Net Operating Income</span>
              <span class="font-bold">$756,204</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full mb-4 md:w-1/2 md:mb-8 lg:w-1/3 md:px-4 xl:px-8 flex flex-col">
        <div class="bg-blue-900 px-6 py-3 rounded-t">
          <h3 class="text-white font-bold text-sm">2015</h3>
        </div>
        <div
          class="px-6 pt-6 pb-3 border-l border-r border-b border-gray-300 rounded-b flex flex-col flex-grow"
        >
          <h3
            class="text-xs text-[#7A8BA4] uppercase tracking-widest font-bold"
          >
            Income
          </h3>
          <ul class="space-y-2 mt-2">
            <li class="flex justify-between text-sm">
              <span class="text-[#536076]">Retail Income</span>
              <span class="text-gray-900">$507,500</span>
            </li>
            <li class="flex justify-between text-sm">
              <span class="text-[#536076]">Signage Billboard Income</span>
              <span class="text-gray-900">$445</span>
            </li>
            <li class="flex justify-between text-sm">
              <span class="text-[#536076]">Tax Escalation Income</span>
              <span class="text-gray-900">$264,500</span>
            </li>
          </ul>
          <div class="w-full h-px bg-gray-300 my-2"></div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-900 font-medium">Total Income</span>
            <span class="text-gray-900 font-medium">$264,500</span>
          </div>

          <h3
            class="text-xs text-[#7A8BA4] uppercase tracking-widest font-bold mt-12"
          >
            Expenses
          </h3>
          <ul class="space-y-2 mt-2">
            <li class="flex justify-between text-sm">
              <span class="text-[#536076]">Management Expenses</span>
              <span class="text-gray-900">$6,360</span>
            </li>
            <li class="flex justify-between text-sm">
              <span class="text-[#536076]">Signage Billboard Income</span>
              <span class="text-gray-900">$7,209</span>
            </li>
            <li class="flex justify-between text-sm">
              <span class="text-[#536076]">Tax Escalation Income</span>
              <span class="text-gray-900">$2,833</span>
            </li>
          </ul>
          <div class="w-full h-px bg-gray-300 my-2"></div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-900 font-medium">Total Expenses</span>
            <span class="text-gray-900 font-medium">$16,402</span>
          </div>
          <div class="mt-auto">
            <div
              class="flex justify-between text-sm bg-green-100 text-green-900 p-3 rounded -mx-3 mt-8"
            >
              <span class="font-bold">Net Operating Income</span>
              <span class="font-bold">$756,204</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
