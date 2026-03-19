import React from 'react'
import Header from '../components/Header'
import { FaLocationDot, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa6'

function Contact() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <Header />

      <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-10">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-[38px] font-semibold text-black">Contacts</h1>
          <p className="mt-4 text-[17px] leading-8 text-[#2f2f2f] max-w-[1280px] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio inventore placeat nemo voluptatem iure,
            iste asperiores quia amet sint, similique corrupti praesentium delectus nesciunt odit laudantium. Beatae
            repudiandae amet odit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, doloremque ullam
            itaque atque totam quasi molestias cumque ducimus fuga voluptate suscipit vel distinctio omnis voluptates
            obcaecati quidem quas iure? Facere?
          </p>
        </div>

        {/* Contact Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14 items-center">
          {/* Address */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-[42px] h-[42px] rounded-full bg-[#e5e7eb] flex items-center justify-center text-[#111827] text-[16px]">
              <FaLocationDot />
            </div>
            <p className="text-[16px] leading-8 text-[#2b2b2b]">
              123 Main Street, Apt 4B,
              <br />
              Anytown, CA 91234
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-[42px] h-[42px] rounded-full bg-[#e5e7eb] flex items-center justify-center text-[#111827] text-[16px]">
              <FaPhone />
            </div>
            <p className="text-[16px] text-[#2b2b2b]">+91 9874561230</p>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <div className="w-[42px] h-[42px] rounded-full bg-[#e5e7eb] flex items-center justify-center text-[#111827] text-[16px]">
              <FaEnvelope />
            </div>
            <p className="text-[16px] text-[#2b2b2b]">Bookstore@gmail.com</p>
          </div>
        </div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 mt-12 items-start">
          {/* Form */}
          <div className="bg-[#e9eaee] p-4 md:p-5 shadow-sm">
            <h2 className="text-center text-[20px] font-medium mb-5 text-[#1f2937]">
              Send me Message
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full h-[40px] px-3 bg-white border border-gray-200 outline-none text-[16px]"
              />

              <input
                type="email"
                placeholder="Email Id"
                className="w-full h-[40px] px-3 bg-white border border-gray-200 outline-none text-[16px]"
              />

              <textarea
                rows="6"
                placeholder="Message"
                className="w-full px-3 py-3 bg-white border border-gray-200 outline-none text-[16px] resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#07122b] text-white h-[46px] text-[18px] flex items-center justify-center gap-3 hover:bg-[#0b1a3f] transition"
              >
                Send <FaPaperPlane className="text-[15px]" />
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="w-full h-[440px] shadow-sm">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Kakkanad,Kerala&z=12&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
