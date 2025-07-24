import React from 'react'

const Talk = () => {
    return(
    <div className="bg-[#fef6f3] py-16 sm:py-20 mb-10 px-4 sm:px-6 md:px-10 lg:px-20">
  <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center text-center">
    
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-300">
      Let's Create Something Amazing Together
    </h1>

    {/* Keep paragraph on a single line */}
    <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-700 ">
      Ready to transform your ideas into reality? I’m here to help you build exceptional digital experiences.
    </p>

    <button className="bg-blue-500 py-2.5 sm:py-3 px-5 sm:px-6 rounded-full mt-5 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
      <p className="text-lg sm:text-xl text-white font-semibold">Let's Talk</p>
    </button>

  </div>
</div>


    )
}

export default Talk