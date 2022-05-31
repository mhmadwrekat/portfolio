import React from "react";
import moment from "moment";
import Head from "next/head";

const Schedule = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Mhmad Wrekat</title>
        <meta name="description" content="Food Table" />
        <link rel="icon" href="./assest/icon.png" />
      </Head>
      <div
        dir="rtl"
        className="bg-cover bg-[url('https://img5.goodfon.com/wallpaper/nbig/5/d1/vegetables-cereals-eggs-fish-healthy-food.jpg')] bg-bottom"
      >
        <header className="py-5 lg:py-10 bg-gray-800">
          <p className="text-center text-white font-TSExtra text-2xl">
            {moment().format("Do / MMMM / YYYY")}
          </p>
          <p className="text-center text-white font-TSExtra text-2xl">
            {moment().format("mm : h a")}
          </p>
        </header>
        <section className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto opacity-95 font-TSSemi">
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden rounded-xl">
                  <table class="min-w-full text-center">
                    <thead class="border-b bg-gray-800 ">
                      <tr>
                        <th scope="col" class="text-sm text-white px-6 py-4">
                          الوقت
                        </th>
                        <th scope="col" class="text-sm text-white px-6 py-4">
                          الاحد
                          <b className="px-2">|</b>
                          الثلاثاء
                          <b className="px-2">|</b>
                          الخميس
                        </th>
                        <th scope="col" class="text-sm text-white px-6 py-4">
                          الاثنين
                          <b className="px-2">|</b>
                          الاربعاء
                        </th>
                        <th scope="col" class="text-sm text-white px-6 py-4">
                          الجمعه
                          <b className="px-2">|</b>
                          السبت
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-gray-200 border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          8:30
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          5 شوفان + حليب + 2 بيض + فواكه + مي
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          5 شوفان + حليب + 2 بيض + فواكه + مي
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          - - - -
                        </td>
                      </tr>
                      <tr class="bg-gray-300 border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          10
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          - - - -
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          - - - -
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          5 شوفان + حليب + 2 بيض + فواكه + مي
                        </td>
                      </tr>

                      <tr class="bg-gray-200 border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          1
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          15 لوز + زبيب
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          كارب + بروتين + سلطه
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          رياضه + مي
                        </td>
                      </tr>
                      {/******************** */}
                      <tr class="bg-gray-300 border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          2
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          - - - -
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          - - - -
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          كارب + بروتين + سلطه
                        </td>
                      </tr>
                      {/******************** */}
                      <tr class="bg-gray-200 border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          5:30
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          كارب + بروتين + سلطه
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          - - - -
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          بروتين + كارب
                        </td>
                      </tr>
                      {/******************** */}
                      <tr class="bg-gray-300 border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          6
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          - - - -
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          رياضه + مي
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          - - - -
                        </td>
                      </tr>
                      {/******************** */}
                      <tr class="bg-gray-200 border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          7
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          - - - -
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          بروتين
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          - - - -{" "}
                        </td>
                      </tr>
                      {/******************** */}
                      <tr class="bg-gray-300 border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          8
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          رياضه + مي{" "}
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          - - - -
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          لوز + زبيب
                        </td>
                      </tr>
                      {/******************** */}
                      <tr class="bg-gray-200 border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          9
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          بروتين{" "}
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          لوز + زبيب
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          - - - -{" "}
                        </td>
                      </tr>
                      {/******************** */}
                      <tr class="bg-gray-300 border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          12
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          كارب + بروتين + سلطه{" "}
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          كارب + بروتين + سلطه
                        </td>
                        <td class="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          كارب + بروتين + سلطه
                        </td>
                      </tr>
                      {/******************** */}
                      {/******************** */}
                      {/******************** */}
                      {/******************** */}
                      {/******************** */}
                      {/******************** */}
                      {/******************** */}
                      {/******************** */}
                      {/******************** */}
                      {/******************** */}
                      {/******************** */}
                      {/******************** */}
                      {/******************** */}
                      {/******************** */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Schedule;
