import React from 'react'

const Section = () => {
  return (
    <div>
  <div className="bg-[#006241] flex flex-col-reverse md:flex-row mx-auto my-10 3xl:w-10/12">
    <div className="md:w-1/2 w-full flex justify-center items-center flex-col text-center py-10">
      <h1 className="mb-4 text-5xl font-semibold text-white px-12">
        Half off for the holidays
      </h1>
      <p className="text-white text-2xl px-12">
        Feeling festive? Starbucks® Rewards members can get half off a drink on
        Thursday afternoons (12-6 PM) in December.*
      </p>
      <button className="w-auto outline-1 mt-8 text-white border rounded-[150px] border-white px-6 py-2 hover:bg-[#0000001a]">
        Join for free
      </button>
    </div>
    <div className="md:w-1/2 w-full my-auto">
      <img
        src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87802.jpg"
        alt="image"
      />
    </div>
  </div>
  <div className="bg-[#1e3932] flex flex-col md:flex-row mx-auto my-10 w-full 3xl:w-10/12">
    <div className="md:w-1/2 w-full my-auto">
      <img
        src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87741.jpg"
        alt="image"
      />
    </div>
    <div className="md:w-1/2 w-full flex justify-center items-center flex-col  text-center py-10">
      <h1 className="mb-4 text-5xl  font-semibold text-white px-12">
        Meet the holiday cold foams
      </h1>
      <p className="text-white text-2xl px-12">
        Top off your favorite drink with a festive twist. Choose from four merry
        cold foam flavors: Peppermint Chocolate, Caramel Brulée, Sugar Cookie
        and Chestnut Praline.**
      </p>
      <button className="w-auto outline-1 mt-8 text-white border rounded-[150px] border-white px-6 py-2 hover:bg-[#0000001a]">
        Learn More
      </button>
    </div>
  </div>
  <div className="bg-[#f0d0cb] flex flex-col-reverse md:flex-row mx-auto my-10 3xl:w-10/12">
    <div className="md:w-1/2 w-full flex justify-center items-center flex-col text-center py-10">
      <h1 className="mb-4 text-5xl font-semibold px-12">The game is on!</h1>
      <p className="text-2xl px-12">
        There’s still time to play Starbucks for Life! This year we’re giving
        away over 10 million prizes.***
      </p>
      <button className="w-auto outline-1 mt-8 border rounded-[150px] border-black px-6 py-2 hover:bg-[#0000001a]">
        Play now
      </button>
    </div>
    <div className="md:w-1/2 w-full my-auto">
      <img
        src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87728.png"
        alt="image"
      />
    </div>
  </div>
  <div className="bg-[#dc0032] flex flex-col md:flex-row mx-auto my-10 3xl:w-10/12">
    <div className="md:w-1/2 w-full my-auto">
      <img
        src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87772.jpg"
        alt="image"
      />
    </div>
    <div className="md:w-1/2 w-full flex justify-center items-center flex-col text-center py-10">
      <h1 className="mb-4 text-5xl font-semibold text-white px-12">
        It’s sugar cookie season
      </h1>
      <p className="text-white text-2xl px-12">
        Pair an Iced Sugar Cookie Almondmilk Latte with a Snowman Cookie for a
        holly-jolly treat.
      </p>
      <button className="w-auto outline-1 mt-8 text-white border rounded-[150px] border-white px-6 py-2 hover:bg-[#0000001a]">
        Order now
      </button>
    </div>
  </div>
  <div className="bg-[#1e3932] flex flex-col-reverse md:flex-row mx-auto my-10 3xl:w-10/12">
    <div className="md:w-1/2 w-full flex justify-center items-center flex-col text-center py-10">
      <h1 className="mb-4 text-5xl font-semibold text-white px-12">
        Toasty all the way
      </h1>
      <p className="text-white text-2xl px-12">
        Stay satisfied with a Double-Smoked Bacon, Cheddar &amp; Egg Sandwich, a
        Bacon, Sausage &amp; Egg Wrap, or Bacon &amp; Gruyère Egg Bites.
      </p>
      <button className="w-auto outline-1 mt-8 text-white border rounded-[150px] border-white px-6 py-2 hover:bg-[#0000001a]">
        Order now
      </button>
    </div>
    <div className="md:w-1/2 w-full my-auto">
      <img
        src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87702.jpg"
        alt="image"
      />
    </div>
  </div>
  <div className="bg-[#ad96dc] flex flex-col md:flex-row mx-auto my-10 3xl:w-10/12">
    <div className="md:w-1/2 w-full my-auto">
      <img
        src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87773.jpg"
        alt="image"
      />
    </div>
    <div className="md:w-1/2 w-full flex justify-center items-center flex-col  text-center py-10">
      <h1 className="mb-4 text-5xl font-semibold px-12">
        Share more eGift joy
      </h1>
      <p className=" text-2xl px-12">
        Now you can send multiple Starbucks eGifts in a single purchase.
        Available on our website.
      </p>
      <button className="w-auto outline-1 mt-8  border rounded-[150px] border-black px-6 py-2 hover:bg-[#0000001a]">
        Send eGifts
      </button>
    </div>
  </div>
    </div>
  )
}

export default Section