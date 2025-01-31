import { Layout } from '../components/container/Layout';
import { Header } from '../components/elements/Header';
import { TitleDescription } from '../components/seo/TitleDescription';

export default function Rules() {
  return (
    <>
      <TitleDescription title='Rules' description='Coding discord Team' />

      <Layout>
        <section class='container mx-auto my-10 rounded-md bg-dark-light bg-opacity-80 p-10 text-white'>
          <Header name='Rules' />

          <div
            id='accordion-flush'
            data-accordion='collapse'
            data-active-classes='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'
            data-inactive-classes='text-gray-500 dark:text-gray-400'
          >
            <h2 id='accordion-flush-heading-1'>
              <button
                type='button'
                class='flex w-full items-center justify-between border-b border-gray-200 py-5 text-left font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400'
                data-accordion-target='#accordion-flush-body-1'
                aria-expanded='true'
                aria-controls='accordion-flush-body-1'
              >
                <span>What is Flowbite?</span>
                <svg
                  data-accordion-icon
                  class='h-6 w-6 shrink-0 rotate-180'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id='accordion-flush-body-1'
              class='hidden'
              aria-labelledby='accordion-flush-heading-1'
            >
              <div class='border-b border-gray-200 py-5 dark:border-gray-700'>
                <p class='mb-2 text-gray-500 dark:text-gray-400'>
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                <p class='text-gray-500 dark:text-gray-400'>
                  Check out this guide to learn how to{' '}
                  <a
                    href='/docs/getting-started/introduction/'
                    class='text-blue-600 hover:underline dark:text-blue-500'
                  >
                    get started
                  </a>{' '}
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
                </p>
              </div>
            </div>
            <h2 id='accordion-flush-heading-2'>
              <button
                type='button'
                class='flex w-full items-center justify-between border-b border-gray-200 py-5 text-left font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400'
                data-accordion-target='#accordion-flush-body-2'
                aria-expanded='false'
                aria-controls='accordion-flush-body-2'
              >
                <span>Is there a Figma file available?</span>
                <svg
                  data-accordion-icon
                  class='h-6 w-6 shrink-0'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id='accordion-flush-body-2'
              class='hidden'
              aria-labelledby='accordion-flush-heading-2'
            >
              <div class='border-b border-gray-200 py-5 dark:border-gray-700'>
                <p class='mb-2 text-gray-500 dark:text-gray-400'>
                  Flowbite is first conceptualized and designed using the Figma
                  software so everything you see in the library has a design
                  equivalent in our Figma file.
                </p>
                <p class='text-gray-500 dark:text-gray-400'>
                  Check out the{' '}
                  <a
                    href='https://flowbite.com/figma/'
                    class='text-blue-600 hover:underline dark:text-blue-500'
                  >
                    Figma design system
                  </a>{' '}
                  based on the utility classes from Tailwind CSS and components
                  from Flowbite.
                </p>
              </div>
            </div>
            <h2 id='accordion-flush-heading-3'>
              <button
                type='button'
                class='flex w-full items-center justify-between border-b border-gray-200 py-5 text-left font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400'
                data-accordion-target='#accordion-flush-body-3'
                aria-expanded='false'
                aria-controls='accordion-flush-body-3'
              >
                <span>
                  What are the differences between Flowbite and Tailwind UI?
                </span>
                <svg
                  data-accordion-icon
                  class='h-6 w-6 shrink-0'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id='accordion-flush-body-3'
              class='hidden'
              aria-labelledby='accordion-flush-heading-3'
            >
              <div class='border-b border-gray-200 py-5 dark:border-gray-700'>
                <p class='mb-2 text-gray-500 dark:text-gray-400'>
                  The main difference is that the core components from Flowbite
                  are open source under the MIT license, whereas Tailwind UI is
                  a paid product. Another difference is that Flowbite relies on
                  smaller and standalone components, whereas Tailwind UI offers
                  sections of pages.
                </p>
                <p class='mb-2 text-gray-500 dark:text-gray-400'>
                  However, we actually recommend using both Flowbite, Flowbite
                  Pro, and even Tailwind UI as there is no technical reason
                  stopping you from using the best of two worlds.
                </p>
                <p class='mb-2 text-gray-500 dark:text-gray-400'>
                  Learn more about these technologies:
                </p>
                <ul class='list-disc pl-5 text-gray-500 dark:text-gray-400'>
                  <li>
                    <a
                      href='https://flowbite.com/pro/'
                      class='text-blue-600 hover:underline dark:text-blue-500'
                    >
                      Flowbite Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://tailwindui.com/'
                      rel='nofollow'
                      class='text-blue-600 hover:underline dark:text-blue-500'
                    >
                      Tailwind UI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
