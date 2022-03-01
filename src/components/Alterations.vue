<template>
  <div class="container mx-auto p-4">
    <div class="w-full sm:max-w-xs">
      <h3 class="text-blue-900 text-lg font-bold">Alterations</h3>

      <select
        id="Ownership"
        name="Ownership"
        class="mt-4 block w-full pl-4 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm rounded-md "
      >
        <option>Current Ownership (SCG Realty II LLC)</option>
        <option>Current Ownership (SCG Realty II LLC)</option>
        <option>Current Ownership (SCG Realty II LLC)</option>
      </select>
    </div>

    <!-- Blue bg bar -->
    <div
      class="bg-blue-900 p-5 rounded mt-4 space-y-4 sm:space-y-0 sm:flex sm:space-x-12"
    >
      <div>
        <h3
          class="text-blue-200 text-xs uppercase tracking-widest font-bold uppercase"
        >
          TOTAL FEES
        </h3>
        <h2 class="text-white font-bold text-lg sm:text-2xl">$12,750.30</h2>
      </div>
      <div>
        <h3
          class="text-blue-200 text-xs uppercase tracking-widest font-bold uppercase"
        >
          Total Initial Cost
        </h3>
        <h2 class="text-white font-bold text-lg sm:text-2xl">$964,880</h2>
      </div>
      <div>
        <h3
          class="text-blue-200 text-xs uppercase tracking-widest font-bold uppercase"
        >
          Alteration Cost PSF
        </h3>
        <h2 class="text-white font-bold text-lg sm:text-2xl">$41.105</h2>
      </div>
    </div>

    <!-- Table -->
    <div class="flex flex-col mt-4 overflow-hidden">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden sm:rounded">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-blue-900">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-sm font-bold text-blue-50 whitespace-nowrap"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-sm font-bold text-blue-50 whitespace-nowrap"
                  >
                    Job Applicant
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-sm font-bold text-blue-50 whitespace-nowrap"
                  >
                    Estimated Fee
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-sm font-bold text-blue-50 whitespace-nowrap"
                  >
                    Job Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <!-- Odd row -->
                <tr class="bg-white">
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Sep 2014
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Webster-ittner Corp.
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    $305
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor inc...
                  </td>
                </tr>

                <!-- Even row -->
                <tr class="bg-blue-50">
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Jul 2013
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Yvonne M Bizet
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    $403
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor inc...
                  </td>
                </tr>

                <!-- More people... -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  </div>
</template>

<script>
import Pagination from './Pagination.vue'
export default {
  components: {
    Pagination
  }
}
</script>
