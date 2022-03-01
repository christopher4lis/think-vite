<template>
  <div class="container mx-auto p-4">
    <div class="w-full max-w-xs">
      <h3 class="text-blue-900 text-lg font-bold">Complaints & Violations</h3>
    </div>

    <Tabs />

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
                    Category
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-sm font-bold text-blue-50 whitespace-nowrap"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-sm font-bold text-blue-50 whitespace-nowrap"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-sm font-bold text-blue-50 whitespace-nowrap"
                  >
                    Date Entered
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-sm font-bold text-blue-50 whitespace-nowrap"
                  >
                    Inspection Date
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-sm font-bold text-blue-50 whitespace-nowrap"
                  >
                    Disposition Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <!-- Odd row -->
                <tr class="bg-white">
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    1/26/2012
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    4B
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate max-w-[200px]"
                  >
                    SEP – Professional Certification Compliance Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate"
                  >
                    Closed
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate"
                  >
                    1/26/2012
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate"
                  >
                    2/1/2012
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate"
                  >
                    2/7/2012
                  </td>
                </tr>

                <!-- diff color -->
                <tr class="bg-blue-50">
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    1/26/2012
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    4B
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    SEP – Professional Certification Compliance...
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate"
                  >
                    Closed
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate"
                  >
                    1/26/2012
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate"
                  >
                    2/1/2012
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate"
                  >
                    2/7/2012
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
import Tabs from './Tabs.vue'
export default {
  components: {
    Pagination,
    Tabs
  }
}
</script>
