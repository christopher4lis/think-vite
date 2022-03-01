<template>
  <div>
    <div class="sm:hidden mt-4">
      <label for="tabs" class="sr-only">Select a tab</label>
      <select
        id="tabs"
        name="tabs"
        class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
      >
        <option selected>Complaints (12)</option>
        <option>Violations (93)</option>
        <option>ECB (28)</option>
      </select>
    </div>
    <div class="hidden sm:block mt-4">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <a
            href="#"
            class="border-blue-500 text-blue-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            aria-current="page"
          >
            Complaints (12)
          </a>
          <a
            href="#"
            class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          >
            Violations (93)
          </a>
          <a
            href="#"
            class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          >
            ECB (2)
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>
