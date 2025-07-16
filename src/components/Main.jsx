import React from 'react'

const Main = () => {
  return (
    <div className="max-w-[1320px] mx-auto my-8 mt-16">
      <p className="text-blue-900 text-4xl font-bold text-center mb-6">WHO WE ARE</p>
      
      <div className="flex gap-12 top-12">
        <div className="flex-1 text-justify text-gray-800 mt-10">
          <p className='w-[500px]'>
            Westminster International University in Tashkent (WIUT) is the first
            international University located in the heart of Central Asia to offer
            Western-style education with British qualifications. WIUT provides a
            wide range of programmes in English, actively develops academic and
            research activities and organizes social events. The University is
            committed to high standards of learning, emphasizing independent
            learning as an essential aspect of the British education system. The
            University offers six undergraduate degrees and twelve postgraduate
            programmes, allowing students to continue their education at a higher
            level. PhD DSc programmes are available at WIUT for those pursuing an
            academic career. In addition to the core educational programmes, WIUT
            offers additional executive courses. One of the distinctive features of
            WIUT is an active student life. Students can often be found in the
            Learning Resource Center (LRC), computer and innovation labs, where
            they work on projects and discuss study materials with peers. Students
            participate in sports and various social and cultural activities organized
            by the Students Union.
          </p>
        </div>
        
        <div className="flex-1 ">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg w-[600px] mt-10">
            <iframe
              src="https://www.youtube.com/embed/xJARwyW070Q"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
