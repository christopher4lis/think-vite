<template>
  <div class="container mx-auto p-4">
    <div class="w-full max-w-xs">
      <h3 class="text-blue-900 text-lg font-bold">Taxes</h3>
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
                    Fiscal Year
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-sm font-bold text-blue-50 whitespace-nowrap"
                  >
                    Assessed Value
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-sm font-bold text-blue-50 whitespace-nowrap"
                  >
                    Tax Class
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-sm font-bold text-blue-50 whitespace-nowrap"
                  >
                    Tax Rate
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-sm font-bold text-blue-50 whitespace-nowrap"
                  >
                    Annual Tax Before
                  </th>
                </tr>
              </thead>
              <tbody>
                <!-- Odd row -->
                <tr class="bg-white">
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2017/18
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2,612,880
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    4
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate"
                  >
                    10.5140
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate"
                  >
                    $274,718.2
                  </td>
                </tr>

                <!-- diff color -->
                <tr class="bg-blue-50">
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2017/18
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2,612,880
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    4
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate"
                  >
                    10.5140
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate"
                  >
                    $274,718.2
                  </td>
                </tr>

                <!-- More people... -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <Pagination />
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
