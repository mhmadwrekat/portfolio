import React from "react";
import moment from "moment";
import Head from "next/head";
//
const Schedule = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Mhmad Wrekat</title>
        <meta name="description" content="Food Table" />
        <link rel="icon" href="./assest/icon.png" />
      </Head>
      <div
        translate="no"
        dir="rtl"
        className="bg-cover h-screen bg-[url('https://img5.goodfon.com/wallpaper/nbig/5/d1/vegetables-cereals-eggs-fish-healthy-food.jpg')] bg-bottom"
      >
        <header className="py-5 lg:py-10 bg-GRAY400">
          <p className="text-center text-White font-TSExtra text-2xl">
            {moment().format("Do / MMMM / YYYY")}
          </p>
          <p className="text-center text-White font-TSExtra text-2xl">
            {moment().format("mm : h a")}
          </p>
        </header>
        <section className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto opacity-95 font-TSSemi">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-xl">
                  <table className="min-w-full text-center">
                    <thead className="border-b border-GRAY400 bg-GRAY400 text-Snow1">
                      <tr>
                        <th scope="col" className="text-sm px-6 py-4">
                          الوقت
                        </th>
                        <th scope="col" className="text-sm px-6 py-4">
                          الاحد
                          <b className="px-2">|</b>
                          الثلاثاء
                          <b className="px-2">|</b>
                          الخميس
                        </th>
                        <th scope="col" className="text-sm px-6 py-4">
                          الاثنين
                          <b className="px-2">|</b>
                          الاربعاء
                        </th>
                        <th scope="col" className="text-sm px-6 py-4">
                          الجمعه
                          <b className="px-2">|</b>
                          السبت
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-Orange">
                      <tr className="bg-Snow1 border-b border-GRAY400">
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          8:30
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          5 شوفان + حليب + 2 بيض + فواكه + مي
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          5 شوفان + حليب + 2 بيض + فواكه + مي
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          - - - -
                        </td>
                      </tr>
                      <tr className="bg-White border-b border-GRAY400">
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          10
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          - - - -
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          - - - -
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          5 شوفان + حليب + 2 بيض + فواكه + مي
                        </td>
                      </tr>

                      <tr className="bg-Snow1 border-b border-GRAY400">
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          1
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          15 لوز + زبيب
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          كارب + بروتين + سلطه
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          رياضه + مي
                        </td>
                      </tr>
                      {/******************** */}
                      <tr className="bg-White border-b border-GRAY400">
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          2
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          - - - -
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          - - - -
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          كارب + بروتين + سلطه
                        </td>
                      </tr>
                      {/******************** */}
                      <tr className="bg-Snow1 border-b border-GRAY400">
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          5:30
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          كارب + بروتين + سلطه
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          - - - -
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          بروتين + كارب
                        </td>
                      </tr>
                      {/******************** */}
                      <tr className="bg-White border-b border-GRAY400">
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          6
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          - - - -
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          رياضه + مي
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          - - - -
                        </td>
                      </tr>
                      {/******************** */}
                      <tr className="bg-Snow1 border-b border-GRAY400">
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          7
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          - - - -
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          بروتين
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          - - - -{" "}
                        </td>
                      </tr>
                      {/******************** */}
                      <tr className="bg-White border-b border-GRAY400">
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          8
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          رياضه + مي{" "}
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          - - - -
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          لوز + زبيب
                        </td>
                      </tr>
                      {/******************** */}
                      <tr className="bg-Snow1 border-b border-GRAY400">
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          9
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          بروتين{" "}
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          لوز + زبيب
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          - - - -{" "}
                        </td>
                      </tr>
                      {/******************** */}
                      <tr className="bg-White border-b border-GRAY400">
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          12
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          كارب + بروتين + سلطه{" "}
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
                          كارب + بروتين + سلطه
                        </td>
                        <td className="text-sm px-6 py-4 whitespace-nowrap">
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
