<template>
  <div class="flex items-center justify-center min-h-screen w-screen">
    <div class="flex flex-col items-center gap-4">
      <a href="https://www.github.com">

        <svg height="48" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="48" data-view-component="true"
          class="octicon octicon-mark-github">
          <path
            d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z">
          </path>
        </svg>
      </a>
      <h6 class="text-xl font-medium text-gray-900 mb-6">Sign in to our platform</h6>

      <form
        class="min-w-[290px] bg-[#F6F8FA] border border-gray-200 rounded-lg p-6 flex flex-col justify-center">
        <div class="grid gap-6">
          <div class="mx-auto">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">
              Email address
            </label>
            <input type="email" id="email"
              class="w-[254px] h-[32px] bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 "
              required />
          </div>

          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">
              Password <a href=# class="text-blue-600 pl-20">forget password?</a>
            </label>
            <input type="password" id="password"
              class="w-[254px] h-[32px] bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              required />
          </div>


          <button type="submit"
            class="w-[254px] h-[32px] text-white bg-[#1C8139] focus:outline-none font-medium rounded-lg text-sm px-5 py-auto text-center">
            sign in
          </button>
        </div>
      </form>

      <div
        class="flex flex-col items-center justify-center w-[304px] h-[80px] border border-gray-200 rounded-lg shadow-sm text-black">
        <a class="hover:underline text-blue-700">Sign in with a passkey</a>
        <p>New to GitHub?
          <a href="#" class="text-blue-700 hover:underline">Create an account</a>
        </p>
      </div>
    </div>
  </div>
</template>
